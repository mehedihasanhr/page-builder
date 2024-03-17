import Sidebar from "@/components/main-sidebar";
import TopNavbar from "@/components/top-navbar";
import * as React from "react";

export default function ProtectedPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      {/* navigation */}
      <Sidebar />

      {/* main  */}
      <div className="flex-1">
        <div className="h-screen">
          <TopNavbar />
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </section>
  );
}
