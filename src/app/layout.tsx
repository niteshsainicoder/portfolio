import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBAR from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NiteshDevPortfolio",
  description: "Explore the professional portfolio of Nitesh Saini, showcasing projects, skills, and experience in web and mobile development.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} remove-scrollbar relative select-none text-neutral-300 bg-neutral-900 `}>
        <div className="h-16 absolute px-2  top-0 left-0 right-0 w-full"><NavBAR/></div>
        {children}</body>
    </html>
  );
}
