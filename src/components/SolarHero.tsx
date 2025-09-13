import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Zap, Sun, Battery } from 'lucide-react';
import heroSolarBg from '@/assets/hero-solar-bg.jpg';

export const SolarHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `url(${heroSolarBg}) center/cover`,
          transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
        }}
      />
      
      {/* Dynamic Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--solar-core) / 0.3) 0%, hsl(var(--energy-blue) / 0.2) 50%, transparent 100%)`
        }}
      />

      {/* Floating Solar Panels */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 solar-grid rounded-xl opacity-10 floating"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 15}deg)`
            }}
          />
        ))}
      </div>

      {/* Energy Flow Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-energy opacity-40 animate-energy-flow"
            style={{
              width: '200%',
              left: '-50%',
              top: `${25 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              transform: `rotate(${-15 + i * 10}deg)`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Icon with Glow */}
        <div className="mb-8 animate-zoom-in">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl glass-card-premium animate-pulse-glow">
            <Sun className="w-12 h-12 text-solar-core animate-solar-spin" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-hero font-bold mb-6 text-solar-gradient animate-slide-up">
          Solar 360°
          <br />
          <span className="text-energy-gradient">Premium Energy</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Ultra-luxury solar solutions with AI-powered efficiency.{' '}
          <span className="text-solar-gradient font-semibold">Dependable</span>,{' '}
          <span className="text-energy-gradient font-semibold">intelligent</span>, and built for the future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            className="btn-solar group text-lg px-8 py-6 h-auto"
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              Explore The Ecosystem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          
          <Button 
            variant="outline" 
            className="glass-card border-solar-core/30 text-solar-core hover:bg-solar-core/10 text-lg px-8 py-6 h-auto group"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="flex items-center gap-3">
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Get Early Access
            </span>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: Sun, label: 'Solar Solutions', value: '6+', color: 'text-solar-core' },
            { icon: Zap, label: 'Energy Saved', value: '99%', color: 'text-energy-blue' },
            { icon: Battery, label: 'Efficiency', value: 'Max', color: 'text-energy-purple' }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl hover-lift group">
              <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
              <div className="text-3xl font-bold text-solar-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-solar-core/50 rounded-full">
          <div className="w-1 h-3 bg-solar-core rounded-full mx-auto mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};