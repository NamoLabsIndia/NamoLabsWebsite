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
      { title: "AI Strategy", description: "Develop comprehensive, phased roadmaps that align your enterprise's unique business goals with state-of-the-art AI adoption, ensuring seamless integration and measurable long-term ROI.", image: "/segment%20sub%20logo/AI%20strategy.jpg" },
      { title: "Machine Learning", description: "Design and deploy custom machine learning models utilizing the latest architectures to unlock predictive analytics, detect complex patterns, and drastically reduce operational overhead.", image: "/segment%20sub%20logo/Machine%20learning.webp" },
      { title: "Generative AI", description: "Implement sophisticated Large Language Models (LLMs) safely within your private cloud to automate tedious workflows, generate context-aware content, and empower your workforce.", image: "/segment%20sub%20logo/Genai.jpeg" },
      { title: "Business Intelligence", description: "Build scalable data engineering pipelines and dynamic visualization dashboards that provide real-time, actionable insights for key decision-makers across your entire organization.", image: "/segment%20sub%20logo/Business%20Intelligence.webp" }
    ]
  },
  {
    id: "blockchain",
    title: "Enterprise Blockchain Consulting",
    description: "Expert guidance on Layer 1, Layer 2, Hyperledger, Digital Identity, Smart Contracts, Enterprise DLT and Tokenization for secure, decentralized operations.",
    illustrationSrc: "/image%203.jpg",
    reverseLayout: true,
    capabilities: [
      { title: "Enterprise DLT", description: "Architect highly scalable, permissioned blockchain networks utilizing Hyperledger Fabric and R3 Corda tailored for institutional privacy, speed, and regulatory compliance.", image: "/segment%20sub%20logo/Enterprise%20DLT.avif" },
      { title: "Smart Contracts", description: "Develop, rigorously audit, and deploy complex self-executing smart contracts designed to automate multi-party trust scenarios without exposing vulnerabilities or risking asset loss.", image: "/segment%20sub%20logo/smart%20contracts.jpeg" },
      { title: "Digital Identity", description: "Implement zero-knowledge proofs and decentralized identifiers (DIDs) to construct robust identity solutions that drastically enhance user privacy and prevent data breaches.", image: "/segment%20sub%20logo/Digital%20Identity%20.jpg" },
      { title: "Tokenization", description: "Navigate the technical and regulatory complexities of tokenizing real-world assets (RWAs), establishing liquid digital markets with compliant, programmable asset ownership.", image: "/segment%20sub%20logo/Tokenisation.jpg" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Security Built Into Every Layer",
    description: "Comprehensive security consulting including Zero Trust architecture, IAM, Risk Assessment, Security Audits, Cloud Security and Compliance.",
    illustrationSrc: "/image%204.jpeg",
    reverseLayout: false,
    capabilities: [
      { title: "Zero Trust Architecture", description: "Eliminate implicit trust by continuously validating every stage of digital interaction, securing remote workforces, and mitigating internal and external threat vectors.", image: "/segment%20sub%20logo/Zero%20trust%20architecture.jpeg" },
      { title: "Security Audits", description: "Execute rigorous penetration testing, vulnerability assessments, and red-teaming exercises to identify and patch critical infrastructure flaws before malicious actors can exploit them.", image: "/segment%20sub%20logo/security%20audits.png" },
      { title: "Cloud Security", description: "Secure complex, hybrid, and multi-cloud environments utilizing advanced posture management (CSPM), encrypted transit, and granular workload protection strategies.", image: "/segment%20sub%20logo/CloudSecurity.webp" },
      { title: "Compliance", description: "Ensure your infrastructure meets and exceeds rigorous global regulatory frameworks including ISO 27001, SOC 2, HIPAA, and GDPR through automated compliance mapping.", image: "/segment%20sub%20logo/compliance.jpeg" }
    ]
  },
  {
    id: "cloud",
    title: "Modern Cloud Infrastructure",
    description: "Scalable cloud strategies covering Cloud Migration, Kubernetes, DevOps, Microservices, Multi-cloud and Cloud Security.",
    illustrationSrc: "/image%205.png",
    reverseLayout: true,
    capabilities: [
      { title: "Cloud Migration", description: "Execute seamless, zero-downtime migrations of legacy on-premise systems to modern cloud infrastructure like AWS, GCP, or Azure utilizing proven refactoring methodologies.", image: "/segment%20sub%20logo/Cloud%20Migration.jpg" },
      { title: "Kubernetes & DevOps", description: "Accelerate development lifecycles by automating CI/CD pipelines and orchestrating resilient container deployments using enterprise-grade Kubernetes ecosystems.", image: "/segment%20sub%20logo/devops-.png" },
      { title: "Microservices", description: "Deconstruct monolithic legacy applications into decoupled, independently deployable microservices to achieve massive scalability, fault isolation, and faster feature delivery.", image: "/segment%20sub%20logo/microservico.jpg" },
      { title: "Multi-Cloud Strategy", description: "Design vendor-agnostic cloud deployments to prevent lock-in, optimize infrastructure costs, and guarantee high availability across redundant global regions.", image: "/segment%20sub%20logo/Multi-cloud-strategy.webp" }
    ]
  },
  {
    id: "enterprise",
    title: "Enterprise Digital Transformation",
    description: "Modernize your organization with ERP modernization, workflow automation, enterprise architecture, integrations and digital transformation consulting.",
    illustrationSrc: "/image%206.jpg",
    reverseLayout: false,
    capabilities: [
      { title: "ERP Modernization", description: "Upgrade fragmented legacy ERP systems to cohesive, modern cloud platforms that unify finance, supply chain, HR, and operations under a single source of truth.", image: "/segment%20sub%20logo/ERP%20Modernisation.jpeg" },
      { title: "Workflow Automation", description: "Identify bottlenecks in complex enterprise operations and implement advanced Robotic Process Automation (RPA) to streamline repetitive tasks and reduce human error.", image: "/segment%20sub%20logo/workflow%20automation.jpeg" },
      { title: "System Integration", description: "Connect disparate platforms and legacy databases securely using robust API gateways and event-driven architectures, ensuring fluid data transfer across your tech stack.", image: "/segment%20sub%20logo/system%20integration.jpeg" },
      { title: "Enterprise Architecture", description: "Design comprehensive, future-proof IT landscapes that balance immediate operational requirements with long-term strategic adaptability and technological evolution.", image: "/segment%20sub%20logo/enterprise-architecture.jpg" }
    ]
  },
  {
    id: "network",
    title: "Reliable Enterprise Networking",
    description: "High-performance network design including SD-WAN, campus networking, data center networking, optimization, monitoring and network security.",
    illustrationSrc: "/image%207.jpg",
    reverseLayout: true,
    capabilities: [
      { title: "SD-WAN Architecture", description: "Deploy software-defined wide area networks that dynamically route traffic across multiple transport links, significantly reducing costs while ensuring maximum uptime.", image: "/segment%20sub%20logo/SD-WAN%20Architecture.png" },
      { title: "Data Center Networking", description: "Engineer high-throughput, low-latency switching fabrics utilizing modern spine-leaf architectures to support massive internal data replication and virtualized workloads.", image: "/segment%20sub%20logo/data%20center%20networking.webp" },
      { title: "Network Security", description: "Fortify the perimeter and internal zones with next-generation firewalls (NGFW), deep packet inspection, and intrusion prevention systems (IPS) to block advanced threats.", image: "/segment%20sub%20logo/network%20security%20.jpeg" },
      { title: "Optimization", description: "Perform deep traffic analysis and proactive performance tuning to guarantee critical application bandwidth, resolve latency issues, and enhance end-user experience.", image: "/segment%20sub%20logo/optimization.jpeg" }
    ]
  },
  {
    id: "sustainability",
    title: "Technology That Supports Sustainable Growth",
    description: "Align your tech stack with the planet through ESG technology, carbon intelligence, energy analytics, green infrastructure and sustainability reporting.",
    illustrationSrc: "/image%208.jpg",
    reverseLayout: false,
    capabilities: [
      { title: "ESG Technology", description: "Implement centralized platforms for tracking Environmental, Social, and Governance (ESG) metrics in real-time, providing transparency for investors and stakeholders.", image: "/segment%20sub%20logo/esg%20technology%20.webp" },
      { title: "Carbon Intelligence", description: "Utilize data-driven models to precisely calculate your organizational carbon footprint, identify high-emission areas, and execute actionable reduction strategies.", image: "/segment%20sub%20logo/carbon%20intelligence.webp" },
      { title: "Green Infrastructure", description: "Design highly energy-efficient data center architectures and cloud resource scheduling systems that drastically lower power consumption without sacrificing performance.", image: "/segment%20sub%20logo/green%20infrastrcuture.jpeg" },
      { title: "Sustainability Reporting", description: "Automate complex compliance workflows to effortlessly generate standardized sustainability reports required by emerging global regulations and industry frameworks.", image: "/segment%20sub%20logo/sustainablity%20reporting.jpeg" }
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
