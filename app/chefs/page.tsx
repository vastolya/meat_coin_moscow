import type { Metadata } from "next";
import ChefsIntroSection from "@/components/sections/ChefsIntroSection";
import ChefsPathSection from "@/components/sections/ChefsPathSection";
import ChefSignatureDishesSection from "@/components/sections/ChefSignatureDishesSection";
import ChefMasterClassSection from "@/components/sections/ChefMasterClassSection";

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
    </main>
  );
}
