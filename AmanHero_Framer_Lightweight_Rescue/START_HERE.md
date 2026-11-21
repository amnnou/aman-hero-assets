# Aman Hero — Framer-friendly version (V4.4.1)

This package retains the existing eight 8-bit dialogue designs, q8 speaking about verticals, q1 remaining quiet, the q13 dialogue size correction, the original hover states and layered crowd, the Aman hover reveal, the entry screen, and sound. It **does not embed base64 artwork in the TSX**.

## Why the previous file crashed the editor

The original self-contained TSX is about 9.35 MB, because it contains embedded images. This version is about 29 KB, with the 72 original image assets stored separately.

## Instructions

1. Do NOT paste the old `AmanHero.tsx` from the self-contained package again.
2. Upload the contents of `assets/` to publicly accessible image hosting where each file has a stable URL with a shared folder prefix. For example, in a **public** GitHub repository `aman-hero-assets`, upload the whole `assets` folder into the repository root.
3. For GitHub, use the CDN base URL: `https://cdn.jsdelivr.net/gh/YOUR-USERNAME/aman-hero-assets@main/assets`. Replace `YOUR-USERNAME` with your own account username. Confirm `.../scene.webp` opens in your browser. Allow a little time for the CDN to populate.
4. In Framer create a NEW code component named `AmanHero`. Replace the starter code with the contents of the lightweight `AmanHero.tsx` file in this package. Paste the CODE, not the ZIP file contents.
5. Add your `AmanHero` code component to the Canvas and, in its properties panel, enter the asset base URL into **Assets URL**. The URL should end with `/assets` and NOT `/scene.webp`.
6. Resize the component to fill your hero section, set image fit to Cover, use Preview, and test Enter with Sound + the eight dialogue characters.
7. If Framer displays a code crash identifier, copy it and inspect the error in the browser's developer console. A runtime code error is a different issue from an editor crash caused by pasting an enormous file.

**Note:** The files are intended to be hosted separately, not uploaded as all 72 static files via Framer Site Settings (Framer's usual Pro static-file limit is 50 without the Advanced Hosting add-on).

No live hosting is included. Until you upload the assets and set the base URL, the component will not display correctly.
