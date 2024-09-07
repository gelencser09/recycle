"use server";

import { z } from "zod";
import { getImage } from "../data/image";

const ResponseSchema = z.object({
  categories: z.array(
    z.object({
      name: z.string(),
      parts: z.array(z.string()),
    }),
  ),
  tips: z.string(),
});

export async function getImageResponse(sha256hash: string) {
  const response = (await getImage(sha256hash))?.response;

  if (!response) {
    return null;
  }

  const rawJson = JSON.parse(response);

  const parsedResponse = ResponseSchema.parse(rawJson);

  return parsedResponse;
}
