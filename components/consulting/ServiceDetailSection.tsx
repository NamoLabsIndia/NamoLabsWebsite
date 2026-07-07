"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Capability {
  title: string;
  description: string;
}

interface ServiceDetailSectionProps {
  id: string;
  title: string;
  description: string;
  illustrationSrc: string;
  capabilities: Capability[];
  reverseLayout?: boolean;
}

export default function ServiceDetailSection({
  id,
  title,
  description,
  illustrationSrc,
  capabilities,
  reverseLayout = false
}: ServiceDetailSectionProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Slow, elegant parallax
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id={id} className={`py-32 relative overflow-hidden ${reverseLayout ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
      {/* Subtle Floating Ambient Gradients */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-40 ${reverseLayout ? 'left-[-10%] bg-blue-100' : 'right-[-10%] bg-indigo-100'}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Content Area */}
        <div className={`flex flex-col lg:flex-row gap-16 xl:gap-24 items-center mb-24 ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className="w-full lg:w-[40%] flex-shrink-0 z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-5xl font-[800] text-namo-black tracking-[-0.02em] mb-6 leading-[1.1]"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-gray-600 leading-relaxed font-medium"
            >
              {description}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[60%] relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-[40px] overflow-hidden shadow-2xl shadow-accent/10 border border-gray-100 group z-10"
          >
            {/* Parallax Image Container */}
            <motion.div style={{ y: yImage }} className="absolute inset-[-15%] w-[130%] h-[130%]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-indigo-50/50 p-8 flex items-center justify-center">
                <img 
                  src={illustrationSrc} 
                  alt={`${title} illustration`}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f8fafc"/><text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">Premium Illustration Pending</text></svg>';
                  }}
                />
              </div>
            </motion.div>
            
            {/* Soft inner glow overlay */}
            <div className="absolute inset-0 border border-white/40 rounded-[40px] pointer-events-none mix-blend-overlay" />
          </motion.div>

        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/60 backdrop-blur-xl p-8 rounded-[32px] border border-gray-200/60 hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 ease-out shadow-sm border border-gray-100 group-hover:border-accent">
                <CheckCircle2 size={26} className="text-gray-400 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
              </div>
              <h4 className="text-xl font-bold text-namo-black mb-3">{cap.title}</h4>
              <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
