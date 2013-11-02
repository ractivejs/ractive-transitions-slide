Ractive.js slide transition plugin
==================================

*Find more Ractive.js plugins at [ractivejs.org/plugins](http://ractivejs.org/plugins)*

This transition slides an element in and out of view, using CSS transitions where possible.

[See the demo here.](http://ractivejs.github.io/Ractive-transitions-slide/)

Usage
-----

Include this file on your page below Ractive, e.g:

```html
<script src='lib/Ractive.js'></script>
<script src='lib/Ractive-transitions-slide.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( 'Ractive-transitions-slide' );
```

You can specify the `delay`, `duration` and `easing` properties using the conventional syntax:

```html
<div intro='slide:{"delay":500,"easing":"ease-out"}'>content</div>
```

Both `delay` and `duration` are in milliseconds. The `easing` value must be a valid CSS easing function (see http://cubic-bezier.com/).



License
-------

Copyright (c) 2013 Rich Harris. Licensed MIT.

Created with the [Ractive.js plugin template](https://github.com/RactiveJS/Plugin-template) for Grunt.