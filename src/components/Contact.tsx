
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Star,
  Car,
  Plane,
  Train
} from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-ocean-blue text-ocean-blue">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-deep mb-6">
            Contact &
            <span className="block text-ocean-blue">Location</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our dedicated concierge team is available 24/7 to assist you in planning 
            your perfect luxury seaside getaway.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-ocean-deep mb-6">
                  Contact Information
                  <span className="block text-lg font-normal text-muted-foreground italic mt-1">
                    Informazioni di Contatto
                  </span>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-light/20 rounded-lg flex items-center justify-center mt-1">
                      <MapPin className="w-5 h-5 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-deep">Address</h4>
                      <p className="text-muted-foreground">Via Mare Azzurro 123</p>
                      <p className="text-muted-foreground">50123 Riviera Italiana, IT</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-light/20 rounded-lg flex items-center justify-center mt-1">
                      <Phone className="w-5 h-5 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-deep">Phone</h4>
                      <p className="text-muted-foreground">+39 123 456 7890</p>
                      <p className="text-muted-foreground">+39 123 456 7891 (WhatsApp)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-light/20 rounded-lg flex items-center justify-center mt-1">
                      <Mail className="w-5 h-5 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-deep">Email</h4>
                      <p className="text-muted-foreground">info@luxurylifeonbeach.com</p>
                      <p className="text-muted-foreground">reservations@luxurylifeonbeach.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ocean-light/20 rounded-lg flex items-center justify-center mt-1">
                      <Clock className="w-5 h-5 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ocean-deep">Reception Hours</h4>
                      <p className="text-muted-foreground">24/7 Concierge Service</p>
                      <p className="text-muted-foreground">Check-in: 3:00 PM | Check-out: 11:00 AM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-ocean-deep">5.0 Excellence Rating</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Outstanding service and breathtaking accommodations. 
                    Highly recommended for luxury travelers." - TripAdvisor
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Transportation */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-serif font-semibold text-ocean-deep mb-6">
                  How to Reach Us
                  <span className="block text-base font-normal text-muted-foreground italic mt-1">
                    Come Raggiungerci
                  </span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Plane className="w-5 h-5 text-ocean-blue" />
                    <span className="text-sm">Florence Airport - 45 minutes drive</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Train className="w-5 h-5 text-ocean-blue" />
                    <span className="text-sm">Central Train Station - 20 minutes drive</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-ocean-blue" />
                    <span className="text-sm">Complimentary valet parking available</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-semibold text-ocean-deep mb-6">
                  Send us a Message
                  <span className="block text-lg font-normal text-muted-foreground italic mt-1">
                    Inviaci un Messaggio
                  </span>
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ocean-deep mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Enter your first name"
                        className="border-ocean-light focus:border-ocean-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ocean-deep mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Enter your last name"
                        className="border-ocean-light focus:border-ocean-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ocean-deep mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="Enter your email address"
                      className="border-ocean-light focus:border-ocean-blue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ocean-deep mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-ocean-light focus:border-ocean-blue"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-ocean-deep mb-2">
                        Check-in Date
                      </label>
                      <Input 
                        type="date"
                        className="border-ocean-light focus:border-ocean-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-ocean-deep mb-2">
                        Check-out Date
                      </label>
                      <Input 
                        type="date"
                        className="border-ocean-light focus:border-ocean-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ocean-deep mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your requirements, special requests, or any questions you may have..."
                      rows={4}
                      className="border-ocean-light focus:border-ocean-blue"
                    />
                  </div>

                  <Button className="w-full ocean-gradient text-white hover:opacity-90 transition-opacity">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 2 hours during business hours. 
                    For urgent requests, please call us directly.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="animate-fade-in">
          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <div className="relative h-96 bg-gradient-to-br from-ocean-light to-ocean-blue flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-serif font-semibold mb-2">Prime Beachfront Location</h3>
                <p className="text-lg opacity-90">Via Mare Azzurro 123, Riviera Italiana</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-white text-white hover:bg-white hover:text-ocean-deep"
                >
                  View on Google Maps
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
