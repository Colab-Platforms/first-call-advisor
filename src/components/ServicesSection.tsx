import { Building2, TrendingUp, Scale, Shield, Handshake, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    number: "01",
    title: "Corporate Restructuring",
    description: "Expert guidance on mergers, demergers, capital restructuring, and strategic corporate transformations.",
    subServices: ["Merger & Amalgamation", "Demerger", "Reduction of Capital", "Capital Restructuring", "Buyback of Shares", "Delisting"]
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Fundraising & Investment",
    description: "Comprehensive support for all types of fundraising activities and investment structuring.",
    subServices: ["Foreign Direct Investment (FDI)", "Overseas Direct Investment (ODI)", "Preferential Allotment & Private Placement", "ADR / GDR / FCCB Issues & ECB", "Public Issue / Rights Issue"]
  },
  {
    icon: Scale,
    number: "03",
    title: "Advisory and Legal",
    description: "Strategic advisory and legal support across taxation, transactions, and regulatory compliance.",
    subServices: ["Taxation Advisory", "Transaction Advisory", "SEBI Regulations Advisory", "Foreign Exchange Laws (FEMA)", "SEBI Notices & Appeals before SAT", "Compounding of Offences", "Income Tax Litigations", "Forensic Audit"]
  },
  {
    icon: Shield,
    number: "04",
    title: "Compliance",
    description: "Comprehensive compliance management for listed and unlisted companies across all regulatory requirements.",
    subServices: ["Listed Company Compliances", "Unlisted Company Compliances", "NBFC Compliance", "Due Diligence"]
  },
  {
    icon: Handshake,
    number: "05",
    title: "Buying & Selling of Companies",
    description: "End-to-end support for corporate acquisitions, takeovers, and strategic business transactions.",
    subServices: ["Takeovers", "Slump Sale"]
  },
  {
    icon: Settings,
    number: "06",
    title: "Other Services",
    description: "Additional specialized services tailored to meet your unique business requirements and objectives.",
    subServices: []
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-section-light">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">What We Do</p>
          <h2 className="section-title text-foreground">Services We Provide</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.number}
              className="group relative p-8 bg-card hover:bg-hero-bg transition-all duration-500 border-0 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden"
            >
              {/* Number Background */}
              <span className="absolute top-4 right-4 text-8xl font-serif font-bold text-muted/30 group-hover:text-white/10 transition-colors">
                {service.number}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-sm bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-text-light transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-text-muted-light transition-colors mb-4">
                  {service.description}
                </p>

                {/* Sub-services list - shown on hover */}
                {service.subServices.length > 0 && (
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                    <ul className="text-sm text-text-muted-light space-y-1">
                      {service.subServices.slice(0, 3).map((subService, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent-primary rounded-full"></span>
                          {subService}
                        </li>
                      ))}
                      {service.subServices.length > 3 && (
                        <li className="text-accent-primary text-xs">
                          +{service.subServices.length - 3} more services
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary group-hover:text-accent-primary font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn More
                  <span className="text-lg">→</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
