/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var GitRepoInfo = require('git-repo-info');

module.exports = function(defaults) {
  var environment = (new EmberApp(defaults, {})).env;
  var app = new EmberApp(defaults, {
    // https://spin.atomicobject.com/2016/02/26/git-hash-ember-app-heroku/
    inlineContent: {
      'build-time-git-hash': { // not available on Heroku
        content: GitRepoInfo().sha || "-"
      }
    },
    fingerprint: {
      extensions: ['js', 'css', 'map'], //'png', 'jpg', 'svg', 'eot', 'ttf', 'otf', 'woff', 'woff2'],
      // prepend: environment === 'development' ? 'http://localhost.nl:4200/' : 'https://opnametool.nl/'
      exclude: [
        'images/portefeuille'
      ]
    },
    minifyCSS: {
      enabled: environment !== 'development'
    },
    minifyJS: {
      enabled: false && environment !== 'development',
      options: { // from http://discuss.emberjs.com/t/uglify-breaks-ember/5557/2
        // mangle: {
        //   except: ['emit', 'context'] // corresponds with utils/couchdbify.js, context is used in pdf generation
        // },
        output: { // http://lisperator.net/uglifyjs/codegen
          semicolons: false,
          preamble: "// Copyright Racido BV Netherlands - all rights reserved " + (new Date()).getFullYear()
        },
        compress: { // http://lisperator.net/uglifyjs/compress
        }
      }
    },
    sourcemaps: {
      // FIXME: https://github.com/ef4/broccoli-uglify-sourcemap/issues/23
      enabled: environment !== 'development',
      // extensions: environment === 'development' ? ['js', 'css'] : ['js']
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/blueimp-load-image/js/load-image.js');
  app.import('bower_components/add-to-homescreen/src/addtohomescreen.js');

  return app.toTree();
};
