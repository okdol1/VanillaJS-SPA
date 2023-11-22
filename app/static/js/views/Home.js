import AbstractView from "./AbstractView.js";
import { MOCK_POSTS } from "../../data/mockPosts.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Tech");
  }

  async getHtml() {
    const postsHtml = MOCK_POSTS.map(
      (post) => `<li><a href="/posts/${post.id}">${post.title}</a></li>`
    ).join("");

    return `
    <h1>Tech Page</h1>
    <ul>${postsHtml}</ul>
    `;
  }
}
