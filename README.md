# helper-reflinks [![NPM version](https://badge.fury.io/js/helper-reflinks.svg)](http://badge.fury.io/js/helper-reflinks)  [![Build Status](https://travis-ci.org/helpers/helper-reflinks.svg)](https://travis-ci.org/helpers/helper-reflinks)

> Template helper for generating a list of markdown formatted reference links to github repos for the tree of dependencies and devDependencies listed in package.json.

**Example**

```js
{%= reflinks() %}
// or
{%= reflinks('foo*') %}
```

Results in a markdown-formatted list of reflinks to add to the bottom of a doc or readme:

```markdown
[assemble]: https://github.com/assemble/assemble
[filter-object]: https://github.com/jonschlinkert/filter-object
[sort-object]: https://github.com/helpers/sort-object
```

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i helper-reflinks --save
```

## Register the helper

> This should work with any engine, here are a few examples

### [template](https://github.com/jonschlinkert/template)

Register the helper for use with any template engine

```js
template.helper('reflinks', require('helper-reflinks'));
```

### [assemble](https://github.com/assemble/assemble)

To register the helper for use with [assemble](https://github.com/assemble/assemble)v0.6.x:

```js
assemble.helper('reflinks', require('helper-reflinks'));
```

### [verb](https://github.com/assemble/verb)

Register the helper for use with [verb](https://github.com/assemble/verb):

```js
var verb = require('verb');
verb.helper('reflinks', require('helper-reflinks'));

verb.task('default', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('./'));
});
```

### [handlebars](https://github.com/wycats/handlebars.js/)

```js
var handlebars = require('handlebars');
handlebars.registerHelper('reflinks', require('helper-reflinks'));
```

### [Lo-Dash](https://lodash.com/)or [underscore](https://github.com/jashkenas/underscore)

```js
var handlebars = require('handlebars');
handlebars.registerHelper('reflinks', require('helper-reflinks'));

// as a mixin
_.mixin({reflinks: reflinksHelper});
_.template('<%= _.reflinks("fixtures/*.txt") %>', {});
//=> 'AAA\nBBB\nCCC'

// passed on the context
var settings = {imports: {reflinks: reflinksHelper}};
_.template('<%= reflinks("fixtures/*.txt") %>', {reflinks: reflinksHelper});
//=> 'AAA\nBBB\nCCC'

// as an import
var settings = {imports: {reflinks: reflinksHelper}};
_.template('<%= reflinks("fixtures/*.txt") %>', {}, settings);
//=> 'AAA\nBBB\nCCC'
```

## Example usage

Handlebars:

```handlebars
{{reflinks ""}}
```

Lo-Dash or Underscore:

```js
<%= reflinks("") %>
```

Verb (lo-dash, with special delimiters to avoid delimiter collision in markdown docs):

```js
{%= reflinks('') %}
```

## Runing tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/helpers/helper-reflinks/issues/new).

To request or contribute a helper to the [github.com/helpers](https://github.com/helpers) org, please read [this contributing guide](https://github.com/helpers/requests) first.

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2014-2015 Jon Schlinkert
Released under the MIT license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on October 19, 2015._