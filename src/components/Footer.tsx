
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Star
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ocean-deep text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-light to-white rounded-lg flex items-center justify-center">
                <span className="text-ocean-deep font-bold text-xl">🏖️</span>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Luxury Life on Beach</h3>
                <p className="text-sm text-ocean-light">Premium Seaside Living</p>
              </div>
            </div>
            <p className="text-ocean-light leading-relaxed mb-6">
              Experience unparalleled luxury and comfort in our beachfront accommodations. 
              Where sophisticated elegance meets the timeless beauty of the Italian coastline.
            </p>
            <div className="flex items-center space-x-1 mb-4">
              <div className="flex items-center space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-ocean-light ml-2">5.0 Excellence Rating</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-ocean-light hover:text-white transition-colors">Home</a></li>
              <li><a href="#apartments" className="text-ocean-light hover:text-white transition-colors">Apartments</a></li>
              <li><a href="#amenities" className="text-ocean-light hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="text-ocean-light hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-ocean-light hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Special Offers</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Virtual Tour</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Luxury Accommodations</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Concierge Service</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Spa & Wellness</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Fine Dining</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Event Planning</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Airport Transfer</a></li>
              <li><a href="#" className="text-ocean-light hover:text-white transition-colors">Private Tours</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-light mt-0.5" />
                <div>
                  <p className="text-ocean-light">Via Mare Azzurro 123</p>
                  <p className="text-ocean-light">50123 Riviera Italiana, IT</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-light" />
                <p className="text-ocean-light">+39 123 456 7890</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-light" />
                <p className="text-ocean-light">info@luxurylifeonbeach.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-ocean-light/20 rounded-lg flex items-center justify-center hover:bg-ocean-light/30 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-ocean-light/20 rounded-lg flex items-center justify-center hover:bg-ocean-light/30 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-ocean-light/20 rounded-lg flex items-center justify-center hover:bg-ocean-light/30 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-ocean-light/20 rounded-lg flex items-center justify-center hover:bg-ocean-light/30 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-ocean-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-ocean-light">
              © {currentYear} Luxury Life on Beach. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-ocean-light hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-ocean-light hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-ocean-light hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
