/* =========================================================================
   EDIT THIS FILE ONLY.
   Everything else (index.html, styles.css, app.js) can stay untouched.
   After you save changes, just re-upload this file to GitHub — the site
   updates automatically within a minute or two.
   ========================================================================= */

const siteConfig = {
  name: "Your Name",
  role: "Add your role — e.g. Frontend Developer",
  bio: "Write two or three sentences about who you are, what you build, and what you're looking for. Keep it plain and specific — skip the buzzwords.",
  location: "City, Country",
  email: "you@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com/yourusername" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
    // Add or remove lines like the two above for any other links (Twitter, resume PDF, etc).
  ],
};

/* -------------------------------------------------------------------------
   PROJECTS
   Copy an entry (from the opening { to the closing },) to add a new one.
   The newest project should go at the TOP of the list.

   image: put a file in the /images folder and write its filename here
          (e.g. "my-project.png"). Leave it as "" to skip — a placeholder
          block with the project's initials will show instead.
   tags:  short skill/tool labels, as many or few as you like.
   links: leave the url as "" to hide that button entirely.
   ------------------------------------------------------------------------- */

const projects = [
  {
    title: "Project Name",
    summary:
      "One or two sentences on what this project is and what problem it solves.",
    image: "",
    tags: ["Tag One", "Tag Two"],
    links: {
      live: "",   // e.g. "https://myproject.com"
      code: "",   // e.g. "https://github.com/yourusername/myproject"
    },
  },
  {
    title: "Second Project",
    summary: "Swap in your real project details here.",
    image: "",
    tags: ["Tag One"],
    links: {
      live: "",
      code: "",
    },
  },
  {
    title: "Third Project",
    summary: "Add as many entries as you need — the layout handles any number.",
    image: "",
    tags: [],
    links: {
      live: "",
      code: "",
    },
  },
];
