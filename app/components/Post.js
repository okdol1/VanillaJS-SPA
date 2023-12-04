import { formatDate } from "/utils/formatDate.js";
import PostFeedback from "/components/PostFeedback.js";

const Post = ({ post }) => {
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
        ${PostFeedback()}
    </div>
    `;
};

export default Post;
