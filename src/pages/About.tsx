
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              Our Journey, Our Story, <span className="text-brand-red">Your Inspiration</span>
            </h1>
            <p className="text-lg opacity-90 animate-fade-in">
              Discover the passion and purpose behind Life with Faith Aminaho
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to <strong>Life with Faith Aminaho</strong>! Our channel started with a clear vision: to provide practical, accessible guidance for immigrants navigating life in the United Kingdom. As the landscape for newcomers to the UK continues to evolve, we recognized the need for authentic, experience-based content that addresses real challenges and opportunities.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-4">What We Focus On</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">UK Immigration Guidance</h4>
                  <p className="text-gray-700">
                    Navigating visas, understanding rights, avoiding scams, and building a successful life in a new country.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Personal Development</h4>
                  <p className="text-gray-700">
                    Building resilience, adapting to cultural changes, overcoming challenges, and growing through adversity.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Creative Expression</h4>
                  <p className="text-gray-700">
                    Finding your voice, sharing your unique perspective, and using creativity as a bridge between cultures.
                  </p>
                </div>
              </div>
              
              <p>
                Beyond practical advice, we believe in the power of storytelling and shared experiences. Each video is created not just to inform, but to inspire and build community. We understand the isolation that can come with relocation, and we're committed to creating content that reminds you that you're not alone on this journey.
              </p>
              
              <p>
                New videos are published every Friday, starting April 4th, 2025, covering a wide range of topics relevant to immigrants, personal growth enthusiasts, and anyone looking for practical guidance with a positive perspective.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Faith Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Meet Faith Aminaho</h2>
              <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/a20b09b6-cd74-4af1-bb14-e2399a891e80.png" 
                    alt="Faith Aminaho" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 prose prose-lg">
                <p>
                  Hello! I'm Faith Aminaho, the creator behind this channel. My journey began when I moved to the UK and experienced firsthand the challenges of starting fresh in a new country. From navigating the complex immigration system to building a new social network and career path, I've faced many of the hurdles that immigrants encounter.
                </p>
                
                <p>
                  My background in communication and personal development, combined with my lived experience as an immigrant, uniquely positions me to share insights that are both practical and empathetic. I believe that everyone deserves access to clear, honest information that can help them make informed decisions about their lives.
                </p>
                
                <p>
                  This channel is born from my passion to help others avoid the pitfalls I encountered and to celebrate the incredible resilience and creativity of the immigrant experience. I'm committed to creating content that serves as both a practical resource and a source of inspiration.
                </p>
                
                <div className="mt-6">
                  <Button 
                    className="bg-brand-red hover:bg-red-600 text-white flex items-center gap-2"
                    asChild
                  >
                    <a href="https://www.youtube.com/@LifeWithFaithAminaho" target="_blank" rel="noopener noreferrer">
                      <Youtube size={18} />
                      <span>Subscribe to Join Our Community</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Values</h2>
              <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3">Authenticity</h3>
                <p className="text-gray-700">
                  We share real experiences and practical advice, never sugar-coating the challenges while always maintaining an optimistic outlook.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3">Empowerment</h3>
                <p className="text-gray-700">
                  Our content aims to equip you with knowledge and skills that help you take control of your journey and make informed decisions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3">Community</h3>
                <p className="text-gray-700">
                  We believe in the power of shared experiences and creating spaces where people feel understood and supported.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-3">Growth Mindset</h3>
                <p className="text-gray-700">
                  We embrace challenges as opportunities to learn and grow, encouraging resilience and adaptability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join Us Section */}
      <section className="py-16 bg-brand-red text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us On This Journey</h2>
            <p className="text-lg mb-8 opacity-90">
              Every Friday, we share new content designed to inspire, inform, and support your personal growth journey. Subscribe to our YouTube channel to stay connected!
            </p>
            <Button 
              className="bg-white text-brand-red hover:bg-gray-100 font-medium"
              size="lg"
              asChild
            >
              <a href="https://www.youtube.com/@LifeWithFaithAminaho" target="_blank" rel="noopener noreferrer">
                Subscribe to Our Channel
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default About;
