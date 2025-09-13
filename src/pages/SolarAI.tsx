import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Sun, Compass, Zap, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SolarAI = () => {
  const [address, setAddress] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const analyzeSolarOptimization = async () => {
    if (!address.trim()) {
      toast({
        title: "Address Required",
        description: "Please enter your address for analysis",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        location: address,
        coordinates: { lat: 37.7749, lng: -122.4194 },
        optimalTilt: 34,
        optimalAzimuth: 180,
        peakSunHours: 5.4,
        efficiency: 92,
        energyPotential: 8500,
        carbonOffset: 6.2
      });
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Solar optimization results are ready!"
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-solar flex items-center justify-center animate-pulse-glow">
                <Sun className="w-8 h-8 text-tech-obsidian" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-solar-gradient mb-6">
              Solar AI Optimizer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered solar panel orientation analysis for optimal sunlight absorption and energy generation based on your location
            </p>
          </div>

          {/* Input Section */}
          <Card className="glass-premium border-solar-core/20 p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Enter Your Address
                </label>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your complete address..."
                      className="pl-12 bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                      onKeyPress={(e) => e.key === 'Enter' && analyzeSolarOptimization()}
                    />
                  </div>
                  <Button
                    onClick={analyzeSolarOptimization}
                    disabled={isAnalyzing}
                    className="btn-solar px-8"
                  >
                    {isAnalyzing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-tech-obsidian/20 border-t-tech-obsidian rounded-full animate-spin" />
                        Analyzing...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Compass className="w-4 h-4" />
                        Analyze
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          {results && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Optimization Results */}
              <Card className="glass-premium border-trust-blue/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-trust flex items-center justify-center">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-blue">Panel Orientation</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Optimal Tilt Angle</span>
                    <Badge variant="secondary" className="bg-trust-blue/10 text-trust-blue">
                      {results.optimalTilt}°
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Optimal Azimuth</span>
                    <Badge variant="secondary" className="bg-trust-blue/10 text-trust-blue">
                      {results.optimalAzimuth}° (South)
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Peak Sun Hours</span>
                    <Badge variant="secondary" className="bg-solar-core/10 text-solar-core">
                      {results.peakSunHours} hrs/day
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Energy Potential */}
              <Card className="glass-premium border-energy-cyan/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-energy flex items-center justify-center">
                    <Zap className="w-5 h-5 text-tech-obsidian" />
                  </div>
                  <h3 className="text-xl font-semibold text-energy-cyan">Energy Production</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">System Efficiency</span>
                    <Badge variant="secondary" className="bg-energy-cyan/10 text-energy-cyan">
                      {results.efficiency}%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Annual Energy</span>
                    <Badge variant="secondary" className="bg-energy-cyan/10 text-energy-cyan">
                      {results.energyPotential.toLocaleString()} kWh
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Carbon Offset</span>
                    <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                      {results.carbonOffset} tons CO₂/year
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Location Details */}
              <Card className="glass-premium border-solar-core/20 p-6 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-solar flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-tech-obsidian" />
                  </div>
                  <h3 className="text-xl font-semibold text-solar-core">Location Analysis</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="font-medium">{results.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Coordinates</p>
                    <p className="font-medium">{results.coordinates.lat}, {results.coordinates.lng}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Recommendation</p>
                    <p className="font-medium text-trust-green">Excellent solar potential</p>
                  </div>
                </div>
              </Card>

              {/* CTA */}
              <Card className="glass-premium border-solar-core/20 p-6 md:col-span-2">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-solar-core mb-2">
                    Ready to Install Solar Panels?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Get a detailed quote based on your optimized solar configuration
                  </p>
                  <Button className="btn-solar">
                    Get Custom Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SolarAI;