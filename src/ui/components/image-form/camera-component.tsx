import { CameraIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/button";
import { Dispatch, RefObject, SetStateAction, useRef } from "react";
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
    <div className="flex flex-col items-center gap-4">
      {image ? (
        <>
          <img src={image} alt="Taken photo" />
          <Button
            isIconOnly
            color="danger"
            aria-label="Delete"
            className="p-1"
            onClick={() => setImage(undefined)}
          >
            <TrashIcon />
          </Button>
        </>
      ) : (
        <>
          <div className="rounded-md overflow-hidden w-full">
            <Camera
              ref={camera}
              errorMessages={{
                noCameraAccessible: undefined,
                permissionDenied: undefined,
                switchCamera: undefined,
                canvas: undefined,
              }}
              aspectRatio={4 / 3}
            />
          </div>
          <div className="flex justify-center">
            <Button
              isIconOnly
              aria-label="Take a photo!"
              color="default"
              variant="ghost"
              onClick={() =>
                setImage(camera.current?.takePhoto("base64url") as string)
              }
              className="p-1"
            >
              <CameraIcon />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
