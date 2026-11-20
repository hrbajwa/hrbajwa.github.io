# Academic Website — Hammad Ur Rehman Bajwa

A bespoke, responsive, no-build-tool academic research website. It introduces the connection between veterinary medicine, parasitology, infectious disease epidemiology, and genomic/computational modeling.

**Live URL after publication:** https://hrbajwa.github.io/

## Files

- `index.html` — all website text, navigation, publications, metadata, and links.
- `styles.css` — colors, typography, layout, and responsive design.
- `script.js` — working publication filters, publication search, mobile menu, and copyright year.
- `assets/favicon.svg` — small monogram displayed in the browser tab.

All assets are local; the site does not need external font servers, frameworks, build tools, cookies, trackers, or a back end. The email link opens the visitor's default email app; it is **not** a web contact form.

## Preview locally (Windows)

1. Download and extract the ZIP.
2. Open `index.html` in Chrome, Edge, or your preferred browser.
3. Inspect on a desktop and a mobile device or browser responsive mode.

## Publish on GitHub Pages

1. Sign in at https://github.com/hrbajwa.
2. Select **New repository**. Name it **hrbajwa.github.io**, choose **Public**, and create the repository.
3. Upload **the contents of this folder** (`index.html`, `styles.css`, `script.js`, and the `assets` folder) to the repository's **root**, not an enclosing `hrbajwa-academic-website` folder. Commit the changes.
4. Open repository **Settings → Pages**. In **Build and deployment**, choose **Deploy from a branch**; select **main** and **/(root)**, then **Save**.
5. Once GitHub Pages has deployed, open https://hrbajwa.github.io/. Deployment may take several minutes.

Reference: https://docs.github.com/en/pages/quickstart

## Customization

- **Name and biography**: Search `index.html` for `Hammad Ur Rehman Bajwa` and `My work sits`.
- **Current appointment**: Search for `Moore Fellow` and `Evolution, Ecology, and Behavior`.
- **Publications**: Edit the four `<article class="publication" ...>` elements within `#publication-list`. Set `data-category` to `spatial`, `networks`, or `trends` and update `data-search` keywords. The filter and search work automatically.
- **Research**: Update the four expertise cards and two project cards in `index.html`.
- **Scholar profiles**: ORCID, ResearchGate, and Google Scholar URLs already point to the supplied accounts.
- **CV**: Currently, the CV link creates a CV-request email. Once you have a public PDF that you want to distribute, place it in `assets/CV_Hammad_Bajwa.pdf` and replace `href="mailto:hubajwa2@illinois.edu?subject=CV%20request"` with `href="assets/CV_Hammad_Bajwa.pdf"` and the label with `Download CV`.
- **Portrait**: This version deliberately uses an original scientific visualization rather than republishing a low-resolution social profile image. A portrait can be added later with a photo you approve.
- **Colors**: Modify variables at the top of `styles.css`: `--navy`, `--jade`, `--ivory`, `--paper`.

## Publication sources verified during drafting (Nov 2026)

1. Bajwa et al. (2026). *Zoonoses and Public Health*. https://doi.org/10.1111/zph.70071
2. Bajwa et al. (2026). *PLOS ONE*. https://doi.org/10.1371/journal.pone.0344889
3. Bajwa et al. (2026). *Frontiers in Public Health*. https://doi.org/10.3389/fpubh.2026.1755882
4. Bajwa et al. (2025). *Annals of Epidemiology*. https://doi.org/10.1016/j.annepidem.2025.10.008

These are **selected publications**, not a claim that they constitute the entire record. ResearchGate/Google Scholar totals are intentionally not displayed because they change.

## Privacy note

Project details are intentionally presented at a high level. Do not upload unpublished manuscripts, controlled surveillance data, confidential data, unapproved patient information, or restricted WGS datasets to the public website.

## Site status

This is an original design informed by the *purpose* of a conventional academic portfolio, not a copy of the example website. Before publishing, review all biography, affiliation, and project wording for accuracy and preferences. No GitHub repository or live website has been created for you automatically.
