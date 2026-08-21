import React, { useState } from 'react';
import { 
  ArrowRight, 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  HeartHandshake, 
  ChevronRight,
  Send,
  Building2,
  Scale,
  ShieldCheck,
  Upload,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import CareerFormDialog from "@/components/CareerFormDialog";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: "associate-corporate-restructuring",
    title: "Senior Associate - Corporate Restructuring",
    department: "Corporate Restructuring",
    location: "Mumbai (Headquarters)",
    type: "Full-Time",
    experience: "4 - 7 Years",
    description: "Lead complex corporate restructuring, IBC turnaround strategies, and distressed asset advisory for mid to large enterprise clients.",
    requirements: [
      "CA / MBA Finance / CS with strong exposure to NCLT / IBC proceedings",
      "Proven track record in financial modeling, debt syndication, and turnaround strategy",
      "Excellent analytical skills and client management experience"
    ]
  },
  {
    id: "legal-counsel-advisory",
    title: "Legal Counsel - Corporate & Regulatory Advisory",
    department: "Advisory & Legal",
    location: "Mumbai / Hybrid",
    type: "Full-Time",
    experience: "3 - 6 Years",
    description: "Provide strategic legal counsel on corporate governance, M&A transactions, regulatory compliance, and commercial contract drafting.",
    requirements: [
      "LL.B / LL.M from a recognized institution",
      "Strong background in Company Law, SEBI regulations, and cross-border transactions",
      "Demonstrated ability to handle high-stakes corporate negotiations"
    ]
  },
  {
    id: "manager-fundraising-investment",
    title: "Manager - Fundraising & Private Equity Advisory",
    department: "Fundraising & Investment",
    location: "Mumbai (Headquarters)",
    type: "Full-Time",
    experience: "5 - 8 Years",
    description: "Drive equity fundraising, venture capital syndication, and strategic investor relation initiatives for high-growth enterprises.",
    requirements: [
      "MBA from premier B-School / CFA Charterholder",
      "Deep network across VC/PE funds, family offices, and institutional investors",
      "Expertise in valuation, pitch desk synthesis, and transaction closing"
    ]
  },
  {
    id: "associate-compliance-audit",
    title: "Compliance & Secretarial Manager",
    department: "Compliance",
    location: "Mumbai",
    type: "Full-Time",
    experience: "3 - 5 Years",
    description: "Manage end-to-end statutory compliance, ROC filings, RBI/FEMA advisory, and secretarial audits for corporate clients.",
    requirements: [
      "Qualified Company Secretary (ACS/FCS)",
      "Thorough command over Companies Act 2013, FEMA, and RBI circulars",
      "Meticulous attention to detail and regulatory reporting standards"
    ]
  }
];

const cultureBenefits = [
  {
    icon: TrendingUp,
    title: "Accelerated Career Trajectory",
    description: "Direct mentorship from seasoned industry partners and exposure to high-impact transaction deals from Day 1."
  },
  {
    icon: Award,
    title: "Merit-Driven Rewards",
    description: "Competitive salary packages aligned with top market benchmarks, plus performance bonuses and growth incentives."
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Culture",
    description: "A supportive, transparent work environment built on intellectual rigor, mutual respect, and shared success."
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Sponsored certifications, executive workshops, and masterclasses in corporate law, investment banking, and fintech."
  }
];

const hiringSteps = [
  {
    step: "01",
    title: "Application & Resume Upload",
    description: "Fill in your details, share why you wanna work with us, and upload your CV."
  },
  {
    step: "02",
    title: "Initial Screening",
    description: "An exploratory conversation with our Talent Acquisition team to evaluate background fit."
  },
  {
    step: "03",
    title: "Technical Discussion",
    description: "Strategic case study & interview with Practice Heads and Managing Partners."
  },
  {
    step: "04",
    title: "Onboarding & Welcome",
    description: "Final agreement, onboarding roadmap, and introduction to your new advisory team."
  }
];

const Career = () => {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [isCareerDialogOpen, setIsCareerDialogOpen] = useState<boolean>(false);

  const departments = ["All", "Corporate Restructuring", "Advisory & Legal", "Fundraising & Investment", "Compliance"];

  const filteredJobs = selectedDept === "All" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDept);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Area */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 bg-hero-bg">
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
                <li className="text-accent-primary font-medium">Careers</li>
              </ol>
            </nav>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <AnimatedSection animation="fadeInUp" delay={200}>
                <p className="text-accent-primary font-semibold tracking-wide uppercase text-xs md:text-sm mb-2">
                  Join Our Advisory Team
                </p>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={300}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight">
                  Shape the Future of <br className="hidden sm:inline" />
                  <span className="text-accent-primary">Corporate Advisory</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection animation="fadeInUp" delay={400}>
                <p className="text-base md:text-lg text-text-muted-light max-w-2xl leading-relaxed mb-8">
                  At First Call Advisory, we bring together financial strategists, legal counsels, and compliance pioneers. Explore rewarding career opportunities where your intellect drives real commercial outcomes.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fadeInUp" delay={500}>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-6 py-2.5 text-sm md:text-base shadow-lg"
                    onClick={() => setIsCareerDialogOpen(true)}
                  >
                    Wanna Work With Us? Upload Resume <Upload className="w-4 h-4 ml-2" />
                  </Button>
                  <a href="#work-with-us">
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-black hover:bg-white/10 px-6 py-2.5 text-sm md:text-base"
                    >
                      Explore <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Quick Stats Box */}
            <div className="lg:col-span-4 mt-6 lg:mt-0">
              <AnimatedSection animation="fadeInUp" delay={400}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-serif font-bold text-white">25+ Years</p>
                      <p className="text-xs text-text-muted-light">Advisory Excellence</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                      <Scale className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-serif font-bold text-white">500+ Deals</p>
                      <p className="text-xs text-text-muted-light">Restructuring & M&A</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent-primary/20 flex items-center justify-center text-accent-primary">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-serif font-bold text-white">100% Integrity</p>
                      <p className="text-xs text-text-muted-light">Client-First Philosophy</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeInUp" className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-subtitle">Life At First Call Advisory</p>
            <h2 className="section-title text-foreground">Why Build Your Career With Us</h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base">
              We empower our team members with challenging assignments, autonomy, and continuous career growth in a collaborative environment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cultureBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection
                  key={benefit.title}
                  animation="fadeInUp"
                  delay={index * 100 + 100}
                >
                  <div className="bg-card rounded-xl border border-border p-6 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wanna Work With Us? Upload Resume Section */}
      <section id="work-with-us" className="py-16 md:py-24 bg-section-light">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeInUp" className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Careers & Opportunities
            </div>
            <h2 className="section-title text-foreground text-3xl md:text-4xl">
              Wanna Work With Us?
            </h2>
            <p className="text-muted-foreground mt-3 text-base md:text-lg">
              Upload your Resume / Contact Us directly. We are constantly expanding our practice teams across corporate restructuring, legal counsel, M&A, and compliance.
            </p>
          </AnimatedSection>

          {/* Featured Resume Upload Banner Card */}
          <AnimatedSection animation="fadeInUp" delay={150} className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-slate-900 via-primary-dark to-slate-900 rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
                <div className="md:col-span-8 space-y-3">
                  <span className="text-accent-primary font-semibold text-xs uppercase tracking-widest block">
                    Direct Application Portal
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    Submit Your Resume / Contact Us
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    Share your name, contact details, reason for joining, and your CV. Our recruitment partners review every submission within 48 hours.
                  </p>
                </div>
                <div className="md:col-span-4 flex justify-start md:justify-end">
                  <Button
                    onClick={() => setIsCareerDialogOpen(true)}
                    className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-6 py-3.5 h-auto text-sm md:text-base shadow-lg group"
                  >
                    Upload Resume & Apply <Upload className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Department Filter Tabs */}
          {/* <AnimatedSection animation="fadeInUp" delay={200} className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="flex gap-2 bg-background p-1.5 rounded-lg border border-border shadow-sm">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition-all whitespace-nowrap ${
                    selectedDept === dept 
                      ? "bg-primary text-white shadow-sm" 
                      : "text-muted-foreground hover:text-foreground hover:bg-slate-100"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </AnimatedSection> */}

          {/* Job Listings */}
          {/* <div className="space-y-6 max-w-5xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <AnimatedSection key={job.id} animation="fadeInUp" delay={index * 100}>
                  <div className="bg-card rounded-xl border border-border p-6 md:p-8 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-border">
                      <div>
                        <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                          {job.department}
                        </span>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground">
                          {job.title}
                        </h3>
                      </div>
                      <Button 
                        onClick={() => setIsCareerDialogOpen(true)}
                        className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-5 py-2.5 text-xs md:text-sm self-start md:self-center shrink-0 flex items-center gap-1.5"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        Upload Resume / Contact Us
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs md:text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-primary" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-primary" />
                        Experience: {job.experience}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {job.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Key Requirements:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {job.requirements.map((req, reqIdx) => (
                          <li key={reqIdx} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))
            ) : (
              <div className="text-center py-12 bg-card rounded-xl border border-border">
                <p className="text-muted-foreground text-base">No open positions listed under this practice area.</p>
                <Button onClick={() => setIsCareerDialogOpen(true)} className="mt-4 bg-accent-primary text-white">
                  Upload Resume / Contact Us
                </Button>
              </div>
            )}
          </div> */}
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection animation="fadeInUp" className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="section-subtitle">Selection Roadmap</p>
            <h2 className="section-title text-foreground">Our Recruitment Process</h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              A transparent, structured 4-step process designed to evaluate mutual alignment.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {hiringSteps.map((stepItem, idx) => (
              <AnimatedSection key={stepItem.step} animation="fadeInUp" delay={idx * 100}>
                <div className="bg-card rounded-xl border border-border p-6 relative h-full flex flex-col justify-between">
                  <div>
                    <span className="text-3xl md:text-4xl font-serif font-extrabold text-primary/30 mb-4 block">
                      {stepItem.step}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application CTA */}
      <section className="py-12 md:py-16 bg-hero-bg">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3">
              Wanna Work With Us?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-text-muted-light mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              We are always looking for exceptional corporate restructuring, legal, and financial talent. Upload your resume and get in touch with our advisory leadership.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={300}>
            <Button
              className="bg-accent-primary hover:bg-accent-primary-hover text-white font-semibold px-8 py-3.5 text-sm md:text-base shadow-lg"
              onClick={() => setIsCareerDialogOpen(true)}
            >
              Upload Your Resume / Contact Us <Upload className="w-4 h-4 ml-2" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Application Dialog Modal */}
      <CareerFormDialog
        open={isCareerDialogOpen}
        onOpenChange={setIsCareerDialogOpen}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Career;