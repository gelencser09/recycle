import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Alert } from "flowbite-react";
import Link from "next/link";

export default async function Fail() {
  return (
    <Alert color="failure" icon={ExclamationTriangleIcon}>
      <div className="flex flex-col gap-3">
        <p className="font-bold">Your authentication failed... :c</p>{" "}
        <p>Please try again. If the issue persists, check back later!</p>
        <Link href="/auth" className="underline">
          Got to login page
        </Link>
      </div>
    </Alert>
  );
}
