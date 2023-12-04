import { formatDate } from "/utils/formatDate.js";

const PostItem = ({ post, href }) => {
  return `
    <li class="post-item">
      <a href="${href}">
        <img src="${post.thumbnailImg}" alt="${post.title}" />
        <div>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-summary">${post.summary}</p>
          <p class="post-date">${formatDate(post.date)}</p>
        </div>
      </a>
    </li>
  `;
};

export default PostItem;
