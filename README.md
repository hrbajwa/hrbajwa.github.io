# Hammad Ur Rehman Bajwa — Academic website

A responsive academic portfolio for **Hammad Ur Rehman Bajwa, DVM, PhD**, an infectious disease epidemiologist. The homepage displays the current affiliation as **Postdoctoral Research Associate — U. of I. (2026)**. Built as static HTML, CSS, and JavaScript for GitHub Pages.

## Publish to GitHub Pages

Repository: `https://github.com/hrbajwa/hrbajwa.github.io`  
Public website: `https://hrbajwa.github.io/`

1. Extract the ZIP.
2. Upload **all of the files INSIDE the ZIP** (not a containing folder) to the root of the `hrbajwa.github.io` repository. Replace files of the same name when necessary. Keep the `assets` folder.
3. Go to repository **Settings > Pages** and choose `Deploy from a branch` / `main` / `/ (root)`.
4. Wait until the Pages deployment completes and refresh the live site.

If you use a locally cloned repository instead, copy all files into your repository and run:

```powershell
git pull origin main
git add .
git commit -m "Update profile and collaboration form"
git push origin main
```

## Contact form — ACTIVATION REQUIRED

The collaboration form in `index.html` uses **FormSubmit.co**, a third-party form backend, to deliver form submissions to `hrbajwa22@gmail.com`.

A static GitHub Pages site cannot itself send emails. The form requires a ONE-TIME activation before notifications are delivered.

1. Publish the site and open `https://hrbajwa.github.io/`.
2. Send a genuine test enquiry using the form (name, email address, subject, message).
3. FormSubmit should email an activation request to **hrbajwa22@gmail.com**. Open the inbox (and spam folder) and confirm the form's activation using the link from FormSubmit.
4. Send a second test enquiry and check that the message arrives in Gmail with the specified subject and text. Note that the service may show a CAPTCHA challenge.

**Until activation has been completed, do not assume the form is delivering messages.** We have not independently tested actual email delivery from this file package.

The form includes a hidden honeypot field and uses the provider's default anti-spam measures. Visitor messages pass through FormSubmit (a third-party service); do not request sensitive information. If you change the public domain, also update the hidden `_next` redirect field in `index.html`.

## Files

- `index.html` — homepage, academic content, contact form
- `styles.css` — responsive site styling
- `script.js` — navigation, copyright year, and contact email subject
- `thanks.html` — thank-you page used after a successful form submission
- `assets/hammad-bajwa-profile.webp` — your optimized professional portrait
- `assets/favicon.svg` — favicon

## Customization

- Change text and credentials in `index.html`.
- Change email address both in the visible links and the contact form `action` URL.
- Add publications in the Publications section.
- Do not upload restricted or nonpublic research data.

## Monochrome design

This edition uses a strict black/white editorial palette with greyscale portrait photography, shorter academic text, high-contrast buttons and a compact collaboration form.


## Learning & Methods hub (new)

- `learning.html` — original, concise educational overview of epidemiological study design, disease-frequency measures, temporal/spatial analysis, statistical modeling, machine learning, and methodological sources.
- `learning/r/01_counts_and_rates.R` — original base-R worked example with synthetic data, definitions, safeguards, output and interpretation questions. No real outbreak data.
- Homepage has a compact Learning & Methods teaser and navigation link.
- No third-party textbook PDFs, figures or supplied textbook datasets are included. Two user-provided overview diagrams are included as separate original website image assets.
- The learning example is illustrative, not a validated research workflow. Before using with real data, check numerator, denominator, time-at-risk, case definitions, sampling, missingness and reporting completeness.
- Before distributing additional code, test it and check dependency licenses. For research use, plan a separate, reviewed open-source methods repository.

## Visual guides and click-to-enlarge viewer

- `assets/study-design-guide-preview.webp` and `assets/analytical-approach-guide-preview.webp` are responsive webpage previews.
- `assets/study-design-guide.png` and `assets/analytical-approach-guide.png` are the full-resolution user-provided diagrams.
- Click a preview to open a keyboard-accessible dialog. Press **Esc** or **Close** to exit, select **Zoom to 100%** to scroll over the original-size diagram, or open the original in a separate tab.
- The diagrams simplify study planning and model selection; their order and arrows do not create an evidence hierarchy or replace discipline-specific method selection.
- The R script includes known-answer sanity checks but was not executed with R during this generation because R was not installed in the build environment. Do not claim it is validated for research.

## Update online without PowerShell

Upload the **contents** of the extracted folder to `https://github.com/hrbajwa/hrbajwa.github.io/upload/main`. Existing files with the same path will be replaced. New diagram PNG/WEBP files will appear in `assets/`. Confirm the commit and successful deployment in Actions.
