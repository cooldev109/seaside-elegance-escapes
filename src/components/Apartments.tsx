
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bed, Bath, Maximize, Wifi, Car, Waves, Star, Users } from 'lucide-react';

const Apartments = () => {
  const apartments = [
    {
      id: 1,
      name: 'Ocean View Suite',
      nameIt: 'Suite Vista Oceano',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop',
      price: '€450',
      rating: 4.9,
      reviews: 127,
      beds: 2,
      baths: 2,
      size: '85m²',
      capacity: 4,
      features: ['Ocean View', 'Balcony', 'Kitchen', 'WiFi'],
      featuresIt: ['Vista Oceano', 'Balcone', 'Cucina', 'WiFi'],
      description: 'Breathtaking panoramic ocean views with premium amenities and elegant furnishings.',
      descriptionIt: 'Viste panoramiche mozzafiato sull\'oceano con servizi premium e arredi eleganti.'
    },
    {
      id: 2,
      name: 'Beachfront Luxury Villa',
      nameIt: 'Villa di Lusso Fronte Mare',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      price: '€850',
      rating: 5.0,
      reviews: 89,
      beds: 3,
      baths: 3,
      size: '140m²',
      capacity: 6,
      features: ['Private Beach', 'Infinity Pool', 'Concierge', 'Spa Access'],
      featuresIt: ['Spiaggia Privata', 'Piscina Infinity', 'Concierge', 'Accesso Spa'],
      description: 'Ultimate luxury with private beach access and world-class amenities.',
      descriptionIt: 'Lusso supremo con accesso privato alla spiaggia e servizi di classe mondiale.'
    },
    {
      id: 3,
      name: 'Seaside Penthouse',
      nameIt: 'Attico Fronte Mare',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop',
      price: '€650',
      rating: 4.8,
      reviews: 156,
      beds: 2,
      baths: 2,
      size: '110m²',
      capacity: 4,
      features: ['Rooftop Terrace', 'Panoramic Views', 'Premium Kitchen', 'Wine Cellar'],
      featuresIt: ['Terrazza Panoramica', 'Viste Panoramiche', 'Cucina Premium', 'Cantina Vini'],
      description: 'Elevated luxury living with stunning 360-degree coastal views.',
      descriptionIt: 'Vita di lusso elevata con splendide viste costiere a 360 gradi.'
    }
  ];

  return (
    <section id="apartments" className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Premium Accommodations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Luxury Beachfront
            <span className="block text-ocean-blue">Apartments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each of our carefully curated apartments offers unparalleled luxury and comfort, 
            designed to provide you with an unforgettable seaside experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {apartments.map((apartment, index) => (
            <Card 
              key={apartment.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={apartment.image}
                  alt={apartment.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="ocean-gradient text-white">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    {apartment.rating}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-ocean-deep">
                    {apartment.reviews} reviews
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-ocean-deep mb-1">
                      {apartment.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic">
                      {apartment.nameIt}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-ocean-deep">{apartment.price}</span>
                    <span className="text-sm text-muted-foreground block">per night</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {apartment.description}
                </p>

                {/* Apartment Details */}
                <div className="grid grid-cols-4 gap-4 mb-4 py-4 border-y border-border">
                  <div className="text-center">
                    <Bed className="w-5 h-5 mx-auto mb-1 text-ocean-blue" />
                    <span className="text-sm font-medium">{apartment.beds}</span>
                    <span className="text-xs text-muted-foreground block">Beds</span>
                  </div>
                  <div className="text-center">
                    <Bath className="w-5 h-5 mx-auto mb-1 text-ocean-blue" />
                    <span className="text-sm font-medium">{apartment.baths}</span>
                    <span className="text-xs text-muted-foreground block">Baths</span>
                  </div>
                  <div className="text-center">
                    <Maximize className="w-5 h-5 mx-auto mb-1 text-ocean-blue" />
                    <span className="text-sm font-medium">{apartment.size}</span>
                    <span className="text-xs text-muted-foreground block">Size</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 mx-auto mb-1 text-ocean-blue" />
                    <span className="text-sm font-medium">{apartment.capacity}</span>
                    <span className="text-xs text-muted-foreground block">Guests</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {apartment.features.slice(0, 4).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-ocean-light/20 text-ocean-deep">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button className="flex-1 ocean-gradient text-white hover:opacity-90 transition-opacity">
                    Book Now
                  </Button>
                  <Button variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-8">
            View All Apartments
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Apartments;
