export default class {
  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  getHtml() {
    return "";
  }

  loadCSS(path) {
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
