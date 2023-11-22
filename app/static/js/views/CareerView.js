import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Career");
  }

  async getHtml() {
    return `
    <h1>Career Page</h1>
    `;
  }
}
