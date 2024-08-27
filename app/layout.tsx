"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
      <body className={`${inter.className} col-start-4 col-span-6   mt-20 `}>
        <div className="flex gap-4 mb-20">
          {navigationLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
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
