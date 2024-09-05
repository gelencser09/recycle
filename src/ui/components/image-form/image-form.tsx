"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import CameraComponent from "./camera-component";
import { Tabs, Tab } from "@nextui-org/tabs";
import ImageDisplay from "./image-display";
import { processImage } from "@/lib/actions/send-image";
import { useFormState, useFormStatus } from "react-dom";
import { Spinner } from "@nextui-org/spinner";

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
        <Tabs>
          <Tab
            key="upload"
            title="Upload photo"
            className="flex flex-col gap-4"
          >
            <input
              type="file"
              accept="image/jpg, image/png"
              onChange={handleFileChange}
            />
          </Tab>

          <Tab key="take" title="Take photo">
            <CameraComponent image={image} setImage={setImage} />
          </Tab>
        </Tabs>
      )}

      <Divider />

      <Submit image={!!image} />

      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
}

const Submit = ({ image }: { image: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      color="primary"
      variant="ghost"
      isDisabled={!image || pending}
    >
      {pending ? <Spinner /> : "Submit!"}
    </Button>
  );
};
