const DATA_URL = "content/site.json";

const esc = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const link = (item, className = "") =>
  `<a${className ? ` class="${className}"` : ""} href="${esc(item.target || item.url || "#")}">${esc(item.label || item.cta || item.text || "")}</a>`;

const logoTitle = (title = "My Time Is Not Mine") => {
  const words = esc(title).toUpperCase().split(/\s+/);
  return `${words.slice(0, 2).join(" ")}<br>${words.slice(2).join(" ")}`;
};

function render(data) {
  document.documentElement.lang = data.meta?.language || "en";
  document.title = data.meta?.title || "My Time Is Not Mine";

  const navItems = (data.navigation || [])
    .map((item) => `<a href="${esc(item.target)}">${esc(item.label)}</a>`)
    .join("");

  const visualCards = (data.campaign?.visuals || [])
    .map((item) => `<article class="visual-card">${esc(item)}</article>`)
    .join("");

  const manifestoCards = (data.demand?.cards || [])
    .map((item, index) => `
      <article class="manifesto-card">
        <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
        <p class="card-text">${esc(item)}</p>
      </article>
    `)
    .join("");

  const pillars = (data.keepDriven?.pillars || [])
    .map((item) => `
      <article class="keep-card">
        <div>
          <div class="keep-letter">${esc(item.letter)}</div>
          <h3>${esc(item.title)}</h3>
        </div>
        <p>${esc(item.text)}</p>
      </article>
    `)
    .join("");

  const stats = (data.keepDriven?.stats || [])
    .map((item) => `
      <article class="stat-card">
        <div class="stat-number">${esc(item.number)}</div>
        <div>
          <div class="stat-title">${esc(item.title)}</div>
          <div class="stat-copy">${esc(item.text)}</div>
        </div>
      </article>
    `)
    .join("");

  const journeyItems = (data.journey?.items || [])
    .map((item) => `
      <article class="timeline-item">
        <div class="timeline-date">${esc(item.date)}</div>
        <div class="timeline-content">
          <h3 class="timeline-title">${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
        </div>
      </article>
    `)
    .join("");

  const galleryItems = (data.gallery?.items || [])
    .map((item) => `<div class="gallery-cell">${esc(item)}</div>`)
    .join("");

  const partnerItems = (data.partners?.items || [])
    .map((item) => `
      <article class="partner-card${item.featured ? " coordinator" : ""}">
        <div class="partner-kicker">${esc(item.role)}</div>
        <div>
          <h3 class="partner-title">${esc(item.name)}</h3>
          <div class="partner-country">${esc(item.country)}</div>
        </div>
      </article>
    `)
    .join("");

  const associated = (data.partners?.associated || [])
    .map((item) => `<span class="tag">${esc(item)}</span>`)
    .join("");

  const footerItems = (data.footer?.items || [])
    .map((item) => `<span>${esc(item)}</span>`)
    .join("");

  return `
    <header class="site-header">
      <a class="logo" href="#">${logoTitle(data.hero?.title || "My Time Is Not Mine")}</a>
      <nav class="nav" aria-label="Main navigation">${navItems}</nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-copy">
          <div class="section-content">
            <h1>${esc(data.hero?.title)}</h1>
            <p class="hero-sub">${esc(data.hero?.subtitle)}</p>
            <p class="hero-note">${esc(data.hero?.description)}</p>
            <div class="hero-actions">
              ${link(data.hero?.primaryCta || {}, "btn")}
              ${link(data.hero?.secondaryCta || {}, "btn secondary")}
            </div>
          </div>
        </div>
      </section>

      <section class="stories" id="stories">
        <div class="container section-layout">
          <span class="section-eyebrow">${esc(data.campaign?.eyebrow)}</span>
          <div class="section-content">
            <h2 class="section-title">${esc(data.campaign?.title)}</h2>
            <p class="section-lead">${esc(data.campaign?.lead)}</p>
            <div class="visual-strip" aria-label="Campaign visuals">${visualCards}</div>
          </div>
        </div>
      </section>

      <section class="manifesto" id="demand">
        <div class="container section-layout">
          <span class="manifesto-kicker">${esc(data.demand?.kicker)}</span>
          <div class="manifesto-content">
            <div class="demand">${esc(data.demand?.main)}</div>
            <p class="demand-sub">
              ${esc(data.demand?.body)}
              <span class="manifesto-closing">${esc(data.demand?.closing)}</span>
            </p>
          </div>
          <div class="manifesto-cards-block" aria-label="Manifesto cards">
            <div class="manifesto-strip manifesto-rail">${manifestoCards}</div>
          </div>
        </div>
      </section>

      <section class="keep" id="keepdriven">
        <div class="container section-layout">
          <span class="section-eyebrow">${esc(data.keepDriven?.eyebrow)}</span>
          <div class="section-content">
            <h2 class="section-title">${esc(data.keepDriven?.title)}</h2>
            <p class="section-lead">${esc(data.keepDriven?.lead)}</p>
            <div class="keep-grid">${pillars}</div>
            <div class="stats-grid">${stats}</div>
            <div class="callout">
              <h3>${esc(data.keepDriven?.behindTitle)}</h3>
              <p>${esc(data.keepDriven?.behindText)}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="journey" id="journey">
        <div class="container section-layout">
          <span class="section-eyebrow">${esc(data.journey?.eyebrow)}</span>
          <div class="section-content">
            <h2 class="section-title">${esc(data.journey?.title)}</h2>
            <p class="section-lead">${esc(data.journey?.lead)}</p>
            <div class="timeline">${journeyItems}</div>
          </div>
        </div>
      </section>

      <section class="paper" id="paper">
        <div class="container section-layout">
          <span class="section-eyebrow">${esc(data.positionPaper?.eyebrow)}</span>
          <div class="section-content">
            <h2 class="section-title">${esc(data.positionPaper?.title)}</h2>
            <p class="section-lead">${esc(data.positionPaper?.lead)}</p>
            <div class="hero-actions paper-actions">
              <a class="btn" href="${esc(data.positionPaper?.url || "#")}">${esc(data.positionPaper?.cta)}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="cta" id="join">
        <div class="container section-layout">
          <span class="section-eyebrow">${esc(data.takePart?.eyebrow)}</span>
          <div class="section-content">
            <h2>${esc(data.takePart?.title)}</h2>
            <p>${esc(data.takePart?.text)}</p>
            <div class="hashtag">${esc(data.takePart?.hashtag)}</div>
          </div>
        </div>
      </section>

      <section class="gallery">
        <div class="container section-layout">
          <span class="section-eyebrow">${esc(data.gallery?.eyebrow)}</span>
          <div class="section-content">
            <h2 class="section-title">${esc(data.gallery?.title)}</h2>
            <p class="section-lead">${esc(data.gallery?.lead)}</p>
            <div class="gallery-grid">${galleryItems}</div>
          </div>
        </div>
      </section>

      <section class="partners" id="partners">
        <div class="container section-layout">
          <span class="section-eyebrow">${esc(data.partners?.eyebrow)}</span>
          <div class="section-content">
            <h2 class="section-title">${esc(data.partners?.title)}</h2>
            <p class="section-lead">${esc(data.partners?.lead)}</p>
            <div class="partner-grid">${partnerItems}</div>

            <div class="associated">
              <h3>${esc(data.partners?.associatedTitle)}</h3>
              <div class="tag-list">${associated}</div>
            </div>

            <div class="associated">
              <h3>${esc(data.partners?.fundingTitle)}</h3>
              <p class="microcopy funding-copy">
                ${esc(data.partners?.fundingText)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-inner">${footerItems}</div>
    </footer>
  `;
}

async function init() {
  const app = document.querySelector("#app");

  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Could not load ${DATA_URL}`);
    }

    const data = await response.json();
    app.className = "";
    app.innerHTML = render(data);
  } catch (error) {
    app.className = "error";
    app.textContent = "The campaign content could not be loaded.";
    console.error(error);
  }
}

init();
