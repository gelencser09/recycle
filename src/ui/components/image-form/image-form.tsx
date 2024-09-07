"use client";

import { useState } from "react";
import CameraComponent from "./camera-component";
import ImageDisplay from "./image-display";
import { processImage } from "@/lib/actions/send-image";
import { useFormState, useFormStatus } from "react-dom";
import { Alert, Button, FileInput, HR, Spinner, Tabs } from "flowbite-react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function ImageForm() {
  const [image, setImage] = useState<string | undefined>();
  const [state, dispatch] = useFormState(processImage, {
    error: undefined,
  });

  function handleFileChange(e: any) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage((reader.result as string) || undefined);
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <form
      action={(formData: FormData) => {
        if (!image) return;
        formData.append("base64image", image);
        dispatch(formData);
      }}
      className="flex flex-col gap-4"
    >
      {image ? (
        <ImageDisplay image={image} setImage={setImage} />
      ) : (
        // <Tabs variant="fullWidth">
        //   <Tabs.Item key="upload" title="Upload photo">
        //     <FileInput
        //       accept="image/jpg, image/jpeg, image/png"
        //       onChange={handleFileChange}
        //     />
        //   </Tabs.Item>

        //   <Tabs.Item key="take" title="Take photo">
        <CameraComponent image={image} setImage={setImage} />
        //   </Tabs.Item>
        // </Tabs>
      )}

      <HR className="m-1 w-full" />

      <Alert color="warning" icon={InformationCircleIcon}>
        Your image will be processed by OpenAI.
      </Alert>

      <Submit image={!!image} />

      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}

const Submit = ({ image }: { image: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" gradientDuoTone="purpleToBlue" disabled={!image}>
      {pending ? <Spinner /> : "Submit!"}
    </Button>
  );
};
