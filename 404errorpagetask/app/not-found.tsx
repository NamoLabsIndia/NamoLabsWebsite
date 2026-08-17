import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pt-[104px] pb-20 relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,91,255,0.08),_transparent_55%)]"></div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "linear-gradient(to right, #e8ecf4 1px, transparent 1px), linear-gradient(to bottom, #e8ecf4 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)" }}></div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center py-20 md:py-28">
        <p className="text-[12px] font-bold tracking-[0.2em] text-accent uppercase mb-6">Error 404</p>
        <p className="font-spartan text-[96px] sm:text-[128px] font-bold leading-none tracking-tight text-namo-black/10 select-none mb-2">404</p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-namo-black tracking-tight leading-tight -mt-8 sm:-mt-12 mb-5">This page {"doesn't"} exist.</h1>
        <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-md mx-auto mb-10">
          The link may be broken, outdated, or the page was moved. Head home or jump to research, careers, or contact.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link href="/" className="inline-flex items-center gap-2 bg-namo-black text-white font-semibold px-7 py-3.5 rounded-full text-[14px] hover:bg-gray-800 transition-colors shadow-lg shadow-black/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            Back to home
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-7 py-3.5 rounded-full text-[14px] hover:bg-[#2f4be0] transition-colors shadow-lg shadow-accent/20">
            Contact us
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] font-medium text-gray-500">
          <Link href="/research" className="hover:text-accent transition-colors">Research</Link>
          <span className="text-gray-300">·</span>
          <Link href="/careers" className="hover:text-accent transition-colors">Careers</Link>
          <span className="text-gray-300">·</span>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <span className="text-gray-300">·</span>
          <Link href="/insights" className="inline-flex items-center gap-1 hover:text-accent transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            Insights
          </Link>
        </div>
        
        <Link href="/" className="mt-14 inline-flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-namo-black transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          Namo Labs
        </Link>
      </div>
    </main>
  );
}
