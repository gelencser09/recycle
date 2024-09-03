"use client";

import { logOut } from "@/lib/actions/session";
import { getUserByOtpId, initializeNewOtp } from "@/lib/data/user";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";

export function LogoutButton() {
  return (
    <Button
      onClick={() => logOut()}
      color="danger"
      variant="bordered"
      startContent={<ArrowLeftEndOnRectangleIcon className="w-7 h-7" />}
    >
      Logout
    </Button>
  );
}
