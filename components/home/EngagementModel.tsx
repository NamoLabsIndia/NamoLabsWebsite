"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    step: "1",
    title: "Propose",
    description: "Submit your research brief with objectives, constraints, and expected deliverables.",
    details: [
      "Define core research objectives",
      "Identify technical constraints",
      "Establish success criteria"
    ]
  },
  {
    step: "2",
    title: "Scope",
    description: "We refine the scope, agree on a project bounty price, and set milestone checkpoints.",
    details: [
      "Refine technical requirements",
      "Set milestone checkpoints",
      "Agree on fixed project bounty"
    ]
  },
  {
    step: "3",
    title: "Research",
    description: "Our researchers work on the problem. Regular updates and milestone reviews.",
    details: [
      "Dedicated expert researchers",
      "Continuous progress syncs",
      "Iterative milestone reviews"
    ]
  },
  {
    step: "4",
    title: "Deliver",
    description: "Final report, prototype, or protocol specification — as agreed. IP terms flexible.",
    details: [
      "Comprehensive final report",
      "Production-ready prototypes",
      "Flexible IP arrangements"
    ]
  },
];

export default function EngagementModel() {
  return (
    <section className="py-24 bg-[#F4F6FF]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-[700] text-namo-black mb-16 leading-[1.1] tracking-tight max-w-sm"
        >
          The Engagement Model
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-start">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden bg-white rounded-3xl p-8 lg:p-10 flex flex-col group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,91,255,0.15)] border border-blue-50 hover:border-blue-200/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-transparent to-blue-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 w-10 h-10 rounded-[12px] bg-blue-50 flex items-center justify-center text-accent font-bold text-sm mb-12 border border-blue-100/50 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                {item.step}
              </div>
              <h3 className="relative z-10 text-2xl font-bold text-namo-black mb-4 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="relative z-10 text-gray-500 leading-relaxed text-sm lg:text-[15px] transition-colors duration-300 group-hover:text-gray-700">
                {item.description}
              </p>

              <div className="relative z-10 grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out mt-0 group-hover:mt-6">
                <div className="overflow-hidden">
                  <ul className="space-y-3 pt-2 border-t border-blue-100/50">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-accent mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 translate-x-[-10px] group-hover:translate-x-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-[150ms] translate-y-[5px] group-hover:translate-y-0">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 border border-blue-100/50 shadow-sm"
        >
          <p className="text-gray-600 text-[15px] sm:text-base leading-relaxed">
            <strong className="text-namo-black font-semibold">Project-bounty pricing.</strong>{" "}
            Engagements are priced per project scope — not hourly. You know the cost before work begins. Deliverables vary: written reports, code prototypes, protocol specifications, or formal security analyses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
