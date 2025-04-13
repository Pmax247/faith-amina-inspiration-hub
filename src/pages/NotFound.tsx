
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4 py-16">
          <h1 className="text-9xl font-bold text-brand-red">404</h1>
          <p className="text-2xl font-bold mb-4">Oops! Page not found</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for. It might have been moved or doesn't exist.
          </p>
          <Button 
            className="bg-brand-red hover:bg-red-600 text-white flex items-center gap-2"
            asChild
          >
            <a href="/">
              <Home size={18} />
              <span>Return to Home</span>
            </a>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
