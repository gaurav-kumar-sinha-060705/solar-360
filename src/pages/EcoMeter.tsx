import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Leaf, TrendingDown, DollarSign, BarChart3, Calculator, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const EcoMeter = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [householdSize, setHouseholdSize] = useState('');
  const [electricityRate, setElectricityRate] = useState('0.12');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const analyzeCarbon = async () => {
    if (!monthlyBill || !householdSize) {
      toast({
        title: "Missing Information",
        description: "Please enter your monthly bill and household size",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate carbon analysis
    setTimeout(() => {
      const monthly = parseFloat(monthlyBill);
      const size = parseInt(householdSize);
      const rate = parseFloat(electricityRate);
      
      // Calculate energy consumption
      const monthlyKwh = monthly / rate;
      const annualKwh = monthlyKwh * 12;
      
      // Carbon calculations (average grid emission factor: 0.92 lbs CO2/kWh)
      const monthlyCarbon = monthlyKwh * 0.92; // lbs CO2
      const annualCarbon = annualKwh * 0.92; // lbs CO2
      const carbonTons = annualCarbon / 2000; // convert to tons
      
      // Solar system sizing (assume 1.2 production ratio)
      const systemSize = annualKwh / (365 * 5 * 1.2); // kW
      const systemCost = systemSize * 3000; // $3/watt
      
      // Savings calculations
      const annualSavings = monthly * 12 * 0.9; // 90% bill reduction
      const carbonReduction = carbonTons * 0.95; // 95% carbon reduction
      const paybackPeriod = systemCost / annualSavings;
      
      // Environmental equivalents
      const treesEquivalent = carbonTons * 16; // 1 ton CO2 = 16 trees annually
      const carMiles = carbonTons * 2400; // 1 ton CO2 = 2400 car miles
      
      setResults({
        monthlyKwh: Math.round(monthlyKwh),
        annualKwh: Math.round(annualKwh),
        monthlyCarbon: Math.round(monthlyCarbon),
        annualCarbon: Math.round(annualCarbon),
        carbonTons: Math.round(carbonTons * 10) / 10,
        systemSize: Math.round(systemSize * 10) / 10,
        systemCost: Math.round(systemCost),
        annualSavings: Math.round(annualSavings),
        carbonReduction: Math.round(carbonReduction * 10) / 10,
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        treesEquivalent: Math.round(treesEquivalent),
        carMiles: Math.round(carMiles),
        perPersonCarbon: Math.round((carbonTons / size) * 10) / 10,
        nationalAverage: 16, // tons CO2 per person annually in US
        savings10yr: Math.round(annualSavings * 10),
        savings20yr: Math.round(annualSavings * 20),
        roi20yr: Math.round(((annualSavings * 20 - systemCost) / systemCost) * 100)
      });
      
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Your carbon footprint and ROI analysis is ready!"
      });
    }, 2500);
  };

  const getImpactLevel = (tons: number) => {
    if (tons < 5) return { level: 'Low', color: 'text-trust-green', bg: 'bg-trust-green/10' };
    if (tons < 10) return { level: 'Moderate', color: 'text-solar-core', bg: 'bg-solar-core/10' };
    if (tons < 15) return { level: 'High', color: 'text-energy-cyan', bg: 'bg-energy-cyan/10' };
    return { level: 'Very High', color: 'text-destructive', bg: 'bg-destructive/10' };
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
                <Leaf className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-solar-gradient mb-6">
              Eco Meter Analytics
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Analyze your carbon footprint from electricity consumption, track environmental impact, and calculate potential ROI from switching to solar energy.
            </p>
          </div>

          {/* Input Form */}
          <Card className="glass-premium border-solar-core/20 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Monthly Electricity Bill ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    placeholder="150"
                    className="pl-10 bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Household Size
                </label>
                <Input
                  type="number"
                  value={householdSize}
                  onChange={(e) => setHouseholdSize(e.target.value)}
                  placeholder="4"
                  className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Electricity Rate ($/kWh)
                </label>
                <Input
                  type="number"
                  step="0.01"
                  value={electricityRate}
                  onChange={(e) => setElectricityRate(e.target.value)}
                  placeholder="0.12"
                  className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                onClick={analyzeCarbon}
                disabled={isAnalyzing}
                className="btn-solar w-full"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-tech-obsidian/20 border-t-tech-obsidian rounded-full animate-spin" />
                    Analyzing Carbon Impact...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4" />
                    Analyze Carbon Footprint
                  </div>
                )}
              </Button>
            </div>
          </Card>

          {/* Results Section */}
          {results && (
            <div className="space-y-6">
              {/* Current Impact Overview */}
              <Card className="glass-premium border-trust-blue/20 p-6">
                <h3 className="text-xl font-semibold text-trust-blue mb-4">Current Environmental Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Annual Energy Use</p>
                    <p className="text-2xl font-bold text-energy-cyan">{results.annualKwh.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">kWh/year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Carbon Emissions</p>
                    <p className="text-2xl font-bold text-destructive">{results.carbonTons}</p>
                    <p className="text-xs text-muted-foreground">tons CO₂/year</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Per Person Impact</p>
                    <p className="text-2xl font-bold text-solar-core">{results.perPersonCarbon}</p>
                    <p className="text-xs text-muted-foreground">tons CO₂/person</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">vs National Average</p>
                    <Badge variant="secondary" className={getImpactLevel(results.carbonTons).bg + ' ' + getImpactLevel(results.carbonTons).color}>
                      {getImpactLevel(results.carbonTons).level}
                    </Badge>
                  </div>
                </div>
              </Card>

              {/* Environmental Equivalents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-premium border-trust-green/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-trust flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-trust-green">Environmental Equivalents</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Trees Needed Annually</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        {results.treesEquivalent} trees
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Car Miles Equivalent</span>
                      <Badge variant="secondary" className="bg-destructive/10 text-destructive">
                        {results.carMiles.toLocaleString()} miles
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monthly CO₂ Output</span>
                      <Badge variant="secondary" className="bg-energy-cyan/10 text-energy-cyan">
                        {results.monthlyCarbon} lbs
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="glass-premium border-solar-core/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-solar flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-tech-obsidian" />
                    </div>
                    <h3 className="text-xl font-semibold text-solar-core">Solar Impact Potential</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Recommended System Size</span>
                      <Badge variant="secondary" className="bg-solar-core/10 text-solar-core">
                        {results.systemSize} kW
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Carbon Reduction</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        {results.carbonReduction} tons CO₂/year
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Reduction Percentage</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        95%
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>

              {/* ROI Analysis */}
              <Card className="glass-premium border-energy-cyan/20 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-energy flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-tech-obsidian" />
                  </div>
                  <h3 className="text-xl font-semibold text-energy-cyan">Return on Investment Analysis</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">System Investment</p>
                    <p className="text-2xl font-bold text-tech-silver">${results.systemCost.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Annual Savings</p>
                    <p className="text-2xl font-bold text-trust-green">${results.annualSavings.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                    <p className="text-2xl font-bold text-solar-core">{results.paybackPeriod} years</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">10-Year Savings</span>
                      <span className="text-sm font-semibold text-trust-green">${results.savings10yr.toLocaleString()}</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">20-Year Savings</span>
                      <span className="text-sm font-semibold text-trust-green">${results.savings20yr.toLocaleString()}</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  
                  <div className="pt-2 border-t border-border/50">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">20-Year ROI</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green text-lg">
                        {results.roi20yr}%
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Action Items */}
              <Card className="glass-premium border-solar-core/20 p-6">
                <h3 className="text-xl font-semibold text-solar-core mb-4">Recommended Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-trust-green mb-2">🌱 Immediate Steps</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Switch to LED lighting throughout your home</li>
                      <li>• Upgrade to ENERGY STAR appliances</li>
                      <li>• Improve home insulation and weathersealing</li>
                      <li>• Consider a programmable thermostat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-solar-core mb-2">☀️ Solar Investment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Schedule a professional solar assessment</li>
                      <li>• Research local and federal incentives</li>
                      <li>• Get quotes from multiple solar installers</li>
                      <li>• Consider battery storage for energy independence</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EcoMeter;