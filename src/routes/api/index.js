import express from 'express';
import contactsRouter from './contacts.js';
import authRouter from './auth.js';

const router = express.Router();

router.use('/contacts', contactsRouter);
router.use('/users', authRouter);

export default router;
