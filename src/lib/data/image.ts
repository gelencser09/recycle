"use server";
import { prisma } from "../db";

export async function getImage(sha256hash: string) {
  const image = await prisma.image.findUnique({
    where: { sha256hash: sha256hash },
  });
  return image;
}

export async function saveImage(sha256hash: string, response: string) {
  await prisma.image.create({
    data: {
      sha256hash: sha256hash,
      response: response,
    },
  });
}
