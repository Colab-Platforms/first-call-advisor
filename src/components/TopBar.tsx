import { Phone, Mail, Clock, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-hero-overlay py-3 border-b border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-6 text-sm">
          <a href="tel:+1-800-555-0199" className="flex items-center gap-2 text-text-muted-light hover:text-text-light transition-colors">
            <Phone className="w-4 h-4 text-accent-red" />
            <span>+1-800-555-0199</span>
          </a>
          <div className="flex items-center gap-2 text-text-muted-light">
            <Clock className="w-4 h-4 text-accent-red" />
            <span>Mon-Fri : 9:00 - 18:00</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="mailto:contact@firstcalladvisory.com" className="flex items-center gap-2 text-text-muted-light hover:text-text-light transition-colors text-sm">
            <Mail className="w-4 h-4 text-accent-red" />
            <span>contact@firstcalladvisory.com</span>
          </a>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-muted-light hover:text-text-light transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-text-muted-light hover:text-text-light transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="text-text-muted-light hover:text-text-light transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-text-muted-light hover:text-text-light transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
