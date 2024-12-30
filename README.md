## TODO:
- PRIORITY: Separate new branch for converting client-side components to server-side components per Next 15 standards; SSG and SSR. Figure out how to migrate to the supported SEO version for Next SEO Head component.
- UX.1: Card design for homepage is preferred, for now. Ideally, add avatar pictures that use Instagram profile pictures for artists' sections on homepage.
- UX.2: Find a better 3D carousel component than Swiper; far too glitchy, doesn't work properly.
- UX.3: Artist pages? A/B testing for shop owner preference. Pull inspiration from Dark Horse tattoos' website UX.
- UX.4: Finish contact page. Pull inspiration from Dark Horse tattoos' website UX.
- UX.5: Consider a slightly variable color scheme, given that it's ostensibly monochromatic... perhaps using Framer motion for some interesting animations to spice up the visuals? Do this after consolidating the website entirely.
- TESTING: Brainstorm E2E testing procedure with Cypress. Continue to monitor unit tests as changes are made.

## Overview
This is the repository for Rare Breed Ink's website. I am tasked with creating a site that can functionally deliver a more streamlined user experience (than the current Squarespace model), while optimizing load times and the overall Google Lighthouse score.

## Technologies
Frontend: NextJS + Typescript + NextUI component library
Backend: Contentful (CMS) + GraphQL (APIs)
QA Engineering: Cypress (E2E) + Jest (unit testing)
DevOps Protocol: GitLab CI/CD and Vercel

## Notes
- Using Next SEO "Head" Component... need to update to Metadata: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead