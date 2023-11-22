import AbstractView from "./AbstractView.js";
import { MOCK_POSTS } from "../../data/mockPosts.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle("Post");
  }

  async getHtml() {
    return `
            <h1>${MOCK_POSTS[this.postId].title}</h1>
        `;
  }
}
