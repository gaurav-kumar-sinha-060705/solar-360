import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Calculator, Zap, PiggyBank } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SolarPay = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const calculateSavings = async () => {
    if (!monthlyBill || parseFloat(monthlyBill) <= 0) {
      toast({
        title: "Invalid Bill Amount",
        description: "Please enter a valid monthly electricity bill amount",
        variant: "destructive"
      });
      return;
    }

    setIsCalculating(true);
    
    // Simulate calculation
    setTimeout(() => {
      const monthly = parseFloat(monthlyBill);
      const annual = monthly * 12;
      const systemCost = annual * 8; // 8x annual bill as system cost
      
      setResults({
        monthlyBill: monthly,
        annualBill: annual,
        systemCost: systemCost,
        savings10: annual * 10 - systemCost,
        savings20: annual * 20 - systemCost,
        savings30: annual * 30 - systemCost,
        paybackPeriod: Math.round(systemCost / annual),
        monthlyPayment: systemCost / 120, // 10-year financing
        roi10: ((annual * 10 - systemCost) / systemCost * 100),
        roi20: ((annual * 20 - systemCost) / systemCost * 100),
        roi30: ((annual * 30 - systemCost) / systemCost * 100),
      });
      setIsCalculating(false);
      toast({
        title: "Calculation Complete",
        description: "Your solar savings analysis is ready!"
      });
    }, 2000);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-3xl bg-gradient-premium flex items-center justify-center animate-pulse-glow">
                <DollarSign className="w-8 h-8 text-tech-obsidian" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-solar-gradient mb-6">
              Solar Pay Calculator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate your potential savings by switching to solar energy. Enter your monthly electricity bill to see projected savings over 10, 20, and 30 years.
            </p>
          </div>

          {/* Input Section */}
          <Card className="glass-premium border-solar-core/20 p-8 mb-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-solar-core mb-2">
                  Monthly Electricity Bill
                </label>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="number"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      placeholder="Enter your monthly bill amount..."
                      className="pl-12 bg-tech-graphite/50 border-solar-core/20 focus:border-solar-core/50"
                      onKeyPress={(e) => e.key === 'Enter' && calculateSavings()}
                    />
                  </div>
                  <Button
                    onClick={calculateSavings}
                    disabled={isCalculating}
                    className="btn-solar px-8"
                  >
                    {isCalculating ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-tech-obsidian/20 border-t-tech-obsidian rounded-full animate-spin" />
                        Calculating...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Calculator className="w-4 h-4" />
                        Calculate
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          {results && (
            <div className="space-y-6">
              {/* System Overview */}
              <Card className="glass-premium border-trust-blue/20 p-6">
                <h3 className="text-xl font-semibold text-trust-blue mb-4">System Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Monthly Bill</p>
                    <p className="text-2xl font-bold text-solar-core">{formatCurrency(results.monthlyBill)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Annual Bill</p>
                    <p className="text-2xl font-bold text-energy-cyan">{formatCurrency(results.annualBill)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">System Cost</p>
                    <p className="text-2xl font-bold text-tech-silver">{formatCurrency(results.systemCost)}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                    <p className="text-2xl font-bold text-trust-green">{results.paybackPeriod} years</p>
                  </div>
                </div>
              </Card>

              {/* Savings Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-premium border-trust-green/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-trust flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-trust-green">10 Year Savings</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold text-trust-green">{formatCurrency(results.savings10)}</p>
                      <p className="text-sm text-muted-foreground">Total net savings</p>
                    </div>
                    <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                      {results.roi10.toFixed(1)}% ROI
                    </Badge>
                  </div>
                </Card>

                <Card className="glass-premium border-energy-cyan/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-energy flex items-center justify-center">
                      <Zap className="w-5 h-5 text-tech-obsidian" />
                    </div>
                    <h3 className="text-xl font-semibold text-energy-cyan">20 Year Savings</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold text-energy-cyan">{formatCurrency(results.savings20)}</p>
                      <p className="text-sm text-muted-foreground">Total net savings</p>
                    </div>
                    <Badge variant="secondary" className="bg-energy-cyan/10 text-energy-cyan">
                      {results.roi20.toFixed(1)}% ROI
                    </Badge>
                  </div>
                </Card>

                <Card className="glass-premium border-solar-core/20 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-solar flex items-center justify-center">
                      <PiggyBank className="w-5 h-5 text-tech-obsidian" />
                    </div>
                    <h3 className="text-xl font-semibold text-solar-core">30 Year Savings</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-3xl font-bold text-solar-core">{formatCurrency(results.savings30)}</p>
                      <p className="text-sm text-muted-foreground">Total net savings</p>
                    </div>
                    <Badge variant="secondary" className="bg-solar-core/10 text-solar-core">
                      {results.roi30.toFixed(1)}% ROI
                    </Badge>
                  </div>
                </Card>
              </div>

              {/* Financing Options */}
              <Card className="glass-premium border-solar-core/20 p-6">
                <h3 className="text-xl font-semibold text-solar-core mb-4">Financing Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-trust-blue">Monthly Solar Payment</h4>
                    <p className="text-2xl font-bold text-solar-core">{formatCurrency(results.monthlyPayment)}</p>
                    <p className="text-sm text-muted-foreground">10-year financing at 3.99% APR</p>
                    <Badge variant="secondary" className="bg-trust-green/10 text-trust-green">
                      Save {formatCurrency(results.monthlyBill - results.monthlyPayment)}/month immediately
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-trust-blue">Cash Purchase Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• 30% Federal Tax Credit</li>
                      <li>• No interest payments</li>
                      <li>• Maximum long-term savings</li>
                      <li>• Immediate equity increase</li>
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

export default SolarPay;