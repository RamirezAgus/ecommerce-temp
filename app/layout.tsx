import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import PageTransition from "@/components/providers/PageTransition";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Annette Tramas",

  description: "Handcrafted crochet decor, blankets and accessories.",

  keywords: ["crochet", "handmade", "decor", "blankets", "bags", "artisan"],

  openGraph: {
    title: "Annette Tramas",

    description: "Handcrafted crochet decor and accessories.",

    images: ["/heroimg.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        data-scroll-behavior="smooth"
        className={cn("font-sans", geist.variable)}
      >
        <body>
          <Navbar />
          <main>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <Toaster position="top-right" richColors closeButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
