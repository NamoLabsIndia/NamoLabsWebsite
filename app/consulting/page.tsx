import React from "react";
import ConsultingHero from "@/components/consulting/ConsultingHero";
import ServicesGrid from "@/components/consulting/ServicesGrid";
import ServiceDetailSection from "@/components/consulting/ServiceDetailSection";
import ConsultingProcess from "@/components/consulting/ConsultingProcess";
import IndustriesGrid from "@/components/consulting/IndustriesGrid";
import ConsultingCTA from "@/components/consulting/ConsultingCTA";

export const metadata = {
  title: "Consulting | Namo Labs",
  description: "Research-Backed Consulting for Tomorrow’s Technology.",
};

const SERVICES_DATA = [
  {
    id: "ai-analytics",
    title: "Transform Data Into Intelligent Decisions",
    description: "Enterprise AI strategy, machine learning, predictive analytics, automation, business intelligence, and generative AI consulting tailored for complex organizational needs.",
    illustrationSrc: "/image%202.webp",
    reverseLayout: false,
    capabilities: [
      { title: "AI Strategy", description: "Strategic roadmaps for enterprise AI adoption." },
      { title: "Machine Learning", description: "Custom models for predictive analytics." },
      { title: "Generative AI", description: "LLM integration and workflow automation." },
      { title: "Business Intelligence", description: "Data engineering and advanced analytics." }
    ]
  },
  {
    id: "blockchain",
    title: "Enterprise Blockchain Consulting",
    description: "Expert guidance on Layer 1, Layer 2, Hyperledger, Digital Identity, Smart Contracts, Enterprise DLT and Tokenization for secure, decentralized operations.",
    illustrationSrc: "/image%203.jpg",
    reverseLayout: true,
    capabilities: [
      { title: "Enterprise DLT", description: "Hyperledger and private chain architecture." },
      { title: "Smart Contracts", description: "Secure, audited contract development." },
      { title: "Digital Identity", description: "Zero-knowledge identity solutions." },
      { title: "Tokenization", description: "Asset tokenization and regulatory compliance." }
    ]
  },
  {
    id: "cybersecurity",
    title: "Security Built Into Every Layer",
    description: "Comprehensive security consulting including Zero Trust architecture, IAM, Risk Assessment, Security Audits, Cloud Security and Compliance.",
    illustrationSrc: "/image%204.jpeg",
    reverseLayout: false,
    capabilities: [
      { title: "Zero Trust Architecture", description: "Implement identity-first security models." },
      { title: "Security Audits", description: "Rigorous penetration testing and auditing." },
      { title: "Cloud Security", description: "Securing multi-cloud environments." },
      { title: "Compliance", description: "ISO 27001, SOC 2, and regulatory alignment." }
    ]
  },
  {
    id: "cloud",
    title: "Modern Cloud Infrastructure",
    description: "Scalable cloud strategies covering Cloud Migration, Kubernetes, DevOps, Microservices, Multi-cloud and Cloud Security.",
    illustrationSrc: "/image%205.png",
    reverseLayout: true,
    capabilities: [
      { title: "Cloud Migration", description: "Seamless transition to modern cloud infrastructure." },
      { title: "Kubernetes & DevOps", description: "Container orchestration and CI/CD automation." },
      { title: "Microservices", description: "Decoupled architecture for high availability." },
      { title: "Multi-Cloud Strategy", description: "Vendor-agnostic cloud deployments." }
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise Digital Transformation",
    description: "Modernize your organization with ERP modernization, workflow automation, enterprise architecture, integrations and digital transformation consulting.",
    illustrationSrc: "/image%206.jpg",
    reverseLayout: false,
    capabilities: [
      { title: "ERP Modernization", description: "Upgrading legacy systems to modern platforms." },
      { title: "Workflow Automation", description: "Streamlining complex enterprise processes." },
      { title: "System Integration", description: "Connecting disparate platforms securely." },
      { title: "Enterprise Architecture", description: "Designing future-proof IT landscapes." }
    ]
  },
  {
    id: "network",
    title: "Reliable Enterprise Networking",
    description: "High-performance network design including SD-WAN, campus networking, data center networking, optimization, monitoring and network security.",
    illustrationSrc: "/image%207.jpg",
    reverseLayout: true,
    capabilities: [
      { title: "SD-WAN Architecture", description: "Software-defined wide area networks." },
      { title: "Data Center Networking", description: "High-throughput, low-latency fabrics." },
      { title: "Network Security", description: "Firewalls, IDS/IPS, and secure access." },
      { title: "Optimization", description: "Traffic analysis and performance tuning." }
    ]
  },
  {
    id: "sustainability",
    title: "Technology That Supports Sustainable Growth",
    description: "Align your tech stack with the planet through ESG technology, carbon intelligence, energy analytics, green infrastructure and sustainability reporting.",
    illustrationSrc: "/image%208.jpg",
    reverseLayout: false,
    capabilities: [
      { title: "ESG Technology", description: "Platforms for tracking ESG metrics." },
      { title: "Carbon Intelligence", description: "Data-driven carbon footprint reduction." },
      { title: "Green Infrastructure", description: "Energy-efficient data center strategies." },
      { title: "Sustainability Reporting", description: "Automated compliance and reporting." }
    ]
  }
];

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-white">
      <ConsultingHero />
      <ServicesGrid />
      
      {/* 7 Detailed Service Frames */}
      <div className="flex flex-col">
        {SERVICES_DATA.map((service) => (
          <ServiceDetailSection
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            illustrationSrc={service.illustrationSrc}
            capabilities={service.capabilities}
            reverseLayout={service.reverseLayout}
          />
        ))}
      </div>

      <ConsultingProcess />
      <IndustriesGrid />
      <ConsultingCTA />
    </main>
  );
}
