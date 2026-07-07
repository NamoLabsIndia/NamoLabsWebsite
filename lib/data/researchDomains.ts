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
}

export const researchDomains: Record<string, DomainData> = {
  blockchain: {
    slug: 'blockchain',
    tag: 'BLOCKCHAIN',
    titlePrefix: 'Our Blockchain Research is ',
    titleHighlight: 'In Progress',
    heroDescription: 'We are building the next generation of decentralized infrastructure. Our research spans Layer 1 and Layer 2 solutions, Hyperledger frameworks and advanced DLT architectures for real-world impact.',
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
    heroDescription: 'We are actively working on Post-Quantum Cryptography (PQC) for real-world applications and next-generation cryptographic systems that ensure security in the age of quantum computing.',
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
    ctaImage: '/img/domains/crypto-cta.png'
  },
  ai: {
    slug: 'ai',
    tag: 'ARTIFICIAL INTELLIGENCE',
    titlePrefix: 'Our AI Research is ',
    titleHighlight: 'Coming Soon',
    heroDescription: 'We are laying the foundations for pioneering research in Artificial Intelligence. Our team is working on innovative ideas that will shape intelligent, ethical and impactful systems for the future.',
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
      { icon: Users, title: 'Open to Researchers', description: 'Work with our team on cutting-edge ideas.' },
      { icon: Building, title: 'Industry Partnerships', description: 'Co-create solutions that drive innovation.' },
      { icon: Globe, title: 'Global Impact', description: 'Build technologies that empower humanity.' }
    ],
    ctaImage: '/img/domains/ai-cta.png'
  },
  quantum: {
    slug: 'quantum',
    tag: 'QUANTUM',
    titlePrefix: 'Our Quantum Research is ',
    titleHighlight: 'Coming Soon',
    heroDescription: 'We are laying the foundations for pioneering research in Quantum Technologies. Our team is exploring breakthrough ideas that will define the next era of secure, powerful and scalable systems.',
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
      { icon: Users, title: 'Open to Researchers', description: 'Work with our team on cutting-edge quantum ideas.' },
      { icon: Building, title: 'Industry Partnerships', description: 'Co-create solutions that drive the next revolution.' },
      { icon: Globe, title: 'Global Impact', description: 'Build technologies that shape the future of humanity.' }
    ],
    ctaImage: '/img/domains/quantum-cta.png'
  },
  cloud: {
    slug: 'cloud',
    tag: 'CLOUD',
    titlePrefix: 'Our Cloud Research is ',
    titleHighlight: 'Coming Soon',
    heroDescription: 'We are laying the foundations for pioneering research in Cloud Technologies. Our team is exploring innovative ideas that will power the next generation of scalable, secure and intelligent cloud systems.',
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
      { icon: Users, title: 'Open to Researchers', description: 'Work with our team on cutting-edge cloud ideas.' },
      { icon: Building, title: 'Industry Partnerships', description: 'Co-create solutions that drive real-world impact.' },
      { icon: Globe, title: 'Global Impact', description: 'Build technologies that empower organizations and communities worldwide.' }
    ],
    ctaImage: '/img/domains/cloud-hero.png' // Fallback to hero image due to rate limits
  }
};
