import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "@/components/providers/SessionProvider";
import { Poppins } from 'next/font/google';
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nordino Mavie | Desenvolvedor Full-Stack & Mobile",
  description: "Desenvolvedor Full-Stack especializado em React, Next.js, Node.js e React Native. Crio soluções web e mobile modernas, escaláveis e de alto desempenho para transformar ideias em realidade digital.",
  keywords: [
    "desenvolvedor fullstack",
    "desenvolvedor moçambicano", 
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "React Native developer",
    "desenvolvimento web",
    "desenvolvimento mobile",
    "TypeScript",
    "JavaScript",
    "frontend developer",
    "backend developer",
    "portfolio desenvolvedor",
    "Moçambique tech",
    "Maputo developer"
  ],
  authors: [{ name: "Nordino Mavie" }],
  creator: "Nordino Mavie",
  publisher: "Nordino Mavie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={poppins.variable}>
      <body
        className="font-sans antialiased"
      >
        <SessionProvider>
          <Header />
            {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
