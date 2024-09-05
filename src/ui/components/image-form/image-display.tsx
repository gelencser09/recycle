import { Button } from "@nextui-org/react";
import React from "react";
import { Dispatch, SetStateAction } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

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
        isIconOnly
        color="danger"
        aria-label="Delete"
        className="p-1 center"
        onClick={() => setImage(undefined)}
      >
        <TrashIcon />
      </Button>
    </div>
  );
}
