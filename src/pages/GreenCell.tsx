import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Battery, Shield, Clock, Leaf, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const GreenCell = () => {
  const [purchaseDate, setPurchaseDate] = useState('');
  const [capacity, setCapacity] = useState('');
  const [technology, setTechnology] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const analyzePanelLifespan = async () => {
    if (!purchaseDate || !capacity || !technology || !manufacturer) {
      toast({
        title: "Missing Information",
        description: "Please fill in all panel details for accurate analysis",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      const purchaseYear = new Date(purchaseDate).getFullYear();
      const currentYear = new Date().getFullYear();
      const age = currentYear - purchaseYear;
      
      // Technology multipliers for lifespan
      const techMultipliers: { [key: string]: number } = {
        'monocrystalline': 1.0,
        'polycrystalline': 0.9,
        'thin-film': 0.8,
        'perc': 1.1,
        'bifacial': 1.15
      };
      
      const baseLifespan = 25;
      const multiplier = techMultipliers[technology] || 1.0;
      const expectedLifespan = Math.round(baseLifespan * multiplier);
      const remainingYears = Math.max(0, expectedLifespan - age);
      const currentEfficiency = Math.max(60, 100 - (age * 0.7)); // 0.7% degradation per year
      
      setResults({
        age,
        expectedLifespan,
        remainingYears,
        currentEfficiency: Math.round(currentEfficiency * 10) / 10,
        degradationRate: technology === 'perc' || technology === 'bifacial' ? 0.5 : 0.7,
        warrantyStatus: age < 25 ? 'Active' : 'Expired',
        recommendedAction: remainingYears > 10 ? 'maintain' : remainingYears > 5 ? 'monitor' : 'replace',
        carbonOffset: parseFloat(capacity) * 0.5 * (expectedLifespan - age), // kg CO2 per year
        energyGenerated: parseFloat(capacity) * 1.2 * age * 365, // kWh lifetime
        replacementCost: parseFloat(capacity) * 1.5 * 1000 // $1.5 per watt
      });
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Solar panel lifespan analysis is ready!"
      });
    }, 2500);
  };

  const getStatusColor = (action: string) => {
    switch (action) {
      case 'maintain': return 'text-trust-green';
      case 'monitor': return 'text-solar-core';
      case 'replace': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (action: string) => {
    switch (action) {
      case 'maintain': return <CheckCircle className="w-5 h-5 text-trust-green" />;
      case 'monitor': return <Clock className="w-5 h-5 text-solar-core" />;
      case 'replace': return <AlertTriangle className="w-5 h-5 text-destructive" />;
      default: return <Shield className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-trust flex items-center justify-center animate-pulse-glow">
                <Battery className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-solar-gradient mb-6">
              Green Cell Analyzer
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze your solar panel lifespan, efficiency degradation, and maintenance schedule based on technology, age, and usage patterns.
            </p>
          </div>

          {/* Input Form */}
          <Card className="glass-premium border-solar-core/20 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Purchase Date
                </label>
                <Input
                  type="date"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(e.target.value)}
                  className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  System Capacity (kW)
                </label>
                <Input
                  type="number"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  placeholder="e.g., 5.5"
                  className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Panel Technology
                </label>
                <Select value={technology} onValueChange={setTechnology}>
                  <SelectTrigger className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50">
                    <SelectValue placeholder="Select technology" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monocrystalline">Monocrystalline</SelectItem>
                    <SelectItem value="polycrystalline">Polycrystalline</SelectItem>
                    <SelectItem value="thin-film">Thin Film</SelectItem>
                    <SelectItem value="perc">PERC</SelectItem>
                    <SelectItem value="bifacial">Bifacial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Manufacturer
                </label>
                <Select value={manufacturer} onValueChange={setManufacturer}>
                  <SelectTrigger className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50">
                    <SelectValue placeholder="Select manufacturer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tier1">Tier 1 (Premium)</SelectItem>
                    <SelectItem value="tier2">Tier 2 (Standard)</SelectItem>
                    <SelectItem value="tier3">Tier 3 (Budget)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                onClick={analyzePanelLifespan}
                disabled={isAnalyzing}
                className="btn-solar w-full"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-tech-obsidian/20 border-t-tech-obsidian rounded-full animate-spin" />
                    Analyzing Panel Lifespan...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Battery className="w-4 h-4" />
                    Analyze Panel Lifespan
                  </div>
                )}
              </Button>
            </div>
          </Card>

          {/* Results Section */}
          {results && (
            <div className="space-y-6">
              {/* Status Overview */}
              <Card className="glass-premium border-trust-blue/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  {getStatusIcon(results.recommendedAction)}
                  <h3 className="text-xl font-semibold text-trust-blue">Panel Status Overview</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Panel Age</p>
                    <p className="text-2xl font-bold text-solar-core">{results.age} years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Remaining Life</p>
                    <p className="text-2xl font-bold text-trust-green">{results.remainingYears} years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Current Efficiency</p>
                    <p className="text-2xl font-bold text-energy-cyan">{results.currentEfficiency}%</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Warranty Status</p>
                    <Badge variant={results.warrantyStatus === 'Active' ? 'default' : 'destructive'}>
                      {results.warrantyStatus}
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Performance & Environmental Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-premium border-energy-cyan/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-energy flex items-center justify-center">
                      <Shield className="w-5 h-5 text-tech-obsidian" />
                    </div>
                    <h3 className="text-xl font-semibold text-energy-cyan">Performance Metrics</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Degradation Rate</span>
                      <Badge variant="secondary" className="bg-energy-cyan/10 text-energy-cyan">
                        {results.degradationRate}%/year
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Expected Lifespan</span>
                      <Badge variant="secondary" className="bg-solar-core/10 text-solar-core">
                        {results.expectedLifespan} years
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Energy Generated</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        {Math.round(results.energyGenerated).toLocaleString()} kWh
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="glass-premium border-trust-green/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-trust flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-trust-green">Environmental Impact</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Lifetime CO₂ Offset</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        {Math.round(results.carbonOffset)} kg
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Remaining Offset</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        {Math.round(results.carbonOffset * (results.remainingYears / results.expectedLifespan))} kg
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Replacement Cost</span>
                      <Badge variant="secondary" className="bg-tech-silver/10 text-tech-silver">
                        ${results.replacementCost.toLocaleString()}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Recommendations */}
              <Card className="glass-premium border-solar-core/20 p-6">
                <h3 className="text-xl font-semibold text-solar-core mb-4">Recommendations</h3>
                <div className={`space-y-3 ${getStatusColor(results.recommendedAction)}`}>
                  {results.recommendedAction === 'maintain' && (
                    <div>
                      <h4 className="font-semibold">✅ System in Good Condition</h4>
                      <p className="text-sm text-muted-foreground">Your panels are performing well. Continue regular maintenance and monitoring.</p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Clean panels quarterly</li>
                        <li>• Check inverter performance monthly</li>
                        <li>• Schedule annual professional inspection</li>
                      </ul>
                    </div>
                  )}
                  {results.recommendedAction === 'monitor' && (
                    <div>
                      <h4 className="font-semibold">⚠️ Increased Monitoring Recommended</h4>
                      <p className="text-sm text-muted-foreground">Panels are aging. Monitor performance closely for decline.</p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Check energy output monthly</li>
                        <li>• Consider efficiency upgrade options</li>
                        <li>• Plan for replacement within 5-7 years</li>
                      </ul>
                    </div>
                  )}
                  {results.recommendedAction === 'replace' && (
                    <div>
                      <h4 className="font-semibold">🔄 Replacement Recommended</h4>
                      <p className="text-sm text-muted-foreground">Consider upgrading to newer, more efficient technology.</p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• New panels offer 20-25% higher efficiency</li>
                        <li>• Longer warranties and better degradation rates</li>
                        <li>• Potential for additional tax incentives</li>
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GreenCell;