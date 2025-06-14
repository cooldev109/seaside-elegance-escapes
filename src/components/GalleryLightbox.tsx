
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  titleIt: string;
}

interface GalleryLightboxProps {
  isOpen: boolean;
  currentImage: GalleryImage | null;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const GalleryLightbox = ({ isOpen, currentImage, onClose, onNavigate }: GalleryLightboxProps) => {
  if (!isOpen || !currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full w-full">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Navigation Buttons */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
          onClick={() => onNavigate('prev')}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
          onClick={() => onNavigate('next')}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Image */}
        <img
          src={currentImage.src}
          alt={currentImage.title}
          className="w-full h-full object-contain rounded-lg"
        />

        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4 text-center text-white">
          <h3 className="text-xl font-semibold mb-1">{currentImage.title}</h3>
          <p className="text-sm opacity-80 italic">{currentImage.titleIt}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
