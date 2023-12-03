import AbstractView from "./AbstractView.js";
import { MOCK_POSTS } from "/data/mockPosts.js";
import { formatDate } from "/utils/formatDate.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("토스 기술 블로그, 토스테크");
  }

  getHtml() {
    const postsHtml = MOCK_POSTS.map(
      (post) => `
        <li class="post-item">
          <a href="/posts/${post.id}">
            <img src="${post.thumbnailImg}" alt="" />
            <div>
              <h2 class="post-title">${post.title}</h2>
              <p class="post-summary">${post.summary}</p>
              <p class="post-date">${formatDate(post.date)}</p>
            </div>
          </a>
        </li>
      `
    ).join("");

    return `
    <div class="container__inner home-container">
      <h1>개발</h1>
      <ul class="post-list">${postsHtml}</ul>
    </div>
    `;
  }

  async render() {
    await this.loadCSS("/css/home.module.css");
    return this.getHtml();
  }
}
