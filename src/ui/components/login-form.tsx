"use client";

import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { useFormState } from "react-dom";
import { LoginState, login } from "@/lib/actions/login";

export function LoginForm() {
  const [state, dispatch] = useFormState<LoginState, FormData>(login, {});

  return (
    <form action={dispatch} className="flex flex-col gap-4">
      <Input
        required
        type="email"
        name="email"
        label="Email"
        placeholder="you@example.com"
        labelPlacement="outside"
        startContent={<EnvelopeIcon className="w-7 h-7" />}
      />
      <p className="text-sm italic text-yellow-500">
        Your email address will be provided to GetOTP. It will be used to
        contact you with a one-time passcode and stored for authentication
        purposes.
      </p>
      <Button color="primary" variant="ghost" type="submit">
        Get passcode
      </Button>
      {state?.errors ? (
        <div className="text-sm italic text-red-500">
          {state.errors.map((value, idx) => (
            <p key={idx}>{value}</p>
          ))}
        </div>
      ) : null}
    </form>
  );
}
