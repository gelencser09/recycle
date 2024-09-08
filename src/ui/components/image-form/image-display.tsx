import React from "react";
import { Dispatch, SetStateAction } from "react";
import { InformationCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Alert, Button, Card, Spinner } from "flowbite-react";
import { useFormStatus } from "react-dom";
import Image from "next/image";

export default function ImageDisplay({
  image,
  setImage,
}: {
  image: string;
  setImage: Dispatch<SetStateAction<string | undefined>>;
}) {
  const { pending } = useFormStatus();

  return (
    <Card className="w-full lg:w-2/4">
      <Image
        fill
        src={image}
        alt="Taken photo"
        className="rounded-md !relative"
      />
      <Alert icon={InformationCircleIcon}>
        Your image will be processed by OpenAI.
      </Alert>
      <div className="flex justify-center gap-5">
        <Button type="submit" gradientDuoTone="purpleToBlue">
          {pending ? <Spinner /> : "Submit!"}
        </Button>
        <Button
          gradientDuoTone="redToYellow"
          aria-label="Delete"
          disabled={pending}
          onClick={() => setImage(undefined)}
        >
          <TrashIcon className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
