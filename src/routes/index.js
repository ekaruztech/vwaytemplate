import { Router } from 'express';
import { AppController } from '../controller';

const router = Router();

router.get('/', AppController.index);
router.get('/vway/trips', AppController.trips);
export default router;
