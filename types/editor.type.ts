export type EditorBlock =
  | "text"
  | "container"
  | "section"
  | "form"
  | "link"
  | "3col"
  | "2col"
  | "video"
  | "audio"
  | "image"
  | "__body"
  | null;

export type BlockContent = {
  src?: string;
  href?: string;
  innerText: string;
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export type EditorElement = {
  id: string;
  styles: React.CSSProperties;
  className?: string;
  name: string;
  type: EditorBlock;
  content: EditorElement[] | BlockContent;
};

export type DeviceType = "Desktop" | "Mobile" | "Tablet";
export type ModeType = "PREVIEW" | "LIVE" | "EDIT";

export type Editor = {
  mode: ModeType;
  elements: EditorElement[];
  selectedElement: EditorElement;
  device: DeviceType;
  pageId: string;
};

export type HistoryState = {
  history: Editor[];
  currentIndex: number;
};

export type EditorState = {
  editor: Editor;
  history: HistoryState;
};
