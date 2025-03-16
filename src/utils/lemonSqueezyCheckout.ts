
export interface LemonSqueezyCheckoutOptions {
  productId: string;
  variantId: string;
  name?: string;
  email?: string;
  successUrl?: string;
  cancelUrl?: string;
}

// Lemon Squeezy checkout function
export const redirectToLemonSqueezyCheckout = ({
  productId, 
  variantId,
  name,
  email,
  successUrl,
  cancelUrl
}: LemonSqueezyCheckoutOptions) => {
  // Build the checkout URL with UTM parameters
  let checkoutUrl = `https://frapas.lemonsqueezy.com/checkout/buy/${productId}?variant=${variantId}`;
  
  // Add optional parameters if provided
  if (name) checkoutUrl += `&name=${encodeURIComponent(name)}`;
  if (email) checkoutUrl += `&email=${encodeURIComponent(email)}`;
  if (successUrl) checkoutUrl += `&checkout_data[success_url]=${encodeURIComponent(successUrl)}`;
  if (cancelUrl) checkoutUrl += `&checkout_data[cancel_url]=${encodeURIComponent(cancelUrl)}`;
  
  // Redirect to the checkout page
  window.location.href = checkoutUrl;
  
  return { success: true };
};
