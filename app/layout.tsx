import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Be_Vietnam_Pro, League_Spartan } from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

const leagueSpartan = League_Spartan({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: '--font-league-spartan',
});

export const metadata: Metadata = {
  title: "Namo Labs - Deep Tech. For Humanity.",
  description:
    "Namo Labs builds secure digital infrastructure, post-quantum communication systems, blockchain solutions, AI-powered platforms, and enterprise technologies that enable governments, businesses, and developers to build the future with confidence.",
  keywords: ["quantum security", "blockchain", "AI", "deep tech", "India", "QSCL", "cryptography"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className={`${beVietnamPro.className} ${leagueSpartan.variable} bg-white text-namo-black antialiased selection:bg-namo-black selection:text-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
