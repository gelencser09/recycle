"use client";

import { SetStateAction, useState } from "react";
import CameraComponent from "./camera-component";
import ImageDisplay from "./image-display";
import { processImage } from "@/lib/actions/send-image";
import { useFormState, useFormStatus } from "react-dom";
import {
  Alert,
  Button,
  FileInput,
  HR,
  Modal,
  Spinner,
  Tabs,
} from "flowbite-react";
import {
  CameraIcon,
  InformationCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export default function ImageForm() {
  const [image, setImage] = useState<string | undefined>();
  const [state, dispatch] = useFormState(processImage, {
    error: undefined,
  });
  const [openCameraModal, setOpenCameraModal] = useState<boolean>(false);

  return (
    <form
      action={(formData: FormData) => {
        if (!image) return;
        formData.append("base64image", image);
        dispatch(formData);
      }}
      className="flex flex-col gap-4 items-center"
    >
      {image ? (
        <>
          <Alert icon={InformationCircleIcon}>
            Your image will be processed by OpenAI.
          </Alert>
          <ImageDisplay image={image} setImage={setImage} />
        </>
      ) : openCameraModal ? (
        <CameraComponent setImage={setImage} />
      ) : (
        <>
          <h5 className="text-2xl font-bold text-center mb-5">
            How to recycle?
          </h5>
          <p>Recycle🇩🇰 can help you sort your trash with AI support!</p>
          <p>
            Take a picture of the trash, and the app will sort it into the
            relevant recycling categories.
          </p>
          <div className="m-5 flex justify-center">
            <Button
              gradientDuoTone="tealToLime"
              className="rounded-full"
              onClick={() => setOpenCameraModal(true)}
            >
              <CameraIcon className="w-16 h-16" />
            </Button>
          </div>
        </>
      )}

      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
