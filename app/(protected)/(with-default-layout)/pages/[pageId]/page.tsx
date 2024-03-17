export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-zinc-50">
      {/* Topbar */}
      <div className="h-12 flex items-center">Topbar</div>
      <div className="flex flex-1 border inset-y-0">
        {/* board */}
        <div className="flex-1 overflow-y-auto">
          <div className="bg-white h-full">
            <div>Board</div>
          </div>
        </div>

        {/* components */}
        <div className="w-72 border-l">Components</div>
        {/* Customization panel */}
      </div>
    </div>
  );
}
