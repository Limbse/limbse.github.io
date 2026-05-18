import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.tagline}`,
  description:
    "Plataforma integrada de reabilitação pós-AVC com órtese 3D personalizada, prescrição digital e telereabilitação.",
};

const shouldLoadAnalytics = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${dmSans.variable}`}>
      <body
        className="antialiased bg-navy text-white font-body"
        suppressHydrationWarning
      >
        {children}
        {shouldLoadAnalytics && (
          <Script
            defer
            data-domain={siteConfig.plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
