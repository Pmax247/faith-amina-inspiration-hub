import { Link } from "react-router-dom";
import { Youtube, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import ChatbotWidget from "@/components/ChatbotWidget";
const Index = () => {
  return <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-gray-900 to-black text-white relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
        backgroundImage: "url('/lovable-uploads/a20b09b6-cd74-4af1-bb14-e2399a891e80.png')"
      }}></div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              Inspiration, Guidance & Growth – <span className="text-brand-red">Welcome to LIFE WITH FAITH AMINAHO!</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in">
              Discover practical advice for immigrants in the UK, personal development insights, and creative inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button className="bg-brand-red hover:bg-red-600 text-white flex items-center gap-2" size="lg" asChild>
                <a href="https://www.youtube.com/@LifeWithFaithAminaho" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                  <span>Subscribe Now</span>
                </a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors flex items-center gap-2" size="lg">
                <span>Watch Latest Video</span>
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-transparent to-white"></div>
      </section>
      
      {/* Intro Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Exciting Journey</h2>
            <p className="text-gray-600">
              New videos are published every Friday, starting April 4th, 2025. We're dedicated to providing valuable content that inspires, educates, and empowers our community. From immigration guidance to personal growth stories, we're here to support your journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Video Gallery Section */}
      <section className="py-12 bg-gray-50">
        
      </section>
      
      {/* Topics Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Cover</h2>
            <p className="text-gray-600">Explore our diverse range of topics designed to help and inspire you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Topic 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: "url('/lovable-uploads/1a57df7c-2cc7-480f-8173-d8a701d4acae.png')"
            }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">UK Immigration Guide</h3>
                <p className="text-gray-600 mb-4">
                  Practical advice and tips for navigating the UK immigration system, avoiding common pitfalls, and understanding your rights.
                </p>
                <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Topic 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: "url('/lovable-uploads/7c481c74-6d41-47dc-b127-aebb7db88f99.png')"
            }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Personal Development</h3>
                <p className="text-gray-600 mb-4">
                  Insights and strategies for personal growth, building resilience, and achieving your goals in a new environment.
                </p>
                <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Topic 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-cover bg-center" style={{
              backgroundImage: "url('/lovable-uploads/a20b09b6-cd74-4af1-bb14-e2399a891e80.png')"
            }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Creative Expression</h3>
                <p className="text-gray-600 mb-4">
                  Exploring creative outlets and cultural expressions as means for connection, healing, and sharing your unique voice.
                </p>
                <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-brand-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Subscribe to our YouTube channel for weekly videos that will inspire, inform, and help you grow on your journey.
          </p>
          <Button className="bg-white text-brand-red hover:bg-gray-100 font-medium" size="lg" asChild>
            <a href="https://www.youtube.com/@LifeWithFaithAminaho" target="_blank" rel="noopener noreferrer">
              Subscribe to Our Channel
            </a>
          </Button>
        </div>
      </section>
      
      <Footer />
      <ChatbotWidget />
    </div>;
};
export default Index;