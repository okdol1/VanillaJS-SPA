import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Tech");
  }

  async getHtml() {
    return `
    <h1>Tech Page</h1>
    `;
  }
}
