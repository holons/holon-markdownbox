const holon_markdownbox = require('..')

const config    = require('_config')();

const { el, api } = holon_markdownbox({}, config)

document.body.append(el)