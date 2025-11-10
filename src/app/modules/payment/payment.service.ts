import Stripe from 'stripe';
import config from '../../../config';
import ApiError from '../../errors/ApiError';
import { prisma } from '../../shared/prisma';

const stripe = new Stripe(config.stripe.secret_key as string);

const createPaymentSession = async (data: any) => {
  const payment = await prisma.payment.findFirstOrThrow({
    where: {
      appointmentId: data.appointmentId
    }
  });
  
  if(!payment){
    throw new ApiError(400, "Payment Not Found")
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Doctor Appointment',
          },
          unit_amount: data.amount * 100, // convert to cents
        },
        quantity: 1,
      },
    ],
    metadata: {
      appointmentId: data.appointmentId,
      doctorId: data.doctorId
    },
    success_url: `${config.client_url}/payment/success?sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: `${config.client_url}/payment/cancel`,
  });

  // Update payment record with session ID
  await prisma.payment.update({
    where: {
      appointmentId: payment.appointmentId 
    },
    data: {
      transactionId: session.id
    }
  });

  return session;
};

const webhook = async (event: Stripe.Event) => {
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      
      // Update payment status
      await prisma.payment.update({
        where: {
          transactionId: session.id
        },
        data: {
          status: 'PAID',
          paymentGatewayData: new Date()
        }
      });

      break;
    }
  }
};

export const PaymentService = {
  createPaymentSession,
  webhook
};