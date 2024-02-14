import express from  'express';
import { text, updateUser, deleteUser, signout } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
// import {test} from '../controllers/user.controller'

const router = express.Router();

router.get('/test', text)
router.put('/update/:userId',verifyToken, updateUser);
router.delete('/delete/:userId',verifyToken, deleteUser);
router.post('/signout', signout);

export default router
