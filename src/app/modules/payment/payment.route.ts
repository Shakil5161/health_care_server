import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/init', PaymentController.initPayment);
router.post('/webhook', express.raw({ type: 'application/json' }), PaymentController.webhook);

export const PaymentRoutes = router;