# Goodway - Lightweight Component Library

Goodway is a minimal and efficient JavaScript component library designed to
simplify UI development. With a size of just 410 bytes, Goodway provides a
structured way to create reusable components with built-in support for props,
templates, and modularity.

## Features

- 🪶 **Ultra-lightweight** - Only 410 bytes!
- ⚡ **Simple API** - Easy-to-use component structure.
- 📦 **Modular** - Components are self-contained and reusable.
- 🏗 **Props System** - Pass dynamic data easily.
- 🖼 **Template-based Rendering** - Define UI structure with placeholders.

## Getting Started

### Installation

Goodway does not require installation! Simply include your component files in a
JavaScript project and import them.

### Creating a Component

A Goodway component is created using `createApp()`, which defines the
component’s name, props, and template.

#### Example: `hero.js`

```js
import createApp from "../core/core.js";

export default createApp(() => {
  return {
    name: "hero-component",
    props: {
      title: "Designer, Front-end Developer & Mentor",
      description:
        "I design and code beautifully simple things, and I love what I do.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
    },
    template: `
      <section class="hero">
        <div class="hero-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div class="hero-avatar">
          <img src="{image}" alt="Your Avatar" />
        </div>
      </section>
    `,
  };
});
```

### Using the Component

To use a Goodway component, add it to your HTML file and ensure it is properly
imported.

#### Example: `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Goodway Example</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div class="container">
      <hero-component
        title="Developer & Mentor"
        description="I love creating simple and elegant web solutions."
        image="https://example.com/avatar.jpg"
      ></hero-component>
    </div>

    <script type="module" src="./components/hero.js"></script>
  </body>
</html>
```

## Why Use Goodway?

- **Minimal Footprint** - It’s super lightweight and does not bloat your
  project.
- **Easy to Use** - Define, import, and use components seamlessly.
- **Scalable** - Create a structured UI with reusable components.

## License

MIT License. Feel free to use and contribute!

Happy coding! 🚀
