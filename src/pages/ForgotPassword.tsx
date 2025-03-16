import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import SEOHead from '@/components/landing/SEOHead';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // Here you would typically call your password reset API
      console.log('Password reset request:', values);
      
      // For demo purposes, we'll just show a toast
      toast({
        title: "Reset link sent",
        description: "If an account exists with that email, you'll receive a password reset link.",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "We couldn't process your request. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <SEOHead 
        title="Forgot Password | KpopBooth"
        description="Reset your KpopBooth account password"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
        {/* Header with back button */}
        <header className="w-full px-4 py-4">
          <div className="container mx-auto">
            <Link 
              to="/sign-in" 
              className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Sign In</span>
            </Link>
          </div>
        </header>
        
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="max-w-md w-full">
            {/* Forgot Password Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              {/* Header Gradient */}
              <div className="h-3 bg-gradient-to-r from-pink-500 to-violet-500"></div>
              
              <div className="p-6 sm:p-8">
                {/* Forgot Password Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 text-pink-600 mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">Forgot Password</h1>
                  <p className="text-gray-500 mt-2">We'll send you a link to reset your password</p>
                </div>
                
                {/* Forgot Password Form */}
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <Input
                                placeholder="name@example.com"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white"
                    >
                      Send Reset Link
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
                
                {/* Return to Sign In */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Remember your password?{' '}
                    <Link to="/sign-in" className="text-pink-600 font-medium hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ForgotPassword;
