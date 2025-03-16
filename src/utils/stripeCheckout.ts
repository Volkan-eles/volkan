
import { loadStripe } from '@stripe/stripe-js';

// Use Stripe's test publishable key
const stripePromise = loadStripe('pk_test_51OvKDxGswQGMCH2ofIDVt2Dxs9mVkLIccKCGKu2VLnjQHwV9JKiKoKR3KhzOI3B2dQQEpEytbddCXF1UHhDaT8AH00o7xHkXJY');

export interface CheckoutOptions {
  priceId: string;
  successUrl: string;
  cancelUrl: string;
}

export const redirectToCheckout = async ({ priceId, successUrl, cancelUrl }: CheckoutOptions) => {
  try {
    const stripe = await stripePromise;
    
    if (!stripe) {
      throw new Error('Stripe failed to load');
    }

    // Create checkout session with valid price ID
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: priceId, quantity: 1 }],
      mode: 'subscription',
      successUrl: successUrl || window.location.origin + '/dashboard?success=true',
      cancelUrl: cancelUrl || window.location.origin + '?canceled=true',
    });

    if (error) {
      console.error('Error redirecting to checkout:', error);
      return { success: false, error };
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error in checkout process:', error);
    return { success: false, error };
  }
};
