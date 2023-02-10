import { imageUploader } from '../libs/cloudinary.js';
import Uploads from '../models/imageModel.js';
import fs from 'fs-extra';

export const getImage = async (req, res) => { //listar todas las imagenes

    const allImages = await Uploads.find();
    res.send(allImages);

}

export const uploadImage = async (req, res) => {  //crear nuevo objeto imagen en base de datos

    const {title, description} = req.body;
    
    let image;

    if(req.files){

    const result = await imageUploader(req.files.image.tempFilePath);
    await fs.remove(req.files.image.tempFilePath);
    
    image = {
        url: result.secure_url,
        public_id: result.public_id
    }

    }

    const upload = new Uploads({title, description, image});

    await upload.save();

    return res.json(upload);

}

export const getLastImg = async (req, res) => {

    const getLast = await Uploads.find().sort({$natural:-1}).limit(1);

    res.send(getLast);
}


export const deletingAll = async ( req, res ) => {
    const del = await Uploads.deleteMany();

    res.send(del);
}

export const deleteId = async(req, res) => {
    const deleteO = await Uploads.findByIdAndDelete(req.params.id);

    if(!deleteO){
        return res.sendStatus(404);
    }

    return res.sendStatus(204);
}