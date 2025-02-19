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
