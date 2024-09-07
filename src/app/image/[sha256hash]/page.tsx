import { getImageResponse } from "@/lib/actions/get-image-response";
import WasteCategory from "@/ui/components/waste-category";
import { Card } from "flowbite-react";

export default async function Page({
  params,
}: {
  params: { sha256hash: string };
}) {
  const response = await getImageResponse(params.sha256hash);

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {response?.categories?.map((category) => (
          <WasteCategory key={category.name} category={category} />
        ))}
      </div>
      <p className="italic">{response?.tips}</p>
    </Card>
  );
}
