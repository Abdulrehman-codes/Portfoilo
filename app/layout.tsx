import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground"
import Navbar from "@/components/main/Navbar";
import SocialSidebar from "@/components/main/Social_slider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehman",
  description: "Data Science Portfoio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#060504] overflow-y-scroll overflow-x-hidden`}>

        <StarsCanvas />
        <Navbar />
        <SocialSidebar />
        {children}</body>
        
    </html>
  );
}
