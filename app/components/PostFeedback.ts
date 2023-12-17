const PostFeedback = () => {
  return `
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
    `;
};

export default PostFeedback;
