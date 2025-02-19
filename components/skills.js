import createApp from "../core/core.js";

export default createApp(() => {
  return {
    name: "skills-component",
    template: `
    <section class="skills">
          <h2>My Skills</h2>
          <div class="skill-cards">
            <div class="skill-card">
              <h3>HTML</h3>
              <p>Building semantic and accessible web pages.</p>
            </div>
            <div class="skill-card">
              <h3>CSS</h3>
              <p>Styling websites with modern design principles.</p>
            </div>
            <div class="skill-card">
              <h3>JavaScript</h3>
              <p>Creating interactive and dynamic user interfaces.</p>
            </div>
            <div class="skill-card">
              <h3>React</h3>
              <p>Building reusable components for scalable apps.</p>
            </div>
            <div class="skill-card">
              <h3>Node.js</h3>
              <p>Developing server-side applications with Node.js.</p>
            </div>
          </div>
        </section>
    `,
  };
});
