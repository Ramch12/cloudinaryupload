import cloudinary from "../utils/cloudinary.js";
import User from '../models/user.js';

export async function uplaod(req, res) {
    try {
        const { Title, Description, image, video } = req.body;
        const imgresult = await cloudinary.uploader.upload(image, {
            folder: 'Images',
            width: 300,
            crop: 'scale'
        });
        const vidresult = await cloudinary.uploader.upload_large(video,
            {
                resource_type: "video",
                chunk_size: 6000000
            });
        const resp = await User.create({
            Title,
            Description,
            image:
            {
                url: imgresult.secure_url, public_id: imgresult.public_id
            },
            video: {
                url: vidresult.secure_url, public_id: vidresult.public_id
            }
        });
        return res.status(201).json({ message: 'Image uploaded successfully', resp });
    } catch (error) {
        console.log("cloudinaryerror", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



export async function Fetch(req, res) {
    try {
        const result = await User.find();
        return res.status(201).json({ result: result });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}






