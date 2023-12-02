import router, { navigateTo } from "/routers/index.js";

const setupEventListeners = () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  router();
});
