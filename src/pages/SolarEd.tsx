import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ExternalLink, Play, Clock, Users, Award } from 'lucide-react';

const SolarEd = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const topics = [
    {
      id: 'basics',
      title: 'Solar Energy Basics',
      description: 'Fundamental concepts of solar energy and photovoltaic technology',
      duration: '2-3 hours',
      level: 'Beginner',
      modules: 6,
      url: "https://www.energy.gov/eere/solar/solar-photovoltaic-technology-basics",
      icon: '☀️'
    },
    {
      id: 'installation',
      title: 'Solar Installation Process',
      description: 'Step-by-step guide to solar panel installation and setup',
      duration: '4-5 hours',
      level: 'Intermediate',
      modules: 8,
      url: 'https://www.electronicsandyou.com/solar-panel-installation-guide-step-by-step-process.html',
      icon: '🔧'
    },
    {
      id: 'financing',
      title: 'Solar Financing & Economics',
      description: 'Understanding costs, savings, incentives, and ROI calculations',
      duration: '3-4 hours',
      level: 'Beginner',
      modules: 7,
      url: 'https://www.nrel.gov/analysis/tech-lcoe-documentation.html',
      icon: '💰'
    },
    {
      id: 'technology',
      title: 'Advanced Solar Technologies',
      description: 'Latest innovations in solar cell technology and efficiency',
      duration: '5-6 hours',
      level: 'Advanced',
      modules: 10,
      url: 'https://www.nrel.gov/pv/',
      icon: '🔬'
    },
    {
      id: 'maintenance',
      title: 'Solar System Maintenance',
      description: 'Best practices for maintaining and optimizing solar systems',
      duration: '2-3 hours',
      level: 'Intermediate',
      modules: 5,
      url: "https://www.energy.gov/femp/optimizing-solar-photovoltaic-performance-longevity",
      icon: '⚙️'
    },
    {
      id: 'grid',
      title: 'Grid Integration & Storage',
      description: 'Understanding grid-tie systems, net metering, and battery storage',
      duration: '4-5 hours',
      level: 'Advanced',
      modules: 9,
      url: 'https://www.nrel.gov/grid/',
      icon: '🔋'
    },
    {
      id: 'policy',
      title: 'Solar Policy & Regulations',
      description: 'Government policies, incentives, and regulatory frameworks',
      duration: '3-4 hours',
      level: 'Intermediate',
      modules: 6,
      url: 'https://www.epa.gov/environmental-economics/economic-incentives',
      icon: '📋'
    },
    {
      id: 'commercial',
      title: 'Commercial Solar Solutions',
      description: 'Large-scale solar installations for businesses and industries',
      duration: '6-7 hours',
      level: 'Advanced',
      modules: 12,
      url: 'https://www.seia.org/solar-means-business-report',
      icon: '🏢'
    },
    {
      id: 'environmental',
      title: 'Environmental Impact & Sustainability',
      description: 'Solar energy\'s role in climate change mitigation and sustainability',
      duration: '3-4 hours',
      level: 'Beginner',
      modules: 7,
      url: 'https://www.irena.org/solar',
      icon: '🌱'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-trust-green/10 text-trust-green';
      case 'Intermediate': return 'bg-solar-core/10 text-solar-core';
      case 'Advanced': return 'bg-energy-cyan/10 text-energy-cyan';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-trust flex items-center justify-center animate-pulse-glow">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-solar-gradient mb-6">
              Solar Education Hub
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive learning resources about solar energy technology, installation, financing, and sustainability. Choose your learning path and become a solar expert.
            </p>
          </div>

          {/* Learning Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="glass-premium border-trust-blue/20 p-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-trust flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-trust-blue mb-1">9</h3>
              <p className="text-sm text-muted-foreground">Learning Modules</p>
            </Card>
            
            <Card className="glass-premium border-solar-core/20 p-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-solar flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-tech-obsidian" />
              </div>
              <h3 className="text-2xl font-bold text-solar-core mb-1">35+</h3>
              <p className="text-sm text-muted-foreground">Hours of Content</p>
            </Card>
            
            <Card className="glass-premium border-energy-cyan/20 p-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-energy flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-tech-obsidian" />
              </div>
              <h3 className="text-2xl font-bold text-energy-cyan mb-1">10K+</h3>
              <p className="text-sm text-muted-foreground">Students</p>
            </Card>
            
            <Card className="glass-premium border-trust-green/20 p-6 text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-trust flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-trust-green mb-1">95%</h3>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </Card>
          </div>

          {/* Topics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Card 
                key={topic.id} 
                className={`glass-premium border-solar-core/20 p-6 hover:shadow-premium transition-all duration-300 cursor-pointer hover-lift ${
                  selectedTopic === topic.id ? 'ring-2 ring-solar-core/50' : ''
                }`}
                onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">{topic.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-solar-core mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {topic.description}
                      </p>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className={getLevelColor(topic.level)}>
                      {topic.level}
                    </Badge>
                    <Badge variant="outline" className="border-solar-core/20">
                      <Clock className="w-3 h-3 mr-1" />
                      {topic.duration}
                    </Badge>
                    <Badge variant="outline" className="border-solar-core/20">
                      {topic.modules} modules
                    </Badge>
                  </div>

                  {/* Action */}
                  <div className="pt-2 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-solar-core hover:bg-solar-core/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(topic.url, '_blank');
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Start Learning
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedTopic === topic.id && (
                  <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                    <h4 className="font-semibold text-trust-blue">What You'll Learn:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {topic.id === 'basics' && (
                        <>
                          <li>• How solar cells convert sunlight to electricity</li>
                          <li>• Types of solar panel technologies</li>
                          <li>• Solar system components and design</li>
                          <li>• Energy efficiency and optimization</li>
                        </>
                      )}
                      {topic.id === 'installation' && (
                        <>
                          <li>• Site assessment and system sizing</li>
                          <li>• Mounting systems and electrical connections</li>
                          <li>• Permits and inspection processes</li>
                          <li>• Safety protocols and best practices</li>
                        </>
                      )}
                      {topic.id === 'financing' && (
                        <>
                          <li>• Solar system costs and pricing models</li>
                          <li>• Federal and state incentives</li>
                          <li>• Financing options and loan programs</li>
                          <li>• ROI calculations and payback periods</li>
                        </>
                      )}
                      {topic.id === 'technology' && (
                        <>
                          <li>• Next-generation solar cell technologies</li>
                          <li>• Efficiency improvements and innovations</li>
                          <li>• Emerging materials and manufacturing</li>
                          <li>• Future trends and market developments</li>
                        </>
                      )}
                      {topic.id === 'maintenance' && (
                        <>
                          <li>• Routine cleaning and inspection schedules</li>
                          <li>• Performance monitoring and troubleshooting</li>
                          <li>• Component replacement and upgrades</li>
                          <li>• Warranty management and service calls</li>
                        </>
                      )}
                      {topic.id === 'grid' && (
                        <>
                          <li>• Grid-tie inverter operation and selection</li>
                          <li>• Net metering policies and billing</li>
                          <li>• Battery storage system integration</li>
                          <li>• Microgrids and energy independence</li>
                        </>
                      )}
                      {topic.id === 'policy' && (
                        <>
                          <li>• Federal renewable energy policies</li>
                          <li>• State-level solar programs and incentives</li>
                          <li>• Utility regulations and interconnection</li>
                          <li>• International solar market trends</li>
                        </>
                      )}
                      {topic.id === 'commercial' && (
                        <>
                          <li>• Commercial system design and engineering</li>
                          <li>• Power purchase agreements (PPAs)</li>
                          <li>• Large-scale project financing</li>
                          <li>• Operations and maintenance contracts</li>
                        </>
                      )}
                      {topic.id === 'environmental' && (
                        <>
                          <li>• Carbon footprint reduction calculations</li>
                          <li>• Life cycle assessment of solar systems</li>
                          <li>• Recycling and end-of-life management</li>
                          <li>• Environmental benefits and reporting</li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <Card className="glass-premium border-solar-core/20 p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-solar-core mb-4">
              Ready to Become a Solar Expert?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of students who have mastered solar energy technology through our comprehensive learning modules. Start with the basics or dive into advanced topics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-solar">
                <BookOpen className="w-4 h-4 mr-2" />
                Start Learning Journey
              </Button>
              <Button variant="outline" className="border-solar-core/20 hover:bg-solar-core/10">
                Download Study Guide
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SolarEd;
