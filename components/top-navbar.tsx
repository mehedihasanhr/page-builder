"use client";

import { logout } from "@/actions/auth/logout";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TopNavbar() {
  const [isPending, startTransition] = React.useTransition();
  const handleLogout = () => {
    startTransition(() => {
      logout();
    });
  };

  return (
    <div className="flex justify-between items-center gap-4 h-[53px] border-b px-4">
      <Button onClick={handleLogout} className="ml-auto" disabled={isPending}>
        Logout
      </Button>
    </div>
  );
}
