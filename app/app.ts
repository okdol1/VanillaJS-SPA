import router, { navigateTo, goToTossCareer } from "./routers/index";

const setupEventListeners = () => {
  document.body.addEventListener("click", (e) => {
    const target = e.target as Element;
    if (!target) return;

    if (target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo((target as HTMLAnchorElement).href);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const tossCareerButton = document.getElementById("goToTossCareer");
  if (tossCareerButton) {
    tossCareerButton.addEventListener("click", goToTossCareer);
  }

  setupEventListeners();
  router();
});
