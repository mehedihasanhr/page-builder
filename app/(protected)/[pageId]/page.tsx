import EditorBoard from "@/components/page-editor/board";
import EditorBlocks from "@/components/page-editor/components-panel";
import EditorProvider from "@/providers/editor/editor-provider";

export default function Page() {
  return (
    <EditorProvider>
      <div className="flex flex-col h-screen bg-zinc-50">
        {/* Topbar */}
        <div className="h-12 flex items-center">Topbar</div>
        <div className="flex flex-1 border inset-y-0">
          {/* board */}
          <div className="flex-1 overflow-y-auto">
            <div className="bg-white h-full">
              <EditorBoard />
            </div>
          </div>

          {/* components */}
          <div className="w-72 border-l bg-white">
            <EditorBlocks />
          </div>
          {/* Customization panel */}
        </div>
      </div>
    </EditorProvider>
  );
}
