"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Landmark, Globe2 } from "lucide-react";

export default function CollaborateBanner() {
  return (
    <section className="py-8 lg:py-10 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Banner Container */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#F4F7FF] via-white to-[#EEF2FF] border border-blue-100 shadow-[0_8px_32px_rgba(59,130,246,0.06)]">
          
          {/* Smooth Subtle Blue Glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.05),transparent_50%)]" />
          </div>

          <div className="relative z-10 flex flex-col p-6 lg:p-8 gap-6 lg:gap-8">
            
            {/* Top Row: Text + Image */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <p className="text-[11px] font-bold tracking-[0.15em] text-accent uppercase mb-2">
                  Collaborate With Us
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-namo-black tracking-tight mb-3 leading-[1.15]">
                  Let's Build the Future, Together.
                </h2>
                <p className="text-sm text-gray-600 font-medium leading-[1.5] mb-5">
                  Great ideas need great collaboration. We partner with researchers, developers, institutions and organizations to solve meaningful problems and create real-world impact.
                </p>
                
                <Link
                  href="/collaboration"
                  className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white font-medium px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors shadow-sm text-xs"
                >
                  Let's Collaborate
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </motion.div>

              {/* Right Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden lg:block w-64 lg:w-80 xl:w-96 flex-shrink-0 relative"
              >
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-[60px] opacity-20" />
                
                {/* Image with Hover Effect */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 cursor-pointer"
                >
                  <img 
                    src="/HumanRobot handhsake.jpg" 
                    alt="Human and Robot Handshake" 
                    className="w-full h-auto mix-blend-multiply drop-shadow-2xl rounded-3xl"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Row: Feature Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {/* Card 1 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-50/50 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent mb-3">
                  <Users size={18} strokeWidth={2} />
                </div>
                <h3 className="text-[13px] font-bold text-namo-black mb-1">Open to Researchers</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">Work with our team on cutting-edge research.</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-50/50 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent mb-3">
                  <Landmark size={18} strokeWidth={2} />
                </div>
                <h3 className="text-[13px] font-bold text-namo-black mb-1">Industry Partnerships</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">Co-create solutions that drive innovation.</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-50/50 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-accent mb-3">
                  <Globe2 size={18} strokeWidth={2} />
                </div>
                <h3 className="text-[13px] font-bold text-namo-black mb-1">Global Impact</h3>
                <p className="text-[12px] text-gray-500 leading-relaxed">Build technologies that empower humanity.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
