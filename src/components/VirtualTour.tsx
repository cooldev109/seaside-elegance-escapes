
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, VolumeX, Volume2, Maximize, RotateCcw } from 'lucide-react';
import { useState } from 'react';

const VirtualTour = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section id="virtual-tour" className="py-20 elegant-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Virtual Tour
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our luxury beachfront apartments from the comfort of your home. 
            Take an immersive 360° tour and discover every detail of our premium accommodations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              {/* Virtual Tour Player */}
              <div className="relative aspect-video bg-ocean-deep">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=675&fit=crop"
                  alt="Virtual tour preview"
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="w-20 h-20 rounded-full ocean-gradient text-white hover:opacity-90 transition-opacity"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>

                {/* Tour Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20"
                    >
                      <RotateCcw className="w-5 h-5" />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Maximize className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tour Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🏖️</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-ocean-deep">Ocean View Suite</h3>
                <p className="text-muted-foreground">Experience our premium oceanfront accommodations</p>
                <Button variant="outline" className="w-full">Start Tour</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🏊</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-ocean-deep">Pool & Spa Area</h3>
                <p className="text-muted-foreground">Discover our luxury wellness facilities</p>
                <Button variant="outline" className="w-full">Start Tour</Button>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow bg-white/60 backdrop-blur-sm">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 ocean-gradient rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-serif font-semibold text-ocean-deep">Restaurant & Lounge</h3>
                <p className="text-muted-foreground">Explore our fine dining experiences</p>
                <Button variant="outline" className="w-full">Start Tour</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
