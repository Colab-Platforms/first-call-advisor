import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {servicesData.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="block h-full"
            >
              <Card className="group relative p-8 bg-card hover:bg-hero-bg transition-all duration-500 border-0 shadow-sm hover:shadow-xl cursor-pointer overflow-hidden h-full flex flex-col">
                {/* Number Background */}
                <span className="absolute top-4 right-4 text-8xl font-serif font-bold text-muted/30 group-hover:text-white/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col flex-1">
                  <div className="w-16 h-16 rounded-sm bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold mb-3 text-foreground group-hover:text-text-light transition-colors">
                    {service.label}
                  </h3>

                  <p className="text-muted-foreground group-hover:text-text-muted-light transition-colors mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Sub-services list - shown on hover */}
                  {service.subServices.length > 0 && (
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                      <ul className="text-sm text-text-muted-light space-y-1">
                        {service.subServices.slice(0, 3).map((subService, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span className="w-1 h-1 bg-accent-primary rounded-full"></span>
                            {subService.title}
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

                  <div className="inline-flex items-center gap-2 text-primary group-hover:text-accent-primary font-medium text-sm group-hover:gap-3 transition-all mt-auto">
                    Learn More
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
