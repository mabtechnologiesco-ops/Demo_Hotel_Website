# Suilo - Hotel & Luxury Website Template

A free website template provided by [FreeTemplateGo](https://freetemplatego.com).

## Usage

Feel free to use this template for personal or commercial projects.

## Attribution

Please keep the "FreeTemplateGo" credit link in the footer when using this template.

## Credits

- Template design and distribution: [FreeTemplateGo](https://freetemplatego.com)

## Local Development

No build step required. From the project root run:

```bash
python -m http.server 8080
```

Then open http://localhost:8080/

## Deploy to Render

This is a plain static site (HTML/CSS/JS) and deploys for free on [Render](https://render.com):

1. Push this repository to GitHub.
2. In the Render Dashboard choose **New → Blueprint** and select this repository
   (or **New → Static Site** and connect the repo).
3. Render reads [`render.yaml`](render.yaml) automatically:
   - **Runtime:** static
   - **Publish directory:** `.` (repository root)
   - **Build command:** none
4. Click **Apply** — your site goes live at `https://<name>.onrender.com`, and every
   push to `main` triggers a redeploy.

