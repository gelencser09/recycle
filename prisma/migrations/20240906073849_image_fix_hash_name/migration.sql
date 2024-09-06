/*
  Warnings:

  - You are about to drop the column `sha265hash` on the `Image` table. All the data in the column will be lost.
  - Added the required column `sha256hash` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sha256hash" TEXT NOT NULL,
    "response" TEXT NOT NULL
);
INSERT INTO "new_Image" ("id", "response") SELECT "id", "response" FROM "Image";
DROP TABLE "Image";
ALTER TABLE "new_Image" RENAME TO "Image";
CREATE UNIQUE INDEX "Image_sha256hash_key" ON "Image"("sha256hash");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
