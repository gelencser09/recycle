import { getSession } from "@/lib/actions/session";
import ImageForm from "@/ui/components/image-form/image-form";
import { Card, CardBody } from "@nextui-org/card";
import { Tab, Tabs } from "@nextui-org/tabs";

export default async function Home() {
  const { email } = await getSession();
  return (
    <Card>
      <CardBody className="p-5">
        <p>{email}</p>
        {/* <Tabs>
          <Tab key="upload" title="Upload picture">
            asd
          </Tab>
          <Tab key="take" title="Take photo">
            asd
          </Tab>
        </Tabs> */}
        <ImageForm />
      </CardBody>
    </Card>
  );
}
