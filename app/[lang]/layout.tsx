import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales } from "@/lib/dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Header dict={dict} />
      <main>{children}</main>
      <Footer dict={dict} />
    </>
  );
}
