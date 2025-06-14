
import { Button } from '@/components/ui/button';

interface Category {
  id: string;
  name: string;
  nameIt: string;
}

interface GalleryFilterProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const GalleryFilter = ({ categories, activeCategory, onCategoryChange }: GalleryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={activeCategory === category.id ? "default" : "outline"}
          className={
            activeCategory === category.id 
              ? "bg-blue-600 text-white hover:bg-blue-700" 
              : "border-blue-400 text-blue-100 bg-white/10 backdrop-blur-sm hover:bg-blue-600 hover:text-white"
          }
          onClick={() => onCategoryChange(category.id)}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default GalleryFilter;
