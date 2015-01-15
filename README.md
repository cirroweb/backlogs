# Cirro Backlogs

This README outlines the details of collaborating on this Ember application.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation
```bash
$ cd ~/Sites && mkdir cirro-backlogs
$ git clone https://github.com/cirroweb/backlogs.git cirro-backlogs && cd $_
$ npm install
$ bower install
```

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

## How to Deploy to gh-pages with one big grunt task
```bash
$ grunt doit
```

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Initial Setup

From within `~/Sites` run to build a new Ember CLI project
```
$ ember new cirro-backlogs
```

In `config/environment.js` add the following options to the production enviromnent. We have to do this because the base url of github hosted sites have the repositiory name trailing the url (http://cirroweb.github.io/backlogs/)
```
if (environment === 'production') {
  //ENV.baseURL = 'backlogs';
  ENV.locationType = 'hash';
 }
```


## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

