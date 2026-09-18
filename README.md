# GetDesigned

A responsive interior design studio website built in Next.js and TSX. The visual direction pairs warm ivory and espresso with architectural photography, editorial typography, and restrained animation.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Checks

```bash
npm run lint
npm run build
```

## Editing

- `app/page.tsx`: homepage content, studio story, process, and contact information.
- `app/experience.tsx`: navigation, project galleries, service accordion, and Lenis/GSAP motion.
- `app/globals.css`: palette, typography, layouts, responsive breakpoints, and reduced-motion styles.
- `app/layout.tsx`: page metadata.
- `public/images/`: locally stored photography.
- `IMAGE-SOURCES.md`: photo credits, provenance, and content-review notes.

Project cards open accessible native dialogs. The navigation and services work with a keyboard. Animation follows the visitor’s reduced-motion preference. Contact actions use the studio’s existing email, phone, and WhatsApp; there is no form backend.

This is a local implementation. Review the proposed copy and temporary stock imagery before publishing it as the client’s production website.
