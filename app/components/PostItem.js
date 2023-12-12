import dayjs from "/utils/dayjs.js";

const PostItem = ({ post, href }) => {
  const formattedDate = dayjs(post.date).format("YYYY-MM-DD");
  return `
    <li class="post-item">
      <a href="${href}">
        <img src="${post.thumbnailImg}" alt="${post.title}" />
        <div>
          <h2 class="post-title">${post.title}</h2>
          <p class="post-summary">${post.summary}</p>
          <p class="post-date">${formattedDate}</p>
        </div>
      </a>
    </li>
  `;
};

export default PostItem;
