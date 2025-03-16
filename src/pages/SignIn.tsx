
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
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
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type FormValues = z.infer<typeof formSchema>;

const SignIn = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      // Here you would typically call your authentication API
      console.log('Sign in attempt:', values);
      
      // For demo purposes, we'll just show a toast and redirect
      toast({
        title: "Sign in successful",
        description: "Welcome back to KpopBooth!",
      });
      
      // Redirect to dashboard after successful login
      setTimeout(() => navigate('/dashboard'), 1000);
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <SEOHead 
        title="Sign In | KpopBooth - Create K-pop Inspired Photo Strips"
        description="Sign in to your KpopBooth account and start creating amazing K-pop inspired photo strips with your favorite idols."
      />
      
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col">
        {/* Header with back button */}
        <header className="w-full px-4 py-4">
          <div className="container mx-auto">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-600 hover:text-pink-600 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <span>Back to Home</span>
            </Link>
          </div>
        </header>
        
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="max-w-md w-full">
            {/* Sign In Card */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
              {/* Header Gradient */}
              <div className="h-3 bg-gradient-to-r from-pink-500 to-violet-500"></div>
              
              <div className="p-6 sm:p-8">
                {/* Sign In Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 text-pink-600 mb-4">
                    <LogIn className="h-6 w-6" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                  <p className="text-gray-500 mt-2">Sign in to your KpopBooth account</p>
                </div>
                
                {/* Sign In Form */}
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
                    
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                              <Input
                                type="password"
                                placeholder="••••••••"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-end">
                      <Link to="/forgot-password" className="text-sm text-pink-600 hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
                
                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link to="/sign-up" className="text-pink-600 font-medium hover:underline">
                      Sign up
                    </Link>
                  </p>
                </div>
                
                {/* Social Sign In (for future implementation) */}
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <Button variant="outline" className="w-full" disabled>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full" disabled>
                      Apple
                    </Button>
                    <Button variant="outline" className="w-full" disabled>
                      Twitter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SignIn;
