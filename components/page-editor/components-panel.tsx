import { Separator } from "@/components/ui/separator";
import {
  IconBrandZoom,
  IconCircle,
  IconColumns2,
  IconColumns3,
  IconLetterT,
  IconMusic,
  IconPhoto,
  IconSquare,
} from "@tabler/icons-react";

function EditorBlocks() {
  return (
    <div className="p-4">
      <h5 className="text-sm font-medium text-zinc-500 mb-2.5">Blocks</h5>

      <div className="grid grid-cols-3 gap-1.5">
        <div className="col-span-1 border flex items-center justify-center p-2 rounded-md">
          <div className="flex flex-col items-center">
            <IconLetterT />
            <span className="text-sm text-zinc-400">Text</span>
          </div>
        </div>
        <div className="col-span-1 border flex items-center justify-center p-2 rounded-md">
          <div className="flex flex-col items-center">
            <IconPhoto />
            <span className="text-sm text-zinc-400">Image</span>
          </div>
        </div>
        <div className="col-span-1 border flex items-center justify-center p-2 rounded-md">
          <div className="flex flex-col items-center">
            <IconBrandZoom />
            <span className="text-sm text-zinc-400">Video</span>
          </div>
        </div>
        <div className="col-span-1 border flex items-center justify-center p-2 rounded-md">
          <div className="flex flex-col items-center">
            <IconMusic />
            <span className="text-sm text-zinc-400">Music</span>
          </div>
        </div>
        <div className="col-span-1 border flex items-center justify-center p-2 rounded-md">
          <div className="flex flex-col items-center">
            <IconColumns2 />
            <span className="text-sm text-zinc-400">2 Cols</span>
          </div>
        </div>
        <div className="col-span-1 border flex items-center justify-center p-2 rounded-md">
          <div className="flex flex-col items-center">
            <IconColumns3 />
            <span className="text-sm text-zinc-400">3 cols</span>
          </div>
        </div>
      </div>

      <Separator className="my-10 opacity-50" />

      <h5 className="text-sm font-medium text-zinc-500 mb-2.5">Form</h5>

      <div className="grid grid-cols-3 gap-1.5">
        <div className="col-span-3 border py-1.5 px-2 rounded-md">
          <div className="text-left text-zinc-400 text-xs">Input box</div>
        </div>

        <div className="col-span-3 border py-1.5 px-2 rounded-md">
          <div className="text-left text-zinc-400 text-xs flex gap-2">
            <IconCircle size={14} /> <span>Radio box</span>
          </div>
        </div>

        <div className="col-span-3 border py-1.5 px-2 rounded-md">
          <div className="text-left text-zinc-400 text-xs flex gap-2">
            <IconSquare size={14} /> <span>Check box</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorBlocks;
