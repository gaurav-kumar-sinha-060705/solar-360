import { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wheat, MapPin, CloudRain, TrendingUp, Leaf, Sun, Droplets } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AgriSolar = () => {
  const [location, setLocation] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [soilType, setSoilType] = useState('');
  const [currentCrops, setCurrentCrops] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const { toast } = useToast();

  // Simulate weather data fetch
  useEffect(() => {
    const fetchWeatherData = () => {
      setWeather({
        temperature: 75,
        humidity: 65,
        rainfall: 28,
        sunshine: 8.5,
        season: 'Spring',
        forecast: 'Favorable growing conditions with adequate moisture'
      });
    };
    
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const analyzeFarmData = async () => {
    if (!location || !farmSize || !soilType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all farm details for comprehensive analysis",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const size = parseFloat(farmSize);
      
      // Crop recommendations based on conditions
      const cropDatabase = {
        'clay': ['corn', 'soybeans', 'wheat', 'alfalfa'],
        'sandy': ['potatoes', 'carrots', 'peanuts', 'sweet_corn'],
        'loam': ['tomatoes', 'peppers', 'lettuce', 'beans'],
        'silt': ['rice', 'sugarcane', 'cotton', 'onions']
      };
      
      const recommendedCrops = cropDatabase[soilType as keyof typeof cropDatabase] || ['corn', 'soybeans'];
      
      // Calculate agrovoltaic potential
      const solarCapacity = size * 0.5; // 50% coverage with panels
      const annualEnergy = solarCapacity * 1200; // kWh per kW
      const energyRevenue = annualEnergy * 0.12; // $0.12/kWh
      
      // Crop yield improvements under panels (shade protection)
      const yieldIncrease = 15; // 15% average increase
      const waterSavings = 20; // 20% water savings
      
      setResults({
        location,
        farmSize: size,
        soilType,
        recommendedCrops,
        solarCapacity: Math.round(solarCapacity * 10) / 10,
        annualEnergy: Math.round(annualEnergy),
        energyRevenue: Math.round(energyRevenue),
        yieldIncrease,
        waterSavings,
        totalRevenue: Math.round(energyRevenue + (size * 500 * (yieldIncrease / 100))), // Base crop revenue estimate
        carbonOffset: Math.round(annualEnergy * 0.0004 * 10) / 10, // tons CO2
        installationCost: Math.round(solarCapacity * 2500), // $2.50/watt for agrovoltaics
        paybackPeriod: Math.round((solarCapacity * 2500) / energyRevenue * 10) / 10,
        weatherOptimized: true,
        seasonalRecommendations: {
          spring: 'Plant shade-tolerant crops under panels',
          summer: 'Maximize cooling benefits from panel shade',
          fall: 'Harvest with equipment clearance considerations',
          winter: 'Plan maintenance and crop rotation'
        }
      });
      
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Your agrovoltaic farming recommendations are ready!"
      });
    }, 3000);
  };

  const getCropIcon = (crop: string) => {
    const icons: { [key: string]: string } = {
      'corn': '🌽',
      'soybeans': '🫘',
      'wheat': '🌾',
      'alfalfa': '🍀',
      'potatoes': '🥔',
      'carrots': '🥕',
      'peanuts': '🥜',
      'sweet_corn': '🌽',
      'tomatoes': '🍅',
      'peppers': '🌶️',
      'lettuce': '🥬',
      'beans': '🫘',
      'rice': '🌾',
      'sugarcane': '🎋',
      'cotton': '🌿',
      'onions': '🧅'
    };
    return icons[crop] || '🌱';
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
                <Wheat className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-solar-gradient mb-6">
              Agri Solar Intelligence
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Smart farming solutions combining agriculture with solar energy. Get crop recommendations, weather-integrated insights, and agrovoltaic system design for optimal farm productivity.
            </p>
          </div>

          {/* Weather Card */}
          {weather && (
            <Card className="glass-premium border-trust-blue/20 p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-trust flex items-center justify-center">
                  <CloudRain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-trust-blue">Current Weather Conditions</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Sun className="w-6 h-6 text-solar-core mx-auto mb-1" />
                  <p className="text-sm text-muted-foreground">Temperature</p>
                  <p className="font-semibold">{weather.temperature}°F</p>
                </div>
                <div className="text-center">
                  <Droplets className="w-6 h-6 text-trust-blue mx-auto mb-1" />
                  <p className="text-sm text-muted-foreground">Humidity</p>
                  <p className="font-semibold">{weather.humidity}%</p>
                </div>
                <div className="text-center">
                  <CloudRain className="w-6 h-6 text-energy-cyan mx-auto mb-1" />
                  <p className="text-sm text-muted-foreground">Rainfall</p>
                  <p className="font-semibold">{weather.rainfall}" month</p>
                </div>
                <div className="text-center">
                  <Sun className="w-6 h-6 text-solar-core mx-auto mb-1" />
                  <p className="text-sm text-muted-foreground">Sunshine</p>
                  <p className="font-semibold">{weather.sunshine} hrs/day</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-trust-green/10 rounded-lg">
                <p className="text-sm text-trust-green font-medium">{weather.forecast}</p>
              </div>
            </Card>
          )}

          {/* Input Form */}
          <Card className="glass-premium border-solar-core/20 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Farm Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, state or zip code"
                    className="pl-10 bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Farm Size (acres)
                </label>
                <Input
                  type="number"
                  value={farmSize}
                  onChange={(e) => setFarmSize(e.target.value)}
                  placeholder="100"
                  className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Soil Type
                </label>
                <Select value={soilType} onValueChange={setSoilType}>
                  <SelectTrigger className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay Soil</SelectItem>
                    <SelectItem value="sandy">Sandy Soil</SelectItem>
                    <SelectItem value="loam">Loam Soil</SelectItem>
                    <SelectItem value="silt">Silt Soil</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Current Crops (Optional)
                </label>
                <Input
                  value={currentCrops}
                  onChange={(e) => setCurrentCrops(e.target.value)}
                  placeholder="e.g., corn, soybeans"
                  className="bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <Button
                onClick={analyzeFarmData}
                disabled={isAnalyzing}
                className="btn-solar w-full"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-tech-obsidian/20 border-t-tech-obsidian rounded-full animate-spin" />
                    Analyzing Farm Data...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Wheat className="w-4 h-4" />
                    Generate Farm Intelligence
                  </div>
                )}
              </Button>
            </div>
          </Card>

          {/* Results Section */}
          {results && (
            <div className="space-y-6">
              {/* Crop Recommendations */}
              <Card className="glass-premium border-trust-green/20 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-trust flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-trust-green">Recommended Crops</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {results.recommendedCrops.map((crop: string, index: number) => (
                    <div key={index} className="text-center p-4 bg-trust-green/5 rounded-lg">
                      <div className="text-3xl mb-2">{getCropIcon(crop)}</div>
                      <p className="font-medium capitalize">{crop.replace('_', ' ')}</p>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green text-xs mt-1">
                        Optimal
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Agrovoltaic System */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-premium border-solar-core/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-solar flex items-center justify-center">
                      <Sun className="w-5 h-5 text-tech-obsidian" />
                    </div>
                    <h3 className="text-xl font-semibold text-solar-core">Solar Integration</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Solar Capacity</span>
                      <Badge variant="secondary" className="bg-solar-core/10 text-solar-core">
                        {results.solarCapacity} kW
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Annual Energy</span>
                      <Badge variant="secondary" className="bg-energy-cyan/10 text-energy-cyan">
                        {results.annualEnergy.toLocaleString()} kWh
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Energy Revenue</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        ${results.energyRevenue.toLocaleString()}/year
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Payback Period</span>
                      <Badge variant="secondary" className="bg-solar-core/10 text-solar-core">
                        {results.paybackPeriod} years
                      </Badge>
                    </div>
                  </div>
                </Card>

                <Card className="glass-premium border-trust-blue/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-trust flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-trust-blue">Agricultural Benefits</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Crop Yield Increase</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        +{results.yieldIncrease}%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Water Savings</span>
                      <Badge variant="secondary" className="bg-trust-blue/10 text-trust-blue">
                        -{results.waterSavings}%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Carbon Offset</span>
                      <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                        {results.carbonOffset} tons CO₂/year
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Total Annual Revenue</span>
                      <Badge variant="secondary" className="bg-solar-core/10 text-solar-core">
                        ${results.totalRevenue.toLocaleString()}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Seasonal Recommendations */}
              <Card className="glass-premium border-energy-cyan/20 p-6">
                <h3 className="text-xl font-semibold text-energy-cyan mb-4">Seasonal Farm Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-trust-green mb-2">🌱 Spring & Summer</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• {results.seasonalRecommendations.spring}</li>
                      <li>• {results.seasonalRecommendations.summer}</li>
                      <li>• Monitor soil moisture under panels</li>
                      <li>• Adjust irrigation for enhanced crop growth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-solar-core mb-2">🍂 Fall & Winter</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• {results.seasonalRecommendations.fall}</li>
                      <li>• {results.seasonalRecommendations.winter}</li>
                      <li>• Clean solar panels for optimal performance</li>
                      <li>• Plan cover crops for soil health</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Investment Overview */}
              <Card className="glass-premium border-solar-core/20 p-6">
                <h3 className="text-xl font-semibold text-solar-core mb-4">Investment Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Installation Cost</p>
                    <p className="text-2xl font-bold text-tech-silver">${results.installationCost.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Agrovoltaic system</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Annual Revenue Boost</p>
                    <p className="text-2xl font-bold text-trust-green">${(results.totalRevenue - results.farmSize * 500).toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">Above traditional farming</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Break-even</p>
                    <p className="text-2xl font-bold text-solar-core">{results.paybackPeriod} years</p>
                    <p className="text-xs text-muted-foreground">With dual land use</p>
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

export default AgriSolar;