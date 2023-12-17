import AbstractView from "./AbstractView";
import { DESIGN_POSTS } from "../data/mockPosts";
import { setupFeedback } from "../model/PostFeedback";
import Post from "../components/Post";
import { Params, PostData } from "../types/index";

export default class extends AbstractView {
  post: PostData;

  constructor(params: Params) {
    super(params);
    this.post = DESIGN_POSTS[+params.id];
    this.setTitle(DESIGN_POSTS[+params.id].title);
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
