import { getSession } from "@/lib/actions/session";
import ImageForm from "@/ui/components/image-form/image-form";
import { Card } from "flowbite-react";

export default async function Home() {
  const { email } = await getSession();
  return (
    <Card>
      <h5 className="text-2xl font-bold text-center">Take a pic!</h5>
      <p>{email}</p>
      <ImageForm />
    </Card>
  );
}
