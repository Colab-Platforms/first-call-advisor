import { Building2, TrendingUp, Scale, Shield, Handshake, Settings } from "lucide-react";

export interface SubService {
  title: string;
  slug: string;
  description: string;
}

export interface Service {
  label: string;
  slug: string;
  icon: typeof Building2;
  description: string;
  subServices: SubService[];
}

export const servicesData: Service[] = [
  {
    label: "Corporate Restructuring",
    slug: "corporate-restructuring",
    icon: Building2,
    description: "Expert guidance on mergers, demergers, capital restructuring, and strategic corporate transformations to optimize your business structure.",
    subServices: [
      {
        title: "Merger & Amalgamation",
        slug: "merger-amalgamation",
        description: "Strategic consolidation of companies to achieve synergies, expand market presence, and enhance operational efficiency through legal merger and amalgamation processes.",
      },
      {
        title: "Demerger",
        slug: "demerger",
        description: "Separation of business units or divisions into independent entities to unlock value, improve focus, and enable strategic flexibility.",
      },
      {
        title: "Reduction of Capital",
        slug: "reduction-of-capital",
        description: "Legal process to reduce a company's share capital for various purposes including returning surplus capital to shareholders or writing off losses.",
      },
      {
        title: "Capital Restructuring",
        slug: "capital-restructuring",
        description: "Comprehensive reorganization of a company's capital structure to optimize financial efficiency and meet strategic objectives.",
      },
      {
        title: "Buyback of Shares",
        slug: "buyback-of-shares",
        description: "Repurchase of company's own shares from existing shareholders to improve financial ratios, return surplus cash, or consolidate ownership.",
      },
      {
        title: "Delisting",
        slug: "delisting",
        description: "Voluntary or mandatory removal of securities from stock exchange listing, including compliance with regulatory requirements and exit opportunity for shareholders.",
      },
    ],
  },
  {
    label: "Fundraising & Investment",
    slug: "fundraising-investment",
    icon: TrendingUp,
    description: "Comprehensive support for all types of fundraising activities and investment structuring to fuel your business growth.",
    subServices: [
      {
        title: "Foreign Direct Investment (FDI)",
        slug: "fdi",
        description: "Facilitating cross-border investments including compliance with FEMA regulations, RBI approvals, and structuring of foreign investment transactions.",
      },
      {
        title: "Overseas Direct Investment (ODI)",
        slug: "odi",
        description: "Enabling Indian companies to make strategic investments abroad through proper regulatory channels and compliance frameworks.",
      },
      {
        title: "Preferential Allotment & Private Placement",
        slug: "preferential-allotment-private-placement",
        description: "Issuance of securities to select investors through preferential allotment or private placement routes with full regulatory compliance.",
      },
      {
        title: "ADR / GDR / FCCB Issues & ECB",
        slug: "adr-gdr-fccb-ecb",
        description: "International capital raising through American/Global Depository Receipts, Foreign Currency Convertible Bonds, and External Commercial Borrowings.",
      },
      {
        title: "Public Issue / Rights Issue",
        slug: "public-rights-issue",
        description: "Complete support for Initial Public Offerings (IPO), Follow-on Public Offers (FPO), and Rights Issues including SEBI compliance and documentation.",
      },
    ],
  },
  {
    label: "Advisory and Legal",
    slug: "advisory-legal",
    icon: Scale,
    description: "Strategic advisory and legal support across taxation, transactions, and regulatory compliance matters.",
    subServices: [
      {
        title: "Taxation Advisory",
        slug: "taxation-advisory",
        description: "Expert guidance on direct and indirect taxation matters, tax planning strategies, and optimization of tax structures.",
      },
      {
        title: "Transaction Advisory",
        slug: "transaction-advisory",
        description: "End-to-end advisory services for mergers, acquisitions, and other strategic transactions including valuation and deal structuring.",
      },
      {
        title: "SEBI Regulations Advisory",
        slug: "sebi-regulations-advisory",
        description: "Comprehensive guidance on Securities and Exchange Board of India regulations covering all aspects of capital markets compliance.",
      },
      {
        title: "Foreign Exchange Laws (FEMA)",
        slug: "fema",
        description: "Expert advice on Foreign Exchange Management Act compliance, cross-border transactions, and RBI regulatory requirements.",
      },
      {
        title: "SEBI Notices & Appeals before SAT",
        slug: "sebi-notices-sat-appeals",
        description: "Representation and advisory for SEBI show cause notices, inquiries, and appeals before the Securities Appellate Tribunal.",
      },
      {
        title: "Compounding of Offences",
        slug: "compounding-of-offences",
        description: "Assistance in compounding of offences under various corporate and securities laws to resolve regulatory issues efficiently.",
      },
      {
        title: "Income Tax Litigations",
        slug: "income-tax-litigations",
        description: "Expert representation in income tax disputes, appeals, and litigation matters before various tax authorities and tribunals.",
      },
      {
        title: "Forensic Audit",
        slug: "forensic-audit",
        description: "Specialized investigative audits to detect fraud, financial irregularities, and non-compliance with applicable laws and regulations.",
      },
    ],
  },
  {
    label: "Compliance",
    slug: "compliance",
    icon: Shield,
    description: "Comprehensive compliance management for listed and unlisted companies across all regulatory requirements.",
    subServices: [
      {
        title: "Listed Company Compliances",
        slug: "listed-company-compliances",
        description: "Complete compliance management for listed entities including SEBI LODR, stock exchange requirements, and periodic filings.",
      },
      {
        title: "Unlisted Company Compliances",
        slug: "unlisted-company-compliances",
        description: "Statutory compliance services for unlisted companies under Companies Act and other applicable regulations.",
      },
      {
        title: "NBFC Compliance",
        slug: "nbfc-compliance",
        description: "Specialized compliance services for Non-Banking Financial Companies including RBI regulatory requirements and reporting.",
      },
      {
        title: "Due Diligence",
        slug: "due-diligence",
        description: "Comprehensive legal, financial, and regulatory due diligence for transactions, investments, and corporate actions.",
      },
    ],
  },
  {
    label: "Buying & Selling of Companies",
    slug: "buying-selling-companies",
    icon: Handshake,
    description: "End-to-end support for corporate acquisitions, takeovers, and strategic business transactions.",
    subServices: [
      {
        title: "Takeovers",
        slug: "takeovers",
        description: "Complete advisory and execution support for open offers, substantial acquisitions, and takeover transactions under SEBI regulations.",
      },
      {
        title: "Slump Sale",
        slug: "slump-sale",
        description: "Structuring and execution of slump sale transactions for transfer of business undertakings on a going concern basis.",
      },
    ],
  },
  {
    label: "Other Services",
    slug: "other-services",
    icon: Settings,
    description: "Additional specialized services tailored to meet your unique business requirements and objectives.",
    subServices: [],
  },
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};

export const getSubServiceBySlug = (serviceSlug: string, subServiceSlug: string) => {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return null;
  return service.subServices.find((sub) => sub.slug === subServiceSlug);
};
