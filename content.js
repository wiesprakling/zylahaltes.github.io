/* =========================================================================
   EDIT THIS FILE ONLY.
   Everything else (index.html, styles.css, app.js) can stay untouched.
   After you save changes, just re-upload this file to GitHub — the site
   updates automatically within a minute or two.
   ========================================================================= */

const siteConfig = {
  name: "Zylah Klein Altes",
  role: "4th Year Computer Science Student | Aspiring AI Engineer",
  bio: "I am a Computer Science student currently pursuing my degree at Angeles University Foundation. My academic and personal projects have allowed me to gain experience in software development, artificial intelligence, mobile application development, and web technologies.",
  location: "Pampanga, Philippines",
  email: "alteszylahklein@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/wiesprakling" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/altes-zylah-klein-540141343/" },
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
    title: "MAIze: A Mobile Application for Maize Disease Detection",
    summary:
      "MAIze is an early Maize Streak Virus (MSV) detection and mitigation application. Yellow corn is a staple crop crucial for agricultural development such as providing feeds for poultry and as a staple food for humans. MSV can cause a complete field yield loss which also directly affects the economy. Integrated with Deep learning models, Explainable AI (XAI) and Pathological guidance, MAIze aims to provide a feasible solution.",
    images: ["maize 1.png", "maize 2.png", "maize 3.png" , "maize 4.png", "maize 5.png"],
    tags: ["AI/NLP", "Machine Learning", "Mobile App Development", "Explainable AI"],
    links: {
      live: "",   // none (mobile app only)
      code: "https://github.com/wiesprakling/maize",  
    },
  },
  {
    title: "Kalinga: A Mobile Application for OFW caretakers in Taiwan",
    summary: "Welcome to Kalinga, an AI care companion for migrant caregivers. This guide gets a new developer from a fresh clone to a running local environment, and covers the rules everyone on the team follows. Read the whole thing once before you write code. This project was submitted at the Presidential Hackathon of Taiwan.",
    images: ["kalinga.png", "kalinga 1.png", "kalinga 2.png", "kalinga 3.png"],
    tags: ["RAG", "Machine Learning", "Mobile App Development"],
    links: {
      live: "https://drive.google.com/file/d/1WYs9CfnMusZbxssqA7drSeMXsYquKz-b/view?usp=drive_link", //video demo only
      code: "", //not available for public viewing
    },
  },
  {
    title: "Tira: A Mobile Application for repurposing leftover ingredients into a healthy meal.",
    summary: "Tira is a smart culinary companion designed to turn \"extras\" into extraordinary possibilities. Named after the Filipino word for leftovers, Tira is more than just a recipe app; it is a platform for sustainability and heritage. By leveraging AI-driven technology, Tira transforms what remains in your fridge into fresh, nutritious meals, helping users reduce waste and stretch their budgets further. It bridges the gap between preserving rich culinary heritage and embracing modern innovation.",
    images: ["tira 1.png", "tira 2.png", "tira 3.png", "tira 4.png"],
    tags: ["UI/UX Design", "Mobile App Development", "Figma"],
    links: {
      live: "https://www.figma.com/proto/OZazRnzkO8S1YdXBxqRi7R/tira?node-id=3-121&starting-point-node-id=3%3A121", //prototype
      code: "https://drive.google.com/file/d/1KXwcMTbjpea5o59QaAaaSAhxMtUY2OWj/view?usp=drive_link", //documentation
    },
  },
];
