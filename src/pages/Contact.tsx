
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ChatbotWidget from "@/components/ChatbotWidget";
import { Mail, Youtube } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              Let's Connect – <span className="text-brand-red">We'd Love to Hear from You!</span>
            </h1>
            <p className="text-lg opacity-90 animate-fade-in">
              Have questions, collaboration ideas, or feedback? We're here to listen and respond.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We value your input and are excited to connect with our community. Whether you have questions about content, want to suggest topics, or are interested in collaborations, please don't hesitate to reach out.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-brand-red rounded-full p-3 text-white mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email Us</h3>
                      <p className="text-gray-600 mb-2">We'll respond within 48 hours</p>
                      <a 
                        href="mailto:info@lifewithfaithaminaho.com" 
                        className="text-brand-red hover:underline font-medium"
                      >
                        info@lifewithfaithaminaho.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-brand-red rounded-full p-3 text-white mr-4">
                      <Youtube size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">YouTube Channel</h3>
                      <p className="text-gray-600 mb-2">Follow us for the latest updates</p>
                      <a 
                        href="https://www.youtube.com/@LifeWithFaithAminaho" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-red hover:underline font-medium"
                      >
                        @LifeWithFaithAminaho
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-6">
                    Join our community and stay updated with the latest content, behind-the-scenes insights, and special announcements.
                  </p>
                  
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.youtube.com/@LifeWithFaithAminaho" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ContactForm />
                  <p className="text-sm text-gray-500 mt-4">
                    Your information is secure and will only be used to respond to your inquiry. We typically respond within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-brand-red mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">How often do you publish new videos?</h3>
                <p className="text-gray-700">
                  We publish new videos every Friday, starting April 4th, 2025. Make sure to subscribe to our YouTube channel for notifications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Can I suggest topics for future videos?</h3>
                <p className="text-gray-700">
                  Absolutely! We love hearing from our community. You can suggest topics by emailing us or leaving comments on our videos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Do you offer one-on-one consultations?</h3>
                <p className="text-gray-700">
                  Currently, we focus on creating content for our YouTube channel. Please note that our content is for informational purposes only and does not constitute legal or professional advice.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Are you open to collaborations?</h3>
                <p className="text-gray-700">
                  Yes, we're open to collaborations with individuals and organizations that align with our mission and values. Please reach out via email with your proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Contact;
