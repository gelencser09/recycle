import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { LogoutButton } from "./logout-button";
import { getSession } from "@/lib/actions/session";
import Link from "next/link";
import Image from "next/image";
import logo from "../icons/logo.svg";

export async function Header() {
  const { email } = await getSession();
  return (
    <Navbar className="">
      <Link href="/">
        <NavbarBrand className="flex gap-1 items-center">
          <Image src={logo} alt="Recycle icon" className="w-7 h-7" />
          Recycle🇩🇰
        </NavbarBrand>
      </Link>
      {email ? (
        <NavbarContent justify="end">
          <LogoutButton />
        </NavbarContent>
      ) : null}
    </Navbar>
  );
}
