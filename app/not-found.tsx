import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-[104px] pb-20 relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.08),_transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e8ecf4 1px, transparent 1px), linear-gradient(to bottom, #e8ecf4 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-20 md:py-28">
        <p className="text-[12px] font-bold tracking-[0.2em] text-accent uppercase mb-6">
          Error 404
        </p>
        <p className="font-spartan text-[96px] sm:text-[128px] font-bold leading-none tracking-tight text-namo-black/10 select-none mb-2">
          404
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-namo-black tracking-tight leading-tight -mt-8 sm:-mt-12 mb-5">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-md mx-auto mb-10">
          The link may be broken, outdated, or the page was moved. Head home or
          jump to research, careers, or contact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-namo-black text-white font-semibold px-7 py-3.5 rounded-full text-[14px] hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
          >
            <Home size={16} /> Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full text-[14px] hover:bg-[#2f4be0] transition-colors shadow-lg shadow-accent/20"
          >
            Contact us <ArrowRight size={16} />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-medium text-gray-500">
          <Link href="/research" className="hover:text-accent transition-colors">
            Research
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/careers" className="hover:text-accent transition-colors">
            Careers
          </Link>
          <span className="text-gray-300">·</span>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <span className="text-gray-300">·</span>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 hover:text-accent transition-colors"
          >
            <Search size={12} /> Insights
          </Link>
        </div>

        <Link
          href="/"
          className="mt-14 inline-flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-namo-black transition-colors"
        >
          <ArrowLeft size={12} /> Namo Labs
        </Link>
      </div>
    </main>
  );
}
