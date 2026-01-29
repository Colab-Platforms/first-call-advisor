import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { number: "01", label: "Corporate Restructuring",},
  { number: "02", label: "Fundraising & Investment",},
  { number: "03", label: "Advisory and Legal ",},
  { number: "04", label: "Compliance", },
  { number: "05", label: "Buying & Selling of Companies",},
  { number:"06" ,label: "Other Services"}
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-hero-overlay/98 backdrop-blur-md shadow-lg"
          : "bg-blue"
      }`}
    >
      <div className="container mx-auto px-6 py-4 bg-transparent">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-2xl font-serif font-bold text-text-light tracking-tight">
              FIRST<span className="text-accent-red">CALL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.number}
                // href={item.href}
                className="nav-item nav-item-numbered group"
              >
                <span className="nav-item-number group-hover:text-accent-red transition-colors">
                  {item.number}
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="btn-primary">Get Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-text-light p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.number}
                  // href={item.href}
                  className="flex items-center gap-3 text-text-light/80 hover:text-text-light transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-accent-red text-sm">{item.number}</span>
                  <span>{item.label}</span>
                </a>
              ))}
              <Button className="btn-primary mt-4 w-full">Get Consultation</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
