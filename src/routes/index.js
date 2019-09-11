import { Router } from 'express';
import { AppController } from '../controller';

const router = Router();

router.get('/', AppController.index);
router.get('/vway/trips', AppController.trips);
router.get('/vway/trips/receipt/*', AppController.trips);
router.get('/vway/trips/book/*', AppController.trips);
router.get('/vway/trips/bookings', AppController.trips);
router.get('/terminals', AppController.terminals);
router.get('/about', AppController.about);
router.get('/contact', AppController.contact);
export default router;
