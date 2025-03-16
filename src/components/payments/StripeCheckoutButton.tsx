
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { redirectToCheckout, CheckoutOptions } from '@/utils/stripeCheckout';
import { useToast } from '@/components/ui/use-toast';

interface StripeCheckoutButtonProps {
  priceId: string;
  buttonText: string;
  buttonVariant?: "default" | "outline";
  buttonClassName?: string;
  successUrl?: string;
  cancelUrl?: string;
}

const StripeCheckoutButton = ({
  priceId,
  buttonText,
  buttonVariant = "default",
  buttonClassName,
  successUrl,
  cancelUrl
}: StripeCheckoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleCheckout = async () => {
    setIsLoading(true);
    
    const options: CheckoutOptions = {
      priceId,
      successUrl: successUrl || `${window.location.origin}/dashboard?success=true`,
      cancelUrl: cancelUrl || `${window.location.origin}?canceled=true`
    };

    const result = await redirectToCheckout(options);
    
    if (!result.success) {
      toast({
        title: "Payment Error",
        description: "There was an issue processing your payment. Please try again.",
        variant: "destructive",
      });
    }
    
    setIsLoading(false);
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

export default StripeCheckoutButton;
