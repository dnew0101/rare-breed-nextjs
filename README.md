## TODO:
- PRIORITY: Separate new branch for converting client-side components to server-side components per Next 14 standards; SSG and SSR.
- UX: After merging priority branch, create new branch for A/B testing of site; artist portfolio pages?
- TESTING: Brainstorm E2E testing procedure with Cypress. Continue to monitor unit tests as changes are made.
- CONTAINERIZATION: Consider Docker image for containing website within a stable environment... still haven't decide XD


## Overview
This is the repository for Rare Breed Ink's website. I am tasked with creating a site that can functionally deliver a more streamlined user experience (than the current Squarespace model), while optimizing load times and the overall Google Lighthouse score. Currently, it is still in development. Expected release within October (just in time for Halloween)!

## Technologies
Frontend: NextJS + Typescript + NextUI component library
Backend: Contentful (CMS) + GraphQL (APIs)
QA Engineering: Cypress (E2E) + Jest (unit testing)
DevOps Protocol: GitLab CI/CD and Vercel

## Notes
- GraphQL requests disabled to preserve API calls while developing. Utilizing test data for frontend engineering.
- Using Next SEO "Head" Component... need to update to Metadata: https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-3-migrating-nexthead