import AbstractView from "../views/AbstractView";

export interface PostData {
  id: number;
  title: string;
  author: string;
  date: Date;
  thumbnailImg: string;
  summary: string;
  contents: string;
}

export type Listener<T> = (state: T) => void;

export interface Params {
  [key: string]: string;
}

export type CustomDayJSParam = string | Date | null | undefined;

export interface Match {
  route: {
    path: string;
    view: typeof AbstractView;
  };
  result: RegExpMatchArray | null;
}

export interface View {
  render: () => Promise<string>;
  executeViewScript?: () => void;
}
