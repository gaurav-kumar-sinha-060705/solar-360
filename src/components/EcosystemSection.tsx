import { Card } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  CreditCard, 
  Smartphone, 
  GraduationCap, 
  BarChart3, 
  Leaf,
  ArrowRight,
  Zap
} from 'lucide-react';

const ecosystemApps = [
  {
    id: 'solar-ai',
    name: 'Solar AI',
    description: 'Intelligent solar panel optimization using advanced AI algorithms',
    icon: Brain,
    color: 'from-solar-core to-solar-bright',
    features: ['AI Optimization', 'Predictive Analytics', 'Smart Routing'],
    delay: '0s'
  },
  {
    id: 'solar-pay',
    name: 'SolarPay',
    description: 'Seamless payment solutions for solar energy transactions',
    icon: CreditCard,
    color: 'from-energy-blue to-energy-cyan',
    features: ['Instant Payments', 'Energy Credits', 'Multi-Currency'],
    delay: '0.1s'
  },
  {
    id: 'green-cell',
    name: 'GreenCell',
    description: 'Mobile companion for real-time energy monitoring',
    icon: Smartphone,
    color: 'from-energy-purple to-energy-blue',
    features: ['Real-time Data', 'Remote Control', 'Alerts'],
    delay: '0.2s'
  },
  {
    id: 'solar-ed',
    name: 'SolarEd',
    description: 'Educational platform for solar energy learning',
    icon: GraduationCap,
    color: 'from-solar-warm to-solar-glow',
    features: ['Interactive Learning', 'Certifications', 'Community'],
    delay: '0.3s'
  },
  {
    id: 'eco-meter',
    name: 'EcoMeter',
    description: 'Advanced analytics and impact tracking dashboard',
    icon: BarChart3,
    color: 'from-energy-cyan to-energy-purple',
    features: ['Impact Analytics', 'Carbon Tracking', 'ROI Analysis'],
    delay: '0.4s'
  },
  {
    id: 'agri-solar',
    name: 'AgriSolar',
    description: 'Solar solutions tailored for agricultural applications',
    icon: Leaf,
    color: 'from-solar-bright to-energy-blue',
    features: ['Agri Integration', 'Crop Optimization', 'Weather Sync'],
    delay: '0.5s'
  }
];

export const EcosystemSection = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-solar-core/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-energy-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-6">
            <Zap className="w-4 h-4 text-solar-core" />
            <span className="text-solar-core font-medium">Smart Ecosystem</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-solar-gradient">Our Smart</span>
            <br />
            <span className="text-energy-gradient">Ecosystem</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A suite of intelligent tools designed for every aspect of your solar journey, 
            from installation and savings to education and impact tracking.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ecosystemApps.map((app) => (
            <Link key={app.id} to={`/${app.id}`}>
              <Card 
                className="glass-card-premium p-8 hover-lift group cursor-pointer animate-zoom-in"
                style={{ animationDelay: app.delay }}
              >
              {/* App Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <app.icon className="w-full h-full text-space-deep" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} opacity-20 blur-lg group-hover:opacity-40 transition-opacity`} />
              </div>

              {/* App Info */}
              <h3 className="text-2xl font-bold text-solar-gradient mb-3 group-hover:text-energy-gradient transition-colors">
                {app.name}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {app.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {app.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-solar-core rounded-full" />
                    <span className="text-card-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="ghost" 
                className="w-full justify-between text-solar-core hover:text-energy-blue hover:bg-solar-core/5 group-hover:translate-x-1 transition-all"
              >
                <span>Explore {app.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              </Card>
            </Link>
          ))}
        </div>

        {/* Central Connection Visual */}
        <div className="relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full glass-card-premium animate-pulse-glow relative">
              <div className="w-20 h-20 rounded-full bg-gradient-solar flex items-center justify-center">
                <Zap className="w-10 h-10 text-space-deep animate-bounce-gentle" />
              </div>
              
              {/* Connection Lines */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-24 bg-gradient-to-t from-solar-core to-transparent opacity-60"
                    style={{
                      left: '50%',
                      top: '50%',
                      transformOrigin: 'bottom',
                      transform: `rotate(${i * 60}deg) translateY(-50%)`,
                      animation: `energy-pulse 2s ease-in-out infinite ${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-solar-gradient mt-8 mb-4">
              Unified Energy Intelligence
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our applications work together seamlessly, sharing data and insights 
              to provide you with the most intelligent solar energy experience possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};