# Manshi Kandu — QA Portfolio

A responsive React portfolio with an Express API and MongoDB-backed contact form. Built with Vite and structured for Vercel deployment.

## 1. Run locally

Requirements: Node.js 18+

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. The frontend works without MongoDB; the contact form needs the API and database configured.

To run the Express API locally in another terminal:

```bash
cp .env.example .env
# Add your MongoDB connection string to .env
npm run server
```

For local development, Vite needs a proxy if you want the frontend to call the local API. Add this to `vite.config.js`:

```js
server: {
  proxy: { '/api': 'http://localhost:5000' }
}
```

Keep the `plugins` property and add `server` beside it in the Vite config.

## 2. Edit your portfolio

Most personal content is in `src/data.js`. The portfolio is intentionally QA-first: testing is presented as the primary professional focus, with development technologies shown as supporting knowledge.
- `profile`: name, role, email, links, intro, about and focus areas
- `skillGroups`: skills and tools
- `experience`: job history and responsibilities\n- `education`: degree and college details
- `projects`: selected projects
- `qaSamples`: illustrative test case, bug report and automation approach

Colors, spacing, typography and responsive layouts are in `src/styles.css`.
Main page structure and interactions are in `src/App.jsx`.

### Add your CV

Place your latest PDF in the `public` folder and name it `Manshi_Kandu_CV.pdf`. The résumé link uses `/Manshi_Kandu_CV.pdf`.

Only include work examples that you are allowed to share. The QA Lab samples are illustrative examples, not claims of actual production evidence.

## 3. Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Import that repository into Vercel.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Add the environment variable `MONGODB_URI` in Vercel Project Settings → Environment Variables.
5. Deploy.

The Express API is exposed as a Vercel function from `api/index.js`. `vercel.json` routes `/api/*` requests to it and sends other paths to the React app.

## 4. MongoDB setup

Create a MongoDB Atlas database, create a database user, and allow network access for your deployment. Copy the Atlas connection string and set it as `MONGODB_URI`. Do not commit `.env` or credentials to GitHub.

If you do not want to configure a database yet, remove or temporarily hide the contact form and use the direct email link.

## 5. Before publishing

- Verify all dates, job titles, product names, and responsibilities.
- Add the PDF résumé to `public/`.
- Replace or remove any details you cannot publicly disclose.
- Test the site on mobile and desktop.
- Test the contact form after configuring MongoDB.
- Do not claim advanced automation proficiency unless you can demonstrate it.

## Stack

MongoDB · Express.js · React · Node.js · Vite · CSS · Vercel
