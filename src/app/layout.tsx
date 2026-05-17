import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookDirectButton from "@/components/BookDirectButton";
import MobileCallButton from "@/components/MobileCallButton";

export const metadata: Metadata = {
  title: {
    template: "%s | Velkommen Inn",
    default: "Velkommen Inn – Clifton, Texas",
  },
  description:
    "Velkommen Inn in Clifton, TX offers comfortable rooms, great amenities, and a warm Texas welcome. Book direct for the best available direct rate.",
  metadataBase: new URL("https://velkommeninn.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BookDirectButton />
        <MobileCallButton />
      </body>
    </html>
  );
}
