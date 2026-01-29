import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

      {/* Hero Section - adjusted padding for fixed header */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16 bg-hero-bg">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8 overflow-x-auto">
            <ol className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-text-muted-light whitespace-nowrap">
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
                  <li className="text-accent-primary truncate max-w-[150px] md:max-w-none">{title}</li>
                </>
              ) : (
                <li className="text-accent-primary">{title}</li>
              )}
            </ol>
          </nav>

          {/* Header Content */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
              {icon}
            </div>
            <div className="flex-1">
              <p className="text-accent-primary font-medium mb-1.5 md:mb-2 text-sm md:text-base">{subtitle}</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 md:mb-4">
                {title}
              </h1>
              <p className="text-base md:text-lg text-text-muted-light max-w-3xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-services Grid (for main service pages) */}
      {subServices && subServices.length > 0 && (
        <section className="py-10 md:py-16 bg-section-light">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-6 md:mb-8">
              Our {title} Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {subServices.map((service) => (
                <Link
                  key={service.title}
                  to={service.href}
                  className="group p-4 md:p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {service.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      {content && (
        <section className="py-10 md:py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">{content}</div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-hero-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 md:mb-4">
            Need Expert Guidance?
          </h2>
          <p className="text-text-muted-light mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
            Our team of experienced professionals is ready to help you navigate
            the complexities of {title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Button className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-6 md:px-8 text-sm md:text-base">
              Get Free Consultation
            </Button>
            <Link to="/">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
