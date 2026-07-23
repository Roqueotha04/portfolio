import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://roqueothacehe.com"),
  title: "Roque Othacehe - Fullstack Developer",
  description:
    "Portfolio de Roque Othacehe, desarrollador fullstack especializado en Next.js & Spring Boot. Arquitecturas escalables, SaaS y sistemas end-to-end.",
  openGraph: {
    title: "Roque Othacehe - Next.js & Spring Boot Developer",
    description:
      "Desarrollador fullstack: Next.js, Spring Boot, SQL y AWS. Proyectos SaaS y sistemas de gestion end-to-end.",
    images: [{ url: "/preview.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
