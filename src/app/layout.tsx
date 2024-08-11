import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBAR from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative `}>
        <div className="h-16 absolute px-2  top-0 left-0 right-0 w-full"><NavBAR/></div>
        {children}</body>
    </html>
  );
}
