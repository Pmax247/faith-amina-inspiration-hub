
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send } from "lucide-react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<Array<{ type: 'user' | 'bot', text: string }>>([
    { type: 'bot', text: 'Hi there! I\'m the Life with Faith Aminaho assistant. How can I help you today?' },
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message to chat
    setChatHistory([...chatHistory, { type: 'user', text: message }]);
    
    // Clear input
    setMessage("");
    
    // Process message and simulate bot response
    setTimeout(() => {
      let response = "I'm sorry, I don't have an answer for that yet. Please check our YouTube channel or contact us for more information.";
      
      const normalizedMessage = message.toLowerCase();
      
      if (normalizedMessage.includes("latest video") || normalizedMessage.includes("new video")) {
        response = "Our latest videos focus on immigration guidance and personal development. Check out our YouTube channel for the most recent uploads!";
      } else if (normalizedMessage.includes("contact") || normalizedMessage.includes("get in touch")) {
        response = "You can contact Faith Aminaho via email at info@lifewithfaithaminaho.com or through the contact form on our Contact page.";
      } else if (normalizedMessage.includes("about") || normalizedMessage.includes("channel")) {
        response = "Life with Faith Aminaho is a YouTube channel focused on providing practical guidance for immigrants in the UK, personal development insights, and creative inspiration.";
      } else if (normalizedMessage.includes("hi") || normalizedMessage.includes("hello")) {
        response = "Hello! Welcome to Life with Faith Aminaho. How can I assist you today?";
      }
      
      setChatHistory(prev => [...prev, { type: 'bot', text: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-brand-red hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300"
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageSquare size={24} />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Chat header */}
          <div className="bg-brand-red text-white p-4">
            <h3 className="font-bold">Chat Assistant</h3>
            <p className="text-sm opacity-80">Life with Faith Aminaho</p>
          </div>

          {/* Chat messages */}
          <div className="flex-1 p-4 overflow-y-auto h-80 space-y-4">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.type === 'user'
                      ? 'bg-brand-red text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button 
                type="submit"
                size="icon"
                className="bg-brand-red hover:bg-red-600"
              >
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
