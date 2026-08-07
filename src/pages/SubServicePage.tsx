import { useParams, Navigate } from "react-router-dom";
import { CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import CaseStudyCard from "@/components/CaseStudyCard";
import FAQSection from "@/components/FAQSection";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceContactForm from "@/components/ServiceContactForm";
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
        <div className="space-y-16 md:space-y-20">
          {/* Detailed Description */}
          <AnimatedSection animation="fadeInUp">
            <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-background via-background to-primary/5 p-6 md:p-10 shadow-sm">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent-primary/10 blur-3xl" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Overview
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-4 mb-5">
                  About {subService.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {content.detailedDescription}
                </p>
              </div>
            </section>
          </AnimatedSection>

          {/* Statistics */}
          {/* <AnimatedSection animation="fadeInUp" delay={200}>
            <section className="rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/5 via-background to-accent-primary/5 p-6 md:p-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    At A Glance
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mt-2">
                    Our Track Record
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground max-w-md">
                  Measurable outcomes backed by experience and repeatable execution.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {content.statistics.map((stat, index) => {
                  const StatIcon = statIcons[index % statIcons.length];
                  return (
                    <AnimatedSection
                      key={index}
                      animation="scaleIn"
                      delay={300 + index * 100}
                    >
                      <div className="h-full rounded-xl border border-border bg-card/80 p-4 text-center shadow-sm">
                        <div className="w-11 h-11 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                          <StatIcon className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {stat.label}
                        </p>
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                  What We Offer
                </h3>
                <span className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground">
                  Clear, compliant, and execution-ready
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {content.keyFeatures.map((feature, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fadeInLeft"
                    delay={500 + index * 100}
                  >
                    <div className="group flex items-start gap-3 p-4 md:p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
                      <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-foreground font-medium">{feature}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Tailored to {subService.title.toLowerCase()} outcomes.
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Why Choose Us & Our Process */}
          <section className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeInLeft" delay={600}>
              <div className="bg-card p-6 md:p-7 rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold">
                    A+
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    Why Choose Us
                  </h3>
                </div>
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
              <div className="bg-card p-6 md:p-7 rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary font-semibold">
                    4x
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    Our Process
                  </h3>
                </div>
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
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground">
                  Case Studies
                </h3>
                <span className="text-sm text-muted-foreground hidden md:inline">
                  Selected engagements across industries
                </span>
              </div>
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
              <section className="rounded-2xl border border-border bg-card/60 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-foreground mb-4">
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
                          className="px-4 py-2 bg-background text-foreground rounded-full text-sm font-medium border border-border hover:border-primary/40 hover:text-primary transition-colors inline-block"
                        >
                          {relatedService.title}
                        </a>
                      </AnimatedSection>
                    ))}
                </div>
              </section>
            </AnimatedSection>
          )}

          {/* Contact Form Section */}
          <ServiceContactForm 
            serviceName={subService.title}
            serviceType="subservice"
          />
        </div>
      }
    />
  );
};

export default SubServicePage;
