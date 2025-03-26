import {Schema, model} from "mongoose";
import { ImageT } from "../types/Image";

const imageSchema = new Schema<ImageT>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
        public_id: { type: String, required: true }, // Cloudinary public_id
        secure_url: { type: String, required: true }, // Image URL  
    },
    { timestamps: true }
);

export const Image = model<ImageT>("Image", imageSchema);