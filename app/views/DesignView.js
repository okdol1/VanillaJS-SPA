import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Design");
  }

  async getHtml() {
    return `
    <h1>Design Page</h1>
    `;
  }
}
