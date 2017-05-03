[![Build Status](https://travis-ci.org/jkreileder/angular-lightning-webpack-starter.svg?branch=master)](https://travis-ci.org/jkreileder/angular-lightning-webpack-starter)
[![GitHub version](https://badge.fury.io/gh/jkreileder%2Fangular-lightning-webpack-starter.svg)](https://badge.fury.io/gh/jkreileder%2Fangular-lightning-webpack-starter)
[![Dependency Status](https://david-dm.org/jkreileder/angular-lightning-webpack-starter.svg)](https://david-dm.org/jkreileder/angular-lightning-webpack-starter)
[![Dev Dependency Status](https://david-dm.org/jkreileder/angular-lightning-webpack-starter/dev-status.svg)](https://david-dm.org/jkreileder/angular-lightning-webpack-starter?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/jkreileder/angular-lightning-webpack-starter.svg)](https://greenkeeper.io/)

# Angular Lightning Webpack Starter

> A starter kit featuring [Angular 4](https://angular.io),  [Native Angular components & directives for the Salesforce Lightning Design System ](http://ng-lightning.github.io/ng-lightning/) (in progress), [Ahead of Time Compile](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html), [Router](https://angular.io/docs/ts/latest/guide/router.html), [Forms](https://angular.io/docs/ts/latest/guide/forms.html),
[Http](https://angular.io/docs/ts/latest/guide/server-communication.html),
[Services](https://gist.github.com/gdi2290/634101fec1671ee12b3e#_follow_@AngularClass_on_twitter),
[Tests](https://angular.io/docs/ts/latest/guide/testing.html), [E2E](https://angular.github.io/protractor/#/faq#what-s-the-difference-between-karma-and-protractor-when-do-i-use-which-)), [Karma](https://karma-runner.github.io/), [Protractor](https://angular.github.io/protractor/), [Jasmine](https://github.com/jasmine/jasmine), [Istanbul](https://github.com/gotwarlost/istanbul), [TypeScript](http://www.typescriptlang.org/), [@types](https://www.npmjs.com/~types), [TsLint](http://palantir.github.io/tslint/), [Codelyzer](https://github.com/mgechev/codelyzer), [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html), and [Webpack 2](http://webpack.github.io/).

Differences to [Angular Starter](https://github.com/AngularClass/angular-starter) from which this repository was forked:
* In progress: Salesforce deployment
* Two entry points/apps
* ng-lightning / Salesforce Lightnin Design System based sample app
* Modified webpack generation:
  * Use html-loader instead of raw-loader for HTML files, so url/file-loader works for referenced resources
  * Use url-loader instead of file-loader for smaller files
  * Extract manifest and inline it in index.html to get working caching/cache busting
* Removed unnecessary parts:
  * webpack github deploy
  * Web App manifest, etc. (cache busting wasn't properly implemented for this anyway)
  * Injection of head elements into index.html (cache busting wasn't properly implemented for this anyway)
* Copying of assets folder to dist has been removed -- everything should be copied there implicitly by webpack
* Provide yarn.lock

### Quick start
```bash
# clone our repo
# --depth 1 removes all but one .git commit history:
git clone --depth 1 https://github.com/jkreileder/angular-lightning-webpack-starter.git

# change directory to our repo:
cd angular-lightning-webpack-starter

# install the repo with yarn
yarn install
# or npm:
#npm install

# start the server
npm start

# use Hot Module Replacement
npm run server:dev:hmr
```
go to [http://localhost:3000/main/](http://localhost:3000/main/) or [http://localhost:3000/sidebar/](http://localhost:3000/sidebar/) in your browser

## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular-lightning-webpack-starter
 ├──config/                            * our configuration
 │   ├──helpers.js                     * helper functions for our configuration files
 │   ├──spec-bundle.js                 * ignore this magic that sets up our Angular testing environment
 │   ├──karma.conf.js                  * karma config for our unit tests
 │   ├──protractor.conf.js             * protractor config for our end-to-end tests
 │   ├──webpack.dev.js                 * our development webpack config
 │   ├──webpack.prod.js                * our production webpack config
 │   └──webpack.test.js                * our testing webpack config
 │
 ├──src/                               * our source files that will be compiled to javascript
 │   │
 │   ├──index.js                       * Template for index.html: where we generate our index page
 │   │
 │   ├──polyfills.ts                   * our polyfills file
 │   │
 │   ├──apps/                          * WebApp: folder
 │   │   ├──main.browser.ts            * our entry file for the first application
 │   │   ├──main                       * First application: main
 │   │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   │   └──app.component.ts       * a simple version of our App component components
 │   │   ├──sidebar.browser.ts         * our entry file for the second application
 │   │   ├──sidebar                    * Second application: sidebar
 │   │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   │   └──app.component.ts       * a simple version of our App component components
 │   │   └──shared                     * Code used in more than one app
 │   │       └──[...]
 │   └──assets/                        * your assets
 │       ├──[...]
 │       └──service-worker.js          * ignore this. Web App service worker that's not complete yet │
 │
 ├──tslint.json                        * typescript lint config
 ├──typedoc.json                       * typescript documentation generator
 ├──tsconfig.json                      * typescript config used outside webpack
 ├──tsconfig.webpack.json              * config that webpack uses for typescript
 ├──package.json                       * what npm/yarn uses to manage it's dependencies
 ├──webpack.config.js                  * webpack main configuration file
 └──yarn.lock                          * yarn's locked dependencies
```
___

# License
 [MIT](/LICENSE)
