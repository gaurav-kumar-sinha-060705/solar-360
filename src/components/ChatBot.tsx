import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Zap, Shield, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Surya Mitra, your intelligent solar advisor. How can I help you explore Solar 360\'s premium energy solutions today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('solar ai') || input.includes('orientation') || input.includes('panel direction')) {
      return 'Our Solar AI system analyzes your location\'s sun patterns to determine optimal panel orientation for maximum energy absorption. Try our Solar AI tool to get personalized recommendations!';
    }
    
    if (input.includes('solar pay') || input.includes('savings calculator') || input.includes('how much save')) {
      return 'Solar Pay calculator shows exactly how much you\'ll save over 10-30 years! Enter your monthly bill and see your potential savings. Most customers save $30,000+ over 20 years.';
    }
    
    if (input.includes('green cell') || input.includes('panel life') || input.includes('how long last')) {
      return 'Green Cell analyzer predicts your solar panel lifespan based on technology and conditions. Premium panels last 25-30 years with minimal degradation. Check your panels\' remaining life!';
    }
    
    if (input.includes('solar ed') || input.includes('learn') || input.includes('education')) {
      return 'Solar Ed offers comprehensive learning modules about solar technology, financing, and sustainability. Choose from 9 expert-curated courses to become a solar expert!';
    }
    
    if (input.includes('eco meter') || input.includes('carbon') || input.includes('environmental')) {
      return 'Eco Meter analyzes your carbon footprint from electricity use and shows environmental impact of switching to solar. Track your contribution to a cleaner planet!';
    }
    
    if (input.includes('agri solar') || input.includes('farming') || input.includes('agriculture')) {
      return 'Agri Solar provides intelligent farming recommendations combining crops with solar panels. Get weather-integrated insights and agrovoltaic solutions for maximum farm productivity!';
    }
    
    if (input.includes('price') || input.includes('cost')) {
      return 'Our Solar 360 premium systems start from $15,000 with flexible financing options. Each installation is customized for maximum efficiency and ROI. Would you like a personalized quote?';
    }
    
    if (input.includes('efficiency') || input.includes('performance')) {
      return 'Solar 360 systems achieve 22-24% efficiency with our advanced monocrystalline panels. Our AI-powered optimization ensures peak performance year-round. Want to see efficiency projections for your location?';
    }
    
    if (input.includes('installation') || input.includes('install')) {
      return 'Professional installation typically takes 1-2 days with minimal disruption. Our certified technicians handle everything from permits to grid connection. Ready to schedule your site assessment?';
    }
    
    if (input.includes('warranty') || input.includes('guarantee')) {
      return 'Solar 360 offers industry-leading 25-year product warranty and 30-year performance guarantee. Plus, our premium monitoring system ensures optimal operation. Any specific warranty questions?';
    }
    
    return 'That\'s a great question! Solar 360 offers 6 intelligent systems: Solar AI (optimization), Solar Pay (savings calculator), Green Cell (lifespan analysis), Solar Ed (education), Eco Meter (carbon tracking), and Agri Solar (farming integration). Which interests you most?';
  };

  const quickActions = [
    { icon: Zap, label: 'Get Quote', action: () => setInputValue('I need a quote for solar installation') },
    { icon: TrendingUp, label: 'ROI Calculator', action: () => setInputValue('Show me potential savings and ROI') },
    { icon: Shield, label: 'Warranty Info', action: () => setInputValue('Tell me about warranty and guarantees') }
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl",
          "bg-gradient-premium hover:scale-110 transition-all duration-300",
          "border border-solar-core/30 animate-pulse-glow",
          isOpen && "hidden"
        )}
      >
        <MessageCircle className="w-8 h-8 text-tech-obsidian" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[32rem] bg-glass-bg/95 backdrop-blur-2xl rounded-3xl border border-solar-core/20 shadow-premium animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-solar flex items-center justify-center animate-pulse-glow">
                <Bot className="w-6 h-6 text-tech-obsidian" />
              </div>
              <div>
                <h3 className="font-semibold text-solar-core">Surya Mitra</h3>
                <p className="text-xs text-muted-foreground">AI Solar Advisor</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-solar-core"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3",
                  message.isBot ? "justify-start" : "justify-end"
                )}
              >
                {message.isBot && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-trust flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div
                  className={cn(
                    "max-w-[80%] p-3 rounded-2xl",
                    message.isBot
                      ? "bg-gradient-card border border-trust-blue/20 text-foreground"
                      : "bg-gradient-solar text-tech-obsidian"
                  )}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>

                {!message.isBot && (
                  <div className="w-8 h-8 rounded-xl bg-gradient-premium flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-tech-obsidian" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-xl bg-gradient-trust flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gradient-card border border-trust-blue/20 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-trust-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-trust-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-trust-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border/50">
            <div className="flex gap-2 mb-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={action.action}
                  className="flex-1 text-xs border-solar-core/20 hover:bg-solar-core/10 hover:border-solar-core/40"
                >
                  <action.icon className="w-3 h-3 mr-1" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about solar solutions..."
                className="flex-1 bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-solar hover:scale-105 text-tech-obsidian"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};