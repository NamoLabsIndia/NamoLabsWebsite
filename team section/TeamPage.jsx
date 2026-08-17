import React from "react";
import {
  ChevronRight,
  Search,
  Target,
  ShieldCheck,
  Lightbulb,
  BookOpen,
  Microscope,
  Cog,
  FlaskConical,
  Rocket,
  Globe,
  Lock,
  Blocks,
  Brain,
  Atom,
  Cloud,
  CodeXml,
  ChartColumn,
  Quote,
  User,
  MapPin,
  Mail,
  GraduationCap,
  Users,
  Heart,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

const NAV_LINKS = [
  { label: "Research", href: "/research" },
  { label: "Consulting", href: "/consulting" },
  { label: "Company", href: "/about", active: true },
];

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none">
      <div className="absolute top-0 left-0 right-0 h-8 lg:h-12 transition-opacity duration-300 pointer-events-none" style={{ opacity: 1, background: "linear-gradient(to bottom, #fafafa 40%, transparent)", maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}></div>
      <div className="relative mx-auto w-full max-w-[1200px] px-4 pt-6 pointer-events-auto">
        <div data-menu-open={open} className="relative rounded-[34px] transition-all duration-300 bg-white/95 backdrop-blur-md shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100/50">
          <nav className="hidden lg:flex justify-between items-center py-2.5 px-4 w-full">
            <a className="flex items-center shrink-0 transition-opacity hover:opacity-80 pl-3" href="/">
              <span className="font-spartan font-bold text-[26px] tracking-tight leading-none text-namo-black">Namo Labs</span>
            </a>
            <div className="flex justify-center items-center gap-8 ml-8">
              
              <div className="group flex items-center h-full py-4 -my-4 cursor-pointer">
                <span className="font-medium text-[15px] transition-colors text-gray-600 group-hover:text-namo-black">Platform</span>
                
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 pointer-events-auto z-[60] cursor-default">
                  <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100/80 p-8">
                    <div className="grid grid-cols-12 gap-8 items-center">
                      <div className="col-span-5 flex flex-col space-y-1">
                        <p className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mb-4 ml-3">PRODUCTS</p>
                        
                        <a href="/qscl" className="flex items-center gap-4 p-3 rounded-2xl bg-[#f4f6ff] transition-colors group/item">
                          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5.5-3.5 10-8 12-4.5-2-8-6.5-8-12V6l8-4z"/><circle cx="12" cy="12" r="2"/></svg>
                          </div>
                          <div>
                            <h4 className="text-[15px] font-bold text-namo-black">QSCL™</h4>
                            <p className="text-[13px] text-gray-500 leading-tight mt-0.5">Quantum-Safe Communication Layer</p>
                          </div>
                        </a>
                        
                        <a href="/tierratrace" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group/item">
                          <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all group-hover/item:border-blue-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                          </div>
                          <div>
                            <h4 className="text-[15px] font-bold text-namo-black">TierraTrace™</h4>
                            <p className="text-[13px] text-gray-500 leading-tight mt-0.5">Supply Chain & Asset Tracking</p>
                          </div>
                        </a>
                        
                        <a href="/dafs" className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group/item">
                          <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm transition-all group-hover/item:border-blue-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                          </div>
                          <div>
                            <h4 className="text-[15px] font-bold text-namo-black">DAFS™</h4>
                            <p className="text-[13px] text-gray-500 leading-tight mt-0.5">Digital Asset Forensics Suite</p>
                          </div>
                        </a>
                      </div>
                      
                      <div className="col-span-7 grid grid-cols-2 gap-8 items-center pl-6 border-l border-gray-100/80 h-full">
                        <div className="flex flex-col w-full mt-4">
                          <a href="/qscl" className="block h-[180px] rounded-2xl bg-gradient-to-br from-[#4f6bf0] to-[#2b3a8c] flex items-center justify-center shadow-inner overflow-hidden relative group/card transition-all hover:shadow-lg">
                            <h3 className="text-white text-2xl font-bold z-10 tracking-wide">QSCL™</h3>
                            <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/10 transition-colors duration-300"></div>
                          </a>
                          <div className="flex items-center justify-between mt-4 px-1">
                            <span className="text-[10px] font-bold text-gray-500 tracking-[0.2em] uppercase">FEATURED PLATFORM</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                          </div>
                        </div>
                        
                        <div className="pr-4">
                          <p className="text-[14px] text-gray-500 leading-[1.7] font-medium">
                            A post-quantum cryptographic SDK that secures digital communication for the future. Built for developers. Ready for tomorrow.
                          </p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              <a className="transition-colors duration-200 cursor-pointer" href="/research">
                <span className="font-medium text-[15px] transition-colors text-gray-600 hover:text-namo-black">Research</span>
              </a>
              <a className="transition-colors duration-200 cursor-pointer" href="/consulting">
                <span className="font-medium text-[15px] transition-colors text-gray-600 hover:text-namo-black">Consulting</span>
              </a>
              <a className="transition-colors duration-200 cursor-pointer" href="/about">
                <span className="font-medium text-[15px] transition-colors text-gray-600 hover:text-namo-black">Company</span>
              </a>
            </div>
            <div className="flex items-center">
              <a className="group inline-flex items-center justify-center gap-2 rounded-full min-h-[44px] px-7 text-[15px] font-medium transition-colors shadow-sm text-white bg-[#0A0A0A] hover:bg-gray-800" href="/contact">
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </a>
            </div>
          </nav>
          
          <div className="lg:hidden flex flex-col">
            <div className="flex justify-between items-center px-4 pl-5 py-3">
              <a className="relative flex items-center gap-2" href="/">
                <span className="font-spartan font-bold text-[20px] tracking-tight leading-none text-namo-black">Namo Labs</span>
              </a>
              <div className="flex items-center gap-3">
                <button onClick={() => setOpen(!open)} className="flex flex-col justify-center items-center space-y-[5px] focus:outline-none w-10 h-10 hover:opacity-70 transition-opacity" aria-label="Toggle menu">
                  <span className={`w-[20px] h-[1.5px] transition-all duration-300 ease-out origin-center bg-black ${open ? "rotate-45 translate-y-[6.5px]" : ""}`}></span>
                  <span className={`w-[20px] h-[1.5px] transition-all duration-300 ease-out bg-black ${open ? "opacity-0" : ""}`}></span>
                  <span className={`w-[20px] h-[1.5px] transition-all duration-300 ease-out origin-center bg-black ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`}></span>
                </button>
              </div>
            </div>
            {open && (
              <div className="px-5 pb-6 pt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <nav className="flex flex-col space-y-4">
                  <button className="text-left text-[16px] font-medium text-gray-600 hover:text-namo-black transition-colors">Platform</button>
                  <a href="/research" className="text-[16px] font-medium text-gray-600 hover:text-namo-black transition-colors">Research</a>
                  <a href="/consulting" className="text-[16px] font-medium text-gray-600 hover:text-namo-black transition-colors">Consulting</a>
                  <a href="/about" className="text-[16px] font-medium text-gray-600 hover:text-namo-black transition-colors">Company</a>
                  <div className="pt-4 border-t border-gray-100">
                    <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full min-h-[44px] px-7 text-[15px] font-medium transition-colors shadow-sm text-white bg-[#0A0A0A] hover:bg-gray-800 w-full">
                      Contact Us
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </a>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default function TeamPage() {
  return (
    <div className="bg-white text-namo-black antialiased">
      <Header />
      <main>
        {/* Breadcrumb & Hero */}
        <section className="px-5 pt-28 sm:px-8 sm:pt-32">
          <div className="mx-auto max-w-6xl">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px]">
              <a className="font-medium text-accent hover:underline text-blue-600" href="/">Home</a>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <a className="font-medium text-accent hover:underline text-blue-600" href="/about">Company</a>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="text-gray-400">Team</span>
            </nav>
          </div>
          <div className="mx-auto mt-6 max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f4f6ff] to-white ring-1 ring-black/5">
            <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-0">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-16 lg:pr-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Team</p>
                  <div className="mt-2 h-[3px] w-12 rounded-full bg-blue-600"></div>
                  <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-namo-black sm:text-6xl">
                    The People<br />Building Tomorrow<span className="text-blue-600">.</span>
                  </h1>
                  <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-gray-600">
                    We are researchers, engineers, designers, scientists, builders, and problem-solvers united by one purpose:
                  </p>
                  <p className="mt-2 max-w-sm text-[15px] font-semibold text-blue-600">
                    Driving Technology for Mankind.
                  </p>
                  <a className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-700" href="#culture">
                    Explore Our Culture <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="p-4 pt-0 sm:p-5 sm:pt-0 lg:p-5 lg:pl-0">
                <div className="relative overflow-hidden bg-gradient-to-br from-[#dfe6ff] via-[#eef1ff] to-[#c9d6ff] h-full min-h-[300px] w-full rounded-[20px] lg:min-h-[460px] flex items-center justify-center border border-gray-100">
                  <span className="absolute text-gray-400 font-medium text-sm flex flex-col items-center gap-2">
                    <Users className="w-8 h-8 opacity-50" />
                    Hero Image
                  </span>
                  <img
                    src="./team-assets/hero-team.jpg"
                    alt="Namo Labs team collaborating"
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative overflow-hidden px-5 py-24 sm:px-8">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Our Philosophy</p>
              <div className="mt-3 h-[3px] w-12 rounded-full bg-blue-600"></div>
              <h2 className="mt-7 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">We Hire Builders<span className="text-blue-600">.</span></h2>
              <p className="mt-8 max-w-md text-[15px] leading-relaxed text-gray-600">We believe great technology is created by curious minds, disciplined engineering, and relentless research—not by titles.</p>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">Every member of Namo Labs contributes to technologies designed for long-term impact.</p>
            </div>
            <div className="relative space-y-3 pl-10">
              <div className="absolute bottom-10 left-[19px] top-10 w-px bg-blue-600/20"></div>
              {[
                { icon: Search, title: "Research First", desc: "We start with deep research and evidence, not assumptions." },
                { icon: Target, title: "Think Long-Term", desc: "We build with a 10-year mindset, solving problems that truly matter." },
                { icon: ShieldCheck, title: "Build Securely", desc: "Security, privacy and integrity are non-negotiable in everything we build." },
                { icon: Lightbulb, title: "Challenge Ideas", desc: "We question, debate and refine—so that the best ideas win." },
                { icon: BookOpen, title: "Learn Every Day", desc: "We are committed to continuous learning, growth and knowledge sharing." }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-10 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-blue-600 ring-4 ring-white"></span>
                  </span>
                  <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-namo-black">{item.title}</h4>
                      <p className="mt-1 text-[13px] leading-relaxed text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="relative overflow-hidden bg-gray-50 px-5 py-24 sm:px-8">
          <div className="relative mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Our Approach</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">How We Work<span className="text-blue-600">.</span></h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-500">A research-driven process that turns ideas into secure, scalable, and impactful technologies.</p>
            </div>
            <div className="mt-14 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {[
                { num: "01", icon: Microscope, title: "Research", desc: "Every project begins with research." },
                { num: "02", icon: Cog, title: "Engineering", desc: "Ideas become production-grade systems." },
                { num: "03", icon: FlaskConical, title: "Experiment", desc: "Rapid validation through prototypes." },
                { num: "04", icon: Rocket, title: "Build", desc: "Transform research into robust products." },
                { num: "05", icon: Globe, title: "Impact", desc: "Technology serving people worldwide." }
              ].map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-1">
                    <div className="group flex h-full flex-col items-center rounded-2xl bg-white p-6 text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                      <span className="text-sm font-bold text-blue-600">{step.num}</span>
                      <div className="mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h4 className="mt-5 text-lg font-bold text-namo-black">{step.title}</h4>
                      <div className="mt-3 h-[3px] w-6 rounded-full bg-blue-600/60"></div>
                      <p className="mt-4 text-[13px] leading-relaxed text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                  {idx < 4 && (
                    <div className="mx-auto hidden flex-shrink-0 text-blue-600/30 lg:block">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section className="px-5 py-24 sm:px-8 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Our Teams</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">Team Categories<span className="text-blue-600">.</span></h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-500">Cross-disciplinary teams working together to solve complex problems and build the future.</p>
            </div>
            
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Lock, title: "Cryptography Research", desc: "Advancing cryptographic science to build quantum-safe, secure foundations." },
                { icon: Blocks, title: "Blockchain Engineering", desc: "Building scalable, secure, and interoperable blockchain infrastructure." },
                { icon: Brain, title: "Artificial Intelligence", desc: "Creating intelligent systems that learn, reason, and automate complex tasks." },
                { icon: Atom, title: "Quantum Technologies", desc: "Exploring quantum computing, communication, and post-quantum security." },
                { icon: Cloud, title: "Cloud Infrastructure", desc: "Designing resilient, secure, and high-performance cloud architectures." },
                { icon: CodeXml, title: "Platform Engineering", desc: "Building developer-centric platforms, tools, and foundational systems." },
                { icon: Lightbulb, title: "Product Design", desc: "Designing intuitive experiences that make powerful technology easy to adopt." },
                { icon: ChartColumn, title: "Strategy & Operations", desc: "Aligning strategy, operations, and execution to drive sustainable growth." }
              ].map((team, idx) => (
                <div key={idx} className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                      <team.icon className="w-[18px] h-[18px]" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 transition-colors group-hover:text-blue-600" />
                  </div>
                  <h4 className="mt-4 text-[14px] font-bold leading-snug text-namo-black">{team.title}</h4>
                  <div className="mt-2.5 h-[2px] w-5 rounded-full bg-blue-600/60"></div>
                  <p className="mt-3 text-[12px] leading-relaxed text-gray-500">{team.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="px-5 pb-24 sm:px-8 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-stretch gap-0 overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f4f6ff] to-white ring-1 ring-black/5 lg:grid-cols-2">
              <div className="px-7 py-12 sm:px-12 flex flex-col justify-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Leadership</p>
                <div className="mt-3 h-[3px] w-12 rounded-full bg-blue-600"></div>
                <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-namo-black">
                  Founder<span className="text-blue-600">.</span>
                </h2>
                <h3 className="mt-6 text-2xl font-bold text-namo-black">Namoj PeriaKumar</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">Founder & CEO, Namo Labs</p>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-gray-600">
                  Namoj is a researcher and builder focused on cryptography, blockchain, and emerging technologies. With a vision to create secure, scalable, and impactful solutions, he founded Namo Labs to build technologies that serve humanity and stand the test of time.
                </p>
                <blockquote className="mt-8 max-w-md rounded-2xl bg-[#f4f6ff] p-6 border border-blue-50">
                  <div className="flex items-start gap-4">
                    <Quote className="w-6 h-6 mt-1 flex-shrink-0 text-blue-600" />
                    <div>
                      <p className="text-[14px] font-medium leading-relaxed text-namo-black">
                        Building technology that serves humanity requires patience, research, and people who believe in solving meaningful problems.
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
              
              <div className="min-h-[420px] lg:min-h-[600px]">
                {/* PhotoSlot empty state improvement */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-full w-full flex items-center justify-center">
                  <span className="absolute text-gray-400 font-medium text-sm flex flex-col items-center gap-2">
                    <User className="w-8 h-8 opacity-50" />
                    Founder Photo
                  </span>
                  <img 
                    src="./team-assets/Founder Image.jpg" 
                    alt="Namoj PeriaKumar" 
                    className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="scroll-mt-24 bg-gray-50 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Our Culture</p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">Culture at Namo Labs<span className="text-blue-600">.</span></h2>
              <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-gray-500">Our culture is the foundation of our innovation. It defines how we think, build, and grow together.</p>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { img: "./team-assets/culture-summit.jpg", icon: User, title: "Own Your Work.", desc: "We believe in ownership, not hierarchy. Every member takes full responsibility, drives impact, and sees their work through to excellence." },
                { img: "./team-assets/culture-research.jpg", icon: Brain, title: "Think Like a Researcher.", desc: "Curiosity drives us. We question assumptions, explore deeply, and base decisions on evidence and experiments." },
                { img: "./team-assets/culture-city.jpg", icon: Rocket, title: "Build for Decades.", desc: "We build with a long-term mindset. Our goal is to create secure, scalable technologies that stand the test of time and serve generations." }
              ].map((culture, idx) => (
                <div key={idx} className="group">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex-shrink-0 px-5 pt-5 pb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                        <culture.icon className="w-[18px] h-[18px]" />
                      </div>
                      <h4 className="mt-4 text-[16px] font-bold text-namo-black">{culture.title}</h4>
                      <div className="mt-2.5 h-[2px] w-5 rounded-full bg-blue-600/60"></div>
                      <p className="mt-2.5 text-[12px] leading-relaxed text-gray-500">{culture.desc}</p>
                    </div>
                    {/* PhotoSlot empty state improvement */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mt-auto h-40 flex items-center justify-center">
                      <span className="absolute text-gray-400 font-medium text-sm flex flex-col items-center gap-2">
                        <Users className="w-8 h-8 opacity-50" />
                        Culture Image
                      </span>
                      <img src={culture.img} alt={culture.title} className="absolute inset-0 h-full w-full object-cover object-bottom opacity-90 transition-transform duration-500 group-hover:scale-105" onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="px-5 py-24 sm:px-8 bg-white">
          <div className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[28px] bg-gradient-to-b from-[#f4f6ff] to-white px-5 py-12 ring-1 ring-black/5 sm:px-8 lg:p-14">
            <div className="relative z-10 mx-auto max-w-[1150px]">
              <div className="text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Careers</p>
                <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-namo-black sm:text-5xl">Join Our <span className="text-blue-600">Team.</span></h2>
                <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-gray-500">We're always looking for exceptional people who are passionate about building technologies that matter.</p>
              </div>
              <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {[
                  { icon: Microscope, title: "Research", desc: "Push the boundaries of knowledge and explore emerging frontiers." },
                  { icon: CodeXml, title: "Engineering", desc: "Design, build and scale secure, reliable, and innovative systems." },
                  { icon: User, title: "Design", desc: "Craft intuitive experiences that make complex technology simple." }, // Changed PenTool to User to avoid importing more
                  { icon: ShieldCheck, title: "Security", desc: "Protect systems and data with world-class security and privacy." },
                  { icon: ChartColumn, title: "Operations", desc: "Drive impact through strategy, processes and operational excellence." },
                  { icon: GraduationCap, title: "Internships", desc: "Learn, build, and grow with mentorship from experienced builders." }
                ].map((career, idx) => (
                  <div key={idx} className="group flex h-full flex-col items-center rounded-2xl bg-white p-4 text-center shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform duration-300 group-hover:scale-110">
                      <career.icon className="w-5 h-5" />
                    </div>
                    <h4 className="mt-4 text-[14px] font-bold text-namo-black">{career.title}</h4>
                    <div className="mt-2.5 h-[2px] w-5 rounded-full bg-blue-600/60"></div>
                    <p className="mt-3 flex-1 text-[11px] leading-relaxed text-gray-500">{career.desc}</p>
                    <span className="mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-blue-600 ring-1 ring-gray-100 transition-colors group-hover:ring-blue-600">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl bg-gray-50 py-4 px-6 sm:flex-row sm:px-8 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Users className="w-[18px] h-[18px]" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-namo-black">Don't see the right role?</p>
                    <p className="mt-0.5 text-[12px] text-gray-500">We're always open to connecting with great talent.</p>
                  </div>
                </div>
                <a className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-lg" href="/careers">
                  View Careers <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="px-5 pb-24 sm:px-8 bg-white">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-gradient-to-br from-[#eef2ff] via-[#f5f7ff] to-[#dbe6ff] p-6 ring-1 ring-black/5 sm:p-10">
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-600">Let's build the future</p>
                <div className="mt-3 h-[3px] w-12 rounded-full bg-blue-600"></div>
                <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-namo-black sm:text-5xl">
                  Let's Build a<br/>Secure <span className="text-blue-600">Tomorrow.</span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">
                  We collaborate with organizations and innovators to build secure, scalable, and future-ready technologies that create a lasting impact.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <Mail className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-namo-black">Email Us</p>
                      <a href="mailto:info@namolabs.in" className="mt-0.5 text-[12px] font-medium text-blue-600 hover:underline">info@namolabs.in</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <Globe className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-namo-black">Visit Our Website</p>
                      <a href="https://namolabs.in" className="mt-0.5 text-[12px] font-medium text-blue-600 hover:underline">namolabs.in</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <MapPin className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-namo-black">Our Headquarters</p>
                      <p className="mt-0.5 text-[12px] text-gray-500">Namo Labs, Chennai, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <a href="https://www.linkedin.com/company/namo-labs/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-600 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
                  <a href="https://twitter.com/NamoLabs" target="_blank" rel="noreferrer" aria-label="Twitter" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-600 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <a href="https://github.com/NamoLabsIndia" target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm transition-colors hover:bg-blue-600 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"></path>
                    </svg>
                  </a>
                  <span className="text-[12px] text-gray-500">Follow our journey</span>
                </div>
              </div>
              <div>
                <div className="rounded-2xl bg-white p-6 shadow-xl shadow-black/[0.05] ring-1 ring-gray-100 sm:p-7">
                  <h3 className="text-[20px] font-bold text-namo-black">Get in Touch</h3>
                  <p className="mt-1.5 text-[13px] text-gray-500">Have a question, idea, or collaboration in mind? We'd love to hear from you.</p>
                  <form className="mt-5 space-y-3">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input required placeholder="Your Name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[13px] text-namo-black placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="name" />
                      <input type="email" required placeholder="Work Email" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[13px] text-namo-black placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="email" />
                    </div>
                    <input placeholder="Company / Organization" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[13px] text-namo-black placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10" name="company" />
                    <textarea name="message" required rows={3} placeholder="Your Message" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-[13px] text-namo-black placeholder:text-gray-400 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 resize-none"></textarea>
                    <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-blue-700">
                      Send Message <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      We respect your privacy. Your information is safe with us.
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div className="relative mt-8 border-t border-gray-200/70 pt-5 text-center">
              <p className="flex items-center justify-center gap-1.5 text-[13px] font-semibold text-blue-600">
                <Heart className="w-3.5 h-3.5" /> For Humanity Always
              </p>
              <p className="mt-1.5 text-[13px] font-medium text-namo-black">Building technology that protects, empowers, and elevates humanity.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
