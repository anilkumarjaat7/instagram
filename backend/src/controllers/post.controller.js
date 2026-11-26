import mongoose from 'mongoose';
import PostModel from '../models/post.model.js';
import { saveUploadImage } from '../utils/uploadImage.js';
import { deleteStoredImage } from '../utils/image-storage.js';


export const createPost = async (req, res) => {
   const {caption } = req.body ?? {};


   if(! req.file ){
         return res.status(400).json({ message: "An image file is required" });
   }

   if(!caption || caption.trim() === ""){
         return res.status(400).json({ message: "A caption is required" });
   }

  const imageUrl = await saveUploadImage(req.file);

  let post;
  try{
   post = await PostModel.create({
    user: req.user._id,
      imageUrl,
    caption
    });
  }catch(err){
    await deleteStoredImage(imageUrl);
    throw err;
  }

  await post.populate("user", "username");

    res.status(201).json({
        message: "Post created successfully",
        post
    })
}