import { LoginForm } from "@/ui/components/login-form";
import { Card } from "flowbite-react";

export default function Auth() {
  return (
    <Card>
      <h5 className="text-lg font-bold text-center">
        Get your one-time passcode!
      </h5>
      <LoginForm />
    </Card>
  );
}
