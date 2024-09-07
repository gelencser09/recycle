"use client";

import { CameraIcon } from "@heroicons/react/24/outline";
import { Button, Card, Modal } from "flowbite-react";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Camera, CameraType } from "react-camera-pro";

export default function CameraComponent({
  setImage,
}: {
  setImage: Dispatch<SetStateAction<string | undefined>>;
}) {
  const camera = useRef<any>(null);

  return (
    <Card className="w-full lg:w-2/4">
      <div className="w-full flex flex-col items-center gap-5">
        <Camera
          ref={camera}
          facingMode="environment"
          errorMessages={{
            noCameraAccessible: "No camera",
            permissionDenied: "No permission",
            switchCamera: undefined,
            canvas: undefined,
          }}
          aspectRatio={3 / 4}
        />
        <Button
          color="light"
          aria-label="Take a photo!"
          className="rounded-full"
          onClick={() =>
            setImage(camera.current?.takePhoto("base64url") as string)
          }
        >
          <CameraIcon className="w-10 h-10" />
        </Button>
      </div>
    </Card>
  );
}
