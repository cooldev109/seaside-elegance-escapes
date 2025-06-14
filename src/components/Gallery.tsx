
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import GalleryFilter from './GalleryFilter';
import GalleryGrid from './GalleryGrid';
import GalleryLightbox from './GalleryLightbox';

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
    <section id="gallery" className="py-20 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-blue-500 text-blue-600">
            Visual Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Luxury
            <span className="block text-blue-200">Gallery</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Explore our stunning collection of luxury accommodations, breathtaking ocean views, 
            and world-class amenities through our curated gallery.
          </p>
        </div>

        <GalleryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <GalleryGrid 
          images={filteredImages}
          onImageClick={openLightbox}
        />

        <GalleryLightbox
          isOpen={selectedImage !== null}
          currentImage={selectedImageData}
          onClose={closeLightbox}
          onNavigate={navigateImage}
        />

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-blue-400 text-blue-100 bg-white/10 backdrop-blur-sm hover:bg-blue-600 hover:text-white px-8">
            View Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
