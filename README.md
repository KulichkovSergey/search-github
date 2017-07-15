# SearchGithub

Search for GitHub users, click on one of their repositories and see graph based on number of contributions per user to this project.

Made with `Angular@4.2.4` + `Angular CLI@1.3.0` + `Typescript@2.3.3`

## Install dependencies

Run `npm install` to install dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Project structure

`./app/` - root component

`./app/search-service/` - service to get data from GitHub API

`./app/search-form/` - component for a search form

`./app/search-result/` - component for a search result, repositories per user

`./app/search-result/graph-contributions/` - component for building a graph based on number of contributions per user to this project

`./app/common/` - mocking GitHub API URL
