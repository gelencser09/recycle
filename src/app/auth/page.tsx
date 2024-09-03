import { LoginForm } from "@/ui/components/login-form";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export default function Auth() {
  return (
    <Card className="p-5">
      <CardHeader>
        <h3>Get your one-time passcode!</h3>
      </CardHeader>
      <CardBody>
        <LoginForm />
      </CardBody>
    </Card>
  );
}
