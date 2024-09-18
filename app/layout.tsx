"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const navigationLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/contact", label: "contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html
      lang="en"
      className="grid grid-cols-12 min-h-screen bg-gradient-to-r from-stone-900 to-gray-900"
    >
      <body
        className={`${inter.className} col-start-2 col-span-10 md:col-start-4 md:col-span-6   mt-20 `}
      >
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="508f48f3-7938-46d6-8930-80877c90c5e6"
        />
        <div className="flex gap-4 mb-20">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              prefetch={link.href === "/contact" ? true : false}
              className={`font-semibold hover:text-cyan-100 text-2xl text-stone-200 ${
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
