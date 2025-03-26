import multer from "multer";
import { Request } from "express";

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (!file.mimetype.startsWith("image/")) {
        return cb(new Error("Only Upload Images, only image files are allowed !!"));
    }
    cb(null, true);
};

export const upload = multer({ storage, fileFilter });


