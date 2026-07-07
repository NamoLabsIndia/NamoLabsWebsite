"use client";

import React from "react";
import { motion } from "framer-motion";
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
  return (
    <section id={id} className={`py-24 ${reverseLayout ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Area */}
        <div className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className={reverseLayout ? 'order-1 lg:order-2' : 'order-1'}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-[700] text-namo-black tracking-tight mb-6 leading-tight"
            >
              {title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              {description}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`relative w-full aspect-[4/3] rounded-3xl overflow-hidden ${reverseLayout ? 'order-2 lg:order-1' : 'order-2'}`}
          >
            {/* Fallback while illustration is generated */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50/30 rounded-3xl border border-gray-100 flex items-center justify-center p-8">
              <img 
                src={illustrationSrc} 
                alt={`${title} illustration`}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23f8fafc"/><text x="50%" y="50%" font-family="sans-serif" font-size="14" fill="%2394a3b8" text-anchor="middle">Premium Illustration Pending</text></svg>';
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-accent/20 transition-colors shadow-sm group"
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0" />
                <h4 className="font-bold text-namo-black text-sm">{cap.title}</h4>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
