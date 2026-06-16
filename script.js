const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

const STORY_TEXT = {
  Giona: [
    "My name is Giona. I'm 25, I live in Milan, and I’m a university student who couldn’t wait for a good excuse to take a break from the summer exam session.",
    "One day, a friend called and invited our group to spend the next day at his summer house. It was one of those last-minute plans that just come together. The kind that make summer feel like summer.",
    "I tried to buy a train ticket and book the assistance service for passengers with reduced mobility, the service I need to get on the train.",
    "No one answered my calls, so the next morning I went to accessibility assistance point at the station in person. The person at the desk looked at me and said: \"You can't leave today. We can't assist you. You should have booked in advance\".",
    "Booked in advance. For a spontaneous trip. For a phone call from a friend the day before.",
    "Luckily a friend was able to give me a ride.",
    "A last-minute decision is a small freedom most people don't even think about. For me, it doesn't exist.",
  ],
  Sara: [
    "My name is Sara. I'm 26, I live in a small town near Ravenna and I love anime, manga, and cosplay. For me, getting dressed is not just getting ready: it's an act of creativity and self-expression.",
    "A few years ago, I decided to go to Rimini Comics on my own. I booked my train and planned everything carefully. I also knew exactly what I wanted to wear: Lolita style, not exactly a cosplay, but a way of dressing that I love, and that feels like me.",
    "Lolita takes time. More time than usual to put on, adjust and get right. I knew that, so I had to prepare for it. What I hadn't planned for was that my regular assistant wouldn't be there that morning. The person who came didn't know me. So before anything else, I had to explain how I wash, how I dress, how I do things. Things my usual assistant already knows by heart.",
    "The clock ran out before the outfit did.",
    "The municipality gives me one hour of assistance in the morning. One hour to wake up, wash, and get dressed. That day, between the extra time for Lolita and starting from scratch with someone who didn't know me, the hour was gone. I put on something simpler. I caught my train.",
    "I went to Rimini Comics. But I wasn't dressed like myself.",
  ],
  Marco: [
    "My name is Marco. I'm a student at Politecnico di Milano, and I love art and design.",
    "Last April, I was heading to Milan Design Week with some friends, one of the most vibrant celebrations of creativity in the world, right in my city. We took the bus from university, like many other people did that day.",
    "The bus was fully accessible. I got on with my wheelchair, no problem. For a moment, everything felt normal.",
    "Then we arrived. I got off the bus and found myself on a sidewalk with no ramp. There was nowhere to go. I had to get back on the bus, ride to the next stop, and try again, only to face the same situation. In the end, I had to force my way off the curb through oncoming traffic just to reach the street. We had to reroute the whole journey and continue the rest of the way on foot.",
    "A design festival. And the city wasn't designed for me.",
    "Every forced detour, every missing ramp, every extra minute spent navigating what shouldn't be an obstacle is time I did not choose to spend. It is my life, slipping away in the gaps that were never built for me.",
  ],
  Valentina: [
    "My name is Valentina. I'm 26, I’m from Milan and I work as a designer.",
    "For me, leaving the house means planning everything down to the last detail. I calculate how long it takes to reach the metro station, which lines to take, and how much time to allow for each connection.",
    "For most people, going out means simply deciding to go. For me, every journey requires time, focus, and the hope that everything will work as it should.",
    "One evening, I had to get to a friend's birthday party. As always, I had planned everything carefully. But on the metro, the stairlift broke down. And I was stuck. Still. Waiting for a technician for an hour and a half.",
    "An hour and a half might not sound like much, but when you depend on equipment that's supposed to guarantee your independence, every lost minute weighs twice as much. While everyone else's time keeps moving, yours stops with the machine. You can't choose a different route, move faster, or find a quick alternative. You can only wait.",
    "By the time I was finally able to leave, I was already late. I reached my stop hoping to save what was left of the evening, but the bus I needed wasn't running anymore. The last service had gone. And with it, any chance of making it to the party.",
  ],
  Jeremy: [
    "My name is Jeremy. I'm 25 and I live in Paris.",
    "When I go out, I need a personal assistant.",
    "Last month, some friends invited me to dinner. A neighbourhood place, nothing fancy, the kind of evening you look forward to all week.",
    "My friends at the table ordered a beer, then another. I had one and stopped. I would have loved a second, but a second beer means needing the bathroom, and needing the bathroom means needing my assistant. And my assistant wasn't there that night.",
    "So I did the math and decided it wasn't worth the risk.",
    "At some point a friend raised his glass and said: \"Come on, have another.\" I smiled and said one was enough.",
    "It wasn't.",
  ],
  Madara: [
    "My name is Madara. I’m 17 years old.",
    "I'm a student, and I live with atopic dermatitis: a chronic skin condition that can flare up without warning, even at the worst possible time, no matter what I have planned.",
    "Last spring, a few days before my final exams, it happened again. I was sitting in class when the skin on my arms started to burn. The kind of pain that makes it hard to focus on anything else.",
    "I tried to concentrate, but the pain kept pulling me back. By the second period, I couldn't anymore. I gathered my things and went to the nurse.",
    "She treated me and bandaged my arms. It took a while. By the time I got back, I had missed two classes. Two classes I needed, at the very moment when I could least afford to miss them.",
    "That afternoon, I was supposed to study with friends. I cancelled. I went home, lay down, and waited for the flare-up to pass.",
    "During exam season, every hour counts. That morning wasn't mine to spend.",
  ],
  Baiba: [
    "My name is Baiba. I’m a student in Latvia, and I know what I want to do with my life.",
    "I’m patient, gentle, and everybody says I’m great with young children. I want to become a preschool teacher’s assistant.",
    "I have the skills. I have the drive. I have the time to learn.",
    "What I don't have is permission.",
    "In Latvia, this profession is not available to students with intellectual disabilities. Not because we couldn't do the work. Not because we haven't tried. But because the system never imagined us there.",
    "So while my classmates are building their futures, I am waiting in a present that wasn't designed to move forward. My time is full of willingness that has nowhere to go.",
    "A future is not just a dream. It is something you're supposed to be able to work towards. For me, that path is closed, not by my limits, but by a law that didn't think to include me.",
  ],
  Oskars: [
    "My name is Oskars. I’m a student in Latvia, and every day I take the bus to school by myself.",
    "For me, this is a big thing. I learned the route, the bus stop, and the time. It wasn’t easy, but now I can do it alone. Every morning, I leave home, take the bus, and go to school. Then I take the bus again to come back home.",
    "I’m very proud of this.",
    "I know my bus. The 13:45 and the 14:20. I know where I have to stand. I know what the bus looks like when it comes around the corner.",
    "One afternoon last spring, school finished earlier because a teacher was sick. I was happy because I thought: “Great, now I’ll have more time to play later.”",
    "I went to the bus stop. But my bus wasn’t coming soon. I looked at the timetable. Other buses were coming and going, but the information changed too fast. The letters and numbers on the screen moved before I could read them. The paper timetable had too many lines and too many numbers. I got confused. I couldn’t understand which bus I needed to take.",
    "So I waited.",
    "I sat at the bus stop for two hours. My classmates went home. Some met friends. Some went outside. I stayed there.",
    "Not because I couldn’t take the bus.",
    "Not because I did something wrong.",
    "Only because the bus stop was not made for someone like me.",
  ],
};

const GALLERY_API_URL = "https://api.github.com/repos/SputnikGuy/MYTIMEISNOTMINE/contents/images?ref=main";
const GALLERY_FALLBACK_IMAGES = [
  "images/001.jpg",
  "images/002.jpeg",
  "images/003.jpg",
  "images/004.jpg",
  "images/005.jpg",
];
const IMAGE_EXTENSIONS = /\.(avif|gif|jpe?g|png|webp)$/i;

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

  const beforeFragment = document.createDocumentFragment();
  before.forEach((clone) => beforeFragment.appendChild(clone));
  rail.insertBefore(beforeFragment, rail.firstChild);
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
  let glideVelocity = 0;
  let lastMoveX = 0;
  let lastMoveTime = 0;
  const speed = options.speed || 0;
  const dragMultiplier = options.dragMultiplier || 1;
  const glideFriction = options.glideFriction || 0.94;

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
    if (!pointerDown && Math.abs(glideVelocity) > 0.05) {
      x += glideVelocity;
      glideVelocity *= glideFriction;
      apply();
    } else if (!pointerDown && speed) {
      glideVelocity = 0;
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
    lastMoveX = event.clientX;
    lastMoveTime = event.timeStamp || performance.now();
    glideVelocity = 0;
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
    x = startOffset + (delta * dragMultiplier);
    const now = event.timeStamp || performance.now();
    const elapsed = Math.max(1, now - lastMoveTime);
    glideVelocity = ((event.clientX - lastMoveX) / elapsed) * 16 * dragMultiplier;
    lastMoveX = event.clientX;
    lastMoveTime = now;
    apply();
  };

  const onPointerUp = (event) => {
    const didMove = moved;
    pointerDown = false;
    if (!didMove) glideVelocity = 0;
    container.dataset.dragMoved = didMove ? "true" : "false";
    container.classList.remove("dragging");
    container.releasePointerCapture?.(event.pointerId);

    if (!didMove && options.tapSelector && typeof options.onTap === "function") {
      const target = document.elementFromPoint(event.clientX, event.clientY);
      const tapTarget = target?.closest?.(options.tapSelector);

      if (tapTarget && container.contains(tapTarget)) {
        options.onTap(tapTarget);
      }
    }

    window.setTimeout(() => {
      moved = false;
      container.dataset.dragMoved = "false";
    }, 0);
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
        card.style.backgroundPosition = "center";
        card.style.backgroundRepeat = "no-repeat";
        card.style.backgroundSize = "contain";
        card.classList.add("poster-loaded");
      });
    });

    image.src = posterPath;
  });
}

function setupStoryModal() {
  const modal = qs(".story-modal");
  if (!modal) return () => {};

  const title = qs("#story-modal-title", modal);
  const body = qs(".modal-body p", modal);
  const header = qs(".modal-header", modal);
  const close = qs(".modal-close", modal);

  const open = (card) => {
    const story = STORY_TEXT[card.dataset.name]?.join("\n\n") || card.dataset.story || "";

    title.textContent = card.dataset.name || "Story";
    body.textContent = story;
    header.style.background = card.dataset.color || "#faaed2";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    close.focus();
  };

  const hide = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  };

  close.addEventListener("click", hide);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) hide();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") hide();
  });

  return open;
}

async function getGalleryImages() {
  try {
    const response = await fetch(GALLERY_API_URL, { cache: "no-store" });
    if (!response.ok) throw new Error("Gallery API unavailable");

    const items = await response.json();
    const images = items
      .filter((item) => item.type === "file" && IMAGE_EXTENSIONS.test(item.name))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
      .map((item) => item.download_url)
      .filter(Boolean);

    return images.length ? images : GALLERY_FALLBACK_IMAGES;
  } catch (error) {
    return GALLERY_FALLBACK_IMAGES;
  }
}

function imageAltFromPath(path) {
  const fileName = path.split("/").pop() || "Gallery image";
  return fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
}

function uniqueImages(images) {
  return Array.from(new Set(images));
}

function setupImageModal() {
  const modal = qs(".image-modal");
  const image = qs(".image-modal img", modal);
  const close = qs(".image-modal-close", modal);

  if (!modal || !image || !close) return () => {};

  const hide = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    image.removeAttribute("src");
    image.alt = "";
  };

  const open = (card) => {
    const cardImage = qs("img", card);
    if (!cardImage?.src) return;

    image.src = cardImage.src;
    image.alt = cardImage.alt || "Gallery image";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    close.focus();
  };

  close.addEventListener("click", hide);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) hide();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) hide();
  });

  return open;
}

function setupManifestoSlider() {
  const cards = qsa(".manifesto-slider .manifesto-card");
  const prev = qs(".manifesto-prev");
  const next = qs(".manifesto-next");
  if (!cards.length || !prev || !next) return;

  let activeIndex = Math.max(0, cards.findIndex((card) => card.classList.contains("active")));

  const show = (index) => {
    activeIndex = (index + cards.length) % cards.length;
    cards.forEach((card, cardIndex) => {
      card.classList.toggle("active", cardIndex === activeIndex);
    });
  };

  prev.addEventListener("click", () => show(activeIndex - 1));
  next.addEventListener("click", () => show(activeIndex + 1));
  show(activeIndex);
}

function setupMobileMenu() {
  const header = qs(".site-header");
  if (!header) return;

  const toggle = qs(".menu-toggle", header);
  const nav = qs(".nav", header);
  if (!toggle || !nav) return;

  const closeMenu = () => {
    header.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

async function setupGalleryCarousel() {
  const carousel = qs(".gallery-carousel");
  const rail = qs(".gallery-rail");
  if (!carousel || !rail) return;

  const images = uniqueImages(await getGalleryImages());
  const openImage = setupImageModal();
  const cards = images.map((src) => {
    const card = document.createElement("article");
    const image = document.createElement("img");

    card.className = "gallery-card";
    image.src = src;
    image.alt = imageAltFromPath(src);
    image.loading = "lazy";
    card.appendChild(image);

    return card;
  });

  rail.replaceChildren(...cards);

  if (images.length) {
    makeDraggableLoop(carousel, rail, {
      onTap: openImage,
      dragMultiplier: 1.85,
      glideFriction: 0.955,
      speed: -0.28,
      tapSelector: ".gallery-card",
    });
  }
}

async function init() {
  setupMobileMenu();
  const openStory = setupStoryModal();
  const visualStrip = qs(".visual-strip");
  const visualRail = qs(".visual-rail");
  if (visualStrip && visualRail) {
    makeDraggableLoop(visualStrip, visualRail, {
      onTap: openStory,
      dragMultiplier: 1.95,
      glideFriction: 0.955,
      speed: 0.38,
      tapSelector: ".visual-card",
    });
  }

  setupPosterImages();
  setupManifestoSlider();
  await setupGalleryCarousel();
}

document.addEventListener("DOMContentLoaded", init);
