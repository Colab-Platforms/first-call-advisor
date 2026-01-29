import { useParams, Navigate } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import { getServiceBySlug } from "@/data/servicesData";

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();

  if (!serviceSlug) {
    return <Navigate to="/" replace />;
  }

  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

  const subServicesLinks = service.subServices.map((sub) => ({
    title: sub.title,
    href: `/services/${service.slug}/${sub.slug}`,
  }));

  return (
    <ServicePageLayout
      title={service.label}
      subtitle="Our Services"
      description={service.description}
      icon={<Icon className="w-10 h-10 text-primary" />}
      subServices={subServicesLinks}
      content={
        <div className="prose prose-lg max-w-none">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              About {service.label}
            </h2>
            <p className="text-muted-foreground mb-8">{service.description}</p>
          </AnimatedSection>
          
          {service.subServices.length > 0 && (
            <>
              <AnimatedSection animation="fadeInUp" delay={200}>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  What We Offer
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our {service.label.toLowerCase()} practice encompasses a wide range of specialized services designed to meet your unique business needs:
                </p>
              </AnimatedSection>
              <ul className="space-y-3">
                {service.subServices.map((sub, index) => (
                  <AnimatedSection
                    key={sub.slug}
                    animation="fadeInLeft"
                    delay={300 + index * 100}
                    as="li"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <span className="font-semibold text-foreground">{sub.title}</span>
                        <span className="text-muted-foreground"> - {sub.description}</span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </ul>
            </>
          )}
        </div>
      }
    />
  );
};

export default ServicePage;
