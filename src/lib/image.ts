import sharp from "sharp";
import crypto from "crypto";

export async function rescaleImageUnder200px(base64Image: string) {
  try {
    // Validate base64 string
    const matches = base64Image.match(
      /^data:image\/(png|jpeg|jpg);base64,(.+)$/,
    );
    if (!matches) {
      throw new Error("Invalid base64 image format");
    }

    // Extract the base64 data
    const imageData = matches[2];

    // Decode base64 image to buffer
    const imageBuffer = Buffer.from(imageData, "base64");

    // Resize the image using sharp, keeping the aspect ratio
    const resizedImageBuffer = await sharp(imageBuffer, { failOnError: false })
      .resize({ width: 200, height: 200, fit: "inside" })
      .toBuffer();

    // Convert resized image buffer back to base64
    const resizedBase64Image = `data:image/jpeg;base64,${resizedImageBuffer.toString(
      "base64",
    )}`;

    return { resizedBase64Image };
  } catch (error) {
    console.error("Error resizing image:", error);
    return { error: "Failed to resize image" };
  }
}

export function getSHA256Hash(base64Image: string): string {
  // Create a SHA-256 hash of the base64 image
  const hash = crypto.createHash("sha256").update(base64Image).digest("hex");
  return hash;
}
