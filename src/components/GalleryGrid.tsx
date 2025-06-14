
import { Card } from '@/components/ui/card';
import { ZoomIn } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  titleIt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageId: number) => void;
}

const GalleryGrid = ({ images, onImageClick }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Card 
          key={image.id} 
          className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in bg-white/80 backdrop-blur-sm"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={() => onImageClick(image.id)}
        >
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center">
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
  );
};

export default GalleryGrid;
