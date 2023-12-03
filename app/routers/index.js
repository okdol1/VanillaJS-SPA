import Career from "/views/CareerView.js";
import Design from "/views/DesignView.js";
import Home from "/views/Home.js";
import Post from "/views/PostView.js";
import Test from "/views/Test.js";
import { setupCounter } from "/model/Counter.js";

const routes = [
  { path: "/", view: Home },
  { path: "/design", view: Design },
  { path: "/career", view: Career },
  { path: "/posts/:id", view: Post },
  { path: "/test", view: Test },
];

// 경로를 정규 표현식으로 변환
const pathToRegex = (path) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

export const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });

  let match = potentialMatches.find(
    (potentialMatch) => potentialMatch.result !== null
  );

  if (!match) {
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }

  const view = new match.route.view(getParams(match));
  document.querySelector("#app").innerHTML = await view.getHtml();

  if (match.route.view === Test) {
    setupCounter();
  }
};

window.addEventListener("popstate", router);

export default router;
