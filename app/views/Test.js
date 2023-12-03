import AbstractView from "./AbstractView.js";
import { setupCounter } from "/model/Counter.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  getHtml() {
    return `
        <h1>Test Page</1>
        <main>
            <p id="count-display"></p>
            <button id="increment-btn">Increment</button>
        </main>
        `;
  }

  executeViewScript() {
    setupCounter();
  }

  render() {
    return this.getHtml();
  }
}
