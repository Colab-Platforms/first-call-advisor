import { useParams, Navigate } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
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
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
            About {service.label}
          </h2>
          <p className="text-muted-foreground mb-8">{service.description}</p>
          
          {service.subServices.length > 0 && (
            <>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                What We Offer
              </h3>
              <p className="text-muted-foreground mb-4">
                Our {service.label.toLowerCase()} practice encompasses a wide range of specialized services designed to meet your unique business needs:
              </p>
              <ul className="space-y-3">
                {service.subServices.map((sub) => (
                  <li key={sub.slug} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></span>
                    <div>
                      <span className="font-semibold text-foreground">{sub.title}</span>
                      <span className="text-muted-foreground"> - {sub.description}</span>
                    </div>
                  </li>
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
