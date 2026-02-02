import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/servicesData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === label ? null : label);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled || isMobileMenuOpen
          ? "bg-hero-bg/98 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-transparent">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 -ml-2 md:-ml-4 lg:-ml-6">
            {!logoError ? (
              <img 
                className="h-8 md:h-10 w-auto object-contain max-w-none" 
                src="/first-call-logo.png" 
                alt="FirstCall Advisory Logo"
                onError={() => {
                  console.log('Logo image failed to load, switching to text logo');
                  setLogoError(true);
                }}
                onLoad={() => {
                  console.log('Logo image loaded successfully');
                }}
              />
            ) : (
              <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
                FIRST<span className="text-accent-gold">CALL</span>
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1 ml-8 lg:ml-12">
            {servicesData.map((service) => (
              <div key={service.label} className="relative group">
                {service.subServices.length > 0 ? (
                  <>
                    <Link
                      to={`/services/${service.slug}`}
                      className="bg-transparent text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 rounded-md whitespace-nowrap"
                    >
                      {service.label}
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <ul className="w-[300px] bg-hero-bg border border-white/10 rounded-md shadow-lg p-3 space-y-1">
                        {service.subServices.map((subService) => (
                          <li key={subService.slug}>
                            <Link
                              to={`/services/${service.slug}/${subService.slug}`}
                              className="block select-none rounded-sm p-3 text-sm leading-none no-underline outline-none transition-colors text-white/70 hover:text-white hover:bg-white/10"
                            >
                              {subService.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white whitespace-nowrap"
                  >
                    {service.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block ml-8 lg:ml-12">
            <Button className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-6 py-2 whitespace-nowrap">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-6 pb-6 border-t border-white/10 pt-6 animate-fade-in">
            <div className="flex flex-col gap-1">
              {servicesData.map((service) => (
                <div key={service.label}>
                  {service.subServices.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(service.label)}
                        className="flex items-center justify-between w-full py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-md"
                      >
                        <span className="font-medium">{service.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openMobileSubmenu === service.label && "rotate-180"
                          )}
                        />
                      </button>
                      {openMobileSubmenu === service.label && (
                        <div className="ml-4 border-l-2 border-accent-primary/30 pl-4 mt-2 mb-2 animate-fade-in">
                          <Link
                            to={`/services/${service.slug}`}
                            className="block py-2 px-2 text-sm text-accent-primary font-medium hover:text-white transition-colors rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            View All {service.label}
                          </Link>
                          {service.subServices.map((subService) => (
                            <Link
                              key={subService.slug}
                              to={`/services/${service.slug}/${subService.slug}`}
                              className="block py-2 px-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors rounded"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subService.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={`/services/${service.slug}`}
                      className="block py-3 px-4 text-white/80 hover:text-white hover:bg-white/10 transition-colors rounded-md font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <Button className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold w-full py-3">
                  Get Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
