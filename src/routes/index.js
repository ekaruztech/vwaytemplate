import { Router } from 'express';
import { AppController } from '../controller';

const router = Router();

router.get('/', AppController.index);
router.get('/vway/trips', AppController.trips);
router.get('/terminals', AppController.terminals);
export default router;
