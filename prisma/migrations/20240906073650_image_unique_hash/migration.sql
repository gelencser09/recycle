/*
  Warnings:

  - A unique constraint covering the columns `[sha265hash]` on the table `Image` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Image_sha265hash_key" ON "Image"("sha265hash");
