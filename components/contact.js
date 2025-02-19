import createApp from "../core/core.js";

export default createApp(() => {
  return {
    name: "contact-component",
    props: {
      title: "Contact Me",
      description:
        "Let's work together! Send me a message and let's discuss your project.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg",
      name: "Name",
      email: "Email",
      message: "Message",
      button: "Send Message",
    },
    template: `
    <section class="contact">
          <h2>{title}</h2>
          <form id="contact-form">
            <label for="name">{name}</label>
            <input type="text" id="name" name="name" required />

            <label for="email">{email}</label>
            <input type="email" id="email" name="email" required />

            <label for="message">{message}</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">{button}</button>
          </form>
        </section>
    `,
  };
});
