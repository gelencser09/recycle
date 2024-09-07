"use client";

import { CameraIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";
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
  image,
  setImage,
}: {
  image: string | undefined;
  setImage: Dispatch<SetStateAction<string | undefined>>;
}) {
  const camera = useRef<any>(null);

  const capture = useCallback(() => {
    const imageSrc = camera.current!.getScreenshot();
    console.log(imageSrc);
    setImage(imageSrc);
  }, [camera]);

  return (
    <div className="flex flex-col gap-4 items-center">
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
        onClick={() =>
          setImage(camera.current?.takePhoto("base64url") as string)
        }
      >
        <CameraIcon className="w-5 h-5" />
      </Button>
    </div>
  );
}
