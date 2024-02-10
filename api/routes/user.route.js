import express from  'express';
import { text } from '../controllers/user.controller.js';
// import {test} from '../controllers/user.controller'

const router = express.Router();

router.get('/test', text)

export default router
