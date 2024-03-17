import { SidebarItem } from "@/constants/sidebar.constant";
import { cn } from "@/lib/utils";
import Link from "next/link";

function NavItem({
  item,
  className,
}: {
  item: SidebarItem;
  className?: string;
}) {
  return (
    <Link
      href={item.link ?? "#"}
      className={cn(
        "py-1.5 px-2.5 hover:bg-zinc-100 transition-all duration-300 rounded-md",
        className
      )}
    >
      {item.title}
    </Link>
  );
}

export default NavItem;
