"use client";

import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { useFormState } from "react-dom";
import { LoginState, login } from "@/lib/actions/login";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function LoginForm() {
  const [state, dispatch] = useFormState<LoginState, FormData>(login, {});

  return (
    <form action={dispatch} className="flex flex-col gap-4">
      {/* <Label htmlFor="email" value="Your email" /> */}
      <Alert color="warning" icon={InformationCircleIcon} className="italic">
        Your email address will be shared with otp.dev and used for
        authentication.
      </Alert>
      <TextInput
        required
        type="email"
        name="email"
        id="email"
        placeholder="you@example.com"
        icon={EnvelopeIcon}
      />

      <Button gradientDuoTone="purpleToBlue" type="submit">
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
