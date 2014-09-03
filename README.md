# Cirro-backlogs

This README outlines the details of collaborating on this Ember application.

## Initial Setup

From within `~/Sites` run to build a new Ember CLI project
```
$ ember new cirro-backlogs
```

In `config/environment.js` add the following options to the production enviromnent. We have to do this because the base url of github hosted sites have the repositiory name trailing the url (http://cirroweb.github.io/backlogs/)
```
if (environment === 'production') {
  ENV.baseURL = 'backlogs';
  ENV.locationType = 'hash';
 }
```

Checkout a new `deploy` branch that we will use to build the distribution and deply to github pages
```
$ git co -b deploy
```

While in the `deploy` branch, edit the `.gitignore` and remove `/dist`  from the list of ignored folders. We will then need to build the project and add the created `/dist` folder to the branch. 
```
$ ember build --environment production
$ git add -A
$ git ci -m 'added dist folder from first build'
```

Finally we need to push only the `/dist` folder to a branch called `gh-pages`
```
$ git subtree push --prefix dist origin gh-pages
```

After the site is deployed continue to work in master. The next time you are ready to deploy again, checkout the `deploy` branch, rebase off master `$ git rebase master` then push to the subtree (see prev step).

## How to Deploy to gh-pages

commit and push in master
```bash
$ git add -A
$ git ci -m 'some message'
$ git push origin master
```
Until we find a solution we need to push the `/dist` folder to the branch gh-pages but when we build ember it clears the entire `/dist` folder. This is an issue because we need to keep the CNAME file in there for the DNS. 

```bash
# If there are others changes in the branch you will need to
#	delete your local deploy branch
$ git br -D deploy

# Checkout deploy branch
$ git co -b deploy 

# Rebase off master
$ git rebase master

# Build the site
$ ember build --environment production

# Keep the CNAME file in the dist folder
$ git co -- dist/CNAME
$ git add -A
$ git rebase --continue

# Often your subtree push will fail so it is best to just remove 
# the remote branch before pushing
$ git push origin :gh-pages

# Push to gh-pages subtree
$ git subtree push --prefix dist origin gh-pages 
```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone https://github.com/cirroweb/backlogs.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

