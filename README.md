# ractive-transitions-slide

*Find more Ractive.js plugins at [ractivejs.org/plugins](http://ractivejs.org/plugins)*

This transition slides an element in and out of view, using CSS transitions where possible.

```html
{{#if visible}}
  <div intro-outro='slide'>
    this will slide in and out of view
    depending on the value of `visible`
  </div>
{{/if}}
```

## Installation

Install from npm...

```bash
npm install ractive-transitions-slide
```

...or download it and add it as a script tag to your page:

```html
<script src='ractive.js'></script> <!-- must go first! -->
<script src='ractive-transitions-slide.js'></script>
```

## Use as a module...

**Note: previous versions of this plugin would 'self-register'. If you are using a module system such as Browserify, Webpack or RequireJS, that's no longer the case - you must explicitly register the plugin.


### CommonJS

```js
var Ractive = require( 'ractive' );

// To use the slide transition with a specific instance
var ractive = new Ractive({
  el: 'body',
  template: myTemplate,
  transitions: {
    slide: require( 'ractive-transitions-slide' )
  }
});

// To use it with components
MyComponent = Ractive.extend({
  template: componentTemplate,
  transitions: {
    slide: require( 'ractive-transitions-slide' )
  }
});

// To make it globally available to *all* instances
Ractive.transitions.slide = require( 'ractive-transitions-slide' );
```


### AMD

```js
define([ 'ractive', 'ractive-transitions-slide' ], function ( Ractive, slide ) {
  var ractive = new Ractive({
    el: 'body',
    template: myTemplate,
    transitions: {
      slide: slide
    }
  });
});
```


### ES6

```js
import Ractive from 'ractive';

var ractive = new Ractive({
  el: 'body',
  template: myTemplate,
  transitions: { slide }
});
```


## Use as a `<script>` tag

If you include ractive-transitions-slide as a script tag, it will 'self-register' with the global `Ractive` object, and all Ractive instances will be able to use it.



## Parameters

You can specify the `delay`, `duration` and `easing` parameters using the conventional syntax:

```html
<div intro='slide:{"delay":500,"easing":"ease-out"}'>content</div>
```

Both `delay` and `duration` are in milliseconds. The `easing` value must be a valid CSS easing function (see http://cubic-bezier.com/).



## License

Copyright (c) 2013-15 Rich Harris. Licensed MIT.
