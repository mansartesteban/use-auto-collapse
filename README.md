# Documentation

**useAutoCollapse** is a composable function that allows you to manage the opening and closing transitions of an HTML element, with customizable options for smooth animations and height management. The height transition works even if the size is unknown or varies dynamically. This utility is useful for implementing collapsible sections in your UI with ease.

## Getting started

### Installation

Add useAutoCollapse to your project using npm, pnpm or yarn:

```bash
# Using npm
npm install use-auto-collapse

# Using pnpm
pnpm install use-auto-collapse

# Using yarn
yarn add use-auto-collapse
```

### Import

Once installed, you can import `useAutoCollapse` into your JavaScript file:

```javascript
import useAutoCollapse from "@mansartesteban/use-auto-collapse";
```

### Quick Setup

**Example**

```javascript
// Select the HTML element you want to make collapsible
const element = document.querySelector("#myCollapsibleElement");

// Initialize useAutoCollapse with the element and optional custom settings
const collapsible = useAutoCollapse(element, {
  duration: 300, // Transition duration in milliseconds
  timingFunction: "ease", // CSS timing function
  openedByDefault: false, // Start in the closed state
});

// Use the methods to open, close, or toggle the element's state
collapsible.toggle();
```

You are now ready to use useAutoCollapse to create smooth, dynamic collapsible sections in your application!

## Configuration & API

### Function Signature

```javascript
useAutoCollapse(element, options);
```

- **element**: The HTML element that you want to manage for opening and closing.

- **options**: An optional object to customize the behavior of the transitions, which will override the default options. Documented in the [options section](#options)

### Return Value

**useAutoCollapse** returns an object with the methods and properties. Documented in [API section](#api)

### Options

| Name            | Type                                                                    | Description                                                             | Valeur par défaut |
| --------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------- |
| timingFunction  | string                                                                  | The CSS timing function used for the transition.                        | "ease-in-out"     |
| duration        | number                                                                  | The duration of the transition in milliseconds.                         | 500               |
| openedByDefault | boolean                                                                 | Determines if the container is opened by default.                       | true              |
| minHeight       | The minimum height of the container (CSS value: `px`, `%`, `rem`, ...). | undefined                                                               |
| maxHeight       | string \| number                                                        | The maximum height of the container (CSS value: `px`, `%`, `rem`, ...). | undefined         |

Note : If `minHeight` or `maxHeight` is a number, it will be automatically converted in pixels (px)

## API

### `toggle(): Promise<Boolean>`

Toggles the element between open and closed states. Useful when you want to create a button that opens and closes the content.

**Returns**: `Promise` — Resolves with the new state (`true` if opened, `false` if closed).

### `close(): Promise<false>`

Closes the element with a smooth transition to height 0.

**Returns**: `Promise` — Resolves with false when the transition completes.

### `open(): Promise<true>`

Opens the element, expanding it to its full height.

**Returns**: `Promise` — Resolves with true when the transition completes.

### `hide(): Promise<false>`

An alias for `close()`.

### `show(): Promise<true>`

An alias for `open()`.

### `refresh(): void`

Recalculates the height of the element. This method should be called if the content of the element changes dynamically and you need to update its height.

### `opened: Boolean`

A boolean indicating whether the element is currently opened (`true`) or closed (`false`).

## Usage

### Example

```javascript
// Select the HTML element you want to manage
const element = document.querySelector("#myCollapsibleElement");

// Initialize useAutoCollapse with the element and custom options
const collapsible = useAutoCollapse(element, {
  duration: 300,
  timingFunction: "linear",
  openedByDefault: false,
  minHeight: "50px",
  maxHeight: "500px",
});

// Toggle the element on button click
document.querySelector("#toggleButton").addEventListener("click", () => {
  collapsible.toggle().then((state) => {
    console.log("Element is now", state ? "opened" : "closed");
  });
});
```

### Notes

The transition is applied using the **height** property of the element.
The [overflow property is set to **clip**](https://web.dev/learn/css/overflow?hl=fr#values) to prevent content overflow during transitions.
Ensure that the content inside the element does not have a height restriction (such as a fixed height) that conflicts with the dynamic height adjustments.
