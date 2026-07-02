import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { GeistSans } from 'geist/font/sans';

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
    <html lang="en">
      <head>
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
