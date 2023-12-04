import AbstractView from "./AbstractView.js";
import { DESIGN_POSTS } from "/data/mockPosts.js";
import { setupFeedback } from "/model/PostFeedback.js";
import Post from "/components/Post.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.post = DESIGN_POSTS[params.id];
    this.setTitle(DESIGN_POSTS[params.id].title);
  }

  getHtml() {
    const post = this.post;
    return Post({ post });
  }

  executeViewScript() {
    setupFeedback();
  }

  async render() {
    await this.loadCSS("/css/post.module.css");
    return this.getHtml();
  }
}
