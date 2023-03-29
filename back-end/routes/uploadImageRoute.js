// uploading image to cloudinay
import express from "express";
import cloudinary from "cloudinary";
import multer from "multer";

const router = express.Router();

// Configuration
cloudinary.config({
  cloud_name: "dv5rwrfbw",
  api_key: "948962588643492",
  api_secret: "FN-wN0P3GlV_omnRyG6p2aF-JGU",
});

// Upload
router.post("/", (req, res) => {
  const file = req.files.image;

  cloudinary.uploader.upload(file.tempFilePath, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to upload image" });
    } else {
      res.json({ imageUrl: result.secure_url });
    }
  });
});

export default router;
