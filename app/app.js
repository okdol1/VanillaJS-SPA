import router, { navigateTo, goToTossCareer } from "/routers/index.js";

document.getElementById("goToTossCareer").addEventListener("click", goToTossCareer);

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
