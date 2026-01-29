import { useParams, Navigate } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import { getServiceBySlug, getSubServiceBySlug } from "@/data/servicesData";

const SubServicePage = () => {
  const { serviceSlug, subServiceSlug } = useParams<{
    serviceSlug: string;
    subServiceSlug: string;
  }>();

  if (!serviceSlug || !subServiceSlug) {
    return <Navigate to="/" replace />;
  }

  const service = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlug(serviceSlug, subServiceSlug);

  if (!service || !subService) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

  return (
    <ServicePageLayout
      title={subService.title}
      subtitle={service.label}
      description={subService.description}
      icon={<Icon className="w-10 h-10 text-primary" />}
      parentService={{
        title: service.label,
        href: `/services/${service.slug}`,
      }}
      content={
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
            About {subService.title}
          </h2>
          <p className="text-muted-foreground mb-8">{subService.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Why Choose Us
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Experienced team with deep domain expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Proven track record of successful transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>End-to-end support from planning to execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span>Transparent communication throughout the process</span>
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Our Process
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-semibold flex-shrink-0">
                    1
                  </span>
                  <span>Initial consultation and requirement assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-semibold flex-shrink-0">
                    2
                  </span>
                  <span>Strategy development and planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-semibold flex-shrink-0">
                    3
                  </span>
                  <span>Documentation and regulatory filings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-semibold flex-shrink-0">
                    4
                  </span>
                  <span>Implementation and post-completion support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Services */}
          {service.subServices.length > 1 && (
            <div className="mt-12">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Related Services
              </h3>
              <div className="flex flex-wrap gap-3">
                {service.subServices
                  .filter((s) => s.slug !== subServiceSlug)
                  .slice(0, 4)
                  .map((relatedService) => (
                    <a
                      key={relatedService.slug}
                      href={`/services/${service.slug}/${relatedService.slug}`}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {relatedService.title}
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>
      }
    />
  );
};

export default SubServicePage;
