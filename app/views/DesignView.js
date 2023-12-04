import AbstractView from "./AbstractView.js";
import { DESIGN_POSTS } from "/data/mockPosts.js";
import PostItem from "/components/PostItem.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("토스 기술 블로그, 토스디자인");
  }

  getHtml() {
    const postsHtml = DESIGN_POSTS.map((post) =>
      PostItem({ post, href: `/design/article/${post.id}` })
    ).join("");

    return `
    <div class="container__inner home-container">
      <h1>디자인</h1>
      <ul class="post-list">${postsHtml}</ul>
    </div>
    `;
  }

  async render() {
    await this.loadCSS("/css/postList.module.css");
    return this.getHtml();
  }
}
