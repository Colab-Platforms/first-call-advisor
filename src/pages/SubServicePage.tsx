import { useParams, Navigate } from "react-router-dom";
import { CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import CaseStudyCard from "@/components/CaseStudyCard";
import FAQSection from "@/components/FAQSection";
import AnimatedSection from "@/components/AnimatedSection";
import { getServiceBySlug, getSubServiceBySlug } from "@/data/servicesData";
import { getSubServiceContent } from "@/data/subServiceContent";

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
  const content = getSubServiceContent(serviceSlug, subServiceSlug);

  const statIcons = [TrendingUp, Users, CheckCircle, Clock];

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
        <div className="space-y-16">
          {/* Detailed Description */}
          <AnimatedSection animation="fadeInUp">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                About {subService.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.detailedDescription}
              </p>
            </section>
          </AnimatedSection>

          {/* Statistics */}
          {/* <AnimatedSection animation="fadeInUp" delay={200}>
            <section className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-8 text-center">
                Our Track Record
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {content.statistics.map((stat, index) => {
                  const StatIcon = statIcons[index % statIcons.length];
                  return (
                    <AnimatedSection
                      key={index}
                      animation="scaleIn"
                      delay={300 + index * 100}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <StatIcon className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-3xl font-bold text-primary mb-1">
                          {stat.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </section>
          </AnimatedSection> */}

          {/* Key Features */}
          <AnimatedSection animation="fadeInUp" delay={400}>
            <section>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                What We Offer
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {content.keyFeatures.map((feature, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fadeInLeft"
                    delay={500 + index * 100}
                  >
                    <div className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Why Choose Us & Our Process */}
          <section className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeInLeft" delay={600}>
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Experienced team with deep domain expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Proven track record of successful transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>End-to-end support from planning to execution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Transparent communication throughout the process</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" delay={700}>
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
            </AnimatedSection>
          </section>

          {/* Case Studies */}
          <AnimatedSection animation="fadeInUp" delay={800}>
            <section>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Case Studies
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.caseStudies.map((caseStudy, index) => (
                  <AnimatedSection
                    key={index}
                    animation="scaleIn"
                    delay={900 + index * 100}
                  >
                    <CaseStudyCard {...caseStudy} />
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* FAQs */}
          <AnimatedSection animation="fadeInUp" delay={1000}>
            <FAQSection faqs={content.faqs} />
          </AnimatedSection>

          {/* Related Services */}
          {service.subServices.length > 1 && (
            <AnimatedSection animation="fadeInUp" delay={1100}>
              <section>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Related Services
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.subServices
                    .filter((s) => s.slug !== subServiceSlug)
                    .slice(0, 4)
                    .map((relatedService, index) => (
                      <AnimatedSection
                        key={relatedService.slug}
                        animation="fadeIn"
                        delay={1200 + index * 100}
                        as="span"
                      >
                        <a
                          href={`/services/${service.slug}/${relatedService.slug}`}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors inline-block"
                        >
                          {relatedService.title}
                        </a>
                      </AnimatedSection>
                    ))}
                </div>
              </section>
            </AnimatedSection>
          )}
        </div>
      }
    />
  );
};

export default SubServicePage;
