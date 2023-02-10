import { Router } from "express";
import { getImage, uploadImage, getLastImg, deletingAll, deleteId } from '../../controllers/uploadImages.controller.js';

const router = Router();

router.get('/all', getImage);

router.post('/', uploadImage);

router.get('/upload', getLastImg);

router.delete('/', deletingAll);

router.delete('/all/:id', deleteId);

export default router;