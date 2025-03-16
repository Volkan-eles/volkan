
import { loadStripe } from '@stripe/stripe-js';

// Replace with your publishable key when in production
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

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

    // This would typically call your backend to create a checkout session
    // For demo purposes, we're simulating this with a direct redirect
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
