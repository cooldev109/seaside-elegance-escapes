
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'IT' : 'EN');
  };

  const navigation = [
    { name: language === 'EN' ? 'Home' : 'Casa', href: '#home' },
    { name: language === 'EN' ? 'Apartments' : 'Appartamenti', href: '#apartments' },
    { name: language === 'EN' ? 'Amenities' : 'Servizi', href: '#amenities' },
    { name: language === 'EN' ? 'Gallery' : 'Galleria', href: '#gallery' },
    { name: language === 'EN' ? 'Contact' : 'Contatti', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 ocean-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🏖️</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-ocean-deep">
                Luxury Life on Beach
              </h1>
              <p className="text-xs text-muted-foreground">
                {language === 'EN' ? 'Premium Seaside Living' : 'Vita di Lusso al Mare'}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-ocean-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language}</span>
            </Button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+39 123 456 789</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@luxurylifeonbeach.com</span>
              </div>
            </div>

            {/* Book Now Button */}
            <Button className="hidden sm:inline-flex ocean-gradient text-white hover:opacity-90 transition-opacity">
              {language === 'EN' ? 'Book Now' : 'Prenota Ora'}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-ocean-blue transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language}</span>
                </Button>
                <Button className="ocean-gradient text-white">
                  {language === 'EN' ? 'Book Now' : 'Prenota Ora'}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
