"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] overflow-hidden bg-white flex flex-col min-h-[500px] lg:min-h-[600px] border border-gray-100 shadow-sm"
        >
          {/* Background Image & Gradient */}
          <div className="absolute inset-x-0 bottom-0 top-[30%] z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent z-10" />
            <img 
              src="/img/about/mission.jpg" 
              alt="Mission" 
              className="w-full h-full object-cover object-bottom"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000&auto=format&fit=crop';
              }}
            />
          </div>

          <div className="relative z-10 flex-1 max-w-[420px] p-10 lg:p-14">
            <p className="text-[12px] font-bold text-accent tracking-[0.15em] uppercase mb-4">
              OUR MISSION
            </p>
            <h2 className="text-3xl lg:text-[34px] font-bold text-namo-black leading-[1.2] tracking-tight mb-6">
              To advance technologies that strengthen societies, protect digital infrastructure, and create lasting value for humanity.
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.65] font-medium max-w-[340px]">
              We build, secure, and scale the technologies that empower institutions, enterprises, and communities to thrive in a digital world.
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-[32px] overflow-hidden bg-white flex flex-col min-h-[500px] lg:min-h-[600px] border border-gray-100 shadow-sm"
        >
          {/* Background Image & Gradient */}
          <div className="absolute inset-x-0 bottom-0 top-[30%] z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent z-10" />
            <img 
              src="/img/about/vision.jpg" 
              alt="Vision" 
              className="w-full h-full object-cover object-bottom"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop';
              }}
            />
          </div>

          <div className="relative z-10 flex-1 max-w-[460px] p-10 lg:p-14">
            <p className="text-[12px] font-bold text-accent tracking-[0.15em] uppercase mb-4">
              OUR VISION
            </p>
            <h2 className="text-3xl lg:text-[34px] font-bold text-namo-black leading-[1.2] tracking-tight mb-6">
              To become one of the world's leading technology research and engineering organizations—building trusted systems that shape the next century of digital civilization.
            </h2>
            <p className="text-gray-600 text-[15px] leading-[1.65] font-medium max-w-[340px]">
              We envision a future where secure, intelligent, and decentralized systems drive progress, opportunity, and sustainability for generations to come.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
