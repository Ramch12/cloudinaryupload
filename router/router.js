import express from 'express';
const  router = express.Router();
import { uplaod,Fetch } from '../controller/controller.js';

router.route('/upload').post(uplaod);
router.route('/fetchall').get(Fetch);


export default router;