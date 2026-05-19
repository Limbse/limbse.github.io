import { notFound } from "next/navigation";
import { getDictionary, isLocale } from "@/lib/dictionaries";
import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Neuroviva } from "@/components/sections/Neuroviva";
import { Technology } from "@/components/sections/Technology";
import { Validation } from "@/components/sections/Validation";
import { Impact } from "@/components/sections/Impact";
import { Team } from "@/components/sections/Team";
import { CTAFinal } from "@/components/sections/CTAFinal";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict} />
      <Problema dict={dict} />
      <Neuroviva dict={dict} />
      <Technology dict={dict} />
      <Validation dict={dict} />
      <Impact dict={dict} />
      <Team dict={dict} />
      <CTAFinal dict={dict} />
    </>
  );
}
