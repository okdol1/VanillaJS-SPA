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
        <header>
          <img src="${post.thumbnailImg}" alt="${post.title}" />
          <h1 class="post-title">${post.title}</h1>
          <section class="author-container">
            <img src="/public/images/common-profile.png" alt="profile image" />
            <div>
              <p class="author-name">${post.author}</p>
              <p class="author-date">${formatDate(post.date)}</p>
            </div>
          </section>
        </header>
        <div class="post-container__inner">
          ${post.contents}
        </div>
      </div>
    `;
  }

  async render() {
    await this.loadCSS("/css/post.module.css");
    return this.getHtml();
  }
}
