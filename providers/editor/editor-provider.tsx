"use client";

import { EditorAction } from "@/providers/editor/editor-action";
import { EditorElement, EditorState, HistoryState } from "@/types/editor.type";
import * as React from "react";
import { match } from "ts-pattern";

// initial state

const initialEditorState: EditorState["editor"] = {
  elements: [
    {
      content: [],
      id: "__body",
      name: "Body",
      styles: {},
      type: "__body",
    },
  ],
  selectedElement: {
    content: [],
    id: "",
    name: "",
    styles: {},
    type: null,
  },

  device: "Desktop",
  mode: "EDIT",
  pageId: "",
};

// initial history state
const initialHistoryState: HistoryState = {
  history: [initialEditorState],
  currentIndex: 0,
};

// initial State
const initialState: EditorState = {
  editor: initialEditorState,
  history: initialHistoryState,
};

// add elements
const addAnElement = (
  editorElements: EditorElement[],
  editorAction: EditorAction
): EditorElement[] => {
  return editorElements.map((el) => {
    if (
      el.id === editorAction.payload?.containerId &&
      Array.isArray(el.content)
    ) {
      return {
        ...el,
        content: [...el.content, editorAction.payload?.elementDetails],
      };
    } else if (el.content && Array.isArray(el.content)) {
      return {
        ...el,
        content: addAnElement(el.content, editorAction),
      };
    }

    return el;
  });
};

// reducer
const editorReducer = (
  state: EditorState = initialState,
  action: EditorAction
): EditorState => {
  return match(action)
    .with({ type: "ADD_ELEMENT" }, () => {
      const updatedEditorState = {
        ...state.editor,
        elements: addAnElement(state.editor.elements, action),
      };

      const newEditorState = {
        ...state,
        editor: updatedEditorState,
        history: {
          ...state.history,
          history: "",
          currentIndex: 1,
        },
      };

      return newEditorState;
    })
    .exhaustive();
};

type EditorContextProps = {
  editorState: EditorState;
  dispatch: React.Dispatch<EditorAction>;
};

const EditorContext = React.createContext<EditorContextProps | undefined>(
  undefined
);

export default function EditorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [editor, dispatch] = React.useReducer(editorReducer, initialState);
  return (
    <EditorContext.Provider value={{ editorState: { ...editor }, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
}

export const useEditor = (): EditorContextProps =>
  React.useContext(EditorContext)!;
