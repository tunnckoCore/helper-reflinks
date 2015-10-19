'use strict';

var utils = require('lazy-cache')(require);
var fn = require;

require = utils;
require('ansi-red', 'red');
require('ansi-gray', 'gray');
require('ansi-green', 'green');
require('success-symbol', 'success');
require('parse-github-url', 'parse');
require('stringify-github-url', 'stringify');
require('async-array-reduce', 'reduce');
require('extend-shallow', 'extend');
require('markdown-utils', 'mdu');
require('get-value', 'get');
require('get-pkgs');
require = fn;

/**
 * Expose utils
 */

module.exports = utils;
