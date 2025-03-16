
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PricingCard from './PricingCard';

const AnimatedPricingSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const freePlanFeatures = [
    { included: true, text: '5 photo sessions per day' },
    { included: true, text: 'Access to 10+ idols' },
    { included: true, text: 'Basic layouts' },
    { included: true, text: '1 download per day' },
    { included: false, text: 'Watermark-free downloads' }
  ];

  const premiumPlanFeatures = [
    { included: true, text: 'Unlimited photo sessions' },
    { included: true, text: 'Access to all idols' },
    { included: true, text: 'All premium layouts' },
    { included: true, text: 'Unlimited downloads' },
    { included: true, text: 'Watermark-free downloads' }
  ];

  const pwywPlanFeatures = [
    { included: true, text: 'All premium features' },
    { included: true, text: 'Priority support' },
    { included: true, text: 'Early access to new features' },
    { included: true, text: 'Community recognition' },
    { included: true, text: 'Help support development' },
    { included: true, text: 'Choose your own price' }
  ];

  const lemonSqueezyIds = {
    free: {
      checkoutUrl: 'https://eles.lemonsqueezy.com/buy/900a2024-1eca-46f2-97b3-534fc9b7fea1'
    },
    premium: {
      checkoutUrl: 'https://eles.lemonsqueezy.com/buy/a15de4b9-3619-4ca9-8aa7-ff835a33f033'
    },
    pwyw: {
      checkoutUrl: 'https://eles.lemonsqueezy.com/buy/ee774d16-2959-4268-b392-bb12c6f5c628'
    }
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-600">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Start for free, upgrade for more features</p>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.3 }
            }
          }}
        >
          <motion.div custom={0} variants={cardVariants}>
            <PricingCard 
              title="Free"
              description="Perfect for casual fans"
              price="$0"
              features={freePlanFeatures}
              buttonText="Get Started"
              buttonVariant="outline"
              paymentEnabled={true}
              directCheckoutUrl={lemonSqueezyIds.free.checkoutUrl}
            />
          </motion.div>
          
          <motion.div custom={1} variants={cardVariants}>
            <PricingCard 
              title="Premium"
              description="For dedicated fans"
              price="$1"
              period="/year"
              features={premiumPlanFeatures}
              buttonText="Get Premium"
              buttonVariant="default"
              buttonClassName="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600"
              highlight={true}
              paymentEnabled={true}
              directCheckoutUrl={lemonSqueezyIds.premium.checkoutUrl}
            />
          </motion.div>
          
          <motion.div custom={2} variants={cardVariants}>
            <PricingCard 
              title="Pay What You Want"
              description="Support our project"
              price="$5"
              period="/month"
              features={pwywPlanFeatures}
              buttonText="Now"
              buttonVariant="outline"
              paymentEnabled={true}
              isPWYW={true}
              directCheckoutUrl={lemonSqueezyIds.pwyw.checkoutUrl}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center text-sm text-gray-500 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p>All plans include automatic updates and access to our core features. 
          We use Lemon Squeezy for secure payment processing. By subscribing, you agree to our Terms of Service.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedPricingSection;
