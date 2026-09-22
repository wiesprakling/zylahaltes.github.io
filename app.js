function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function renderProfile() {
  document.title = `${siteConfig.name} — ${siteConfig.role}`;
  document.getElementById("nav-name").textContent = siteConfig.name;
  document.getElementById("name").textContent = siteConfig.name;
  document.getElementById("role").textContent = siteConfig.role;
  document.getElementById("bio").textContent = siteConfig.bio;
  document.getElementById("location").textContent = siteConfig.location;

  const emailLink = document.getElementById("email-link");
  emailLink.textContent = siteConfig.email;
  emailLink.href = `mailto:${siteConfig.email}`;

  const socialsEl = document.getElementById("socials");
  siteConfig.socials.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.url;
    a.textContent = s.label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    socialsEl.appendChild(a);
  });

  document.getElementById("footer-name").textContent = siteConfig.name;
  document.getElementById("year").textContent = new Date().getFullYear();
}

function buildMediaGrid(images, title) {
  const media = document.createElement("div");
  media.className = "entry-media";

  if (!images.length) {
    media.classList.add("entry-media--fallback");
    media.textContent = initials(title);
    return media;
  }

  const shown = images.slice(0, 4);
  media.classList.add(`entry-media--count-${shown.length}`);

  shown.forEach((src, idx) => {
    const cell = document.createElement("div");
    cell.className = "media-cell";
    cell.setAttribute("role", "button");
    cell.setAttribute("tabindex", "0");
    cell.setAttribute("aria-label", `Open image ${idx + 1} of ${title}`);

    const img = document.createElement("img");
    img.src = `images/${src}`;
    img.alt = `${title} — image ${idx + 1}`;
    img.loading = "lazy";
    img.onerror = () => {
      cell.remove();
      // If every cell in this grid failed to load, fall back to initials.
      if (!media.querySelector(".media-cell")) {
        media.className = "entry-media entry-media--fallback";
        media.textContent = initials(title);
      }
    };
    cell.appendChild(img);

    if (idx === 3 && images.length > 4) {
      const overlay = document.createElement("span");
      overlay.className = "media-more";
      overlay.textContent = `+${images.length - 4}`;
      cell.appendChild(overlay);
    }

    const openThis = () => openLightbox(images, title, idx);
    cell.addEventListener("click", openThis);
    cell.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openThis();
      }
    });

    media.appendChild(cell);
  });

  return media;
}

/* ---------------- Lightbox ---------------- */

let lightboxImages = [];
let lightboxIndex = 0;

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <button class="lightbox-close" aria-label="Close">&times;</button>
  <button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8249;</button>
  <img class="lightbox-img" alt="" />
  <button class="lightbox-nav lightbox-next" aria-label="Next image">&#8250;</button>
  <div class="lightbox-count"></div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxCount = lightbox.querySelector(".lightbox-count");

function renderLightbox() {
  const src = lightboxImages[lightboxIndex];
  lightboxImg.src = `images/${src}`;
  lightboxCount.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  const multi = lightboxImages.length > 1;
  lightbox.querySelector(".lightbox-prev").style.display = multi ? "flex" : "none";
  lightbox.querySelector(".lightbox-next").style.display = multi ? "flex" : "none";
}

function openLightbox(images, title, startIndex) {
  lightboxImages = images;
  lightboxIndex = startIndex;
  lightboxImg.alt = title;
  renderLightbox();
  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

function stepLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  renderLightbox();
}

lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".lightbox-prev").addEventListener("click", () => stepLightbox(-1));
lightbox.querySelector(".lightbox-next").addEventListener("click", () => stepLightbox(1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
});

function renderProjects() {
  const list = document.getElementById("project-list");
  document.getElementById("project-count").textContent = String(
    projects.length
  ).padStart(2, "0");

  projects.forEach((p, i) => {
    const entry = document.createElement("article");
    entry.className = "entry";

    // Supports both the new `images: [...]` list and the older single `image` field.
    const imageList = Array.isArray(p.images)
      ? p.images
      : p.image
      ? [p.image]
      : [];
    const media = buildMediaGrid(imageList, p.title);

    const body = document.createElement("div");
    body.className = "entry-body";

    const num = document.createElement("span");
    num.className = "entry-num";
    num.textContent = String(i + 1).padStart(2, "0");

    const title = document.createElement("h3");
    title.className = "entry-title";
    title.textContent = p.title;

    const summary = document.createElement("p");
    summary.className = "entry-summary";
    summary.textContent = p.summary;

    body.appendChild(num);
    body.appendChild(title);
    body.appendChild(summary);

    if (p.tags && p.tags.length) {
      const tagRow = document.createElement("div");
      tagRow.className = "entry-tags";
      p.tags.forEach((t) => {
        const tag = document.createElement("span");
        tag.textContent = t;
        tagRow.appendChild(tag);
      });
      body.appendChild(tagRow);
    }

    const linkRow = document.createElement("div");
    linkRow.className = "entry-links";
    if (p.links?.live) {
      const a = document.createElement("a");
      a.href = p.links.live;
      a.textContent = "View live";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linkRow.appendChild(a);
    }
    if (p.links?.code) {
      const a = document.createElement("a");
      a.href = p.links.code;
      a.textContent = "View code";
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      linkRow.appendChild(a);
    }
    if (linkRow.children.length) body.appendChild(linkRow);

    entry.appendChild(media);
    entry.appendChild(body);
    list.appendChild(entry);
  });
}

renderProfile();
renderProjects();