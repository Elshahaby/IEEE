import { Document, Types } from "mongoose";

export interface ImageT extends Document {
    userId: Types.ObjectId;
    public_id: string;
    secure_url: string;
    createdAt: Date;
    updatedAt: Date;
}