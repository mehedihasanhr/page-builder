import NavItem from "@/components/nav-item";
import { sidebarData, type SidebarItem } from "@/constants/sidebar.constant";
import { IconNewSection } from "@tabler/icons-react";
import React from "react";
import { P, match } from "ts-pattern";

export default function Sidebar() {
  return (
    <div className="w-64 border-r h-screen">
      <div className="text-zinc-600 font-medium text-xl py-3 px-2.5 border-b mb-2.5 flex items-center gap-2">
        <IconNewSection size={28} stroke={1.5} className="text-zinc-600" />
        Page Builder
      </div>

      <nav className="flex flex-col gap-2.5 px-4">
        {sidebarData?.map((item: SidebarItem, index: number) => (
          <React.Fragment key={index}>
            {match(item)
              .with({ submenu: P.array<SidebarItem>() }, (data) => (
                <>
                  <h6 className="text-zinc-400 text-sm font-medium px-2.5">
                    {data.title}
                  </h6>
                  <div className="flex flex-col gap-2.5">
                    {data.submenu.map((subItem, i) => (
                      <NavItem key={i} item={subItem} className="px-5" />
                    ))}
                  </div>
                </>
              ))
              .otherwise((data) => (
                <NavItem item={data} />
              ))}
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
}
