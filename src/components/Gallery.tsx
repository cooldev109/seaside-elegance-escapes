
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', nameIt: 'Tutto' },
    { id: 'apartments', name: 'Apartments', nameIt: 'Appartamenti' },
    { id: 'amenities', name: 'Amenities', nameIt: 'Servizi' },
    { id: 'views', name: 'Ocean Views', nameIt: 'Viste Oceano' },
    { id: 'dining', name: 'Dining', nameIt: 'Ristorazione' }
  ];

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop',
      category: 'views',
      title: 'Infinity Pool Ocean View',
      titleIt: 'Vista Oceano Piscina Infinity'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
      category: 'apartments',
      title: 'Luxury Suite Living Room',
      titleIt: 'Soggiorno Suite di Lusso'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop',
      category: 'views',
      title: 'Panoramic Coastal View',
      titleIt: 'Vista Panoramica Costiera'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      category: 'apartments',
      title: 'Modern Kitchen Design',
      titleIt: 'Design Cucina Moderna'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      category: 'apartments',
      title: 'Master Bedroom Suite',
      titleIt: 'Camera da Letto Principale'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&sat=-50',
      category: 'amenities',
      title: 'Spa Treatment Room',
      titleIt: 'Sala Trattamenti Spa'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&hue=30',
      category: 'dining',
      title: 'Beachfront Restaurant',
      titleIt: 'Ristorante Fronte Mare'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=600&fit=crop&hue=60',
      category: 'views',
      title: 'Sunset Terrace View',
      titleIt: 'Vista Terrazza al Tramonto'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop&brightness=110',
      category: 'amenities',
      title: 'Fitness Center',
      titleIt: 'Centro Fitness'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage ? filteredImages.find(img => img.id === selectedImage) : null;

  return (
    <section id="gallery" className="py-20 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Visual Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Luxury
            <span className="block text-ocean-blue">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our stunning collection of luxury accommodations, breathtaking ocean views, 
            and world-class amenities through our curated gallery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={
                activeCategory === category.id 
                  ? "ocean-gradient text-white" 
                  : "border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm opacity-80 italic">{image.titleIt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={closeLightbox}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="w-full h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <h3 className="text-xl font-semibold mb-1">{selectedImageData.title}</h3>
                <p className="text-sm opacity-80 italic">{selectedImageData.titleIt}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-8">
            View Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
