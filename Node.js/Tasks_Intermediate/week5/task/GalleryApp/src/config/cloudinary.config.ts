import { v2 as cloudinary, UploadApiResponse, UploadApiOptions } from "cloudinary";
import dotenv from "dotenv";
import path from "path";
import { AppError } from "../middlewares/errorHandler.middleware";

dotenv.config({ path: path.resolve(__dirname, "./config.env") });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

/**
 * Uploads an image buffer to Cloudinary
 * @param {Buffer} fileBuffer - The file buffer to upload
 * @returns {Promise<UploadApiResponse>} - The Cloudinary response object
 * @throws {AppError} - Throws an error if upload fails
 */
export async function uploadToCloudinary(fileBuffer: Buffer): Promise<UploadApiResponse> {
  const options: UploadApiOptions = { folder: "galleryApp", 
    transformation: [
      { width: 300, height: 300, crop: "fit" }, // Resize without cropping
      { radius: "8" },
      { fetch_format: "auto", quality: "auto:best" } // Auto format & quality
    ]
  };

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(options, (error, result) => {
      if (error || !result) {
        reject(new AppError(`Cloudinary upload failed: ${error?.message}`, 500));
      } else {
        resolve(result);
      }
    });

    uploadStream.end(fileBuffer);
  });
}


/**
 * Deletes an image from Cloudinary.
 * @param {string} publicId - The public ID of the image to delete.
 * @returns {Promise<void>}
 */
export async function deleteFromCloudinary(publicId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (error || result.result !== "ok") {
        reject(new AppError("Failed to delete image from Cloudinary", 500));
      } else {
        resolve();
      }
    });
  });
}