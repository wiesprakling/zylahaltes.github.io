# Your Portfolio Site

## Go live in 5 minutes (no command line needed)

1. Go to https://github.com/new and create a repository named exactly:
   **yourusername.github.io** (replace `yourusername` with your actual GitHub username — this exact name matters).
   Set it to **Public**. Don't add a README, .gitignore, or license.

2. On the new repo's page, click **"uploading an existing file"**.

3. Drag in all the files from this folder (`index.html`, `styles.css`, `app.js`,
   `content.js`, and the `images` folder). Click **Commit changes**.

4. Go to the repo's **Settings → Pages**. Under "Build and deployment",
   set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**.
   Click **Save**.

5. Wait 1–2 minutes, then visit **https://yourusername.github.io** —
   your site is live, permanently, for free.

## Adding your projects (this is the only file you'll ever need to edit)

Open **content.js**. At the top, fill in your name, role, bio, and links.
Below that is a `projects` list — copy one entry to add a new project,
delete entries you don't need. Full instructions are written as comments
inside the file itself.

To add a project image: drop the image file into the `images` folder,
then set `image: "yourfile.jpg"` on that project's entry.

## Updating the live site later

Same as step 3 above: go to your repo on GitHub, click on the file you want
to change (usually `content.js`), click the pencil (✎) icon to edit it
right in the browser, and click **Commit changes**. The live site updates
within a minute — no rebuild step, no local setup.
