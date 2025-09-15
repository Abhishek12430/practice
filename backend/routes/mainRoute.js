import { Login } from "../controller/auth.js";
import { Register } from "../controller/auth.js";
import { Users } from "../controller/loger.js";
import { deletUser } from "../controller/loger.js";
import express from 'express'


const router = express.Router();

router.post('/login',Login);
router.post('/register',Register);
router.get('/user',Users);
router.delete('/delete',deletUser);

export  default router;