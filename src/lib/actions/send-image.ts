"use server";
import { getSHA256Hash, rescaleImageUnder200px } from "../image";
import { identifyTrashType } from "../client/openai";

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

  // check db

  const response = await identifyTrashType(resizedBase64Image!);

  // save to db

  // redirect

  return {};
}
