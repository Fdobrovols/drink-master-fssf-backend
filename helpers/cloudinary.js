import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_SECRET, CLOURINARY_API_KEY } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOURINARY_API_KEY,
  api_secret: CLOUDINARY_SECRET,
});

export default cloudinary;
