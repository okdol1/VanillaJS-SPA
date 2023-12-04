import createState from "./createState.js";

const PostFeedbackState = createState(null);

const render = (feedback) => {
  if (feedback === null) return;

  const goodElement = document.getElementById("feedback-good-display");
  const badElement = document.getElementById("feedback-bad-display");

  if (feedback === true) {
    goodElement.style.opacity = "1";
    badElement.style.opacity = "0";
    return;
  } else {
    goodElement.style.opacity = "0";
    badElement.style.opacity = "1";
  }
};

const setupFeedback = () => {
  const goodElement = document.getElementById("feedback-good-display");
  const badElement = document.getElementById("feedback-bad-display");
  const goodButton = document.getElementById("feedback-good-btn");
  const badButton = document.getElementById("feedback-bad-btn");

  if (!goodElement || !badElement || !goodButton || !badButton) return;

  PostFeedbackState.subscribe(render);

  goodButton.addEventListener("click", () => {
    PostFeedbackState.setState(true);
  });

  badButton.addEventListener("click", () => {
    PostFeedbackState.setState(false);
  });
};

export { PostFeedbackState, setupFeedback };
