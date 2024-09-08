"use client";

import { SetStateAction, useState } from "react";
import CameraComponent from "./camera-component";
import ImageDisplay from "./image-display";
import { processImage } from "@/lib/actions/send-image";
import { useFormState, useFormStatus } from "react-dom";
import {
  Alert,
  Button,
  Card,
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
        <ImageDisplay image={image} setImage={setImage} />
      ) : openCameraModal ? (
        <CameraComponent setImage={setImage} />
      ) : (
        <>
          <h5 className="text-2xl font-bold mb-5 text-center">
            How to recycle?
          </h5>
          <p className="text-center">
            Recycle🇩🇰 can help you sort your trash with AI support!
          </p>
          <p className="text-center">
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
          <Alert icon={InformationCircleIcon}>
            The app is super-duper beta version, please do not abuse, so that
            everyone can try it! 🫡
          </Alert>
        </>
      )}

      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}
