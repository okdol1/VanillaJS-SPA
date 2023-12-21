import router, { navigateTo, goToTossCareer } from "./routers/index";

const setupEventListeners = () => {
  document.body.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLAnchorElement)) return;

    if (target.matches("[data-link]")) {
      e.preventDefault();

      target instanceof HTMLAnchorElement && navigateTo(target.href);
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
