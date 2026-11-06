# Just List landing page

A buildless static site for GitHub Pages. No dependencies, backend, analytics, external fonts, environment variables, or installation step. The example checklist works entirely in the browser and does not store visitor data. All product asset URLs are relative, including `./styles.css`, so repository subpaths work.

## Preview

From this folder:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. You can also open `index.html` directly.

## GitHub Pages

For a separate GitHub Pages repository, copy **the contents** of `web/` (including `.nojekyll` and `assets/`) into that repository's root. In Settings → Pages, choose **Deploy from a branch**, the relevant branch, and **/(root)**.

If keeping this folder inside a larger repository, publishing the repository root serves this page at `https://OWNER.github.io/REPOSITORY/web/` (or `https://OWNER.github.io/web/` for an `OWNER.github.io` repository). GitHub's branch-publishing folder selector supports the repository root or `/docs`, not an arbitrary `/web` directory. To publish `web/` at the site's root without moving it, use GitHub Actions and upload `web` with `actions/upload-pages-artifact`, then deploy with `actions/deploy-pages`.

There is no SPA router or server routing to configure. No custom domain, absolute site URL, or canonical URL is assumed. Once the final domain is known, you may add an absolute canonical URL and `og:image` URL to `index.html`. GitHub Pages adds no form backend; support uses a `mailto:` link.

## Content

- `index.html`: page content, metadata, App Store and support/legal links.
- `styles.css`: responsive layout, native system fonts, reduced-motion support.
- `script.js`: optional example-checklist enhancement. Checkboxes still work without JavaScript.
- `assets/`: existing app icon and marketing artwork copied from the iOS project.

The App Store destination uses the app ID from `AppConfiguration.swift` without its review-only query parameter. Verify that the listing is publicly available before announcing the page; a TestFlight-only app may not yet have a public App Store listing. Existing legal URLs are preserved as absolute links, so copying this page into another repo does not break them. Keep those legal files in their current published location.
