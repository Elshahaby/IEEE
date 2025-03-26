import {Schema, model}  from "mongoose";
import { IUser } from "../types/User";

const userSchema = new Schema<IUser>(
    {
        username: { type: String, required: true, unique: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
    },
    {timestamps: true}
);

export const User = model<IUser>("User", userSchema);

