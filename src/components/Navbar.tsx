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
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-[66px] items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center flex-shrink-0 group relative"
          >
            {!logoError ? (
              <img
                className="w-[185px] md:w-[195px] lg:w-[200px] h-auto object-contain block max-w-none transition-transform duration-300 group-hover:scale-[1.02]"
                src="/first-call-logo-hd.png"
                alt="First Call Advisory Logo"
                onError={() => {
                  console.log("Logo image failed to load, switching to text logo");
                  setLogoError(true);
                }}
              />
            ) : (
              <span className="text-xl md:text-2xl font-serif font-bold text-slate-900 tracking-tight flex items-baseline gap-1">
                FIRST<span className="text-accent-primary">CALL</span>
                <span className="text-xs uppercase tracking-widest text-slate-600 font-sans font-normal ml-1">ADVISORY</span>
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-0.5 2xl:gap-1 ml-3 2xl:ml-5 flex-1 justify-center">
            {servicesData.map((service) => (
              <div key={service.label} className="relative group">
                {service.subServices.length > 0 ? (
                  <>
                    <Link
                      to={`/services/${service.slug}`}
                      className="h-10 px-2 2xl:px-3 text-[13px] 2xl:text-sm font-semibold text-slate-900 hover:text-accent-primary hover:bg-slate-100/80 transition-colors flex items-center gap-1 rounded-md whitespace-nowrap"
                    >
                      {service.label}
                      <ChevronDown className="w-3 h-3 text-slate-500 transition-transform group-hover:rotate-180 group-hover:text-accent-primary" />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <ul className="w-[300px] bg-white border border-slate-200 rounded-md shadow-2xl p-3 space-y-1">
                        {service.subServices.map((subService) => (
                          <li key={subService.slug}>
                            <Link
                              to={`/services/${service.slug}/${subService.slug}`}
                              className="block select-none rounded-sm p-3 text-sm font-medium leading-normal outline-none text-slate-700 hover:text-accent-primary hover:bg-slate-100 transition-colors"
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
                    className="inline-flex h-10 w-max items-center justify-center rounded-md px-2 2xl:px-3 text-[13px] 2xl:text-sm font-semibold text-slate-900 hover:text-accent-primary hover:bg-slate-100/80 transition-colors whitespace-nowrap"
                  >
                    {service.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block ml-3 2xl:ml-5 shrink-0">
            <Button
              onClick={openContactForm}
              className="h-10 bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-4 2xl:px-5 text-xs 2xl:text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap rounded-md"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-md transition-colors"
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
          <div className="xl:hidden mt-4 pb-6 border-t border-slate-200 pt-4 animate-fade-in bg-white">
            <div className="flex flex-col gap-1">
              {servicesData.map((service) => (
                <div key={service.label}>
                  {service.subServices.length > 0 ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(service.label)}
                        className="flex items-center justify-between w-full py-3 px-4 text-slate-900 hover:bg-slate-100 transition-colors rounded-md font-semibold"
                      >
                        <span>{service.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform text-slate-500",
                            openMobileSubmenu === service.label && "rotate-180 text-accent-primary"
                          )}
                        />
                      </button>
                      {openMobileSubmenu === service.label && (
                        <div className="ml-4 border-l-2 border-accent-primary/60 pl-4 mt-2 mb-2 animate-fade-in space-y-1">
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
                              className="block py-2 px-2 text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors rounded font-medium"
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
                      className="block py-3 px-4 text-slate-900 hover:bg-slate-100 transition-colors rounded-md font-semibold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-200">
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
