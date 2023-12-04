import AbstractView from "./AbstractView.js";
import { TECK_POSTS } from "/data/mockPosts.js";
import PostItem from "/components/PostItem.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("토스 기술 블로그, 토스테크");
  }

  getHtml() {
    const postsHtml = TECK_POSTS.map((post) =>
      PostItem({ post, href: `/tech/article/${post.id}` })
    ).join("");

    return `
    <div class="container__inner home-container">
      <h1>개발</h1>
      <ul class="post-list">${postsHtml}</ul>
    </div>
    `;
  }

  async render() {
    await this.loadCSS("/css/postList.module.css");
    return this.getHtml();
  }
}
