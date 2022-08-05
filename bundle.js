(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';
/******************************************************************************
  DEPENDENCIES = CUSTOM SDK [Custom Software Development Kit]
******************************************************************************/
// const os        = require('os');
// const method    = require('exemethod')(function(a,b){return b;});
// const fastdom   = require('fastdom');
// const minixhr   = require('minixhr');
/******************************************************************************
  PARAMETER = ARGUMENT
******************************************************************************/
  // no cli
/******************************************************************************
  ERRORS
******************************************************************************/
const error     = {
  container ()    { throw new Error('Argument for container:dom is missing'); }
};
/******************************************************************************
  MODULE INTERNALS & HELPERS
******************************************************************************/
const template  = `<div class="Markdownbox"></div>`
const __        = document.createElement('div');
/*****************************************************************************/
function markdownbox (parameter, config) {
  /****** INITIALIZE *******/
  // @TODO: employ some kind of "extend" or "xtend" or "merge" strategy instead of "XOR"
  // const CONTAINER = parameter.container || error.container();
  const OPTIONS   = parameter.options   || config.options;
  const DATA      = parameter.data      || null; // @TODO: maybe always a "level" interface?
  const CHILDREN  = parameter.children  || {};

  /****** WIRE UP *******/
  const COMPONENT = (__.innerHTML=template,__.childNodes[0]);

  COMPONENT.innerHTML = DATA?.lang[OPTIONS.defaultLanguage];
  // CONTAINER.appendChild(COMPONENT);


  // @TODO: add DATA description - because it should be "json-meta-markdown" :-)

  /******** RETURN *********/
  const API = { // should be an event emitter too
    changeLanguage (language) {
      COMPONENT.innerHTML = DATA.lang[language];
    }
  };
  return { el: COMPONENT, api: API };

}
/******************************************************************************
  MODULE = EXPORT [Public Interface]
******************************************************************************/
module.exports = markdownbox;

const css = `
:root {
  /* THEME */
  --Markdownbox-color1      : #fff;
  --Markdownbox-color2      : #666;
  --Markdownbox-color3      : #090;
  --Markdownbox-color4      : #ccc;
  --Markdownbox-color5      : #000;
  --Markdownbox-font1       : Ubuntu Mono, Open Sans, monaco, sans-serif;
  --Markdownbox-font2       : Ubuntu Mono, Open Sans, monaco, sans-serif;
  --Markdownbox-font-size1  : 8vw;
  --Markdownbox-font-size2  : 6vw;
  --Markdownbox-font-size3  : 4vw;
  --Markdownbox-borderwidth : 4vw;

  --Markdownbox-mini-font-size1   : 6.5vw;
  --Markdownbox-mini-font-size2   : 3vw;
  --Markdownbox-mini-font-size3   : 2.3vw;
  --Markdownbox-mini-borderwidth  : 4vw;
  --Markdownbox-mini-margin       : 0vw;

  --Markdownbox-watch-font-size1   : 6.5vw;
  --Markdownbox-watch-font-size2   : 3vw;
  --Markdownbox-watch-font-size3   : 2.3vw;
  --Markdownbox-watch-borderwidth  : 4vw;
  --Markdownbox-watch-margin       : 0vw;

  --Markdownbox-smartphone-font-size1 : 6.5vw;
  --Markdownbox-smartphone-font-size2 : 3vw;
  --Markdownbox-smartphone-font-size3 : 2.3vw;
  --Markdownbox-smartphone-borderwidth: 4vw;
  --Markdownbox-smartphone-margin     : 4vw;

  --Markdownbox-tablet-font-size1 : 6.5vw;
  --Markdownbox-tablet-font-size2 : 3vw;
  --Markdownbox-tablet-font-size3 : 2.3vw;
  --Markdownbox-tablet-borderwidth: 4vw;
  --Markdownbox-tablet-margin     : 4vw;

  --Markdownbox-desktop-font-size1 : 6.5vw;
  --Markdownbox-desktop-font-size2 : 3vw;
  --Markdownbox-desktop-font-size3 : 2.3vw;
  --Markdownbox-desktop-borderwidth: 4vw;
  --Markdownbox-desktop-margin     : 4vw;

  --Markdownbox-highres-font-size1 : 6.5vw;
  --Markdownbox-highres-font-size2 : 3vw;
  --Markdownbox-highres-font-size3 : 2.3vw;
  --Markdownbox-highres-borderwidth: 4vw;
  --Markdownbox-highres-margin     : 4vw;
}

.Markdownbox {
  word-break       : break-word;
  hyphens          : auto;
  position         : relative;
  text-align       : center;
  background-color : var(--Markdownbox-color1);
  padding          : 3vw;
  padding-left     : 5vw;
  padding-right    : 5vw;
  padding-bottom   : 5vw;
  border           : var(--Markdownbox-borderwidth) solid var(--Markdownbox-color2);
  margin-top       : 1vw;
  margin-bottom    : 9vw;
  font-size        : var(--Markdownbox-font-size3);
  font-family      : var(--Markdownbox-font1);
  color            : var(--Markdownbox-color3);
}

.Markdownbox h1,
.Markdownbox h2,
.Markdownbox h3,
.Markdownbox h4,
.Markdownbox h5,
.Markdownbox h6  {
  display          : block;
}
.Markdownbox h1 {
  font-family      : var(--Markdownbox-font2);
  color            : var(--Markdownbox-color4);
  font-size        : var(--Markdownbox-font-size1);
  font-weight      : 900;
}
.Markdownbox h2,
.Markdownbox h3,
.Markdownbox h4,
.Markdownbox h5,
.Markdownbox h6  {
  color            : var(--Markdownbox-color5);
  font-size        : var(--Markdownbox-font-size2);
  font-weight      : 900;
}
.Markdownbox tr    {
  font-size        : 1.58vw;
  line-height      : 3vw;
}
.Markdownbox td    {
  padding-left     : 1.5vw;
}
.Markdownbox input[type="image"] {
  width            : 7vw;
}
.Markdownbox a {
  color            : var(--Markdownbox-color2);
  font-weight      : 900;
  text-decoration  : none;
}
.Markdownbox a:hover {
  color            : var(--Markdownbox-color4);
  font-weight      : 900;
  text-decoration  : none;
}
.Markdownbox ul {
  margin        : 0;
  padding       : 0;
}
.Markdownbox li strong a {
  display       : block;
  font-size     : 20px;
  color         : #000;
}
.Markdownbox li {
  margin        : 0;
  padding       : 0;
  list-style    : none;
  line-height   : 20px;
  font-size     : 12px;
}
@media all and (min-width: 0px) and (max-width: 321px) {
  /* mini */
  .Markdownbox       {
    font-size        : var(--Markdownbox-mini-font-size3);
    border           : var(--Markdownbox-mini-borderwidth) solid var(--Markdownbox-color2);
    margin-left      : var(--Markdownbox-mini-margin);
    margin-right     : var(--Markdownbox-mini-margin);
  }
  .Markdownbox h2,
  .Markdownbox h3,
  .Markdownbox h4,
  .Markdownbox h5,
  .Markdownbox h6    {
    font-size        : var(--Markdownbox-mini-font-size2);
  }
  .Markdownbox h1    {
    font-size        : var(--Markdownbox-mini-font-size1);
  }
}
@media all and (min-width: 321px) and (max-width: 641px) {
  /* watch */
  .Markdownbox       {
    font-size        : var(--Markdownbox-watch-font-size3);
    border           : var(--Markdownbox-watch-borderwidth) solid var(--Markdownbox-color2);
    margin-left      : var(--Markdownbox-watch-margin);
    margin-right     : var(--Markdownbox-watch-margin);
  }
  .Markdownbox h2,
  .Markdownbox h3,
  .Markdownbox h4,
  .Markdownbox h5,
  .Markdownbox h6    {
    font-size        : var(--Markdownbox-watch-font-size2);
  }
  .Markdownbox h1    {
    font-size        : var(--Markdownbox-watch-font-size1);
  }
}

@media all and (min-width: 641px) and (max-width: 769px) {
  /* smartphone */
  .Markdownbox       {
    font-size        : var(--Markdownbox-smartphone-font-size3);
    border           : var(--Markdownbox-smartphone-borderwidth) solid var(--Markdownbox-color2);
    margin-left      : var(--Markdownbox-smartphone-margin);
    margin-right     : var(--Markdownbox-smartphone-margin);
  }
  .Markdownbox h2,
  .Markdownbox h3,
  .Markdownbox h4,
  .Markdownbox h5,
  .Markdownbox h6    {
    font-size        : var(--Markdownbox-smartphone-font-size2);
  }
  .Markdownbox h1    {
    font-size        : var(--Markdownbox-smartphone-font-size1);
  }
}

@media all and (min-width: 769px) and (max-width: 1025px) {
  /* tablet */
  .Markdownbox       {
    font-size        : var(--Markdownbox-tablet-font-size3);
    border           : var(--Markdownbox-tablet-borderwidth) solid var(--Markdownbox-color2);
    margin-left      : var(--Markdownbox-tablet-margin);
    margin-right     : var(--Markdownbox-tablet-margin);
  }
  .Markdownbox h2,
  .Markdownbox h3,
  .Markdownbox h4,
  .Markdownbox h5,
  .Markdownbox h6    {
    font-size        : var(--Markdownbox-tablet-font-size2);
  }
  .Markdownbox h1    {
    font-size        : var(--Markdownbox-tablet-font-size1);
  }
}

@media all and (min-width: 1025px) and (max-width: 1201px) {
  /* desktop */
  .Markdownbox       {
    font-size        : var(--Markdownbox-desktop-font-size3);
    border           : var(--Markdownbox-desktop-borderwidth) solid var(--Markdownbox-color2);
    margin-left      : var(--Markdownbox-desktop-margin);
    margin-right     : var(--Markdownbox-desktop-margin);
  }
  .Markdownbox h2,
  .Markdownbox h3,
  .Markdownbox h4,
  .Markdownbox h5,
  .Markdownbox h6    {
    font-size        : var(--Markdownbox-desktop-font-size2);
  }
  .Markdownbox h1    {
    font-size        : var(--Markdownbox-desktop-font-size1);
  }
}

@media all and (min-width: 1201px) {
  /* highres */
  .Markdownbox       {
    font-size        : var(--Markdownbox-highres-font-size3);
    border           : var(--Markdownbox-highres-borderwidth) solid var(--Markdownbox-color2);
    margin-left      : var(--Markdownbox-highres-margin);
    margin-right     : var(--Markdownbox-highres-margin);
  }
  .Markdownbox h2,
  .Markdownbox h3,
  .Markdownbox h4,
  .Markdownbox h5,
  .Markdownbox h6    {
    font-size        : var(--Markdownbox-highres-font-size2);
  }
  .Markdownbox h1    {
    font-size        : var(--Markdownbox-highres-font-size1);
  }
}

`
},{}],2:[function(require,module,exports){
const holon_markdownbox = require('..')

const config    = require('_config')();

const { el, api } = holon_markdownbox({}, config)

document.body.append(el)
},{"..":1,"_config":3}],3:[function(require,module,exports){
/******************************************************************************
  DEPENDENCIES
******************************************************************************/
var pkg         = require('../../package.json');
/******************************************************************************
  PARAMETER = ARGUMENT
******************************************************************************/
  // no cli tool
/******************************************************************************
  MODULE INTERNALS & HELPERS
******************************************************************************/
var _config     = {
  title       : pkg.name,
  description : pkg.description,
  version     : pkg.version,
  keywords    : pkg.keywords.join(', '),
  author      : pkg.author.name,
  website     : pkg.homepage,
};
function config (key) {
  return key ? _config[key] : _config;
}
/******************************************************************************
  EXPORT
******************************************************************************/
module.exports  = config;

},{"../../package.json":4}],4:[function(require,module,exports){
module.exports={
  "name": "holon-markdownbox",
  "version": "0.3.0",
  "description": "",
  "main": "SOURCE/index.js",
  "scripts": {
    "start": "budo demo/demo.js:bundle.js --open --live",
    "build": "browserify demo/demo.js > bundle.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/holons/holon-markdownbox.git"
  },
  "keywords": [
    "holon",
    "holons",
    "holonify",
    "holonomy",
    "component",
    "webcomponent",
    "module",
    "block",
    "BEM"
  ],
  "author": {
    "name": "serapath",
    "email": "dev@serapath.de",
    "url": "http://www.github.com/serapath"
  },
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/holons/holon-markdownbox/issues"
  },
  "homepage": "https://github.com/holons/holon-markdownbox#readme",
  "devDependencies": {
    "browserify": "^17.0.0",
    "budo": "^11.7.0"
  }
}

},{}]},{},[2]);
