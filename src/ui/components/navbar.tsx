import { LogoutButton } from "./logout-button";
import { getSession } from "@/lib/actions/session";
import Image from "next/image";
import logo from "../icons/logo.svg";
import { Navbar, NavbarBrand } from "flowbite-react";

export async function Header() {
  const { email } = await getSession();
  return (
    <Navbar className="bg-transparent">
      <NavbarBrand href="/" className="flex gap-1 items-center">
        <Image src={logo} alt="Recycle icon" className="w-7 h-7" />
        <h5 className="text-2xl font-bold">Recycle🇩🇰</h5>
      </NavbarBrand>
      {email ? (
        <div className="flex justify-end">
          <LogoutButton />
        </div>
      ) : null}
    </Navbar>
  );
}
