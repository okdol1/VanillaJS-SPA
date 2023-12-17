import { Params } from "../types/index";

export default class AbstractView {
  params: Params;

  constructor(params: Params) {
    this.params = params;
  }

  setTitle(title: string) {
    document.title = title;
  }

  getHtml() {
    return "";
  }

  loadCSS(path: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const head = document.head;
      const link = document.createElement("link");

      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = path;
      link.onload = () => resolve();
      link.onerror = () => reject(`Could not load CSS at ${path}`);

      head.appendChild(link);
    });
  }
}
