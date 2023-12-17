import Design from "../views/DesignView";
import Home from "../views/Home";
import TechPostView from "../views/TechPostView";
import DesignPostView from "../views/DesignPostView";
import { Match, Params, View } from "../types/index";

const routes = [
  { path: "/", view: Home },
  { path: "/design", view: Design },
  { path: "/tech/article/:id", view: TechPostView },
  { path: "/design/article/:id", view: DesignPostView },
];

const pathToRegex = (path: string) =>
  new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = (match: Match): Params => {
  const values = match.result?.slice(1);
  if (!values || values.length === 0) return { id: "0" };

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

  const view: View = new match.route.view(getParams(match));

  const appEl = document.querySelector("#app");
  if (!appEl) return console.error("'app' not found");
  appEl.innerHTML = await view.render();

  if (!view.executeViewScript) return;
  view.executeViewScript();
};

window.addEventListener("popstate", router);

export default router;

const navigateTo = (url: string) => {
  history.pushState(null, "", url);
  router();
};

const locationToHref = (url: string) => {
  window.location.href = url;
};

const goToTossCareer = () => {
  locationToHref("https://toss.im/career/jobs");
};

export { navigateTo, locationToHref, goToTossCareer };
