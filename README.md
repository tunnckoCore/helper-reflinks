# helper-reflinks [![NPM version](https://img.shields.io/npm/v/helper-reflinks.svg)](https://www.npmjs.com/package/helper-reflinks) [![Build Status](https://img.shields.io/travis/helpers/helper-reflinks.svg)](https://travis-ci.org/helpers/helper-reflinks)

> Template helper for generating a list of markdown formatted reference links to github repos for the tree of dependencies and devDependencies listed in package.json.

## TOC

- [Install](#install)
- [Usage](#usage)
- [Register the helper](#register-the-helper)
  * [Templates](#templates)
  * [assemble](#assemble)
  * [verb](#verb)
  * [handlebars](#handlebars)
  * [Lo-Dash](#lo-dash)
- [Example usage](#example-usage)
- [Related projects](#related-projects)
- [Contributing](#contributing)
- [Building docs](#building-docs)
- [Running tests](#running-tests)
- [Author](#author)
- [License](#license)

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install helper-reflinks --save
```

## Usage

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

## Register the helper

> This should work with any engine, here are some examples

### Templates

Register the helper for use with [Templates](https://github.com/jonschlinkert/templates)

```js
template.helper('reflinks', require('helper-reflinks'));
```

### assemble

To register the helper for use with [assemble](https://github.com/assemble/assemble) ^0.6.0:

```js
assemble.helper('reflinks', require('helper-reflinks'));
```

### verb

Register the helper for use with [verb](https://github.com/assemble/verb):

```js
var verb = require('verb');
verb.helper('reflinks', require('helper-reflinks'));

verb.task('default', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('./'));
});
```

### handlebars

Register with [handlebars](https://github.com/wycats/handlebars.js/):

```js
var handlebars = require('handlebars');
handlebars.registerHelper('reflinks', require('helper-reflinks'));
```

### Lo-Dash

Register with [lodash](https://lodash.com/) or [underscore](https://github.com/jashkenas/underscore):

```js
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

## Related projects

* [handlebars-helpers](https://www.npmjs.com/package/handlebars-helpers): 120+ Handlebars helpers in ~20 categories, for Assemble, YUI, Ghost or any Handlebars project. Includes… [more](https://www.npmjs.com/package/handlebars-helpers) | [homepage](https://github.com/assemble/handlebars-helpers)
* [helper-related](https://www.npmjs.com/package/helper-related): Template helper for generating a list of links to the homepages of related GitHub/npm projects. | [homepage](https://github.com/helpers/helper-related)
* [template-helpers](https://www.npmjs.com/package/template-helpers): Generic JavaScript helpers that can be used with any template engine. Handlebars, Lo-Dash, Underscore, or… [more](https://www.npmjs.com/package/template-helpers) | [homepage](https://github.com/jonschlinkert/template-helpers)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/helper-reflinks/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/assemble/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/assemble/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the [MIT license](https://github.com/helpers/helper-reflinks/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on February 25, 2016._