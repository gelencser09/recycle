import { getSession } from "@/lib/actions/session";
import { Card, CardBody } from "@nextui-org/card";

export default async function Home() {
  const { email } = await getSession();
  return (
    <Card>
      <CardBody className="p-5">{email}</CardBody>
    </Card>
  );
}
