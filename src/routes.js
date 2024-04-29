import { Router } from 'express';
import { createSession, deleteSession } from './controller/session.js';
import { getUser } from './controller/user.js';
import { verifyUser } from './middleware/verify-user.js';

export const router = Router();

// Session
router.post('/session', createSession);

router.delete('/session', deleteSession);

// User
router.get('/user', verifyUser, getUser);
