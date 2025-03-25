import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import {v2 as cloudinary, ResourceApiResponse, UploadApiResponse} from 'cloudinary'

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// Extend Cloudinary's ResourceApiResponse type to include 'colors'
interface ExtendedResourceApiResponse extends ResourceApiResponse {
    colors?: [string, number][]; // Array of [color string, pixel count]
}

const uploadImage1 = async (filePath: string): Promise<string> => {
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: "products", // Store inside "products" folder
        use_filename: true,
        unique_filename: false,
      });
  
      return result.secure_url; // Returns the uploaded image URL
    } catch (error) {
      throw new Error(`Cloudinary upload failed: ${(error as Error).message}`);
    }
  };

  const deleteImage = async (publicId: string): Promise<void> => {
    try {
      await cloudinary.uploader.destroy(publicId);
      console.log("Image deleted successfully");
    } catch (error) {
      throw new Error(`Cloudinary delete failed: ${(error as Error).message}`);
    }
  };
////////////////////////
// Uploads an image file
/////////////////////////
const uploadImage = async (imagePath: string): Promise<string> => {
    const options = {
        folder: "products", // Store inside "products" folder
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };
  
    try {
      const result: UploadApiResponse = await cloudinary.uploader.upload(
        imagePath,
        options
      );
      console.log("result 1 : \n",result);
      if(!result.public_id) {
        throw new Error('public_id not found')
      }
      return result.public_id ?? [];
    } catch (error) {
      console.error("Upload failed:", error);
      throw new Error(`Error retrieving Image data (e.g, public_id): ${error.message}`);
    }
  };
  
  /////////////////////////////////////
  // Gets details of an uploaded image
  // Retrieves the dominant colors detected in the image.
  /////////////////////////////////////
  const getAssetInfo = async (publicId: string): Promise<[string, number][]> => {
    const options = { colors: true };
  
    try {
      const result:ExtendedResourceApiResponse = await cloudinary.api.resource(
        publicId,
        options
      );
  
      console.log("result 2 : \n", result);
      if (!result.colors) {
        throw new Error("No colors data returned from Cloudinary.");
      }
      return result.colors;
    } catch (error) {
      console.error("Error retrieving asset info:", error);
      throw new Error(`Error retrieving asset info: ${(error as Error).message}`);
    }
  };
  
  //////////////////////////////////////////////////////////////
  // Creates an HTML image tag with a transformation that
  // results in a circular thumbnail crop of the image  
  // focused on the faces, applying an outline of the  
  // first color, and setting a background of the second color.
  //////////////////////////////////////////////////////////////
  const createImageTag = (
    publicId: string,
    effectColor: string,
    backgroundColor: string
  ): string => {
    return cloudinary.image(publicId, {
      transformation: [
        { width: 250, height: 250, gravity: "faces", crop: "thumb" },
        { radius: "max" },
        { effect: "outline:10", color: effectColor },
        { background: backgroundColor },
      ],
    });
  };
  
  //////////////////
  // Main function
  //////////////////
  (async () => {
    // may be add uploaded image by multer in server at imagePath variable
    const imagePath = "https://cloudinary-devs.github.io/cld-docs-assets/assets/images/happy_people.jpg";

      
  
    const publicId = await uploadImage(imagePath);
    if (!publicId) return;
  
    const colors = await getAssetInfo(publicId);
    if (!colors || colors.length < 2) {
      console.error("Not enough colors returned.");
      return;
    }
  
    const imageTag = createImageTag(publicId, colors[0][0], colors[1][0]);
  
    console.log("Details : \n",imageTag);
  })();