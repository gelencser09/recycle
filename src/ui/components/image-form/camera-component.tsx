import { CameraIcon } from "@heroicons/react/24/outline";
import { Button } from "flowbite-react";
import { Dispatch, SetStateAction, useRef } from "react";
import { Camera, CameraType } from "react-camera-pro";

export default function CameraComponent({
  image,
  setImage,
}: {
  image: string | undefined;
  setImage: Dispatch<SetStateAction<string | undefined>>;
}) {
  const camera = useRef<CameraType>(null);

  return (
    <div className="rounded-md overflow-hidden w-full flex flex-col gap-4 items-center">
      <Camera
        ref={camera}
        errorMessages={{
          noCameraAccessible: "No camera",
          permissionDenied: "No permission",
          switchCamera: undefined,
          canvas: undefined,
        }}
        aspectRatio={4 / 3}
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
