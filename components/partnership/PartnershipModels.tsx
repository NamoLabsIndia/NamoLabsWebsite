"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, ShieldCheck } from "lucide-react";

const models = [
  {
    number: "01",
    image: "/Partnership/models-img/strategic-tech.png",
    title: "Strategic Technology Partnerships",
    description:
      "Co-develop next-generation products and platforms through deep technical collaboration and shared roadmap alignment.",
  },
  {
    number: "02",
    image: "/Partnership/models-img/research-collab.png",
    title: "Research Collaborations",
    description:
      "Join our R&D initiatives exploring frontier technologies across Cryptography, Blockchain, AI, Quantum and Cloud.",
  },
  {
    number: "03",
    image: "/Partnership/models-img/enterprise.png",
    title: "Enterprise Transformation",
    description:
      "Modernize systems, enhance security, and build scalable platforms with our consulting and engineering expertise.",
  },
  {
    number: "04",
    image: "/Partnership/models-img/startup-innovation.png",
    title: "Startup Innovation",
    description:
      "Accelerate your startup's growth with access to our engineering, infrastructure, and go-to-market collaboration.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function PartnershipModels() {
  return (
    <section id="partnership-models" className="relative overflow-hidden bg-white px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
            Partnership Models
          </span>
          <span className="mt-2 h-[3px] w-8 rounded-full bg-accent" />
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight leading-[1.1] text-namo-black">
            Choose How You Want to Build With Us
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-500">
            Flexible partnership models designed to create real impact and drive
            long-term innovation together.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {models.map((m, i) => (
            <motion.div
              key={m.number}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="inline-flex w-fit items-center justify-center rounded-full bg-accent-light px-3 py-1 text-xs font-bold text-accent">
                {m.number}
              </span>

              <div className="mt-4 flex h-32 items-center justify-center">
                <Image
                  src={m.image}
                  alt={m.title}
                  width={247}
                  height={187}
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-2 text-base font-bold text-namo-black">{m.title}</h3>
              <span className="mt-2 h-[3px] w-8 rounded-full bg-accent" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                {m.description}
              </p>
              <a
                href="/contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                Learn More
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom trust bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-gray-100 bg-namo-gray px-8 py-8 sm:px-10"
        >
          {/* decorative dotted texture, bottom-right */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-48 w-64 opacity-[0.6]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(59,91,255,0.28) 1px, transparent 1.4px)",
              backgroundSize: "14px 14px",
              maskImage: "radial-gradient(ellipse at bottom right, black, transparent 70%)",
              WebkitMaskImage: "radial-gradient(ellipse at bottom right, black, transparent 70%)",
            }}
          />

          <div className="relative grid gap-8 sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                <Users size={20} />
              </div>
              <div>
                <p className="text-[15px] font-bold text-namo-black">
                  Long-Term Partnerships. Real-World Impact.
                </p>
                <p className="mt-1.5 text-sm text-gray-500">
                  We don&apos;t just work together — we build the future, together.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-accent-light text-accent">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-[15px] font-bold text-namo-black">
                  Built on Trust. Driven by Purpose.
                </p>
                <p className="mt-1.5 text-sm text-gray-500">
                  Shared values. Aligned goals. Lasting impact.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
