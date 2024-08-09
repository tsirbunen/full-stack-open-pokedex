# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course.

This repository is a fork.

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

## Render hosting

App is deployed in **[Render hosting](https://dashboard.render.com)** (because it is a free hosting service) with the following settings:

- build command: `./build_step_in_render_hosting.sh`
- start command: `npm run start-prod`
- auto-deploy: `no`

The build step script performs node package installation and building the app. The script file has been given permissions for all to do everything using
`chmod 777 build_step_in_render_hosting.sh`
