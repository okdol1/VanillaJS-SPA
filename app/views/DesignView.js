import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("토스 기술 블로그, 토스디자인");
  }

  getHtml() {
    return `
    <h1>Design Page</h1>
    `;
  }

  render() {
    return this.getHtml();
  }
}
