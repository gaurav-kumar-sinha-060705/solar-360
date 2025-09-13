import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { ArrowRight, Mail, Sparkles, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate email subscription
    setIsSubmitted(true);
    toast({
      title: "Welcome to the Solar Revolution! 🌟",
      description: "You'll be the first to know when we launch our intelligent ecosystem.",
    });
    
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-32 px-6 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-solar-core/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-energy-blue/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Energy Flow Lines */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-energy opacity-30 animate-energy-flow"
            style={{
              width: '150%',
              left: '-25%',
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              transform: `rotate(${-10 + i * 5}deg)`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="glass-card-premium p-12 md:p-16 text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-6">
              <Sparkles className="w-4 h-4 text-solar-core animate-pulse" />
              <span className="text-solar-core font-medium">Early Access</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-solar-gradient">Ready to Join the</span>
              <br />
              <span className="text-energy-gradient">Solar Revolution?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're currently building our intelligent prototypes. Be among the first 
              to experience the future of solar energy.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-14 text-lg glass-card border-solar-core/30 focus:border-solar-core"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-solar h-14 px-8 text-lg group"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Subscribed!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Get Early Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'First Access',
                description: 'Be the first to experience our intelligent solar ecosystem',
                icon: '🚀'
              },
              {
                title: 'Exclusive Updates',
                description: 'Get behind-the-scenes development insights and progress',
                icon: '📱'
              },
              {
                title: 'Special Pricing',
                description: 'Early adopters get exclusive pricing and premium features',
                icon: '⭐'
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl hover-lift animate-zoom-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="font-semibold text-solar-gradient mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-solar-core rounded-full animate-pulse" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-energy-blue rounded-full animate-pulse" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-energy-purple rounded-full animate-pulse" />
                <span>100% privacy protected</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};