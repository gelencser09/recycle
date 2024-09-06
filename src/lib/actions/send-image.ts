"use server";
import { getSHA256Hash, rescaleImageUnder200px } from "../image";
import { identifyTrashType } from "../client/openai";
import { getImage, saveImage } from "../data/image";
import { redirect } from "next/navigation";

type ProcessImageState = {
  error?: string | undefined;
};

export async function processImage(
  prevState: ProcessImageState,
  formData: FormData,
) {
  // check available queries for user

  const base64image = formData.get("base64image") as string;

  const { resizedBase64Image, error } = await rescaleImageUnder200px(
    base64image,
  );

  if (error) {
    return { error };
  }

  const sha256Hash = getSHA256Hash(resizedBase64Image!);

  const existingImage = await getImage(sha256Hash);

  if (existingImage) {
    console.log("Image already processed");
    console.log("Redirecting to existing image", sha256Hash);
    redirect(`/image/${sha256Hash}`);
  }

  const response = await identifyTrashType(resizedBase64Image!);

  if (!response) {
    return { error: "Failed to identify trash type" };
  }

  await saveImage(sha256Hash, response);

  redirect(`/image/${sha256Hash}`);

  return {};
}
