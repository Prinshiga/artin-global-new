import type { Metadata } from "next";
import AIConversations from "@/components/software/AIConversations";
import SelveOverview from "@/components/software/SelveOverview";
import SelvernTrust from "@/components/software/SelvernTrust";
import SoftwareHero from "@/components/software/SoftwareHero";
import SoftwareIntro from "@/components/software/SoftwareIntro";
import Footer from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "Software | Artin Global",
};

export default function SoftwarePage() {
  return (
    <>
      <main>
        <SoftwareHero />
        <SoftwareIntro />
        <SelveOverview />
        <SelvernTrust />
        <AIConversations />
      </main>
      <Footer />
    </>
  );
}
