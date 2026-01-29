import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

interface SubService {
  title: string;
  href: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  subServices?: SubService[];
  parentService?: {
    title: string;
    href: string;
  };
  content?: React.ReactNode;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  icon,
  subServices,
  parentService,
  content,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-hero-bg">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <AnimatedSection animation="fadeIn" delay={100}>
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-text-muted-light">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ArrowRight className="w-3 h-3" />
                </li>
                {parentService ? (
                  <>
                    <li>
                      <Link
                        to={parentService.href}
                        className="hover:text-white transition-colors"
                      >
                        {parentService.title}
                      </Link>
                    </li>
                    <li>
                      <ArrowRight className="w-3 h-3" />
                    </li>
                    <li className="text-accent-primary">{title}</li>
                  </>
                ) : (
                  <li className="text-accent-primary">{title}</li>
                )}
              </ol>
            </nav>
          </AnimatedSection>

          {/* Header Content */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <AnimatedSection animation="scaleIn" delay={200}>
              <div className="w-20 h-20 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                {icon}
              </div>
            </AnimatedSection>
            <div className="flex-1">
              <AnimatedSection animation="fadeInUp" delay={300}>
                <p className="text-accent-primary font-medium mb-2">{subtitle}</p>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={400}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  {title}
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={500}>
                <p className="text-lg text-text-muted-light max-w-3xl">
                  {description}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services Grid (for main service pages) */}
      {subServices && subServices.length > 0 && (
        <section className="py-16 bg-section-light">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fadeInUp">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                Our {title} Services
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subServices.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  animation="fadeInUp"
                  delay={index * 100 + 200}
                >
                  <Link
                    to={service.href}
                    className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 block h-full"
                  >
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      {content && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <AnimatedSection animation="fadeInUp">
              {content}
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-hero-bg">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Need Expert Guidance?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-text-muted-light mb-8 max-w-2xl mx-auto">
              Our team of experienced professionals is ready to help you navigate
              the complexities of {title.toLowerCase()}.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-8">
                Get Free Consultation
              </Button>
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
