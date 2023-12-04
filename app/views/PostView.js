import AbstractView from "./AbstractView.js";
import { MOCK_POSTS } from "/data/mockPosts.js";
import { formatDate } from "/utils/formatDate.js";
import { setupFeedback } from "/model/PostFeedback.js";

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
        <div class="post-feedback">
          <h2>재미있게 읽으셨나요?</h2>
          <p>좋았는지, 아쉬웠는지, 아래 이모지를 눌러 의견을 들려주세요.</p>
          <div class="emoji-buttons">
            <div class="emoji-feedback" id="feedback-good-display">
              좋았어요
            </div>
            <button id="feedback-good-btn">😍</button>
            <button id="feedback-bad-btn">🤔</button>
            <div class="emoji-feedback" id="feedback-bad-display">
              아쉬웠어요
            </div>
          </div>
          <button class="shared-btn btn btn--weak">
            <img src="/public/images/link.svg" alt="link" />
            <span>아티클 공유하기<span>
          </button>
        </div>
      </div>
    `;
  }

  executeViewScript() {
    setupFeedback();
  }

  async render() {
    await this.loadCSS("/css/post.module.css");
    return this.getHtml();
  }
}
