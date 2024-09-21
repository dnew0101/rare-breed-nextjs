## TODO:
- PRIORITY: Complete testimonial and location sections as designed in Figma. Complete mobile/tablet version of artist sections.
- COMPONENTS: Polish Artist sections with aesthetic styling. Consider modifying hard-coded styles for thematic integration. 
- STYLE: NextUI custom themes and components
- PAGES: Statically generated pages (home) and dynamic/rendered pages (individual artist pages and "available designs" page).
- TESTING: Conduct a unit testing protocol for "functional"/responsive components using Jest. Brainstorm E2E testing procedure with Cypress.

- COMPLETED: Completed rudimentary homepage design. Connect Contentful CMS to project via GraphQL. Render components on frontend via content delivered through Contentful. Initialize and populate Next SEO Head Component.

## Overview
This is the repository for Rare Breed Ink's website. I am tasked with creating a site that can functionally deliver a more streamlined user experience (than the current Squarespace model), while optimizing load times and the overall Google Lighthouse score. Currently, it is still in development. Expected release within October (just in time for Halloween)!

## Technologies
Frontend: NextJS + Typescript + NextUI component library
Backend: Contentful (CMS) + GraphQL (APIs)
QA Engineering: Cypress (E2E) + Jest (unit testing)
DevOps Protocol: GitLab CI/CD and Vercel

## Notes
- Using Next SEO "Head" Component... need to update to Metadata: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead