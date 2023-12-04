import Design from "/views/DesignView.js";
import Home from "/views/Home.js";
import TechPostView from "/views/TechPostView.js";
import DesignPostView from "/views/DesignPostView.js";
import Test from "/views/Test.js";

const routes = [
  { path: "/", view: Home },
  { path: "/design", view: Design },
  { path: "/tech/article/:id", view: TechPostView },
  { path: "/design/article/:id", view: DesignPostView },
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
  document.querySelector("#app").innerHTML = await view.render();

  if (!view.executeViewScript) return;

  view.executeViewScript();
};

window.addEventListener("popstate", router);

export default router;

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const locationToHref = (url) => {
  window.location.href = url;
};

const goToTossCareer = () => {
  locationToHref("https://toss.im/career/jobs");
};

export { navigateTo, locationToHref, goToTossCareer };
