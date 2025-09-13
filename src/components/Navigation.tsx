import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, Sun, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SignInDialog } from './SignInDialog';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Technology', href: '#technology' },
    { label: 'Solar AI', href: '/solar-ai' },
    { label: 'Solar Pay', href: '/solar-pay' },
    { label: 'Green Cell', href: '/green-cell' },
    { label: 'Solar Ed', href: '/solar-ed' },
    { label: 'Eco Meter', href: '/eco-meter' },
    { label: 'Agri Solar', href: '/agri-solar' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-solar flex items-center justify-center">
                <Sun className="w-6 h-6 text-space-deep animate-solar-spin" />
              </div>
              <div className="absolute inset-0 w-10 h-10 rounded-xl bg-gradient-solar opacity-20 blur-lg animate-pulse-glow" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-solar-gradient">Solar 360</h1>
              <p className="text-xs text-muted-foreground">Premium Energy Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-card-foreground/80 hover:text-solar-core transition-colors hover-lift"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-card-foreground/80 hover:text-solar-core transition-colors hover-lift"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <SignInDialog>
              <Button 
                variant="ghost" 
                className="text-solar-core hover:text-energy-blue hover:bg-solar-core/10"
              >
                Sign In
              </Button>
            </SignInDialog>
            <Button 
              className="btn-solar"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Get Started
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-solar-core"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-card-foreground/80 hover:text-solar-core transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-card-foreground/80 hover:text-solar-core transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <SignInDialog>
                  <Button 
                    variant="ghost" 
                    className="justify-start text-solar-core hover:text-energy-blue hover:bg-solar-core/10 w-full"
                  >
                    Sign In
                  </Button>
                </SignInDialog>
                <Button 
                  className="btn-solar justify-start"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Get Started
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};