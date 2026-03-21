import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
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
  title: "Limbse — Design que Transforma. Tecnologia que Fortalece.",
  description:
    "Plataforma integrada de reabilitação pós-AVC com órtese 3D personalizada, prescrição digital e telereabilitação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${montserrat.variable} ${dmSans.variable}`}
    >
      <body className="antialiased bg-navy text-white font-body">
        {children}
      </body>
    </html>
  );
}
