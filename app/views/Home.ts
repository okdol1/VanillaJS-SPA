import AbstractView from "./AbstractView";
import { TECK_POSTS } from "../data/mockPosts";
import PostItem from "../components/PostItem";
import { Params } from "../types/index";

export default class extends AbstractView {
  constructor(params: Params) {
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
