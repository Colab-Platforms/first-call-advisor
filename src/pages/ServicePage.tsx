import { useParams, Navigate } from "react-router-dom";
import { Target, Zap, Handshake } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceContactForm from "@/components/ServiceContactForm";
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
        <div className="space-y-20">
          {/* About Section */}
          {/* <AnimatedSection animation="fadeInUp">
            <section className="max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                About {service.label}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </section>
          </AnimatedSection> */}
          
          {service.subServices.length > 0 && (
            <>
              {/* Services Overview with Modern Cards */}
              <AnimatedSection animation="fadeInUp" delay={200}>
                <section>
                  <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      Our {service.label} Expertise
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Comprehensive solutions tailored to meet your unique business requirements
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {service.subServices.map((sub, index) => (
                      <AnimatedSection
                        key={sub.slug}
                        animation="fadeInUp"
                        delay={300 + index * 100}
                      >
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Content */}
                          <div className="relative p-8">
                            <div className="flex items-start gap-4 mb-4">
                              <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300">
                                <span className="text-primary font-bold text-lg">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                                  {sub.title}
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                  {sub.description}
                                </p>
                              </div>
                            </div>
                            
                            {/* Learn More Link */}
                            <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300">
                              <span>Learn More</span>
                              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </section>
              </AnimatedSection>

              {/* Why Choose Us Section */}
              <AnimatedSection animation="fadeInUp" delay={600}>
                <section className="bg-gradient-to-r from-primary/5 via-primary/3 to-primary/5 rounded-3xl p-8 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                      <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                        Why Choose Our {service.label} Services?
                      </h3>
                      <p className="text-muted-foreground">
                        Experience the difference with our proven expertise and client-focused approach
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        {
                          icon: Target,
                          title: "Expert Guidance",
                          description: "Deep industry knowledge and regulatory expertise to navigate complex requirements"
                        },
                        {
                          icon: Zap,
                          title: "Efficient Process",
                          description: "Streamlined workflows and proven methodologies for faster, reliable results"
                        },
                        {
                          icon: Handshake,
                          title: "Trusted Partnership",
                          description: "Long-term relationships built on transparency, communication, and success"
                        }
                      ].map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                          <AnimatedSection
                            key={index}
                            animation="scaleIn"
                            delay={700 + index * 100}
                          >
                            <div className="text-center">
                              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                <IconComponent className="w-8 h-8 text-primary" />
                              </div>
                              <h4 className="text-lg font-semibold text-foreground mb-3">
                                {benefit.title}
                              </h4>
                              <p className="text-muted-foreground text-sm leading-relaxed">
                                {benefit.description}
                              </p>
                            </div>
                          </AnimatedSection>
                        );
                      })}
                    </div>
                  </div>
                </section>
              </AnimatedSection>

              {/* Process Timeline */}
              <AnimatedSection animation="fadeInUp" delay={800}>
                <section>
                  <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      Our Process
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      A systematic approach ensuring quality outcomes and client satisfaction
                    </p>
                  </div>
                  
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />
                    
                    <div className="space-y-8">
                      {[
                        {
                          step: "01",
                          title: "Initial Consultation",
                          description: "Comprehensive assessment of your requirements and objectives",
                          color: "from-blue-500 to-blue-600"
                        },
                        {
                          step: "02", 
                          title: "Strategy Development",
                          description: "Customized approach and detailed planning for optimal outcomes",
                          color: "from-blue-500 to-blue-600"
                        },
                        {
                          step: "03",
                          title: "Implementation",
                          description: "Expert execution with regular updates and milestone tracking",
                          color: "from-blue-500 to-blue-600"
                        },
                        {
                          step: "04",
                          title: "Completion & Support",
                          description: "Final delivery with ongoing support and guidance as needed",
                          color: "from-blue-500 to-blue-600"
                        }
                      ].map((process, index) => (
                        <AnimatedSection
                          key={index}
                          animation="fadeInLeft"
                          delay={900 + index * 150}
                        >
                          <div className="flex items-start gap-6">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                              {process.step}
                            </div>
                            <div className="flex-1 pt-2">
                              <h4 className="text-xl font-semibold text-foreground mb-2">
                                {process.title}
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {process.description}
                              </p>
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </div>
                </section>
              </AnimatedSection>
            </>
          )}

          {/* Contact Form Section */}
          <ServiceContactForm 
            serviceName={service.label}
            serviceType="service"
          />
        </div>
      }
    />
  );
};

export default ServicePage;
