const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function prepareLoopRail(rail) {
  if (!rail || rail.dataset.loopReady === "true") return null;

  const originals = qsa(":scope > *:not([data-clone])", rail);
  if (!originals.length) return null;

  const before = originals.map((item) => {
    const clone = item.cloneNode(true);
    clone.dataset.clone = "1";
    return clone;
  });

  const after = originals.map((item) => {
    const clone = item.cloneNode(true);
    clone.dataset.clone = "1";
    return clone;
  });

  before.forEach((clone) => rail.insertBefore(clone, rail.firstChild));
  after.forEach((clone) => rail.appendChild(clone));
  rail.dataset.loopReady = "true";

  return { rail, originals };
}

function makeDraggableLoop(container, rail, options = {}) {
  const prepared = prepareLoopRail(rail);
  if (!prepared) return;

  let setWidth = 0;
  let x = 0;
  let startX = 0;
  let startOffset = 0;
  let pointerDown = false;
  let moved = false;
  let frame = null;
  const speed = options.speed || 0;

  const measure = () => {
    const originals = qsa(":scope > *:not([data-clone])", rail);
    setWidth = originals.reduce((total, item) => total + item.getBoundingClientRect().width, 0);
    if (originals.length > 1) {
      const first = originals[0].getBoundingClientRect();
      const second = originals[1].getBoundingClientRect();
      setWidth += Math.max(0, second.left - first.right) * originals.length;
    }
    if (!x || Math.abs(x) < 1) x = -setWidth;
    apply();
  };

  const normalize = () => {
    if (!setWidth) return;
    while (x >= 0) x -= setWidth;
    while (x <= -setWidth * 2) x += setWidth;
  };

  const apply = () => {
    normalize();
    rail.style.transform = `translateX(${x}px)`;
  };

  const tick = () => {
    if (!pointerDown && speed) {
      x -= speed;
      apply();
    }
    frame = requestAnimationFrame(tick);
  };

  const onPointerDown = (event) => {
    pointerDown = true;
    moved = false;
    container.dataset.dragMoved = "false";
    startX = event.clientX;
    startOffset = x;
    container.classList.add("dragging");
    rail.style.transition = "none";
    container.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!pointerDown) return;
    const delta = event.clientX - startX;
    if (Math.abs(delta) > 6) {
      moved = true;
      container.dataset.dragMoved = "true";
    }
    x = startOffset + delta;
    apply();
  };

  const onPointerUp = (event) => {
    pointerDown = false;
    container.dataset.dragMoved = moved ? "true" : "false";
    window.setTimeout(() => {
      moved = false;
      container.dataset.dragMoved = "false";
    }, 0);
    container.classList.remove("dragging");
    container.releasePointerCapture?.(event.pointerId);
  };

  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerup", onPointerUp);
  container.addEventListener("pointercancel", onPointerUp);
  container.addEventListener("click", (event) => {
    if (moved) event.preventDefault();
  }, true);
  window.addEventListener("resize", measure);

  measure();
  if (speed) tick();

  return () => {
    if (frame) cancelAnimationFrame(frame);
  };
}

function setupPosterImages() {
  const posterPaths = new Set(
    qsa(".visual-card")
      .map((card) => card.dataset.poster)
      .filter(Boolean)
  );

  posterPaths.forEach((posterPath) => {
    const image = new Image();

    image.addEventListener("load", () => {
      qsa(`.visual-card[data-poster="${posterPath}"]`).forEach((card) => {
        card.style.backgroundImage = `url("${posterPath}")`;
        card.classList.add("poster-loaded");
      });
    });

    image.src = posterPath;
  });
}

function setupStoryModal() {
  const modal = qs(".story-modal");
  if (!modal) return;

  const title = qs("#story-modal-title", modal);
  const body = qs(".modal-body p", modal);
  const header = qs(".modal-header", modal);
  const close = qs(".modal-close", modal);

  const open = (card) => {
    title.textContent = card.dataset.name || "Story";
    body.textContent = card.dataset.story || "";
    header.style.background = card.dataset.color || "#faaed2";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    close.focus();
  };

  const hide = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  qsa(".visual-strip").forEach((strip) => {
    strip.addEventListener("pointerup", (event) => {
      window.setTimeout(() => {
        if (strip.dataset.dragMoved === "true") return;
        const target = document.elementFromPoint(event.clientX, event.clientY);
        const card = target?.closest?.(".visual-card");
        if (!card || !strip.contains(card)) return;
        open(card);
      }, 0);
    });

    strip.addEventListener("click", (event) => {
      const card = event.target.closest(".visual-card");
      if (!card || !strip.contains(card) || strip.dataset.dragMoved === "true") return;
      open(card);
    });
  });

  close.addEventListener("click", hide);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) hide();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hide();
  });
}

function init() {
  const visualStrip = qs(".visual-strip");
  const visualRail = qs(".visual-rail");
  if (visualStrip && visualRail) {
    makeDraggableLoop(visualStrip, visualRail, { speed: 0.35 });
  }

  const manifestoRail = qs(".manifesto-rail");
  if (manifestoRail) {
    makeDraggableLoop(manifestoRail, manifestoRail, { speed: 0.25 });
  }

  setupPosterImages();
  setupStoryModal();
}

document.addEventListener("DOMContentLoaded", init);
