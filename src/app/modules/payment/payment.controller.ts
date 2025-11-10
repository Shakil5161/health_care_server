import { Request, Response } from 'express';
import Stripe from 'stripe';
import config from '../../../config';
import ApiError from '../../errors/ApiError';
import catchAsync from '../../shared/catchAsync';
import { PaymentService } from './payment.service';

const initPayment = catchAsync(async (req: Request, res: Response) => {
  const session = await PaymentService.createPaymentSession(req.body);
  res.json({
    url: session.url
  });
});

const webhook = catchAsync(async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;
  const stripe = new Stripe(config.stripe.secret_key as string);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      config.stripe.webhook_secret as string
    );
  } catch (err: any) {
    throw new ApiError(400, `Webhook Error: ${err?.message}`);
    return;
  }

  await PaymentService.webhook(event);
  res.send();
});

export const PaymentController = {
  initPayment,
  webhook
};