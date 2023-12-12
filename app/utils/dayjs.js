import * as C from "../constant/date.js";

const dayjs = (date) => {
  return new CustomDayjs(date);
};

const isUndefined = (s) => s === undefined;

const parseDate = (date) => {
  if (date === null) return new Date(NaN); // null is invalid
  if (isUndefined(date)) return new Date(); // today
  if (date instanceof Date) return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(C.REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

class CustomDayjs {
  constructor(date) {
    this.parse(date);
  }

  parse(date) {
    this.$d = parseDate(date);
    this.init();
  }

  init() {
    const { $d } = this;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
  }

  format(formatStr) {
    const str = formatStr || C.FORMAT_DEFAULT;

    const pad = (number, length) => {
      return (Array(length).join("0") + number).slice(-length);
    };

    const matches = (match) => {
      switch (match) {
        case "YY":
          return String(this.$y).slice(-2);
        case "YYYY":
          return pad(this.$y, 4);
        case "M":
          return String(this.$M + 1);
        case "MM":
          return pad(this.$M + 1, 2);
        case "D":
          return String(this.$D);
        case "DD":
          return pad(this.$D, 2);
        case "H":
          return String(this.$H);
        case "HH":
          return pad(this.$H, 2);
        case "m":
          return String(this.$m);
        case "mm":
          return pad(this.$m, 2);
        case "s":
          return String(this.$s);
        case "ss":
          return pad(this.$s, 2);
        default:
          break;
      }
      return null;
    };

    return str.replace(C.REGEX_FORMAT, (match, $1) => {
      return $1 || matches(match);
    });
  }
}

export default dayjs;
