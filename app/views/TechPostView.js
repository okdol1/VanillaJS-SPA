import AbstractView from "./AbstractView.js";
import { TECK_POSTS } from "/data/mockPosts.js";
import { setupFeedback } from "/model/PostFeedback.js";
import Post from "/components/Post.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.post = TECK_POSTS[params.id];
    this.setTitle(TECK_POSTS[params.id].title);
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