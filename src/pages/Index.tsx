import { Navigation } from '@/components/Navigation';
import { ParticleBackground } from '@/components/ParticleBackground';
import { SolarHero } from '@/components/SolarHero';
import { EcosystemSection } from '@/components/EcosystemSection';
import { TechStack } from '@/components/TechStack';
import { CTASection } from '@/components/CTASection';
import { ChatBot } from '@/components/ChatBot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <SolarHero />
        
        {/* Ecosystem Section */}
        <div id="ecosystem">
          <EcosystemSection />
        </div>
        
        {/* Technology Stack */}
        <div id="technology">
          <TechStack />
        </div>
        
        {/* CTA Section */}
        <div id="contact">
          <CTASection />
        </div>
      </main>
      
      {/* ChatBot */}
      <ChatBot />
      
      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-solar flex items-center justify-center">
              <span className="text-space-deep font-bold text-sm">S</span>
            </div>
            <span className="text-solar-gradient font-semibold">Solar 360</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Premium solar solutions engineered for excellence
          </p>
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <span>© 2024 Solar 360</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
