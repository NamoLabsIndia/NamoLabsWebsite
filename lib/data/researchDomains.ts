import { 
  Lock, Key, Globe, Shield, Activity, Share2, 
  Database, Network, Zap, ShieldCheck, 
  Brain, Cpu, Eye, MessageSquare, Microscope, Building, Users,
  Atom, LockKeyhole, Wifi, HardDrive,
  Cloud, CloudCog, ShieldAlert, BarChart, Server, Calendar
} from 'lucide-react';
import React from 'react';

export interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface ValueProp {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface DomainData {
  slug: string;
  
  // Hero Card
  tag: string;
  titlePrefix: string;
  titleHighlight: string;
  heroDescription: string;
  statusBoxIcon: React.ElementType;
  statusBoxTitle: string;
  statusBoxDescription: string;
  heroImage: string;

  // Features Card
  featuresTitle: string;
  featuresDescription: string;
  features: Feature[];

  // CTA Card
  ctaTag: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  ctaButtonIcon?: boolean;
  valueProps: ValueProp[];
  ctaImage: string;

  // Optional "further reading" link to a related /insights article.
  furtherReading?: {
    label: string;
    title: string;
    href: string;
  };
}

export const researchDomains: Record<string, DomainData> = {
  blockchain: {
    slug: 'blockchain',
    tag: 'BLOCKCHAIN',
    titlePrefix: 'Our Blockchain Research is ',
    titleHighlight: 'In Progress',
    heroDescription: 'Blockchain is a distributed ledger technology that lets multiple parties maintain a shared, tamper-evident record of transactions without a central authority. Our research spans Layer 1 protocol design, Layer 2 scaling solutions like rollups and state channels, permissioned Hyperledger frameworks for enterprise use, and cross-chain interoperability — building decentralized infrastructure that is secure, scalable, and ready for real-world deployment.',
    statusBoxIcon: Microscope,
    statusBoxTitle: 'Research in Progress',
    statusBoxDescription: 'Building robust, scalable and interoperable blockchain technologies for the future.',
    heroImage: '/img/domains/blockchain-hero.png',
    
    featuresTitle: 'What We Are Working On',
    featuresDescription: 'Our blockchain research focuses on solving real-world problems through scalable, secure and interoperable decentralized systems.',
    features: [
      { icon: Network, title: 'Layer 1 Development', description: 'Designing high-performance, decentralized blockchains with strong consensus and security.' },
      { icon: Database, title: 'Layer 2 Scaling', description: 'Researching rollups, state channels and scaling solutions for mass adoption.' },
      { icon: Share2, title: 'Hyperledger Ecosystem', description: 'Building permissioned blockchain solutions for enterprises and institutions.' },
      { icon: Globe, title: 'DLT & Interoperability', description: 'Advancing cross-chain interoperability, privacy-preserving protocols and decentralized applications.' }
    ],

    ctaTag: 'BUILDING THE DECENTRALIZED FUTURE',
    ctaTitle: 'Research Today. Decentralized Tomorrow.',
    ctaDescription: 'We are committed to pushing the boundaries of blockchain technology and building the infrastructure for a trustless, transparent and decentralized world.',
    ctaButtonText: 'Stay Tuned',
    ctaButtonIcon: true,
    valueProps: [
      { icon: Users, title: 'Research-Driven', description: 'Deep research in blockchain protocols, consensus mechanisms and security.' },
      { icon: Building, title: 'Enterprise Ready', description: 'Building solutions that are practical, compliant and ready for enterprise use.' },
      { icon: ShieldCheck, title: 'Secure & Scalable', description: 'Security and scalability are at the core of every solution we explore.' }
    ],
    ctaImage: '/img/domains/blockchain-cta.png'
  },
  cryptography: {
    slug: 'cryptography',
    tag: 'CRYPTOGRAPHY',
    titlePrefix: 'Our Cryptography Research is ',
    titleHighlight: 'In Progress',
    heroDescription: 'Post-quantum cryptography (PQC) is the discipline of designing cryptographic algorithms that remain secure against attacks from both classical and quantum computers — a pressing concern since sufficiently powerful quantum computers could break widely-used schemes like RSA and elliptic-curve cryptography. We research quantum-resistant algorithms for real-world deployment, high-assurance security models for critical systems, and next-generation cryptographic infrastructure built for the post-quantum era.',
    statusBoxIcon: Lock,
    statusBoxTitle: 'Research in Progress',
    statusBoxDescription: 'Pushing the boundaries of cryptographic security. More details coming soon.',
    heroImage: '/img/domains/crypto-hero.png',

    featuresTitle: 'What We Are Working On',
    featuresDescription: 'Our cryptography research is focused on building stronger, quantum-resistant and mission-critical security solutions for the future.',
    features: [
      { icon: Key, title: 'Post-Quantum Cryptography', description: 'Developing quantum-resistant algorithms and protocols for a secure future.' },
      { icon: LockKeyhole, title: 'Real-world Applications', description: 'Applying advanced cryptography in practical systems and enterprise-grade solutions.' },
      { icon: Shield, title: 'High-Assurance Security', description: 'Researching robust security models for critical and high-stakes environments.' },
      { icon: Atom, title: 'Next-Gen Cryptographic Systems', description: 'Exploring innovative primitives and architectures for tomorrow\'s cryptographic infrastructure.' }
    ],

    ctaTag: 'ADVANCING SECURE TOMORROW',
    ctaTitle: 'Building the Future of Secure Communication.',
    ctaDescription: 'We are working on cutting-edge cryptographic technologies to protect what matters most.',
    ctaButtonText: 'Stay Tuned',
    ctaButtonIcon: true,
    valueProps: [
      { icon: Microscope, title: 'Research-Driven', description: 'Deep research in emerging cryptographic paradigms.' },
      { icon: Globe, title: 'Built for Real World', description: 'Creating solutions that deliver real-world impact.' },
      { icon: ShieldCheck, title: 'Security at the Core', description: 'Security, privacy and trust in everything we build.' }
    ],
    ctaImage: '/img/domains/crypto-cta.png',
    furtherReading: {
      label: 'Further reading',
      title: "NIST's 2024 PQC standards: ML-KEM and ML-DSA explained",
      href: '/insights/nist-pqc-standards-ml-kem-ml-dsa-explained',
    }
  },
  ai: {
    slug: 'ai',
    tag: 'ARTIFICIAL INTELLIGENCE',
    titlePrefix: 'Our AI Research is ',
    titleHighlight: 'Coming Soon',
    heroDescription: 'Artificial intelligence spans the systems that let machines perceive, learn, reason, and act — from machine learning models that find patterns in data to computer vision and natural language processing systems that interpret images and text. Our AI research is in its early stages, laying the groundwork for intelligent, ethical, and impactful systems, with a focus on responsible development alongside technical capability.',
    statusBoxIcon: Calendar,
    statusBoxTitle: 'Research Launching Soon',
    statusBoxDescription: 'Stay tuned for updates on our AI research initiatives, publications and breakthroughs.',
    heroImage: '/img/domains/ai-hero.png',

    featuresTitle: 'What We Are Focusing On',
    featuresDescription: 'Our upcoming AI research will focus on solving real-world problems through innovative and responsible AI systems.',
    features: [
      { icon: Brain, title: 'Intelligent Systems', description: 'Building models and algorithms that learn, reason and adapt.' },
      { icon: Database, title: 'Machine Learning', description: 'Exploring advanced ML techniques for complex, real-world data.' },
      { icon: Eye, title: 'Computer Vision', description: 'Enabling machines to perceive and understand the world.' },
      { icon: MessageSquare, title: 'Natural Language Processing', description: 'Building systems that understand, generate and communicate.' }
    ],

    ctaTag: 'COLLABORATE WITH US',
    ctaTitle: 'Let\'s Build the Future, Together.',
    ctaDescription: 'We are always open to collaborating with researchers, institutions and innovators who share our vision for a better tomorrow.',
    ctaButtonText: 'Let\'s Collaborate',
    ctaButtonIcon: true,
    valueProps: [
      { icon: Users, title: 'Open to Researchers', description: 'Work with our team on foundational AI research, from model architecture to responsible deployment practices.' },
      { icon: Building, title: 'Industry Partnerships', description: 'Partner with us to apply AI to real operational challenges, not just research demos.' },
      { icon: Globe, title: 'Global Impact', description: 'Build AI systems designed to be capable and trustworthy at once, not one at the expense of the other.' }
    ],
    ctaImage: '/img/domains/ai-cta.png'
  },
  quantum: {
    slug: 'quantum',
    tag: 'QUANTUM',
    titlePrefix: 'Our Quantum Research is ',
    titleHighlight: 'Coming Soon',
    heroDescription: 'Quantum technologies use the physical principles of superposition and entanglement to compute, communicate, and sense in ways classical systems cannot — from quantum computers that could solve certain problems exponentially faster, to quantum key distribution (QKD) that detects eavesdropping through physics rather than math alone. Our quantum research is in its early stages, exploring computing architectures, quantum-safe communication protocols, and quantum sensing technologies.',
    statusBoxIcon: Calendar,
    statusBoxTitle: 'Research Launching Soon',
    statusBoxDescription: 'Stay tuned for updates on our quantum research initiatives, publications and breakthroughs.',
    heroImage: '/img/domains/quantum-hero.png',

    featuresTitle: 'What We Are Exploring',
    featuresDescription: 'Our upcoming quantum research will focus on building technologies that solve problems beyond the limits of classical computing.',
    features: [
      { icon: Atom, title: 'Quantum Computing', description: 'Exploring new algorithms and architectures for solving hard computational problems.' },
      { icon: Shield, title: 'Quantum Security', description: 'Researching quantum-safe cryptography and secure communication protocols.' },
      { icon: Wifi, title: 'Quantum Communication', description: 'Investigating entanglement, QKD and the future of ultra-secure information transfer.' },
      { icon: HardDrive, title: 'Quantum Materials & Sensors', description: 'Exploring quantum materials and sensing technologies for real-world applications.' }
    ],

    ctaTag: 'COLLABORATE WITH US',
    ctaTitle: 'Let\'s Build the Future, Together.',
    ctaDescription: 'We are always open to collaborating with researchers, institutions and innovators who share our vision for a better tomorrow.',
    ctaButtonText: 'Let\'s Collaborate',
    ctaButtonIcon: true,
    valueProps: [
      { icon: Users, title: 'Open to Researchers', description: 'Work with our team on quantum algorithms, QKD protocols, and the physics of next-generation computing.' },
      { icon: Building, title: 'Industry Partnerships', description: 'Partner with us to prepare your infrastructure for the security implications of practical quantum computing.' },
      { icon: Globe, title: 'Global Impact', description: 'Build the communication and computing systems that stay secure into the quantum era.' }
    ],
    ctaImage: '/img/domains/quantum-cta.png'
  },
  cloud: {
    slug: 'cloud',
    tag: 'CLOUD',
    titlePrefix: 'Our Cloud Research is ',
    titleHighlight: 'Coming Soon',
    heroDescription: 'Cloud technologies are the architectures and practices that let organizations run software on shared, elastic infrastructure instead of dedicated hardware — from containerized microservices to fully serverless, event-driven systems, secured through zero-trust models that verify every request regardless of network location. Our cloud research is in its early stages, focused on scalable architecture, zero-trust security, and intelligent, cloud-native systems.',
    statusBoxIcon: Calendar,
    statusBoxTitle: 'Research Launching Soon',
    statusBoxDescription: 'Stay tuned for updates on our cloud research initiatives, publications and breakthroughs.',
    heroImage: '/img/domains/cloud-hero.png',

    featuresTitle: 'What We Are Exploring',
    featuresDescription: 'Our upcoming cloud research will focus on building technologies that enable scalable, resilient and intelligent cloud ecosystems.',
    features: [
      { icon: Cloud, title: 'Cloud Architecture', description: 'Designing next-gen architectures for highly scalable and resilient cloud infrastructure.' },
      { icon: ShieldAlert, title: 'Cloud Security', description: 'Researching zero-trust models, data protection and secure cloud operations.' },
      { icon: CloudCog, title: 'Cloud Intelligence', description: 'Integrating AI and analytics for intelligent automation and resource optimization.' },
      { icon: Server, title: 'Cloud-Native Systems', description: 'Building serverless, containerized and microservices-based systems for the future.' }
    ],

    ctaTag: 'COLLABORATE WITH US',
    ctaTitle: 'Let\'s Build the Future, Together.',
    ctaDescription: 'We are always open to collaborating with researchers, institutions and innovators who share our vision for a better tomorrow.',
    ctaButtonText: 'Let\'s Collaborate',
    ctaButtonIcon: true,
    valueProps: [
      { icon: Users, title: 'Open to Researchers', description: 'Work with our team on cloud-native architecture, zero-trust security models, and intelligent automation.' },
      { icon: Building, title: 'Industry Partnerships', description: 'Partner with us to modernize infrastructure without trading away security or reliability.' },
      { icon: Globe, title: 'Global Impact', description: "Build cloud systems that scale with an organization's growth, not against it." }
    ],
    ctaImage: '/img/domains/cloud-hero.png' // Fallback to hero image due to rate limits
  }
};
