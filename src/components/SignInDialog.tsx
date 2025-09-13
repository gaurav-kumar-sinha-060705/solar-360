import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { User, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from './ui/use-toast';

interface SignInDialogProps {
  children: React.ReactNode;
}

export const SignInDialog = ({ children }: SignInDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    id: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Generate a unique ID if not provided
    const userId = formData.id || `SOLAR-${Date.now()}`;
    
    // Store user data (in a real app, this would go to a backend)
    localStorage.setItem('solar360User', JSON.stringify({
      ...formData,
      id: userId,
      signUpDate: new Date().toISOString()
    }));

    toast({
      title: "Welcome to Solar 360!",
      description: `Account created successfully. Your ID: ${userId}`,
    });

    setIsOpen(false);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      id: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-solar-gradient">
            Join Solar 360
          </DialogTitle>
        </DialogHeader>
        
        <Card className="glass-card p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-solar-core">
                Full Name *
              </Label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 glass-card border-solar-core/30 focus:border-solar-core"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-solar-core">
                Email Address *
              </Label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="pl-10 glass-card border-solar-core/30 focus:border-solar-core"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-solar-core">
                Phone Number *
              </Label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="pl-10 glass-card border-solar-core/30 focus:border-solar-core"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Location Field */}
            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium text-solar-core">
                Location (Optional)
              </Label>
              <div className="relative">
                <MapPin className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                <Input
                  id="location"
                  type="text"
                  placeholder="City, State, Country"
                  className="pl-10 glass-card border-solar-core/30 focus:border-solar-core"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                />
              </div>
            </div>

            {/* Custom ID Field */}
            <div className="space-y-2">
              <Label htmlFor="id" className="text-sm font-medium text-solar-core">
                Preferred User ID (Optional)
              </Label>
              <Input
                id="id"
                type="text"
                placeholder="Leave blank for auto-generated ID"
                className="glass-card border-solar-core/30 focus:border-solar-core"
                value={formData.id}
                onChange={(e) => handleInputChange('id', e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                If left blank, we'll generate a unique ID for you
              </p>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="btn-solar w-full">
              Create Account
            </Button>

            {/* Terms */}
            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </Card>
      </DialogContent>
    </Dialog>
  );
};