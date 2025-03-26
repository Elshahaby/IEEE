import express, { NextFunction, Request, Response } from 'express'
import { Image } from '../models'
import { AppError } from '../middlewares/errorHandler.middleware';
import { upload } from '../config/multer.config';
import { deleteFromCloudinary, uploadToCloudinary } from '../config/cloudinary.config';
const router = express.Router();


router.get('/' , async (req: Request, res: Response, next: NextFunction) => {
    try {

        const images = await Image.find({ userId: req.session.userId });
    
        if (!images.length) {
            req.flash('errors', 'No Images found for this user, please upload Image')
            res.redirect('/gallery/upload');
        //   throw new AppError("No images found for this user", 404);
        }
    
        res.render('gallery', {title: "Gallery", images});
        // res.status(200).json({ success: true, images });
      } catch (error) {
        console.log("get show images: \n", error)
        // next(error); // Pass error to global error handler
      }
});

router.get('/upload', (req: Request, res: Response) => {
    res.render('upload', { title: 'Upload Image' });
});

router.post('/upload', upload.single("image"), async (req, res, next) => {
    try {

        if (!req.file) {
            req.flash('errors', "No File Uploaded, Choose one file");
            return res.redirect('/gallery/upload')
            // return next(new AppError("No file uploaded", 400));
        }

        const result = await uploadToCloudinary(req.file.buffer); // return typed response not make any problem in type when result.<anything>
        const newImage = await Image.create({
            userId: req.session.userId,
            public_id: result.public_id,
            secure_url: result.secure_url
        });

        req.flash('success', "Image Uploaded successfully !!");
        return res.redirect('/gallery');
        // res.status(201).json({success: true, newImage});
    } catch (error) {
        console.log("Post upload: \n", error);
        // next(error); // Pass error to global error handler
    }
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  try{
    if (!req.session.userId){
        res.status(401).json({success: false,  error: "Unauthorized" });
        return;
    } 

    const image = await Image.findOne({ _id: req.params.id, userId: req.session.userId });
    if (!image){
        res.status(404).json({success: false ,error: "Image not found" });
        return;
    } 

    await deleteFromCloudinary(image.public_id);
    await Image.findByIdAndDelete(image._id);

    res.json({success: true, message: "Image deleted successfully" });
  }catch(error){
    console.log("DELETE ERROR : \n", error)
  }
});
export default router;