import { ArrowRight, CheckCircle2, Target, Users, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/contexts/ContactFormContext";

const features = [
  "Premium services exceeding expectations",
  "Expert team with 25+ years of experience",
  "Tailored solutions for your business needs",
  "Transparent communication and reporting",
];

const values = [
  {
    icon: Target,
    title: "Client-First Strategy",
    description: "Every engagement starts with your goals, not a generic playbook. We tailor our advice to your business reality.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Transparency",
    description: "No hidden fees, no vague reporting. You always know where things stand and why we recommend what we do.",
  },
  {
    icon: Users,
    title: "Seasoned Team",
    description: "Decades of combined experience across strategy, finance, and operations, working as an extension of your team.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "We define success upfront and hold ourselves accountable to outcomes, not just deliverables.",
  },
];

const About = () => {
  const { openContactForm } = useContactForm();

  return (
    <div className="min-h-screen bg-background">
      {/* Header Area */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-16 bg-hero-bg">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeIn" delay={100}>
            <nav className="mb-6 md:mb-8">
              <ol className="flex items-center gap-1.5 md:gap-2 text-xs md:text-sm text-text-muted-light">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <ArrowRight className="w-3 h-3" />
                </li>
                <li className="text-accent-primary">About Us</li>
              </ol>
            </nav>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-accent-primary font-medium mb-1.5 md:mb-2 text-sm md:text-base">
              Who We Are
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={300}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-3 md:mb-4 max-w-3xl">
              Trusted Advisors Behind First Call Advisory
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={400}>
            <p className="text-base md:text-lg text-text-muted-light max-w-3xl">
              We're a team of strategy, finance, and operations specialists who partner
              with businesses to solve their hardest problems and unlock their next stage
              of growth.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story / Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection animation="fadeInUp">
              <p className="section-subtitle">Complete Honesty & Transparency</p>
              <h2 className="section-title text-foreground mb-6">
                Our Vision and Values
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                At First Call Advisory, we believe in building lasting partnerships through
                trust, expertise, and unwavering commitment to our clients' success. Since
                1998, our team of seasoned professionals has brought decades of experience
                across diverse industries to every engagement we take on.
              </p>

              <ul className="space-y-4 mb-10">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="btn-primary" onClick={openContactForm}>
                Talk to Our Team
              </Button>
            </AnimatedSection>

            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="bg-hero-bg rounded-sm p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full" />
                <div className="relative z-10">
                  <p className="text-text-muted-light text-sm uppercase tracking-wider mb-2">
                    Big Name Customers
                  </p>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-text-light mb-6">
                    Serving 50% Of Global 2000 Companies
                  </h3>
                  <p className="text-text-muted-light leading-relaxed">
                    More than 25 years of experience working in the industry has enabled
                    us to build our services and solutions in strategy, consulting, and
                    digital transformation.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeInUp" className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-subtitle">What Drives Us</p>
            <h2 className="section-title text-foreground">Our Core Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimatedSection
                  key={value.title}
                  animation="fadeInUp"
                  delay={index * 100 + 100}
                >
                  <div className="bg-card rounded-lg border border-border p-6 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* CTA */}
      <section className="py-10 md:py-16 bg-hero-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 md:mb-4">
              Ready to Work With Us?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-text-muted-light mb-6 md:mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Let's talk about where your business is headed and how we can help you get
              there faster.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-6 md:px-8 text-sm md:text-base"
                onClick={openContactForm}
              >
                Get Free Consultation
              </Button>
              <Link to="/">
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                >
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

export default About;
