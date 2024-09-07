"use client";

import { logOut } from "@/lib/actions/session";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";

export function LogoutButton() {
  return (
    <Button onClick={() => logOut()} gradientDuoTone="pinkToOrange">
      <ArrowLeftEndOnRectangleIcon className="w-5 h-5 mr-2" />
      Logout
    </Button>
  );
}
