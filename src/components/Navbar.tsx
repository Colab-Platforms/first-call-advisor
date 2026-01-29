import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const servicesData = [
  {
    label: "Corporate Restructuring",
    href: "#corporate-restructuring",
    subServices: [
      "Merger & Amalgamation",
      "Demerger",
      "Reduction of Capital",
      "Capital Restructuring",
      "Buyback of Shares",
      "Delisting",
    ],
  },
  {
    label: "Fundraising & Investment",
    href: "#fundraising",
    subServices: [
      "Foreign Direct Investment (FDI)",
      "Overseas Direct Investment (ODI)",
      "Preferential Allotment & Private Placement",
      "ADR / GDR / FCCB Issues & ECB",
      "Public Issue / Rights Issue",
    ],
  },
  {
    label: "Advisory and Legal",
    href: "#advisory-legal",
    subServices: [
      "Taxation Advisory",
      "Transaction Advisory",
      "SEBI Regulations Advisory",
      "Foreign Exchange Laws (FEMA)",
      "SEBI Notices & Appeals before SAT",
      "Compounding of Offences",
      "Income Tax Litigations",
      "Forensic Audit",
    ],
  },
  {
    label: "Compliance",
    href: "#compliance",
    subServices: [
      "Listed Company Compliances",
      "Unlisted Company Compliances",
      "NBFC Compliance",
      "Due Diligence",
    ],
  },
  {
    label: "Buying & Selling of Companies",
    href: "#buying-selling",
    subServices: ["Takeovers", "Slump Sale"],
  },
  {
    label: "Other Services",
    href: "#other-services",
    subServices: null, // No dropdown for this one
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

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
        isScrolled
          ? "bg-hero-bg/98 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1">
            <span className="text-2xl font-serif font-bold text-white tracking-tight">
              FIRST<span className="text-accent-gold">CALL</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden xl:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {servicesData.map((service) => (
                  <NavigationMenuItem key={service.label}>
                    {service.subServices ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent text-white/80 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-white text-sm font-medium">
                          {service.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[280px] gap-1 p-3 bg-hero-bg border border-white/10">
                            {service.subServices.map((subService) => (
                              <li key={subService}>
                                <NavigationMenuLink asChild>
                                  <a
                                    href={service.href}
                                    className="block select-none rounded-sm p-3 text-sm leading-none no-underline outline-none transition-colors text-white/70 hover:text-white hover:bg-white/10"
                                  >
                                    {subService}
                                  </a>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild>
                        <a
                          href={service.href}
                          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {service.label}
                        </a>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Button className="bg-accent-gold hover:bg-accent-gold/90 text-hero-bg font-semibold">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-white p-2"
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
          <div className="xl:hidden mt-4 pb-4 border-t border-white/10 pt-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {servicesData.map((service) => (
                <div key={service.label}>
                  {service.subServices ? (
                    <>
                      <button
                        onClick={() => toggleMobileSubmenu(service.label)}
                        className="flex items-center justify-between w-full py-3 px-2 text-white/80 hover:text-white transition-colors"
                      >
                        <span>{service.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openMobileSubmenu === service.label && "rotate-180"
                          )}
                        />
                      </button>
                      {openMobileSubmenu === service.label && (
                        <div className="ml-4 border-l border-white/10 pl-4 animate-fade-in">
                          {service.subServices.map((subService) => (
                            <a
                              key={subService}
                              href={service.href}
                              className="block py-2 text-sm text-white/60 hover:text-white transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subService}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={service.href}
                      className="block py-3 px-2 text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {service.label}
                    </a>
                  )}
                </div>
              ))}
              <Button className="bg-accent-gold hover:bg-accent-gold/90 text-hero-bg font-semibold mt-4 w-full">
                Get Consultation
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
