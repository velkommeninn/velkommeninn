import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Velkommen Inn – Clifton, TX",
    default: "Velkommen Inn | Official Website | Hotel in Clifton, TX",
  },
  description:
    "Velkommen Inn is the official website for this hotel in Clifton, TX — the Norwegian Capital of Texas. Book direct for the best available direct rate.",
  openGraph: {
    siteName: "Velkommen Inn",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col pb-16 sm:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyBookingBar />
      </body>
    </html>
  );
}
