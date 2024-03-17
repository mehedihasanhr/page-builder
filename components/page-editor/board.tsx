"use client";

import * as React from "react";

import { useEditor } from "@/providers/editor/editor-provider";
import { EditorElement } from "@/types/editor.type";
import { match } from "ts-pattern";

function EditorBoard() {
  const { editorState } = useEditor();

  const { elements } = editorState?.editor;

  // block renderer
  const renderer = (el: EditorElement | EditorElement[]) => {
    if (Array.isArray(el) && el.length > 0) {
      return elements.map((el) => (
        <React.Fragment key={el.id}>
          {match(el)
            .with({ type: "__body" }, (d) => (
              <div id={d.id} style={d.styles} className={d.className}>
                {Array.isArray(d.content)
                  ? renderer(d.content)
                  : d.content.innerText}
              </div>
            ))
            .with({ type: "text" }, (d) => (
              <div id={d.id} style={d.styles} className={d.className}>
                {Array.isArray(d.content)
                  ? renderer(d.content)
                  : d.content.innerText}
              </div>
            ))
            .otherwise(() => null)}
        </React.Fragment>
      ));
    }
  };

  return renderer(elements);
}

export default EditorBoard;
