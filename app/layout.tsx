import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Figtree, Libre_Baskerville } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Karen Parcell Homes",
  description:
    "Karen Parcell Homes - Berkshire Hathaway | Where exceptional service meets luxury real estate",
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} ${figtree.variable} ${libreBaskerville.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
