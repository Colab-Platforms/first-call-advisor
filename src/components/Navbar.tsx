import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { servicesData } from "@/data/servicesData";
import { useContactForm } from "@/contexts/ContactFormContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);
  const { openContactForm } = useContactForm();
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
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 text-slate-900 backdrop-blur-md shadow-md border-slate-200/80 py-1"
          : "bg-hero-bg/95 text-white backdrop-blur-md shadow-lg border-white/10 py-2"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-2 md:py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center -ml-2 md:-ml-4 lg:-ml-6 group">
            {!logoError ? (
              <div className="bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-200/60 transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center">
                <img 
                  className="h-8 md:h-9 lg:h-10 w-auto object-contain max-w-none" 
                  src="https://res.cloudinary.com/dtupa1lfb/image/upload/v1786347975/First_Call_Advisory_Logo_1_e8w8nn.png" 
                  alt="First Call Advisory Logo"
                  onError={() => {
                    console.log('Logo image failed to load, switching to text logo');
                    setLogoError(true);
                  }}
                  onLoad={() => {
                    console.log('Logo image loaded successfully');
                  }}
                />
              </div>
            ) : (
              <span className={cn(
                "text-xl md:text-2xl font-serif font-bold tracking-tight flex items-baseline gap-1",
                isScrolled ? "text-slate-900" : "text-white"
              )}>
                FIRST<span className="text-accent-gold">CALL</span>
                <span className={cn(
                  "text-xs uppercase tracking-widest font-sans font-normal ml-1",
                  isScrolled ? "text-slate-600" : "text-white/80"
                )}>ADVISORY</span>
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
                      className={cn(
                        "px-3 py-2 text-sm font-semibold transition-colors flex items-center gap-1 rounded-md whitespace-nowrap",
                        isScrolled
                          ? "text-slate-800 hover:text-accent-primary hover:bg-slate-100/80"
                          : "text-white hover:text-accent-gold hover:bg-white/10"
                      )}
                    >
                      {service.label}
                      <ChevronDown className={cn(
                        "w-3.5 h-3.5 transition-transform group-hover:rotate-180",
                        isScrolled ? "text-slate-500" : "text-white/70"
                      )} />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <ul className={cn(
                        "w-[300px] border rounded-md shadow-2xl p-3 space-y-1",
                        isScrolled
                          ? "bg-white border-slate-200/90 text-slate-800"
                          : "bg-hero-bg/98 backdrop-blur-lg border-white/15 text-white"
                      )}>
                        {service.subServices.map((subService) => (
                          <li key={subService.slug}>
                            <Link
                              to={`/services/${service.slug}/${subService.slug}`}
                              className={cn(
                                "block select-none rounded-sm p-3 text-sm font-medium leading-normal outline-none transition-colors",
                                isScrolled
                                  ? "text-slate-700 hover:text-accent-primary hover:bg-slate-100"
                                  : "text-white/90 hover:text-white hover:bg-white/15"
                              )}
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
                    className={cn(
                      "inline-flex h-10 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-semibold transition-colors whitespace-nowrap",
                      isScrolled
                        ? "text-slate-800 hover:text-accent-primary hover:bg-slate-100/80"
                        : "text-white hover:text-accent-gold hover:bg-white/10"
                    )}
                  >
                    {service.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block ml-8 lg:ml-12">
            <Button 
              onClick={openContactForm}
              className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all whitespace-nowrap"
            >
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "xl:hidden p-2 rounded-md transition-colors",
              isScrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
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
          <div className={cn(
            "xl:hidden mt-4 pb-6 border-t pt-4 animate-fade-in",
            isScrolled ? "border-slate-200" : "border-white/10"
          )}>
            <div className="flex flex-col gap-1">
              {servicesData.map((service) => (
                <div key={service.label}>
                  {service.subServices.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(service.label)}
                        className={cn(
                          "flex items-center justify-between w-full py-3 px-4 transition-colors rounded-md font-semibold",
                          isScrolled
                            ? "text-slate-800 hover:bg-slate-100"
                            : "text-white hover:text-accent-gold hover:bg-white/10"
                        )}
                      >
                        <span>{service.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            isScrolled ? "text-slate-500" : "text-white/70",
                            openMobileSubmenu === service.label && "rotate-180 text-accent-primary"
                          )}
                        />
                      </button>
                      {openMobileSubmenu === service.label && (
                        <div className={cn(
                          "ml-4 border-l-2 pl-4 mt-2 mb-2 animate-fade-in space-y-1",
                          isScrolled ? "border-accent-primary/60" : "border-accent-gold/50"
                        )}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="block py-2 px-2 text-sm text-accent-primary font-bold hover:underline transition-colors rounded"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            View All {service.label}
                          </Link>
                          {service.subServices.map((subService) => (
                            <Link
                              key={subService.slug}
                              to={`/services/${service.slug}/${subService.slug}`}
                              className={cn(
                                "block py-2 px-2 text-sm transition-colors rounded font-medium",
                                isScrolled
                                  ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                                  : "text-white/90 hover:text-white hover:bg-white/10"
                              )}
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
                      className={cn(
                        "block py-3 px-4 transition-colors rounded-md font-semibold",
                        isScrolled
                          ? "text-slate-800 hover:bg-slate-100"
                          : "text-white hover:text-accent-gold hover:bg-white/10"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className={cn("mt-4 pt-4 border-t", isScrolled ? "border-slate-200" : "border-white/10")}>
                <Button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openContactForm();
                  }}
                  className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold w-full py-3 shadow-md"
                >
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
