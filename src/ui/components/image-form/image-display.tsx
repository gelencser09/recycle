import React from "react";
import { Dispatch, SetStateAction } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";

export default function ImageDisplay({
  image,
  setImage,
}: {
  image: string;
  setImage: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img src={image} alt="Taken photo" className="rounded-md" />
      <Button
        gradientDuoTone="redToYellow"
        aria-label="Delete"
        onClick={() => setImage(undefined)}
      >
        <TrashIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
