"use server";
import { rescaleImageUnder200px } from "../image";

type ProcessImageState = {
  error?: string | undefined;
};

export async function processImage(
  prevState: ProcessImageState,
  formData: FormData,
) {
  const base64image = formData.get("base64image") as string;

  const { resizedBase64Image, error } = await rescaleImageUnder200px(
    base64image,
  );

  if (error) {
    return { error };
  }

  // check cache

  // call API
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // save to cache

  // redirect

  console.log(resizedBase64Image);

  return {};
}
