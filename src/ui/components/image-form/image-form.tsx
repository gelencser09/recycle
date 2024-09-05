"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { useState } from "react";
import CameraComponent from "./camera-component";
import { Tabs, Tab } from "@nextui-org/tabs";
import ImageDisplay from "./image-display";

export default function ImageForm() {
  const [image, setImage] = useState<string | undefined>();

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
    <form action="" className="flex flex-col gap-4">
      <Tabs>
        <Tab key="upload" title="Upload photo" className="flex flex-col gap-4">
          {image ? (
            <ImageDisplay image={image} setImage={setImage} />
          ) : (
            <input
              type="file"
              accept="image/jpg, image/png"
              onChange={handleFileChange}
            />
          )}
        </Tab>

        <Tab key="take" title="Take photo">
          {image ? (
            <ImageDisplay image={image} setImage={setImage} />
          ) : (
            <CameraComponent image={image} setImage={setImage} />
          )}
        </Tab>
      </Tabs>

      <Divider />

      <Button type="submit" color="primary" variant="ghost" isDisabled={!image}>
        Check!
      </Button>
    </form>
  );
}
