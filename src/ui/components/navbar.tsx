"use client";

import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { LogoutButton } from "./logout-button";

export function Header() {
  return (
    <Navbar>
      <NavbarBrand>Recycle</NavbarBrand>
      <NavbarContent justify="end">
        <LogoutButton />
      </NavbarContent>
    </Navbar>
  );
}
