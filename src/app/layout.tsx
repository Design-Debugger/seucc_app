import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Computer Club Organization",
  description: "Your premier destination for computer science and technology enthusiasts",
  keywords: "computer club, programming, technology, workshops, coding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col overflow-x-hidden w-screen bg-black text-white`}>
        <div className="flex flex-col min-h-screen w-full">
          <Header />
          <main className="flex-grow relative z-0 bg-black">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
