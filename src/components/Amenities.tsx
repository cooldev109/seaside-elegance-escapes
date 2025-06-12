
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Waves, 
  Utensils, 
  Dumbbell, 
  Car, 
  Wifi, 
  Shield, 
  Clock, 
  Sparkles,
  Wine,
  Palmtree,
  Camera,
  Heart
} from 'lucide-react';

const Amenities = () => {
  const amenityCategories = [
    {
      title: 'Wellness & Recreation',
      titleIt: 'Benessere e Ricreazione',
      icon: Heart,
      color: 'text-rose-500',
      items: [
        { name: 'Infinity Pool', nameIt: 'Piscina Infinity', icon: Waves },
        { name: 'Private Spa', nameIt: 'Spa Privata', icon: Sparkles },
        { name: 'Fitness Center', nameIt: 'Centro Fitness', icon: Dumbbell },
        { name: 'Yoga Pavilion', nameIt: 'Padiglione Yoga', icon: Palmtree },
      ]
    },
    {
      title: 'Dining & Entertainment',
      titleIt: 'Ristorazione e Intrattenimento',
      icon: Utensils,
      color: 'text-amber-500',
      items: [
        { name: 'Gourmet Restaurant', nameIt: 'Ristorante Gourmet', icon: Utensils },
        { name: 'Wine Cellar', nameIt: 'Cantina Vini', icon: Wine },
        { name: 'Beach Bar', nameIt: 'Bar Sulla Spiaggia', icon: Waves },
        { name: 'Private Chef', nameIt: 'Chef Privato', icon: Sparkles },
      ]
    },
    {
      title: 'Services & Facilities',
      titleIt: 'Servizi e Strutture',
      icon: Shield,
      color: 'text-blue-500',
      items: [
        { name: '24/7 Concierge', nameIt: 'Concierge 24/7', icon: Clock },
        { name: 'Valet Parking', nameIt: 'Parcheggio con Servizio', icon: Car },
        { name: 'High-Speed WiFi', nameIt: 'WiFi Ad Alta Velocità', icon: Wifi },
        { name: 'Photography Tours', nameIt: 'Tour Fotografici', icon: Camera },
      ]
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Premium Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            World-Class
            <span className="block text-ocean-blue">Amenities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Indulge in our comprehensive collection of luxury amenities, thoughtfully designed 
            to enhance every moment of your seaside retreat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {amenityCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-fade-in bg-white"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-ocean-light to-ocean-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-ocean-deep mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {category.titleIt}
                  </p>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={item.name} 
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-ocean-light/10 transition-colors duration-200"
                    >
                      <div className="w-10 h-10 bg-ocean-light/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-ocean-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-ocean-deep">{item.name}</h4>
                        <p className="text-sm text-muted-foreground italic">{item.nameIt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Amenity Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-rose-500 text-rose-500">
              Signature Experience
            </Badge>
            <h3 className="text-3xl font-serif font-bold text-ocean-deep mb-6">
              Infinity Pool & Spa
              <span className="block text-lg font-normal text-muted-foreground italic mt-2">
                Piscina Infinity e Centro Benessere
              </span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Immerse yourself in our stunning infinity pool that seamlessly blends with the ocean horizon. 
              Our world-class spa offers rejuvenating treatments inspired by the Mediterranean sea.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                  <span>Heated saltwater pool</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                  <span>Ocean-view treatment rooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                  <span>Hydrotherapy circuits</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                  <span>Private cabanas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                  <span>Aromatherapy sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                  <span>Wellness consultations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop"
                alt="Infinity pool overlooking the ocean"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Waves className="w-5 h-5" />
                  <span className="font-medium">Open 24/7</span>
                </div>
                <p className="text-sm opacity-90">Pool temperature: 28°C | Spa treatments: 9AM-9PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
