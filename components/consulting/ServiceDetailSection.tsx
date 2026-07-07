"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

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

function CapabilityCard({ cap, index }: { cap: Capability, index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-[24px] border border-white/10 hover:bg-white/10 hover:border-white/30 transition-colors duration-500 shadow-xl group relative overflow-hidden cursor-pointer flex flex-col h-fit"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/40 transition-all duration-500">
              <CheckCircle2 size={20} className="text-white" />
            </div>
            <h4 className="font-bold text-white text-base leading-snug">{cap.title}</h4>
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-white/50 group-hover:text-white transition-colors flex-shrink-0"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
