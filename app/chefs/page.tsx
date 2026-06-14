import ChefMasterClassSection from "@/components/sections/ChefMasterClassSection";
import ChefsArchiveSection from "@/components/sections/ChefsArchiveSection";
import ChefSignatureDishesSection from "@/components/sections/ChefSignatureDishesSection";
import ChefsIntroSection from "@/components/sections/ChefsIntroSection";
import ChefsPathSection from "@/components/sections/ChefsPathSection";
import ChefsScheduleSection from "@/components/sections/ChefsScheduleSection";
import ContactsSection from "@/components/sections/ContactsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Шефы | Meat_Coin",
};

export default function ChefsPage() {
  return (
    <main className="text-dark bg-white">
      <ChefsIntroSection />
      <ChefsPathSection />
      <ChefSignatureDishesSection />
      <ChefMasterClassSection />
      <ChefsArchiveSection />
      <ChefsScheduleSection />
      <ContactsSection />
    </main>
  );
}
