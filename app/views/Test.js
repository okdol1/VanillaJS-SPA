import AbstractView from "./AbstractView";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Test");
  }

  async getHtml() {
    return `
        <h1>Test Page</1>
        `;
  }
}
