import type { Metadata } from "next";
import ChefsIntroSection from "@/components/sections/ChefsIntroSection";

export const metadata: Metadata = {
  title: "Шефы | Meat_Coin",
};

export default function ChefsPage() {
  return (
    <main>
      <ChefsIntroSection />
    </main>
  );
}
