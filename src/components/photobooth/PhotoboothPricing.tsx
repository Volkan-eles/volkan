
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const PhotoboothPricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Simple Pricing Plans</h2>
          <p className="text-gray-600">Choose the perfect plan for your photo booth needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">Basic</CardTitle>
              <div className="mt-4 flex items-baseline text-gray-900">
                <span className="text-3xl font-bold tracking-tight">Free</span>
                <span className="ml-1 text-sm text-gray-500">forever</span>
              </div>
              <CardDescription className="mt-2">Perfect for casual users</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Basic photo strips</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">5 frame colors</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Basic stickers</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Download in standard quality</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="border-pink-200 relative bg-gradient-to-b from-white to-pink-50">
            <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Pro</CardTitle>
              <div className="mt-4 flex items-baseline text-gray-900">
                <span className="text-3xl font-bold tracking-tight">$9.99</span>
                <span className="ml-1 text-sm text-gray-500">/month</span>
              </div>
              <CardDescription className="mt-2">For serious photo enthusiasts</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Advanced photo strips</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">All frame colors</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Premium stickers</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">HD downloads</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Unlimited strips</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-pink-500 hover:bg-pink-600">Upgrade to Pro</Button>
            </CardFooter>
          </Card>
          
          {/* Business Plan */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">Business</CardTitle>
              <div className="mt-4 flex items-baseline text-gray-900">
                <span className="text-3xl font-bold tracking-tight">$29.99</span>
                <span className="ml-1 text-sm text-gray-500">/month</span>
              </div>
              <CardDescription className="mt-2">For brands and businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">All Pro features</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Custom branding</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Analytics & insights</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">Priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-gray-600">API access</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhotoboothPricing;
