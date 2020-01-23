# Svelte Toggleable

Implements a _toggleable_ store with convenience functions.

## Basic usage

This store like object is meant to be a shorthand for typical calls like

```html
<!-- Classic -->
<button on:click="{() => $show = true}">Show</button>
<button on:click="{() => $show = false}">Hide</button>
<button on:click="{() => $show = !$show}">Toggle</button>

<!-- With toggleable -->
<button on:click="{show.on}">Show</button>
<button on:click="{show.off}">Hide</button>
<button on:click="{show.toggle}">Toggle</button>
```

## Default value

The default value of a toggleable store is set _true_, another value can be passed on initialization.

## Methods

- **on** Sets the value to 'true'
- **off** Sets the value to 'false'
- **toggle** Flips the value between 'true' and 'false'
