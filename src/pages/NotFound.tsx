
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="relative mx-auto w-32 h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">404</div>
            </div>
            <svg className="animate-spin-slow absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="stroke-pink-500/20" 
                cx="50" cy="50" r="40" 
                strokeWidth="5" 
                fill="none"
              />
              <circle 
                className="stroke-pink-500" 
                cx="50" cy="50" r="40" 
                strokeWidth="5" 
                fill="none"
                strokeDasharray="250"
                strokeDashoffset="90"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
          Try going back to the homepage.
        </p>
        <Button asChild className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600">
          <Link to="/" className="flex items-center justify-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
