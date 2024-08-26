"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <html lang="en" className="grid grid-cols-12">
      <body
        className={`${inter.className} col-start-4 col-span-6  bg-zinc-950 mt-20 `}
      >
        <div className="flex gap-4 mb-20">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`font-semibold hover:text-cyan-100 text-2xl text-gray-400 ${
                pathname === link.href ? "text-cyan-50" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
