/**
 * Creates a custom web component based on the provided component definition.
 *
 * @param {Function} defineComponent - A function that returns the component definition object
 * @param {Object} defineComponent.return - The component definition object
 * @param {string} defineComponent.return.name - The name of the custom element (must contain a hyphen)
 * @param {string} defineComponent.return.template - HTML template string with optional {propName} placeholders
 * @param {Object} defineComponent.return.props - Default properties for the component
 * @returns {void}
 *
 * @example
 * createApp(() => ({
 *   name: 'hello-world',
 *   template: '<h1>Hello, {name}!</h1>',
 *   props: { name: 'World' }
 * }));
 */
export default function createApp(defineComponent) {
  const component = defineComponent();

  /**
   * CustomElement class representing a custom HTML element.
   * It extends the standard HTMLElement.
   */
  class CustomElement extends HTMLElement {
    /**
     * Constructs a new instance of the CustomElement.
     * Initializes the component by setting up properties and rendering the template.
     */
    constructor() {
      super();

      // Get props from attributes or use defaults
      const props = { ...component.props };
      for (const key in props) {
        const attrValue = this.getAttribute(key);
        if (attrValue !== null) {
          props[key] = attrValue;
        }
      }

      // Replace placeholders in the template with prop values
      let templateContent = component.template;
      for (const [key, value] of Object.entries(props)) {
        templateContent = templateContent.replace(
          new RegExp(`{${key}}`, "g"),
          value
        );
      }

      // Create a template from the processed content
      const template = document.createElement("template");
      template.innerHTML = templateContent;

      // Replace the custom element with its content
      this.replaceWith(template.content.cloneNode(true));
    }
  }

  // Automatically register the custom element
  customElements.define(component.name, CustomElement);
}
