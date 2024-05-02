import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/lib/components/Header";
import { LucideOctagon, Home, BarChart2, Globe2 } from "lucide-react";
import Link from "next/link";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={space.className}>
      <body className=" w-full">
        <header className=" w-[90%] flex justify-between items-center mx-auto py-10">
          <Link href={"/"} className=" flex space-x-3 items-center">
            <Globe2 size={42} />
            <h1 className=" font-semibold text-2xl">CELL-DEPLOY</h1>
          </Link>
          <div className=" flex items-center space-x-16 text-lg text-gray-800 font-semibold">
            <Link href={"/"}>
              <p>Home</p>
            </Link>

            <Link href={"/results"}>
              <p>Services</p>
            </Link>

            <p>About</p>
          </div>
          <button className=" py-5 px-10 bg-black text-white flex items-center space-x-4">
            <Link href={"/calibrate"}>
              <p className=" font-semibold text-xl">Get Started</p>
            </Link>
          </button>
        </header>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
