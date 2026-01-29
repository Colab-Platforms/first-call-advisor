import { Phone, Mail, Clock, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-hero-overlay py-2 md:py-3 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Phone - always visible, Hours - hidden on mobile */}
        <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
          <a href="tel:+1-800-555-0199" className="flex items-center gap-1.5 md:gap-2 text-text-muted-light hover:text-text-light transition-colors">
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-primary" />
            <span className="hidden xs:inline">+1-800-555-0199</span>
            <span className="xs:hidden">Call Us</span>
          </a>
          <div className="hidden md:flex items-center gap-2 text-text-muted-light">
            <Clock className="w-4 h-4 text-accent-primary" />
            <span>Mon-Fri : 9:00 - 18:00</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          {/* Email - hidden on mobile, truncated on tablet */}
          <a href="mailto:contact@firstcalladvisory.com" className="hidden sm:flex items-center gap-2 text-text-muted-light hover:text-text-light transition-colors text-xs md:text-sm">
            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent-primary" />
            <span className="hidden lg:inline">contact@firstcalladvisory.com</span>
            <span className="lg:hidden">Email Us</span>
          </a>
          
          {/* Social icons - fewer on mobile */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="text-text-muted-light hover:text-text-light transition-colors" aria-label="Facebook">
              <Facebook className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href="#" className="text-text-muted-light hover:text-text-light transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href="#" className="hidden sm:block text-text-muted-light hover:text-text-light transition-colors" aria-label="Twitter">
              <Twitter className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
            <a href="#" className="hidden sm:block text-text-muted-light hover:text-text-light transition-colors" aria-label="Instagram">
              <Instagram className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
