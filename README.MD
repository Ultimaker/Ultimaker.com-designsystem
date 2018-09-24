Ultimaker.com Designsystem
==========================

Prerequisites
-------------

- Git client of your choice
- NodeJS (Installation through brew(macos)/chocolatey(windows) recommended)

Install
-------

- Clone project from https://github.com/Ultimaker/Ultimaker.com-designsystem
- Run `npm i` to install NPM dependencies
- Test project with `npm run unit`

NPM Commands
------------

- `storybook`: Storybook development environment

- `test` or `unit`: Execute all tests in browserstack (first create test/karma.conf.json)
- `unit:chrome`: Execute all unit tests in headless chrome
- `unit:debug`: Execute all test continuously, attach your own browser

- `snapshots`: Execute jest snapshot testing for the storybook components
- `snapshots:update`: Execute jest snapshot testing and update them instantly 

- `build`: Build amd module
- `build:dev`: Builds an amd module for local testing

- `lint`: Lints all javascript
- `build-storybook`: Generate static storybook environment
