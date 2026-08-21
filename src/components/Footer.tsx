import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [logoError, setLogoError] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              {!logoError ? (
                <img 
                  className="h-18 md:h-20 w-auto object-contain max-w-none" 
                  src="https://res.cloudinary.com/dtupa1lfb/image/upload/v1787208901/First-Call-Advisory-Logo_1_wshhdg.png" 
                  alt="First Call Advisory Logo"
                  onError={() => {
                    console.log('Footer logo image failed to load, switching to text logo');
                    setLogoError(true);
                  }}
                  onLoad={() => {
                    console.log('Footer logo image loaded successfully');
                  }}
                />
              ) : (
                <span className="text-2xl font-serif font-bold text-text-light tracking-tight">
                  FIRST<span className="text-accent-primary">CALL</span>
                </span>
              )}
            </Link>
            <p className="text-text-muted-light mb-6 leading-relaxed">
              Your trusted partner for strategic business advisory and consulting services. 
              Delivering excellence since 1998.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-white/5 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-text-light mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-text-muted-light hover:text-text-light hover:pl-2 transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#services" className="text-text-muted-light hover:text-text-light hover:pl-2 transition-all">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-muted-light hover:text-text-light hover:pl-2 transition-all">
                  Contact Us
                </a>
              </li>
              <li>
              <Link to="/career" className="text-text-muted-light hover:text-text-light hover:pl-2 transition-all">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-text-light mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-muted-light">
                 25/25A, II nd Floor, 327, Nawab Bldg., D.N. Road, Opp. Thomas Cook, Mumbai G.P.O., <br />
                  Mumbai, Maharashtra, India, 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                {/* <Phone className="w-5 h-5 text-accent-primary flex-shrink-0" />
                <a href="tel:+1-800-555-0199" className="text-text-muted-light hover:text-text-light transition-colors">
                  +1-800-555-0199
                </a> */}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-primary flex-shrink-0" />
                <a href="mailto:contact@firstcalladvisory.com" className="text-text-muted-light hover:text-text-light transition-colors">
                  info@fcadvisory.in
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-semibold text-text-light mb-6">Newsletter</h4>
            <p className="text-text-muted-light mb-4">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <div className="flex gap-2">
              <Input 
                  placeholder="Your email" 
                className="bg-white/5 border-white/10 text-text-light placeholder:text-text-muted-light focus:border-primary flex-1 min-w-0"
              />
              <Button className="bg-primary hover:bg-primary/90 px-4 md:px-6 flex-shrink-0">
                →
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted-light text-xs md:text-sm text-center md:text-left">
            © 2024 First Call Advisory. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-text-muted-light">
            <a href="#" className="hover:text-text-light transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-light transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 md:w-10 md:h-10 rounded-sm bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
