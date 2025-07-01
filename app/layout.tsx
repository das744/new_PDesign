import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Merriweather, Kaushan_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: "400",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  variable: "--font-kaushan",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Melbourne Web Developer | Front-End & Full-Stack Solutions",
  description:
    "Experienced web developer based in Melbourne offering responsive website design, front-end and full-stack development, and SEO optimization.",
  keywords: [
    "Web Developer Melbourne",
    "Front-End Developer Melbourne",
    "Full-Stack Developer",
    "Melbourne Website Design",
    "Responsive Web Design",
    "SEO Web Developer",
    "Custom Website Development",
    "JavaScript Developer Melbourne",
    "React Developer",
    "Next.js Developer Melbourne",
    "Freelance Web Developer"
  ],
  authors: [{ name: "primeDesign", url: "https://ajanta-portfolio.vercel.app/" }],
  robots: "index, follow",
  generator: "Next.js",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-papnf9Rht9CEyK7vAMvQy8DGGpGcF2wP3rCkvK7jItMGuEOjGiNRuPjJzfuHevRpQcSRWDUpb6lCJ0gL6U5ZLg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* site-title logo */}
         <link
          rel="icon"
          href="/logo.webp"
          type="image/webp"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${kaushan.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
