import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Rafly – Portfolio",
  description: "Front End Engineer",
  icons: {
    icon: "/handwave.png",
    shortcut: "/handwave.png", 
    apple: "/handwave.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 pt-16 pb-24">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
