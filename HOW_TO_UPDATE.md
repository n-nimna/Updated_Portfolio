# How to update your portfolio (easy guide)

Everything you will ever change is in ONE file:

    src/data/siteData.js

## Add a new project
1. Put the image in `src/assets/` (for example `src/assets/GRAPHIC_DESIGN/logo1.png`).
2. In `siteData.js`, add an import at the top:
       import Logo1 from "../assets/GRAPHIC_DESIGN/logo1.png";
3. Copy any block inside `export const PROJECTS = [ ... ]`, paste it, and change:
       id        – a unique name, e.g. "gfx-logo1"
       category  – "UI/UX Design" | "Development" | "Graphic & Branding" | "AI Creations"
       title, image, tags, desc, links
       featured  – true = also shows in the Home page "Featured Work" slider
4. Save. That's it – it appears on the right page automatically.

## UI/UX case study page
A project with category "UI/UX Design" and a `caseStudy: { ... }` block gets a card on the
Case Studies page and its own page (big title, left "Contents" menu, sections).

Inside `caseStudy` you edit:
    label, subtitle, projectType, duration
    sections: [ ... ]   <- every item here becomes a section AND a link in the Contents menu

A section can have any of these (use only what you need):
    { title: "Problem", text: ["paragraph 1", "paragraph 2"] }
    { title: "Goals", points: ["bullet one", "bullet two"] }
    { title: "Key Screens", screens: [ { title: "Home", text: "…", image: ImgA }, ... ] }
    { title: "User Flow", images: [ { src: FlowImg, caption: "User flow" } ] }
    { title: "Interactive Prototype", text: ["…"], embed: "https://www.figma.com/embed?...your prototype link" }

Ready-made names used on your reference: Project Overview, Problem, Research Process,
Key Design Considerations, Key Screens, Use Case Diagram, User Flow, Interactive Prototype,
Usability Testing, Key Learnings. Copy a section, change it, done.
For images: put the file in src/assets/, then add an import at the top of siteData.js.
"Read Another Case Study" at the bottom fills in automatically.

## Other things in the same file
- PROFILE      – name, photo, tagline, about text, email, location, CV file name
- SOCIALS      – social icon links
- EDUCATION / EXPERIENCE / TESTIMONIALS – add rows (an empty list hides the section)
- SKILLS       – skill chips on the About page
- CATEGORIES   – the cards on the Projects page

## Your CV
Put your CV in the `public` folder and name it  Nimeshi_Dilshara_CV.pdf

## Run & publish
    npm install        (first time only)
    npm run dev        (preview on your computer)
    npm run deploy     (publish to GitHub Pages)

## Extra section types you can use inside a case study (siteData.js)
    { title: "Color System", swatchTitle: "Colors",
      swatchGroups: [ { title: "Primary", items: [ { hex: "#1D04BF" }, { hex: "#484CE7" } ] } ] }
    { title: "Typography", typeScale: { family: "Roboto", rows: [ ["H1", "24px", 700, "Bold"], ... ] } }
    images: [ { src: Img, caption: "Icon set", width: 302 } ]     <- width (px) keeps small images at their real size
    points2Title / points2 / text2                             <- a second list and a closing paragraph in the same section
Leave out `duration` to hide it. A project with `links: []` simply has no external link.

## Photos of people who sent testimonials
1. Put each photo (square, face in the middle) in the folder  public/testimonials/
2. In src/data/siteData.js, inside TESTIMONIALS, add  photo: "file-name.jpg"  to that person.
   Without a photo, their initials are shown.

## How to add your interactive prototype (Figma)
1. In Figma, open your MathruCare prototype and click the Present (play) button.
2. Click "Share prototype" and set access to "Anyone with the link can view", then copy the link.
3. In src/data/siteData.js find the MathruCare project. Above "Usability Testing" there is a commented
   "Interactive Prototype" line: remove the // marks and paste the link between the quotes:
   embed: "https://www.figma.com/proto/....",
   (the website turns it into an embedded, clickable prototype automatically).
4. Save, then run  npm run deploy.

## AI Creations (poster gallery, 2 columns)
Add an image to  src/assets/AI_CREATIONS/  , import it at the top of siteData.js, then copy the
"ai-iphone18" block in PROJECTS and change id, title, image and desc. The title and description
appear over the bottom of the picture when someone hovers it (always visible on phones).
