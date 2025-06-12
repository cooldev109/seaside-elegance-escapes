
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Users, MapPin, Star, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  const scrollToApartments = () => {
    const apartmentsSection = document.getElementById('apartments');
    if (apartmentsSection) {
      apartmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200&h=800&fit=crop"
          alt="Luxury beachfront view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-40 right-16 w-16 h-16 bg-ocean-blue/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-white/80 text-sm">5-Star Luxury Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Luxury Life
              <span className="block text-ocean-light">on Beach</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the ultimate in seaside luxury with our premium beachfront apartments. 
              Where elegance meets the ocean's endless beauty.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="ocean-gradient text-white px-8 py-3 text-lg hover:opacity-90 transition-opacity"
                onClick={scrollToApartments}
              >
                Discover Apartments
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-ocean-deep px-8 py-3 text-lg transition-colors"
                style={{ background: 'linear-gradient(135deg, rgb(32, 64, 96) 0%, rgb(29, 143, 201) 100%)' }}
              >
                Virtual Tour
              </Button>
            </div>
          </div>

          {/* Booking Widget */}
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl animate-scale-in max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-deep flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Check-in
                  </label>
                  <Input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="border-ocean-light focus:border-ocean-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-deep flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Check-out
                  </label>
                  <Input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="border-ocean-light focus:border-ocean-blue"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-ocean-deep flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 border border-ocean-light rounded-md focus:outline-none focus:border-ocean-blue bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                <Button className="ocean-gradient text-white h-10 hover:opacity-90 transition-opacity">
                  Search Availability
                </Button>
              </div>

              <div className="mt-6 flex items-center justify-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Riviera Italiana, Luxury Coastal Resort</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
