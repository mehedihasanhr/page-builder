export type SidebarItem = {
  title: string;
  link?: string;
  submenu?: SidebarItem[];
};

export type SidebarData = SidebarItem[];

export const sidebarData: SidebarData = [
  {
    title: "Home",
    submenu: [
      { title: "Dashboard", link: "#" },
      { title: "Analytics", link: "#" },
      { title: "Reports", link: "#" },
    ],
  },
  { title: "Website Management", link: "#" },
  { title: "Template Library", link: "#" },
  { title: "Page Editor", link: "#" },
  { title: "Content Management", link: "#" },
  { title: "Design Customization", link: "#" },
  { title: "SEO Optimization", link: "#" },
  { title: "Analytics", link: "#" },
  { title: "Help & Support", link: "#" },
];
