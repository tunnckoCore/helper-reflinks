# helper-reflinks [![NPM version](https://badge.fury.io/js/helper-reflinks.svg)](http://badge.fury.io/js/helper-reflinks)

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
[generator-verb]: https://github.com/assemble/generator-verb
[get-value]: https://github.com/jonschlinkert/get-value
[handlebars-helpers]: https://github.com/assemble/handlebars-helpers/
[lookup-deps]: https://github.com/jonschlinkert/lookup-deps
[markdown-utils]: https://github.com/jonschlinkert/markdown-utils
[repeat-string]: https://github.com/jonschlinkert/repeat-string
[sort-object]: https://github.com/helpers/sort-object
[template]: https://github.com/jonschlinkert/template
[verb]: https://github.com/assemble/verb
...

```


## Install with [npm](npmjs.org)

```bash
npm i helper-reflinks --save
```

## Run tests

```bash
npm test
```

## Register the helper

> This should work with any engine, here are a few examples

### [template]

Register the helper for use with any template engine

```js
template.helper('reflinks', require('helper-reflinks'));
```

### [assemble]

To register the helper for use with [assemble] v0.6.x:

```js
assemble.helper('reflinks', require('helper-reflinks'));
```

### [verb]

Register the helper for use with [verb]:

```js
var verb = require('verb');
verb.helper('reflinks', require('helper-reflinks'));

verb.task('default', function() {
  verb.src('.verb*.md')
    .pipe(verb.dest('./'));
});
```

### [handlebars]

```js
var handlebars = require('handlebars');
handlebars.registerHelper('reflinks', require('helper-reflinks'));
```

### [Lo-Dash] or [underscore]

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

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/helpers/helper-reflinks/issues)

To request or contribute a helper to the [github.com/helpers][helpers] org, please read [this contributing guide][guide] first.

## Author

**Jon Schlinkert**
 
+ [github/helpers](https://github.com/helpers)
+ [twitter/helpers](http://twitter.com/helpers) 

## License
Copyright (c) 2014-2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 20, 2015._

[assemble]: https://github.com/assemble/assemble
[generator-verb]: https://github.com/assemble/generator-verb
[handlebars-helpers]: https://github.com/assemble/handlebars-helpers/
[handlebars]: https://github.com/wycats/handlebars.js/
[helpers]: https://github.com/helpers
[Lo-Dash]: https://lodash.com/
[template]: https://github.com/jonschlinkert/template
[underscore]: https://github.com/jashkenas/underscore
[verb]: https://github.com/assemble/verb
[guide]: https://github.com/helpers/requests

[arr-diff]: https://github.com/jonschlinkert/arr-diff
[arr-filter]: https://github.com/jonschlinkert/arr-filter
[arr-flatten]: https://github.com/jonschlinkert/arr-flatten
[arr-union]: https://github.com/jonschlinkert/arr-union
[array-slice]: https://github.com/jonschlinkert/array-slice
[array-unique]: https://github.com/jonschlinkert/array-unique
[braces]: https://github.com/jonschlinkert/braces
[deep-filter-object]: https://github.com/jonschlinkert/deep-filter-object
[expand-range]: https://github.com/jonschlinkert/expand-range
[export-files]: https://github.com/jonschlinkert/export-files
[extend-shallow]: https://github.com/jonschlinkert/extend-shallow
[filename-regex]: https://github.com/regexps/filename-regex
[fill-range]: https://github.com/jonschlinkert/fill-range
[filter-keys]: https://github.com/jonschlinkert/filter-keys
[filter-object]: https://github.com/jonschlinkert/filter-object
[filter-values]: https://github.com/jonschlinkert/filter-values
[for-in]: https://github.com/jonschlinkert/for-in
[for-own]: https://github.com/jonschlinkert/for-own
[get-value]: https://github.com/jonschlinkert/get-value
[is-glob]: https://github.com/jonschlinkert/is-glob
[is-number]: https://github.com/jonschlinkert/is-number
[isobject]: https://github.com/jonschlinkert/isobject
[kind-of]: https://github.com/jonschlinkert/kind-of
[look-up]: https://github.com/jonschlinkert/look-up
[lookup-deps]: https://github.com/jonschlinkert/lookup-deps
[make-iterator]: https://github.com/jonschlinkert/make-iterator
[markdown-utils]: https://github.com/jonschlinkert/markdown-utils
[micromatch]: https://github.com/jonschlinkert/micromatch
[preserve]: https://github.com/jonschlinkert/preserve
[randomatic]: https://github.com/jonschlinkert/randomatic
[repeat-element]: https://github.com/jonschlinkert/repeat-element
[repeat-string]: https://github.com/jonschlinkert/repeat-string
[sort-asc]: https://github.com/jonschlinkert/sort-asc
[sort-desc]: https://github.com/jonschlinkert/sort-desc
[sort-object]: https://github.com/helpers/sort-object
[unixify]: https://github.com/jonschlinkert/unixify

