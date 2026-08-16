import React from "react";
import Link from "next/link";
import { Mail, Send, Lightbulb, Globe, Users, Heart } from "lucide-react";


const values = [
  { icon: <Lightbulb size={16} />, title: "Curiosity", body: "Bring your ideas and questions." },
  { icon: <Globe size={16} />, title: "Impact", body: "Work that reaches the world." },
  { icon: <Users size={16} />, title: "Community", body: "A team that has your back." },
  { icon: <Heart size={16} />, title: "Purpose", body: "Technology for humanity." },
];

// Scattered accent dots for visual flair — matching the About page "Join Us" section
const dots = [
  { top: "5%",  left: "10%", size: 5, opacity: 0.35 },
  { top: "12%", left: "75%", size: 4, opacity: 0.25 },
  { top: "28%", left: "90%", size: 6, opacity: 0.2  },
  { top: "50%", left: "4%",  size: 4, opacity: 0.3  },
  { top: "68%", left: "18%", size: 5, opacity: 0.2  },
  { top: "82%", left: "80%", size: 4, opacity: 0.25 },
  { top: "92%", left: "52%", size: 3, opacity: 0.2  },
];

export default function FinalCTA() {
  return (
    <section className="px-5 pb-24 pt-4 sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f2f5ff] to-[#eef2fc] p-6 ring-1 ring-black/5 sm:p-8">
        {/* Scattered accent dots */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
          {dots.map((dot, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-accent"
              style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size, opacity: dot.opacity }}
            />
          ))}
        </div>

        {/* No scroll-triggered entrance animation — see the note in
            WhyWorkHere.tsx. This is the section's only CTA to apply or email;
            it must render immediately, not after an IntersectionObserver fires. */}
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-namo-black sm:text-4xl">
              Don&apos;t see your role?
              <br />
              We&apos;d still love to{" "}
              <span className="text-accent">hear from you.</span>
            </h2>
            <div className="mt-4 h-[3px] w-12 rounded-full bg-gray-200" />
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-gray-600">
              We&apos;re always on the lookout for exceptional people. If you believe in our
              mission and think you can contribute — in any capacity — send us an open
              application. We review every submission personally.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:divide-x sm:divide-gray-200">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`flex flex-col ${i > 0 ? "sm:pl-4" : ""} ${i < values.length - 1 ? "sm:pr-4" : ""}`}
                >
                  <span className="text-accent">{v.icon}</span>
                  <h4 className="mt-2 text-[13px] font-bold text-namo-black">{v.title}</h4>
                  <p className="mt-1 text-[11px] leading-relaxed text-gray-500">{v.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/careers/apply"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#2f4be0] hover:shadow-lg hover:shadow-accent/20"
              >
                Send an Open Application <Send size={13} />
              </Link>
              <a
                href="mailto:info@namolabs.in"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-[13px] font-semibold text-namo-black transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 hover:shadow-sm"
              >
                <Mail size={13} /> Email Your Resume
              </a>
            </div>
          </div>

          {/* Right — decorative art + tagline */}
          <div className="relative flex flex-col items-center justify-center py-4">
            {/* Purely decorative: the "For Humanity Always." tagline is already
                stated as real text directly below. Empty alt + aria-hidden stops
                screen readers announcing it twice, and prevents alt text from
                ghosting over that heading if the image ever fails to load. */}
            <img
              src="/company/join-art.jpg"
              alt=""
              aria-hidden="true"
              className="relative mx-auto w-full max-w-[260px] opacity-80 mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [clip-path:inset(0_0_20%_0)] -mb-6"
            />
            <div className="flex flex-col items-center text-center">
              <p className="relative text-lg font-bold tracking-wide text-namo-black">
                For Humanity Always.
              </p>
              <div className="relative mt-3 h-[4px] w-12 rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
