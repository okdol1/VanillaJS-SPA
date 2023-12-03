import AbstractView from "./AbstractView.js";
import { MOCK_POSTS } from "/data/mockPosts.js";
import { formatDate } from "/utils/formatDate.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.postId = params.id;
    this.setTitle(MOCK_POSTS[this.postId].title);
  }

  getHtml() {
    const post = MOCK_POSTS[this.postId];
    return `
      <div class="container__inner post-container">
        <img src="${post.thumbnailImg}" alt="${post.title}" />
        <h1>${post.title}</h1>
        <div>
          <p>${post.author}</p>
          <p>${formatDate(post.date)}</p>
        </div>
        ${post.contents}
      </div>
    `;
  }

  async render() {
    await this.loadCSS("/css/post.module.css");
    return this.getHtml();
  }
}
