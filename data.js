// Job Data - Sample job listings for each country
var jobsData = [
    // New Zealand Jobs

    {
        id: 20,
        slug: "farm-manager",
        title: "Farm Manager",
        company: "Farm Management",
        location: "Hamilton, New Zealand",
        country: "new-zealand",
        type: "Full-time",
        externalUrl: "https://www.careers.govt.nz/jobs-database/",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: `Position: Farm Manager
Location: Hamilton, New Zealand
Employment Type: Full-time, Permanent
Salary: NZD $60,000 – $75,000 per year
Suitable for overseas applicants (visa sponsorship available)

About Us

We are a family-operated farming business in the Hamilton region specializing in dairy, sheep, and beef farming. We're looking for an experienced farm manager to oversee daily operations and help grow our business.

Role Responsibilities

Farm Management:
• Oversee daily farm operations including livestock management
• Manage staff and coordinate seasonal workers
• Monitor animal health and welfare
• Plan and execute breeding programs
• Maintain farm equipment and infrastructure

Administrative Duties:
• Budget management and financial planning
• Record keeping and compliance with regulations
• Coordinate with suppliers and buyers
• Implement health and safety protocols

Requirements

• 3+ years farm management experience
• Knowledge of New Zealand farming practices
• Strong leadership and communication skills
• Ability to work outdoors in all weather conditions
• Valid driver's license required

What We Provide

• Competitive salary (NZD $60,000 – $75,000)
• Visa sponsorship for qualified candidates
• On-farm accommodation may be available
• Training and career development opportunities
• Supportive rural community

How to Apply

Contact us to discuss this opportunity and visa sponsorship options.`,
        visaSponsorship: true,
        publishedDate: "Jan 15, 2026",
        externalUrl: "https://company-website.com/apply-link"
    },

    {
        id: 1,
        slug: "senior-software-engineer",
        title: "Senior Software Engineer",
        company: "Tech Solutions NZ",
        location: "Auckland, New Zealand",
        country: "new-zealand",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: `Position: Senior Software Engineer
Location: Auckland, New Zealand
Start Date: Immediate or Negotiable
Employment Type: Full-time, Permanent
Salary: NZD $110,000 – $140,000 per year
Suitable for overseas applicants (visa sponsorship available)

About Us

We are a leading technology company in Auckland specializing in innovative software solutions for clients across healthcare, finance, and e-commerce sectors. Our team is passionate about building scalable, high-performance applications using cutting-edge technologies.

Role Responsibilities

Development Duties:
• Design, develop, and maintain web applications using React, Node.js, and Python
• Build and optimize cloud infrastructure on AWS and Azure platforms
• Write clean, maintainable code following best practices and coding standards
• Participate in code reviews and mentor junior developers
• Collaborate with product managers and designers on new features

Technical Leadership:
• Lead technical discussions and architectural decisions
• Troubleshoot complex production issues
• Implement automated testing and CI/CD pipelines
• Stay current with emerging technologies and industry trends

Requirements

• Bachelor's degree in Computer Science or related field (or equivalent experience)
• 5+ years of professional software development experience
• Strong proficiency in JavaScript/TypeScript, Python, or similar languages
• Experience with modern frameworks (React, Vue, Angular)
• Knowledge of cloud platforms (AWS, Azure, GCP)
• Excellent problem-solving and communication skills
• Ability to work independently and in a team environment

What We Provide

• Competitive salary package (NZD $110,000 – $140,000)
• Visa sponsorship for qualified international candidates
• Comprehensive health and life insurance
• Flexible working arrangements (hybrid remote options)
• Professional development budget and training opportunities
• Modern office in central Auckland with great amenities
• Collaborative and innovative work culture
• Career growth opportunities in a growing company

How to Apply

Please visit our careers page to submit your application with CV and cover letter.

For more information, contact: careers@techsolutionsnz.com`,
        visaSponsorship: true,
        externalUrl: "https://careers.example.com/nz/software-engineer"
    },
    {
        id: 2,
        slug: "registered-nurse",
        title: "Registered Nurse",
        company: "Auckland Health Services",
        location: "Wellington, New Zealand",
        country: "new-zealand",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Join our dedicated healthcare team as a Registered Nurse...",
        visaSponsorship: true,
        externalUrl: "https://healthcareers.nz/nurse-positions"
    },
    {
        id: 3,
        slug: "construction-project-manager",
        title: "Construction Project Manager",
        company: "BuildRight NZ",
        location: "Christchurch, New Zealand",
        country: "new-zealand",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Lead major infrastructure and construction projects...",
        visaSponsorship: true,
        externalUrl: "https://buildright.co.nz/careers"
    },
    {
        id: 4,
        slug: "marketing-manager",
        title: "Marketing Manager",
        company: "Digital Growth Co",
        location: "Auckland, New Zealand",
        country: "new-zealand",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Drive marketing strategies for leading brands...",
        visaSponsorship: true,
        externalUrl: "https://digitalgrowth.nz/marketing-jobs"
    },

    // Australia Jobs
    {
        id: 5,
        slug: "data-scientist",
        title: "Data Scientist",
        company: "Analytics Australia",
        location: "Sydney, Australia",
        country: "australia",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1518186265540-8fbf64db2543?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Work with big data and machine learning...",
        visaSponsorship: true,
        externalUrl: "https://analyticsau.com.au/data-scientist"
    },
    {
        id: 6,
        slug: "civil-engineer",
        title: "Civil Engineer",
        company: "Infrastructure AU",
        location: "Melbourne, Australia",
        country: "australia",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1581094794329-cd1096d7a43f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Design and oversee major construction projects...",
        visaSponsorship: true,
        externalUrl: "https://infrastructure.com.au/careers"
    },
    {
        id: 7,
        slug: "chef-de-partie",
        title: "Chef de Partie",
        company: "Fine Dining Group",
        location: "Brisbane, Australia",
        country: "australia",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Join our award-winning restaurant team...",
        visaSponsorship: true,
        externalUrl: "https://finedining.com.au/chef-jobs"
    },
    {
        id: 8,
        slug: "mechanical-engineer",
        title: "Mechanical Engineer",
        company: "Advanced Manufacturing",
        location: "Perth, Australia",
        country: "australia",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1537462713505-9583f1e50bac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Design innovative mechanical systems...",
        visaSponsorship: true,
        externalUrl: "https://advancedmfg.com.au/engineering"
    },

    // Canada Jobs
    {
        id: 9,
        slug: "full-stack-developer",
        title: "Full Stack Developer",
        company: "Tech Innovators Canada",
        location: "Toronto, Canada",
        country: "canada",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Build scalable web applications...",
        visaSponsorship: true,
        externalUrl: "https://techinnovators.ca/developer-jobs"
    },
    {
        id: 10,
        slug: "pharmacist",
        title: "Pharmacist",
        company: "HealthCare Plus",
        location: "Vancouver, Canada",
        country: "canada",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Licensed pharmacists needed...",
        visaSponsorship: true,
        externalUrl: "https://healthcareplus.ca/pharmacist"
    },
    {
        id: 11,
        slug: "accountant-cpa",
        title: "Accountant (CPA)",
        company: "Financial Services Group",
        location: "Calgary, Canada",
        country: "canada",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Join our accounting team serving diverse clients...",
        visaSponsorship: true,
        externalUrl: "https://financialservices.ca/accounting"
    },
    {
        id: 12,
        slug: "electrical-engineer",
        title: "Electrical Engineer",
        company: "Power Solutions Inc",
        location: "Montreal, Canada",
        country: "canada",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Design electrical systems for commercial projects...",
        visaSponsorship: true,
        externalUrl: "https://powersolutions.ca/careers"
    },

    // USA Jobs
    {
        id: 13,
        slug: "software-architect",
        title: "Software Architect",
        company: "Silicon Valley Tech",
        location: "San Francisco, USA",
        country: "usa",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Lead architectural decisions for enterprise software...",
        visaSponsorship: true,
        externalUrl: "https://svtech.com/careers/architect"
    },
    {
        id: 14,
        slug: "physical-therapist",
        title: "Physical Therapist",
        company: "Wellness Medical Center",
        location: "New York, USA",
        country: "usa",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Licensed physical therapists needed...",
        visaSponsorship: true,
        externalUrl: "https://wellnessmedical.com/therapist-jobs"
    },
    {
        id: 15,
        slug: "financial-analyst",
        title: "Financial Analyst",
        company: "Investment Partners LLC",
        location: "Chicago, USA",
        country: "usa",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Analyze financial data and provide investment recommendations...",
        visaSponsorship: true,
        externalUrl: "https://investmentpartners.com/analyst"
    },
    {
        id: 16,
        slug: "cybersecurity-specialist",
        title: "Cybersecurity Specialist",
        company: "SecureNet Solutions",
        location: "Austin, USA",
        country: "usa",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1563206767-5b1d97299337?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Protect critical infrastructure from cyber threats...",
        visaSponsorship: true,
        externalUrl: "https://securenet.com/security-jobs"
    },
    {
        id: 17,
        slug: "product-manager",
        title: "Product Manager",
        company: "Innovation Labs",
        location: "Seattle, USA",
        country: "usa",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Drive product strategy and roadmap...",
        visaSponsorship: true,
        externalUrl: "https://innovationlabs.com/product-manager"
    },
    {
        id: 18,
        slug: "biomedical-engineer",
        title: "Biomedical Engineer",
        company: "MedTech Innovations",
        location: "Boston, USA",
        country: "usa",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1581093458891-9f3039dc3863?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Develop next-generation medical devices...",
        visaSponsorship: true,
        externalUrl: "https://medtechinnovations.com/biomedical"
    },

    // Ireland Jobs
    {
        id: 30,
        slug: "software-engineer-ireland",
        title: "Software Engineer",
        company: "Dublin Tech Hub",
        location: "Dublin, Ireland",
        country: "ireland",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1549918830-11ec3d405be1?auto=format&fit=crop&w=1000&q=80",
        description: "Join Dublin's vibrant tech scene as a software engineer...",
        visaSponsorship: true,
        externalUrl: "https://example.com/apply/ireland-se"
    },

    // Singapore Jobs
    {
        id: 31,
        slug: "financial-analyst-singapore",
        title: "Financial Analyst",
        company: "SG Global Finance",
        location: "Singapore",
        country: "singapore",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1000&q=80",
        description: "Exciting opportunities in Singapore's financial district...",
        visaSponsorship: true,
        externalUrl: "https://example.com/apply/singapore-fa"
    },

    // Finland Jobs
    {
        id: 32,
        slug: "it-specialist-finland",
        title: "IT Specialist",
        company: "Helsinki Systems",
        location: "Helsinki, Finland",
        country: "finland",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1549419137-97996f0190ba?auto=format&fit=crop&w=1000&q=80",
        description: "Work in the heart of Finland's technology sector...",
        visaSponsorship: true,
        externalUrl: "https://example.com/apply/finland-it"
    },

    // Belgium Jobs
    {
        id: 33,
        slug: "logistics-coordinator-belgium",
        title: "Logistics Coordinator",
        company: "Antwerp Port Logistics",
        location: "Antwerp, Belgium",
        country: "belgium",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1563811771046-ba984ff30900?auto=format&fit=crop&w=1000&q=80",
        description: "Manage global logistics at one of Europe's largest ports...",
        visaSponsorship: true,
        externalUrl: "https://example.com/apply/belgium-logistics"
    },

    // Luxembourg Jobs
    {
        id: 34,
        slug: "compliance-officer-luxembourg",
        title: "Compliance Officer",
        company: "Luxembourg Financial Group",
        location: "Luxembourg City, Luxembourg",
        country: "luxembourg",
        type: "Full-time",
        image: "https://images.unsplash.com/photo-1610484089025-a74fc95790a3?auto=format&fit=crop&w=1000&q=80",
        description: "Join the leading financial hub of Europe...",
        visaSponsorship: true,
        externalUrl: "https://example.com/apply/luxembourg-compliance"
    }
];
