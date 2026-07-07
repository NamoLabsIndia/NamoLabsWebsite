"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Capability {
  title: string;
  description: string;
  image?: string;
}

interface ServiceDetailSectionProps {
  id: string;
  title: string;
  description: string;
  illustrationSrc: string;
  capabilities: Capability[];
  reverseLayout?: boolean;
}

function CapabilityCard({ cap, index }: { cap: Capability, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[20px] shadow-2xl flex flex-col h-[280px] sm:h-[300px] border border-white/10"
    >
      {/* Background Image */}
      {cap.image && (
        <img 
          src={cap.image} 
          alt={cap.title} 
          className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" 
        />
      )}
      
      {/* Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black/90" />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-4 sm:p-5">
        
        {/* Top Section */}
        <div className="flex flex-col">
          {/* Subtle Icon */}
          <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0 mb-3 group-hover:bg-white/10 transition-colors duration-300">
            <CheckCircle2 size={16} className="text-white" />
          </div>
          
          {/* Title */}
          <h4 className="font-spartan font-bold text-white text-[20px] sm:text-[22px] leading-tight mb-2 tracking-tight drop-shadow-md">
            {cap.title}
          </h4>
          
          {/* Description */}
          <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-medium line-clamp-3 drop-shadow-sm">
            {cap.description}
          </p>
        </div>
        
        {/* Bottom Section: Learn More */}
        <div className="mt-auto pt-3 flex items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase group-hover:text-white/70 transition-colors">
            Learn More
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServiceDetailSection({
  id,
  title,
  description,
  illustrationSrc,
  capabilities,
  reverseLayout = false
}: ServiceDetailSectionProps) {
  return (
    <section id={id} className="relative py-12 sm:py-16 overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${illustrationSrc}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dark Overlay to ensure text readability everywhere */}
      <div className="absolute inset-0 z-10 bg-black/40" />
      
      {/* Subtle Gradient Overlay for Text Side */}
      <div 
        className={`absolute inset-0 z-10 bg-gradient-to-r ${reverseLayout ? 'from-transparent via-black/40 to-black/80' : 'from-black/80 via-black/40 to-transparent'}`} 
      />

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col justify-between h-full">
        
        {/* Main Content Area */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-16 sm:mb-24 ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div 
            initial={{ opacity: 0, x: reverseLayout ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-black/20 backdrop-blur-xl border border-white/20 p-8 sm:p-12 rounded-[32px] shadow-2xl relative overflow-hidden"
          >
            {/* Subtle highlight inside the glass card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[800] text-white tracking-tight mb-6 leading-tight drop-shadow-sm">
                {title}
              </h2>
              <p className="text-lg text-white/90 leading-relaxed max-w-xl drop-shadow-sm font-medium">
                {description}
              </p>
            </div>
          </motion.div>
          
          {/* Empty div to take up the other half of the grid so the background image is visible */}
          <div className="hidden lg:block"></div>

        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-auto items-start">
          {capabilities.map((cap, index) => (
            <CapabilityCard key={index} cap={cap} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
