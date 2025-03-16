
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { redirectToLemonSqueezyCheckout, LemonSqueezyCheckoutOptions } from '@/utils/lemonSqueezyCheckout';
import { useToast } from '@/components/ui/use-toast';

interface LemonSqueezyCheckoutButtonProps {
  productId: string;
  variantId: string;
  buttonText: string;
  buttonVariant?: "default" | "outline";
  buttonClassName?: string;
  successUrl?: string;
  cancelUrl?: string;
}

const LemonSqueezyCheckoutButton = ({
  productId,
  variantId,
  buttonText,
  buttonVariant = "default",
  buttonClassName,
  successUrl,
  cancelUrl
}: LemonSqueezyCheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = () => {
    setIsLoading(true);
    
    try {
      const options: LemonSqueezyCheckoutOptions = {
        productId,
        variantId,
        successUrl: successUrl || `${window.location.origin}/dashboard?success=true`,
        cancelUrl: cancelUrl || `${window.location.origin}?canceled=true`
      };
  
      redirectToLemonSqueezyCheckout(options);
    } catch (error) {
      console.error('Checkout error:', error);
      toast({
        title: "Payment Error",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <Button 
      variant={buttonVariant} 
      className={`w-full ${buttonClassName}`}
      onClick={handleCheckout}
      disabled={isLoading}
    >
      {isLoading ? "Processing..." : buttonText}
    </Button>
  );
};

export default LemonSqueezyCheckoutButton;
