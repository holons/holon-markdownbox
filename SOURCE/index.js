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
const config    = require('_config')();
const template  = require('./index.template.html');
const __        = document.createElement('div');
/*****************************************************************************/
function markdownbox (parameter) {                                               // @TODO: employ some kind of "extend" or "xtend" or "merge" strategy instead of "XOR"
  /****** INITIALIZE *******/
  const CONTAINER = parameter.container || error.container();
  const OPTIONS   = parameter.options   || config.options;
  const DATA      = parameter.data      || null;                                 // @TODO: maybe always a "level" interface?
  const CHILDREN  = parameter.children  || {};

  /****** WIRE UP *******/
  const COMPONENT = (__.innerHTML=template,__.childNodes[0]);

  COMPONENT.innerHTML = DATA.lang[OPTIONS.defaultLanguage];
  CONTAINER.appendChild(COMPONENT);

  // @TODO: add DATA description - because it should be "json-meta-markdown" :-)

  /******** RETURN *********/
  const API = { // should be an event emitter too
    changeLanguage (language) {
      COMPONENT.innerHTML = DATA.lang[language];
    }
  };
  return API;

}
/******************************************************************************
  MODULE = EXPORT [Public Interface]
******************************************************************************/
module.exports = markdownbox;
