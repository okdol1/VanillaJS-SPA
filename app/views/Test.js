import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Test");
  }

  async getHtml() {
    return `
        <h1>Test Page</1>
        <main>
            <p id="count-display"></p>
            <button id="increment-btn">Increment</button>
        </main>
        `;
  }
}
