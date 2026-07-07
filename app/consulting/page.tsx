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
      { title: "AI Strategy", description: "Develop comprehensive, phased roadmaps that align your enterprise's unique business goals with state-of-the-art AI adoption, ensuring seamless integration and measurable long-term ROI." },
      { title: "Machine Learning", description: "Design and deploy custom machine learning models utilizing the latest architectures to unlock predictive analytics, detect complex patterns, and drastically reduce operational overhead." },
      { title: "Generative AI", description: "Implement sophisticated Large Language Models (LLMs) safely within your private cloud to automate tedious workflows, generate context-aware content, and empower your workforce." },
      { title: "Business Intelligence", description: "Build scalable data engineering pipelines and dynamic visualization dashboards that provide real-time, actionable insights for key decision-makers across your entire organization." }
    ]
  },
  {
    id: "blockchain",
    title: "Enterprise Blockchain Consulting",
    description: "Expert guidance on Layer 1, Layer 2, Hyperledger, Digital Identity, Smart Contracts, Enterprise DLT and Tokenization for secure, decentralized operations.",
    illustrationSrc: "/image%203.jpg",
    reverseLayout: true,
    capabilities: [
      { title: "Enterprise DLT", description: "Architect highly scalable, permissioned blockchain networks utilizing Hyperledger Fabric and R3 Corda tailored for institutional privacy, speed, and regulatory compliance." },
      { title: "Smart Contracts", description: "Develop, rigorously audit, and deploy complex self-executing smart contracts designed to automate multi-party trust scenarios without exposing vulnerabilities or risking asset loss." },
      { title: "Digital Identity", description: "Implement zero-knowledge proofs and decentralized identifiers (DIDs) to construct robust identity solutions that drastically enhance user privacy and prevent data breaches." },
      { title: "Tokenization", description: "Navigate the technical and regulatory complexities of tokenizing real-world assets (RWAs), establishing liquid digital markets with compliant, programmable asset ownership." }
    ]
  },
  {
    id: "cybersecurity",
    title: "Security Built Into Every Layer",
    description: "Comprehensive security consulting including Zero Trust architecture, IAM, Risk Assessment, Security Audits, Cloud Security and Compliance.",
    illustrationSrc: "/image%204.jpeg",
    reverseLayout: false,
    capabilities: [
      { title: "Zero Trust Architecture", description: "Eliminate implicit trust by continuously validating every stage of digital interaction, securing remote workforces, and mitigating internal and external threat vectors." },
      { title: "Security Audits", description: "Execute rigorous penetration testing, vulnerability assessments, and red-teaming exercises to identify and patch critical infrastructure flaws before malicious actors can exploit them." },
      { title: "Cloud Security", description: "Secure complex, hybrid, and multi-cloud environments utilizing advanced posture management (CSPM), encrypted transit, and granular workload protection strategies." },
      { title: "Compliance", description: "Ensure your infrastructure meets and exceeds rigorous global regulatory frameworks including ISO 27001, SOC 2, HIPAA, and GDPR through automated compliance mapping." }
    ]
  },
  {
    id: "cloud",
    title: "Modern Cloud Infrastructure",
    description: "Scalable cloud strategies covering Cloud Migration, Kubernetes, DevOps, Microservices, Multi-cloud and Cloud Security.",
    illustrationSrc: "/image%205.png",
    reverseLayout: true,
    capabilities: [
      { title: "Cloud Migration", description: "Execute seamless, zero-downtime migrations of legacy on-premise systems to modern cloud infrastructure like AWS, GCP, or Azure utilizing proven refactoring methodologies." },
      { title: "Kubernetes & DevOps", description: "Accelerate development lifecycles by automating CI/CD pipelines and orchestrating resilient container deployments using enterprise-grade Kubernetes ecosystems." },
      { title: "Microservices", description: "Deconstruct monolithic legacy applications into decoupled, independently deployable microservices to achieve massive scalability, fault isolation, and faster feature delivery." },
      { title: "Multi-Cloud Strategy", description: "Design vendor-agnostic cloud deployments to prevent lock-in, optimize infrastructure costs, and guarantee high availability across redundant global regions." }
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise Digital Transformation",
    description: "Modernize your organization with ERP modernization, workflow automation, enterprise architecture, integrations and digital transformation consulting.",
    illustrationSrc: "/image%206.jpg",
    reverseLayout: false,
    capabilities: [
      { title: "ERP Modernization", description: "Upgrade fragmented legacy ERP systems to cohesive, modern cloud platforms that unify finance, supply chain, HR, and operations under a single source of truth." },
      { title: "Workflow Automation", description: "Identify bottlenecks in complex enterprise operations and implement advanced Robotic Process Automation (RPA) to streamline repetitive tasks and reduce human error." },
      { title: "System Integration", description: "Connect disparate platforms and legacy databases securely using robust API gateways and event-driven architectures, ensuring fluid data transfer across your tech stack." },
      { title: "Enterprise Architecture", description: "Design comprehensive, future-proof IT landscapes that balance immediate operational requirements with long-term strategic adaptability and technological evolution." }
    ]
  },
  {
    id: "network",
    title: "Reliable Enterprise Networking",
    description: "High-performance network design including SD-WAN, campus networking, data center networking, optimization, monitoring and network security.",
    illustrationSrc: "/image%207.jpg",
    reverseLayout: true,
    capabilities: [
      { title: "SD-WAN Architecture", description: "Deploy software-defined wide area networks that dynamically route traffic across multiple transport links, significantly reducing costs while ensuring maximum uptime." },
      { title: "Data Center Networking", description: "Engineer high-throughput, low-latency switching fabrics utilizing modern spine-leaf architectures to support massive internal data replication and virtualized workloads." },
      { title: "Network Security", description: "Fortify the perimeter and internal zones with next-generation firewalls (NGFW), deep packet inspection, and intrusion prevention systems (IPS) to block advanced threats." },
      { title: "Optimization", description: "Perform deep traffic analysis and proactive performance tuning to guarantee critical application bandwidth, resolve latency issues, and enhance end-user experience." }
    ]
  },
  {
    id: "sustainability",
    title: "Technology That Supports Sustainable Growth",
    description: "Align your tech stack with the planet through ESG technology, carbon intelligence, energy analytics, green infrastructure and sustainability reporting.",
    illustrationSrc: "/image%208.jpg",
    reverseLayout: false,
    capabilities: [
      { title: "ESG Technology", description: "Implement centralized platforms for tracking Environmental, Social, and Governance (ESG) metrics in real-time, providing transparency for investors and stakeholders." },
      { title: "Carbon Intelligence", description: "Utilize data-driven models to precisely calculate your organizational carbon footprint, identify high-emission areas, and execute actionable reduction strategies." },
      { title: "Green Infrastructure", description: "Design highly energy-efficient data center architectures and cloud resource scheduling systems that drastically lower power consumption without sacrificing performance." },
      { title: "Sustainability Reporting", description: "Automate complex compliance workflows to effortlessly generate standardized sustainability reports required by emerging global regulations and industry frameworks." }
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
