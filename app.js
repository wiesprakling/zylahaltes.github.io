// Renders the page from content.js. You shouldn't need to touch this file.

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

function renderProjects() {
  const list = document.getElementById("project-list");
  document.getElementById("project-count").textContent = String(
    projects.length
  ).padStart(2, "0");

  projects.forEach((p, i) => {
    const entry = document.createElement("article");
    entry.className = "entry";

    const media = document.createElement("div");
    media.className = "entry-media";
    if (p.image) {
      const img = document.createElement("img");
      img.src = `images/${p.image}`;
      img.alt = p.title;
      img.loading = "lazy";
      img.onerror = () => {
        media.classList.add("entry-media--fallback");
        media.textContent = initials(p.title);
      };
      media.appendChild(img);
    } else {
      media.classList.add("entry-media--fallback");
      media.textContent = initials(p.title);
    }

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

