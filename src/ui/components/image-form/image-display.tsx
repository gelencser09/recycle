import React from "react";
import { Dispatch, SetStateAction } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Button, Spinner } from "flowbite-react";
import { useFormStatus } from "react-dom";

export default function ImageDisplay({
  image,
  setImage,
}: {
  image: string;
  setImage: Dispatch<SetStateAction<string | undefined>>;
}) {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col gap-4">
      <img src={image} alt="Taken photo" className="rounded-md" />
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
    </div>
  );
}
