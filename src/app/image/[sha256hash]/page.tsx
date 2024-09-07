import { getImageResponse } from "@/lib/actions/get-image-response";
import WasteCategory from "@/ui/components/waste-category";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Alert, Card } from "flowbite-react";

export default async function Page({
  params,
}: {
  params: { sha256hash: string };
}) {
  const response = await getImageResponse(params.sha256hash);

  return (
    <Card className="flex flex-col gap-4">
      <h5 className="font-bold text-2xl">{"Here's what you can do!"}</h5>
      <p className="font-medium">
        Sort the trash by these categories and follow any additional steps
        below.
      </p>
      <div className="flex flex-col gap-4">
        {response?.categories?.map((category) => (
          <WasteCategory key={category.name} category={category} />
        ))}
      </div>
      <Alert icon={InformationCircleIcon} className="italic">
        {response?.tips}
      </Alert>
    </Card>
  );
}
