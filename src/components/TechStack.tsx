import { Card } from './ui/card';
import { Code2, Database, Cpu, Zap } from 'lucide-react';

const technologies = [
  {
    name: 'Python',
    description: 'Advanced AI algorithms and machine learning models',
    icon: '🐍',
    category: 'Backend',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'FastAPI',
    description: 'High-performance API framework for real-time data',
    icon: '⚡',
    category: 'API',
    color: 'from-green-400 to-green-600'
  },
  {
    name: 'SQLAlchemy',
    description: 'Robust database management and optimization',
    icon: '🗃️',
    category: 'Database',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'React',
    description: 'Dynamic and responsive user interfaces',
    icon: '⚛️',
    category: 'Frontend',
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    name: 'TypeScript',
    description: 'Type-safe development for reliable code',
    icon: '📘',
    category: 'Language',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'TensorFlow',
    description: 'Machine learning for predictive energy analytics',
    icon: '🧠',
    category: 'AI/ML',
    color: 'from-orange-400 to-orange-600'
  }
];

export const TechStack = () => {
  return (
    <section className="py-32 px-6 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 solar-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-6">
            <Code2 className="w-4 h-4 text-solar-core" />
            <span className="text-solar-core font-medium">Technology Stack</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-solar-gradient">Powered by</span>
            <br />
            <span className="text-energy-gradient">Modern Technology</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building our prototypes on a robust and scalable tech stack 
            to deliver a seamless, intelligent user experience.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name}
              className="glass-card-premium p-8 hover-lift group animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Tech Icon */}
              <div className="relative mb-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium">
                  <div className="w-2 h-2 bg-solar-core rounded-full animate-pulse" />
                  <span className="text-solar-core">{tech.category}</span>
                </div>
              </div>

              {/* Tech Info */}
              <h3 className="text-2xl font-bold text-solar-gradient mb-3 group-hover:text-energy-gradient transition-colors">
                {tech.name}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {tech.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-solar-core/5 to-energy-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Architecture Visualization */}
        <div className="relative">
          <Card className="glass-card-premium p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-solar-gradient mb-4">
                Intelligent Architecture
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our microservices architecture ensures scalability, reliability, and real-time performance
              </p>
            </div>

            {/* Architecture Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              {[
                { icon: Cpu, label: 'AI Processing', color: 'text-solar-core' },
                { icon: Database, label: 'Data Layer', color: 'text-energy-blue' },
                { icon: Zap, label: 'Real-time APIs', color: 'text-energy-purple' },
                { icon: Code2, label: 'User Interface', color: 'text-solar-bright' }
              ].map((layer, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-4">
                    <div className="w-20 h-20 rounded-2xl glass-card mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                      <layer.icon className={`w-10 h-10 ${layer.color}`} />
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-energy" />
                    )}
                  </div>
                  <h4 className="font-semibold text-card-foreground mb-2">{layer.label}</h4>
                  <div className="w-full h-2 bg-space-medium rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-solar rounded-full animate-gradient-shift"
                      style={{ 
                        width: '100%',
                        animationDelay: `${index * 0.5}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};