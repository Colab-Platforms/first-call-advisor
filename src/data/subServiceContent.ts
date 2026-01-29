// Extended content for sub-service pages including case studies, FAQs, and statistics

export interface CaseStudy {
  title: string;
  industry: string;
  challenge: string;
  result: string;
  metrics?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubServiceContent {
  keyFeatures: string[];
  statistics: { value: string; label: string }[];
  caseStudies: CaseStudy[];
  faqs: FAQ[];
  detailedDescription: string;
}

// Default content template for services without specific content
const defaultContent: SubServiceContent = {
  keyFeatures: [
    "Expert guidance from seasoned professionals",
    "Comprehensive regulatory compliance support",
    "Timely execution with transparent communication",
    "Customized solutions tailored to your needs",
    "Post-transaction support and advisory",
  ],
  statistics: [
    { value: "500+", label: "Successful Transactions" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" },
    { value: "₹5000Cr+", label: "Transaction Value" },
  ],
  caseStudies: [
    {
      title: "Strategic Transaction for Manufacturing Giant",
      industry: "Manufacturing",
      challenge: "Complex regulatory requirements and multiple stakeholder approvals needed within tight timelines.",
      result: "Successfully completed transaction within 6 months with full regulatory compliance.",
      metrics: "₹850 Cr transaction value",
    },
    {
      title: "Tech Startup Growth Initiative",
      industry: "Technology",
      challenge: "Navigating complex legal frameworks while maintaining operational continuity.",
      result: "Achieved seamless execution with zero operational disruption.",
      metrics: "40% cost savings achieved",
    },
  ],
  faqs: [
    {
      question: "What is the typical timeline for this service?",
      answer: "The timeline varies based on complexity and regulatory requirements. Simple transactions may take 3-4 months, while complex ones can extend to 9-12 months. We provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What documents are typically required?",
      answer: "Documentation requirements vary by transaction type. Generally, you'll need corporate documents, financial statements, regulatory filings, and board resolutions. Our team provides a comprehensive checklist during the engagement.",
    },
    {
      question: "Do you handle regulatory filings?",
      answer: "Yes, we handle all regulatory filings including applications to NCLT, SEBI, RBI, and other relevant authorities. Our team ensures complete compliance with all applicable regulations.",
    },
    {
      question: "What are the typical costs involved?",
      answer: "Costs depend on transaction complexity, value, and scope of services required. We provide transparent fee structures and detailed cost estimates during our initial consultation.",
    },
  ],
  detailedDescription: "Our experienced team provides comprehensive support throughout the entire process, from initial planning and strategy development through to final execution and post-completion support. We leverage our deep expertise and extensive network to ensure optimal outcomes for our clients.",
};

// Specific content for different sub-services
export const subServiceContentMap: Record<string, Record<string, SubServiceContent>> = {
  "corporate-restructuring": {
    "merger-amalgamation": {
      keyFeatures: [
        "Strategic planning and feasibility analysis",
        "Valuation and swap ratio determination",
        "Drafting of scheme of arrangement",
        "NCLT representation and filings",
        "Shareholder and creditor communication",
        "Post-merger integration support",
      ],
      statistics: [
        { value: "150+", label: "Mergers Completed" },
        { value: "₹12,000Cr+", label: "Combined Value" },
        { value: "99%", label: "Approval Rate" },
        { value: "6-9 Mo", label: "Avg. Timeline" },
      ],
      caseStudies: [
        {
          title: "Pharmaceutical Industry Consolidation",
          industry: "Pharmaceuticals",
          challenge: "Merger of two listed pharmaceutical companies with complex shareholding patterns and regulatory requirements across multiple states.",
          result: "Successfully completed merger with NCLT approval in 8 months, achieving significant synergies.",
          metrics: "₹2,500 Cr combined entity value",
        },
        {
          title: "NBFC Amalgamation",
          industry: "Financial Services",
          challenge: "Amalgamation of three NBFCs requiring RBI and NCLT approvals with different regulatory frameworks.",
          result: "Seamless integration completed with all regulatory approvals obtained within timeline.",
          metrics: "30% operational efficiency gains",
        },
        {
          title: "IT Services Merger",
          industry: "Technology",
          challenge: "Cross-border elements involving overseas subsidiaries and complex IP transfer requirements.",
          result: "Complete restructuring achieved with tax-efficient structure and minimal business disruption.",
          metrics: "₹1,800 Cr transaction value",
        },
      ],
      faqs: [
        {
          question: "What is the difference between merger and amalgamation?",
          answer: "In a merger, two or more companies combine to form a new entity, while in amalgamation, one or more companies merge into an existing company. The legal and tax implications differ, and our team helps determine the optimal structure for your specific situation.",
        },
        {
          question: "How long does the NCLT approval process take?",
          answer: "Typically, the NCLT process takes 6-9 months from filing to final order. This includes first motion hearing, notice to stakeholders, second motion hearing, and final order. We manage the entire process to minimize delays.",
        },
        {
          question: "What are the tax implications of a merger?",
          answer: "Mergers can be structured as tax-neutral under Section 47 of the Income Tax Act if certain conditions are met. Our tax advisory team works alongside to ensure optimal tax efficiency in the transaction structure.",
        },
        {
          question: "Can unlisted companies merge with listed companies?",
          answer: "Yes, unlisted companies can merge with listed companies (reverse merger) subject to SEBI regulations and stock exchange requirements. This is often used as a route to listing. We have extensive experience in such transactions.",
        },
      ],
      detailedDescription: "Our merger and amalgamation practice combines deep legal expertise with strategic business insight. We guide clients through every aspect of the transaction, from initial feasibility analysis and valuation through to post-merger integration. Our team has successfully executed mergers across diverse industries including manufacturing, pharmaceuticals, technology, and financial services.",
    },
    "demerger": {
      keyFeatures: [
        "Strategic demerger planning and structuring",
        "Tax-efficient separation strategies",
        "Valuation of demerged undertaking",
        "NCLT scheme drafting and approval",
        "Stakeholder communication management",
        "Post-demerger compliance support",
      ],
      statistics: [
        { value: "75+", label: "Demergers Executed" },
        { value: "₹8,000Cr+", label: "Value Unlocked" },
        { value: "100%", label: "Regulatory Approval" },
        { value: "25%", label: "Avg. Value Unlock" },
      ],
      caseStudies: [
        {
          title: "Conglomerate Business Separation",
          industry: "Diversified",
          challenge: "Separation of real estate and manufacturing divisions of a large conglomerate to unlock shareholder value.",
          result: "Successfully demerged into two focused entities with significant value creation.",
          metrics: "45% increase in combined market cap",
        },
        {
          title: "Healthcare Vertical Spin-off",
          industry: "Healthcare",
          challenge: "Carve-out of diagnostics business from hospital chain requiring complex asset and liability allocation.",
          result: "Clean separation achieved with both entities performing strongly post-demerger.",
          metrics: "₹1,200 Cr value unlocked",
        },
      ],
      faqs: [
        {
          question: "What are the benefits of demerger?",
          answer: "Demergers unlock hidden value by allowing each business to be valued independently, improve management focus, enable strategic flexibility, and can provide tax advantages. Our team helps identify the optimal demerger structure to maximize these benefits.",
        },
        {
          question: "How are assets and liabilities allocated in a demerger?",
          answer: "Allocation is based on the scheme of arrangement, typically following the principle of direct attribution where possible. Common assets and liabilities are allocated based on agreed ratios. We ensure fair and defensible allocation that meets regulatory requirements.",
        },
        {
          question: "What happens to employees in a demerger?",
          answer: "Employees are transferred to the resulting company based on the undertaking they are associated with. Their terms and conditions are typically protected. We help manage the HR aspects including communication and transition planning.",
        },
        {
          question: "Is stamp duty applicable on demerger?",
          answer: "Many states offer stamp duty exemptions for court-approved demergers. The applicability varies by state and transaction structure. Our team ensures optimal structuring to minimize stamp duty and other transaction costs.",
        },
      ],
      detailedDescription: "Our demerger practice focuses on creating value through strategic business separation. We have extensive experience in structuring demergers that unlock shareholder value while ensuring smooth operational continuity. Our approach combines legal precision with strategic business thinking to deliver optimal outcomes.",
    },
  },
  "fundraising-investment": {
    "fdi": {
      keyFeatures: [
        "FDI policy advisory and sector analysis",
        "Investment structuring and optimization",
        "RBI and government approval facilitation",
        "FEMA compliance and documentation",
        "Downstream investment structuring",
        "Annual compliance and reporting support",
      ],
      statistics: [
        { value: "$2B+", label: "FDI Facilitated" },
        { value: "200+", label: "Transactions" },
        { value: "50+", label: "Countries" },
        { value: "100%", label: "Compliance Rate" },
      ],
      caseStudies: [
        {
          title: "European PE Investment in Indian Fintech",
          industry: "Fintech",
          challenge: "Complex FDI structuring in regulated fintech sector with multiple round investments and convertible instruments.",
          result: "Successfully structured compliant investment with optimal tax efficiency.",
          metrics: "$150M investment structured",
        },
        {
          title: "Japanese Strategic Investment",
          industry: "Automotive",
          challenge: "Government approval route investment requiring liaison with multiple ministries and regulatory bodies.",
          result: "Approval obtained within 4 months with comprehensive compliance framework.",
          metrics: "$300M investment approved",
        },
      ],
      faqs: [
        {
          question: "What sectors are prohibited for FDI?",
          answer: "Sectors like lottery, gambling, chit funds, real estate business, and tobacco manufacturing are prohibited. Some sectors have caps and conditions. Our team provides detailed sector-specific guidance based on current regulations.",
        },
        {
          question: "What is the difference between automatic and government route?",
          answer: "Under automatic route, no prior approval is needed - only post-investment reporting. Government route requires prior approval from the concerned ministry. We help determine the applicable route and manage the approval process.",
        },
        {
          question: "What are the pricing guidelines for FDI?",
          answer: "Pricing is governed by FEMA regulations - typically at fair value determined by internationally accepted methods for unlisted companies. For listed companies, SEBI pricing guidelines apply. We ensure compliant valuation.",
        },
        {
          question: "Can foreign investors exit their investment?",
          answer: "Yes, exits are permitted subject to pricing guidelines and sectoral conditions. We help structure tax-efficient exit strategies while ensuring full regulatory compliance.",
        },
      ],
      detailedDescription: "Our FDI practice provides end-to-end support for cross-border investments into India. We combine deep regulatory expertise with practical transaction experience to structure investments that are compliant, tax-efficient, and aligned with business objectives. Our team stays current with evolving FDI policies to provide accurate, timely advice.",
    },
    "preferential-allotment-private-placement": {
      keyFeatures: [
        "Structuring of preferential allotment/private placement",
        "Valuation and pricing determination",
        "Board and shareholder resolution drafting",
        "Regulatory filing with RoC/Stock Exchanges",
        "Investor documentation and agreements",
        "Post-issue compliance and reporting",
      ],
      statistics: [
        { value: "300+", label: "Issues Completed" },
        { value: "₹15,000Cr+", label: "Funds Raised" },
        { value: "100%", label: "Compliance Rate" },
        { value: "45 Days", label: "Avg. Completion" },
      ],
      caseStudies: [
        {
          title: "Listed Company Preferential Issue",
          industry: "Infrastructure",
          challenge: "Time-bound preferential allotment to promoters and strategic investors with complex pricing requirements.",
          result: "Successfully completed within regulatory timeline with all approvals.",
          metrics: "₹500 Cr raised in 40 days",
        },
        {
          title: "Startup Series Funding",
          industry: "Technology",
          challenge: "Multiple investor private placement with complex terms including anti-dilution and liquidation preferences.",
          result: "Clean documentation and compliant structure enabling future funding rounds.",
          metrics: "₹200 Cr Series C completed",
        },
      ],
      faqs: [
        {
          question: "What is the difference between preferential allotment and private placement?",
          answer: "Preferential allotment is issuance to a select group at a price that may be different from market price (for listed companies). Private placement is a broader term for issuance to identified persons not exceeding 200 in a financial year. Different procedural requirements apply.",
        },
        {
          question: "What are the lock-in requirements?",
          answer: "For listed companies, securities issued on preferential basis have lock-in requirements - typically 1 year for non-promoters and 3 years for promoters (with exceptions). We ensure compliance with applicable lock-in norms.",
        },
        {
          question: "How is the pricing determined?",
          answer: "For listed companies, SEBI prescribes minimum pricing based on volume-weighted average price. For unlisted companies, pricing is based on valuation report. We ensure compliant and defensible pricing.",
        },
        {
          question: "Can convertible securities be issued?",
          answer: "Yes, convertible securities like CCDs and CCPs can be issued through preferential allotment/private placement subject to pricing and conversion terms compliance. We help structure optimal convertible instruments.",
        },
      ],
      detailedDescription: "Our preferential allotment and private placement practice provides comprehensive support for equity and convertible fundraising. We ensure full compliance with Companies Act, SEBI regulations, and FEMA provisions while optimizing transaction structure and documentation.",
    },
  },
  "advisory-legal": {
    "taxation-advisory": {
      keyFeatures: [
        "Direct and indirect tax planning",
        "Transaction tax structuring",
        "Tax due diligence",
        "Transfer pricing advisory",
        "Tax controversy management",
        "International tax planning",
      ],
      statistics: [
        { value: "₹2,000Cr+", label: "Tax Savings Delivered" },
        { value: "500+", label: "Advisory Engagements" },
        { value: "95%", label: "Success in Disputes" },
        { value: "20+", label: "Industry Sectors" },
      ],
      caseStudies: [
        {
          title: "M&A Tax Structuring",
          industry: "Consumer Goods",
          challenge: "Complex acquisition structure requiring optimization of stamp duty, capital gains, and indirect taxes.",
          result: "Achieved significant tax savings through optimal structuring.",
          metrics: "₹150 Cr tax savings",
        },
        {
          title: "International Tax Planning",
          industry: "IT Services",
          challenge: "Restructuring of global operations to optimize withholding taxes and treaty benefits.",
          result: "Implemented compliant structure with improved tax efficiency.",
          metrics: "25% reduction in effective tax rate",
        },
      ],
      faqs: [
        {
          question: "How can M&A transactions be structured tax-efficiently?",
          answer: "Various structures like slump sale, demerger, share purchase, or business transfer can have different tax implications. We analyze all options to recommend the most tax-efficient structure while ensuring commercial objectives are met.",
        },
        {
          question: "What is transfer pricing and why is it important?",
          answer: "Transfer pricing refers to pricing of transactions between related parties. It's crucial for compliance with tax laws and avoiding disputes. We help establish and document arm's length pricing for intercompany transactions.",
        },
        {
          question: "How do you handle tax disputes?",
          answer: "We provide end-to-end support for tax disputes including assessment proceedings, appeals, and settlement. Our approach combines technical excellence with practical dispute resolution strategies.",
        },
        {
          question: "What international tax services do you offer?",
          answer: "We advise on cross-border tax planning, treaty interpretation, permanent establishment issues, BEPS compliance, and global restructuring. Our network enables coordinated advice across jurisdictions.",
        },
      ],
      detailedDescription: "Our taxation practice provides strategic tax advice that goes beyond compliance. We help clients optimize their tax position through proactive planning while managing tax risks effectively. Our team includes specialists in direct taxes, indirect taxes, and international taxation.",
    },
    "sebi-regulations-advisory": {
      keyFeatures: [
        "SEBI LODR compliance advisory",
        "Takeover code guidance",
        "Insider trading regulations",
        "Issue and listing regulations",
        "Intermediary regulations",
        "Regulatory representation",
      ],
      statistics: [
        { value: "400+", label: "Listed Company Clients" },
        { value: "100%", label: "Compliance Track Record" },
        { value: "50+", label: "SEBI Representations" },
        { value: "15+", label: "Years Experience" },
      ],
      caseStudies: [
        {
          title: "Open Offer Compliance",
          industry: "FMCG",
          challenge: "Complex open offer triggered by indirect acquisition with multiple regulatory considerations.",
          result: "Successfully navigated SEBI requirements and completed compliant open offer.",
          metrics: "₹800 Cr open offer managed",
        },
        {
          title: "Insider Trading Investigation",
          industry: "Pharmaceuticals",
          challenge: "SEBI investigation into alleged insider trading requiring comprehensive response and defense.",
          result: "Successfully defended with no adverse findings after detailed submissions.",
          metrics: "Clean closure achieved",
        },
      ],
      faqs: [
        {
          question: "What are the key LODR compliance requirements?",
          answer: "LODR covers corporate governance, disclosures, related party transactions, and periodic filings. Key requirements include board composition, audit committee, quarterly results, and material event disclosures. We provide ongoing compliance support.",
        },
        {
          question: "When is an open offer required?",
          answer: "Open offer is triggered when acquiring 25% or more shares, or crossing specified thresholds, or gaining control. Several exemptions are available. We help assess trigger events and structure transactions appropriately.",
        },
        {
          question: "How do you ensure insider trading compliance?",
          answer: "We help establish code of conduct, trading window procedures, and UPSI handling protocols. Regular training and monitoring frameworks are implemented to ensure organization-wide compliance.",
        },
        {
          question: "What support do you provide for SEBI investigations?",
          answer: "We provide comprehensive support including response preparation, document management, representation in proceedings, and appeal filings. Our experience with SEBI helps navigate investigations effectively.",
        },
      ],
      detailedDescription: "Our SEBI regulations practice provides comprehensive advisory on all aspects of securities law compliance. We help listed companies, intermediaries, and market participants navigate the complex regulatory landscape with confidence. Our team includes former regulators and practitioners with deep SEBI expertise.",
    },
  },
  "compliance": {
    "listed-company-compliances": {
      keyFeatures: [
        "SEBI LODR ongoing compliance",
        "Stock exchange filings and communications",
        "Corporate governance advisory",
        "Board meeting and AGM support",
        "Related party transaction compliance",
        "Periodic disclosure management",
      ],
      statistics: [
        { value: "200+", label: "Listed Company Clients" },
        { value: "10,000+", label: "Filings Annually" },
        { value: "100%", label: "On-time Filing Rate" },
        { value: "Zero", label: "Regulatory Penalties" },
      ],
      caseStudies: [
        {
          title: "IPO to Ongoing Compliance Transition",
          industry: "Technology",
          challenge: "First-time listed company requiring establishment of complete compliance framework and governance structure.",
          result: "Seamless transition with all compliances met from day one of listing.",
          metrics: "Zero observations in first year",
        },
        {
          title: "Compliance Remediation",
          industry: "Manufacturing",
          challenge: "Company with multiple compliance gaps requiring comprehensive remediation to meet listing requirements.",
          result: "Complete remediation achieved within 6 months with improved governance.",
          metrics: "Clean compliance record established",
        },
      ],
      faqs: [
        {
          question: "What are the key quarterly compliances for listed companies?",
          answer: "Key quarterly requirements include financial results, shareholding pattern, corporate governance report, and various event-based disclosures. We manage all filings to ensure timely and accurate compliance.",
        },
        {
          question: "How do you handle material event disclosures?",
          answer: "We have established protocols to identify and disclose material events within prescribed timelines. Our team provides real-time guidance on disclosure requirements and drafts appropriate announcements.",
        },
        {
          question: "What board meeting support do you provide?",
          answer: "We support the entire board meeting cycle including agenda preparation, compliance calendar, resolution drafting, and post-meeting filings. Our team ensures meetings are conducted in full compliance with all requirements.",
        },
        {
          question: "How do you manage related party transactions?",
          answer: "We help establish RPT framework including policy, approval matrix, and disclosure requirements. Regular monitoring and quarterly reporting to audit committee is managed systematically.",
        },
      ],
      detailedDescription: "Our listed company compliance practice provides comprehensive, ongoing support to ensure seamless regulatory compliance. We act as an extension of your compliance team, managing all filings, disclosures, and governance requirements with precision and reliability.",
    },
    "due-diligence": {
      keyFeatures: [
        "Legal and regulatory due diligence",
        "Financial due diligence coordination",
        "Tax due diligence",
        "Compliance health check",
        "Red flag identification and analysis",
        "Detailed reporting and recommendations",
      ],
      statistics: [
        { value: "500+", label: "Due Diligences Completed" },
        { value: "₹50,000Cr+", label: "Transaction Value Covered" },
        { value: "98%", label: "Deal Completion Rate" },
        { value: "15", label: "Avg. Turnaround Days" },
      ],
      caseStudies: [
        {
          title: "PE Acquisition Due Diligence",
          industry: "Healthcare",
          challenge: "Comprehensive due diligence of hospital chain with complex regulatory approvals and land title issues.",
          result: "Identified key risks enabling appropriate deal protection through representations and indemnities.",
          metrics: "₹2,000 Cr deal enabled",
        },
        {
          title: "Pre-IPO Due Diligence",
          industry: "Consumer",
          challenge: "Thorough housekeeping assessment ahead of IPO to identify and remediate issues.",
          result: "Clean bill of health achieved with all issues addressed pre-filing.",
          metrics: "Successful IPO completion",
        },
      ],
      faqs: [
        {
          question: "What does legal due diligence typically cover?",
          answer: "Legal due diligence covers corporate records, material contracts, litigation, intellectual property, real estate, regulatory compliance, and employment matters. Scope is customized based on transaction requirements.",
        },
        {
          question: "How long does due diligence typically take?",
          answer: "Timeline depends on company size and complexity. Typical due diligence takes 2-4 weeks. We work efficiently to meet transaction timelines while ensuring thorough coverage.",
        },
        {
          question: "How are due diligence findings addressed?",
          answer: "Findings are categorized by risk level and dealt through various mechanisms including remediation, representations and warranties, indemnities, or price adjustments. We help negotiate appropriate protections.",
        },
        {
          question: "Do you provide vendor due diligence?",
          answer: "Yes, we provide vendor due diligence reports that can be shared with potential buyers. This accelerates the sale process and provides seller control over the diligence process.",
        },
      ],
      detailedDescription: "Our due diligence practice provides thorough, insightful analysis that enables informed decision-making. We go beyond issue identification to provide practical recommendations and risk mitigation strategies. Our experienced team has reviewed hundreds of companies across diverse sectors.",
    },
  },
  "buying-selling-companies": {
    "takeovers": {
      keyFeatures: [
        "Open offer structuring and execution",
        "SEBI takeover regulation compliance",
        "Pricing and timing strategy",
        "Public announcement and disclosures",
        "Escrow and payment mechanisms",
        "Post-acquisition compliance",
      ],
      statistics: [
        { value: "100+", label: "Takeovers Managed" },
        { value: "₹25,000Cr+", label: "Transaction Value" },
        { value: "100%", label: "Regulatory Approval" },
        { value: "45 Days", label: "Avg. Open Offer Period" },
      ],
      caseStudies: [
        {
          title: "Hostile Takeover Defense",
          industry: "Manufacturing",
          challenge: "Target company defense against unsolicited open offer requiring strategic response and stakeholder management.",
          result: "Successfully defended with competing offer providing better value to shareholders.",
          metrics: "35% premium achieved for shareholders",
        },
        {
          title: "Strategic Acquisition",
          industry: "Financial Services",
          challenge: "Acquisition of listed NBFC requiring RBI approval alongside SEBI open offer requirements.",
          result: "Seamless coordination between regulators with timely completion.",
          metrics: "₹1,500 Cr acquisition completed",
        },
      ],
      faqs: [
        {
          question: "When is an open offer triggered?",
          answer: "Open offer is triggered when acquiring 25% or more shares, or exceeding 5% in a financial year if already holding 25-75%, or gaining control. Various exemptions are available under the takeover code.",
        },
        {
          question: "How is the open offer price determined?",
          answer: "Price is the highest of negotiated price, volume-weighted average price (60/10 trading days), and highest price paid by acquirer in 52 weeks. Our team ensures compliant pricing.",
        },
        {
          question: "What is the timeline for an open offer?",
          answer: "Open offer process takes approximately 45-60 days from public announcement to completion. Key milestones include detailed public statement, tendering period, payment, and post-offer formalities.",
        },
        {
          question: "Can an open offer be withdrawn?",
          answer: "Withdrawal is permitted only in limited circumstances like regulatory non-approval or statutory intervention. Competing offers and voluntary improvements are regulated. We advise on all strategic options.",
        },
      ],
      detailedDescription: "Our takeover practice provides comprehensive support for both acquirers and target companies. We have extensive experience navigating SEBI takeover regulations, managing open offers, and handling complex strategic situations including competing offers and hostile takeovers.",
    },
    "slump-sale": {
      keyFeatures: [
        "Transaction structuring and tax planning",
        "Valuation of business undertaking",
        "Business transfer agreement drafting",
        "Asset and liability identification",
        "Employee transfer management",
        "Post-transaction compliance",
      ],
      statistics: [
        { value: "50+", label: "Slump Sales Executed" },
        { value: "₹8,000Cr+", label: "Transaction Value" },
        { value: "40%", label: "Avg. Tax Savings" },
        { value: "90 Days", label: "Avg. Completion" },
      ],
      caseStudies: [
        {
          title: "Business Division Transfer",
          industry: "Pharmaceuticals",
          challenge: "Transfer of generics division to a joint venture partner as a going concern.",
          result: "Tax-efficient transfer completed with seamless operational continuity.",
          metrics: "₹600 Cr transaction value",
        },
        {
          title: "Private Equity Portfolio Restructuring",
          industry: "Retail",
          challenge: "Carve-out of e-commerce business for separate PE investment.",
          result: "Clean separation enabling independent growth and fundraising.",
          metrics: "₹400 Cr valuation achieved",
        },
      ],
      faqs: [
        {
          question: "What is slump sale and how is it different from asset sale?",
          answer: "Slump sale is transfer of a business undertaking as a going concern for a lump sum consideration. Unlike asset sale, individual assets are not separately valued, offering potential stamp duty and tax benefits.",
        },
        {
          question: "What are the tax implications of slump sale?",
          answer: "Gains are taxed as capital gains (LTCG/STCG based on holding period). The cost basis is net worth of undertaking. Proper structuring can result in significant tax efficiency compared to asset sales.",
        },
        {
          question: "How is consideration determined in slump sale?",
          answer: "Consideration is a lump sum amount negotiated between parties. It should be fair and justifiable. We help with valuation support and negotiation of appropriate consideration.",
        },
        {
          question: "What happens to employees in slump sale?",
          answer: "Employees of the transferred undertaking typically transfer to the buyer with continuity of service. Terms are governed by the business transfer agreement. We help manage the HR transition.",
        },
      ],
      detailedDescription: "Our slump sale practice provides end-to-end support for business transfers on a going concern basis. We help structure transactions that are tax-efficient, legally robust, and operationally smooth. Our experience spans diverse industries and transaction types.",
    },
  },
  "other-services": {
    "startup-services": {
      keyFeatures: [
        "Company incorporation and structuring",
        "DPIIT Startup India registration",
        "Fundraising support (Angel to Series)",
        "ESOP scheme design and implementation",
        "Regulatory compliance management",
        "Exit planning and execution",
      ],
      statistics: [
        { value: "200+", label: "Startups Supported" },
        { value: "₹5,000Cr+", label: "Funding Raised" },
        { value: "50+", label: "Successful Exits" },
        { value: "100+", label: "ESOP Schemes" },
      ],
      caseStudies: [
        {
          title: "Fintech Unicorn Journey",
          industry: "Fintech",
          challenge: "Supporting a startup from seed stage through multiple funding rounds to unicorn status.",
          result: "Comprehensive legal support through 5 funding rounds and regulatory approvals.",
          metrics: "$1B+ valuation achieved",
        },
        {
          title: "Strategic Exit",
          industry: "EdTech",
          challenge: "M&A exit requiring complex structuring for founder and investor alignment.",
          result: "Successful acquisition with optimal returns for all stakeholders.",
          metrics: "15x return for investors",
        },
      ],
      faqs: [
        {
          question: "What structure is best for startups?",
          answer: "Most VC-fundable startups should be private limited companies. For specific situations, LLPs or foreign holding structures may be appropriate. We help determine optimal structure based on business model and fundraising plans.",
        },
        {
          question: "How do you support fundraising?",
          answer: "We provide end-to-end legal support including term sheet negotiation, due diligence preparation, documentation, and closing. Our startup experience helps navigate investor requirements efficiently.",
        },
        {
          question: "What ESOP services do you offer?",
          answer: "We design and implement ESOP schemes including plan drafting, valuation, grant documentation, exercise support, and regulatory compliance. Our schemes are optimized for tax efficiency and flexibility.",
        },
        {
          question: "What Startup India benefits can you help access?",
          answer: "Benefits include self-certification for labor laws, tax exemptions, fast-track patent applications, and easier public procurement. We help with DPIIT registration and accessing applicable benefits.",
        },
      ],
      detailedDescription: "Our startup practice provides tailored support for the unique needs of emerging companies. We understand the startup journey and provide practical, efficient solutions that support rapid growth while ensuring compliance. Our team has worked with hundreds of startups from incorporation to exit.",
    },
    "insolvency-services": {
      keyFeatures: [
        "Corporate insolvency resolution process",
        "Voluntary liquidation",
        "Personal guarantor insolvency",
        "Resolution plan preparation",
        "Stakeholder representation",
        "IBC litigation support",
      ],
      statistics: [
        { value: "75+", label: "IBC Matters Handled" },
        { value: "₹10,000Cr+", label: "Resolution Value" },
        { value: "80%", label: "Resolution Success Rate" },
        { value: "15+", label: "Years IBC Experience" },
      ],
      caseStudies: [
        {
          title: "Manufacturing Company Resolution",
          industry: "Steel",
          challenge: "Complex CIRP of steel company with multiple creditor classes and operational challenges.",
          result: "Successful resolution with going concern preservation and maximum creditor recovery.",
          metrics: "60% recovery for financial creditors",
        },
        {
          title: "Real Estate CIRP",
          industry: "Real Estate",
          challenge: "Homebuyer-focused resolution with complex project-level insolvency issues.",
          result: "Project completion focused resolution protecting homebuyer interests.",
          metrics: "1,000+ homebuyers protected",
        },
      ],
      faqs: [
        {
          question: "What are the grounds for initiating CIRP?",
          answer: "CIRP can be initiated for default of ₹1 crore or more. Financial creditors, operational creditors, and the corporate debtor itself can file applications. We assess eligibility and filing strategy.",
        },
        {
          question: "What is the CIRP timeline?",
          answer: "CIRP must be completed within 180 days, extendable by 90 days. Further extension up to 330 days is possible in certain cases. We help manage the process within statutory timelines.",
        },
        {
          question: "What is voluntary liquidation?",
          answer: "Companies with no debt or ability to pay debts can opt for voluntary liquidation. It's a cleaner, faster process than compulsory liquidation. We manage the complete voluntary liquidation process.",
        },
        {
          question: "How do you represent in CoC meetings?",
          answer: "We represent creditors in Committee of Creditors meetings, advising on voting, resolution plan evaluation, and strategy. Our experience helps creditors maximize recoveries through the process.",
        },
      ],
      detailedDescription: "Our insolvency practice provides comprehensive IBC services for all stakeholders - corporate debtors, financial creditors, operational creditors, and resolution applicants. We combine legal expertise with commercial insight to navigate the insolvency process effectively and maximize outcomes.",
    },
  },
};

// Function to get content for a specific sub-service
export const getSubServiceContent = (
  serviceSlug: string,
  subServiceSlug: string
): SubServiceContent => {
  const serviceContent = subServiceContentMap[serviceSlug];
  if (serviceContent && serviceContent[subServiceSlug]) {
    return serviceContent[subServiceSlug];
  }
  return defaultContent;
};
