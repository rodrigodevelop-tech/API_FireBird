import express from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { PatientsController } from './controllers/PatientsController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = express.Router();

router.post('/login', new AuthenticateUserController().handle);
router.get('/patients', ensureAuthenticated , new PatientsController().handle);


export default router;