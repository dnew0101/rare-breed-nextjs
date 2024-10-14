## TODO:
- PRIORITY: Separate new branch for converting client-side components to server-side components per Next 14 standards; SSG and SSR. Test FCP speed with Google Lighthouse.

- UX.1: Consolidate ARTIST SECTION components. Centralize font placement on slanted section for desktop; introduce card design for artist sections on mobile, as it is more thematically modern.

- UX.2: Polish recyclable Layout components; header and footer.

- UX.3: After merging PRIORITY branch and patching UX.1/UX.2, create new branch for A/B testing of site; artist portfolio pages? Consider hamburger/modal/sidebar for header.

- TESTING: Brainstorm E2E testing procedure with Cypress. Continue to monitor unit tests as changes are made.

- CONTAINERIZATION: Consider Docker image for containing website within a stable environment... still haven't decide haha.


## Overview
This is the repository for Rare Breed Ink's website. I am tasked with creating a site that can functionally deliver a more streamlined user experience (than the current Squarespace model), while optimizing load times and the overall Google Lighthouse score. Currently, it is still in development. Expected release within October (just in time for Halloween)!

## Technologies
Frontend: NextJS + Typescript + NextUI component library
Backend: Contentful (CMS) + GraphQL (APIs)
QA Engineering: Cypress (E2E) + Jest (unit testing)
DevOps Protocol: GitLab CI/CD and Vercel

## Notes
- GraphQL requests DISABLED to preserve API calls while developing. Utilizing test data for frontend engineering.

- Using Next SEO "Head" Component... need to update to Metadata: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead