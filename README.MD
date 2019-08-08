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

- `build`: Build amd module
- `build:dev`: Builds an amd module for local testing

- `lint`: Lints all javascript
- `build-storybook`: Generate static storybook environment


### Hygen Timesavers
We’ve added [hygen](http://www.hygen.io/), the scalable code generator that saves you time, to the stack so that you can quickly generate a __new__ component using our component standard, which is reflected in the component structure outputted by the command.

Below is an example of issuing the command to create an `atom` component called `my-component`.

```sh
npx hygen modules component --name my-component --type atom
```

#### options - type
* `atom`
* `molecule`
* `organism`


## Prettier
To add and run prettier against a component use the following command adjusting the component directory path as necessary

```sh
npx prettier --write --insert-pragma --require-pragma=false src/js/components/molecules/cards/card-article/**/*.{ts,scss,html}
```
