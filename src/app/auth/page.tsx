import { LoginForm } from "@/ui/components/login-form";
import { Card } from "flowbite-react";

export default function Auth() {
  return (
    <Card className="w-full md:w-2/4 2xl:w-1/4">
      <h5 className="text-lg font-bold text-center">
        Get your one-time passcode!
      </h5>
      <LoginForm />
    </Card>
  );
}
