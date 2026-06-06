import ButcherShopSection from "@/components/sections/ButcherShopSection";
import ChefSection from "@/components/sections/ChefSection";
import ContactsSection from "@/components/sections/ContactsSection";
import CuisineSection from "@/components/sections/CuisineSection";
import CultureSection from "@/components/sections/CultureSection";
import HeroSection from "@/components/sections/HeroSection";
import LoyaltyProgramSection from "@/components/sections/LoyaltyProgramSection";
import PrivateEventsSection from "@/components/sections/PrivateEventsSection";
import SpaceAestheticsSection from "@/components/sections/SpaceAestheticsSection";
import SpecialOffersSection from "@/components/sections/SpecialOffersSection";
import TableReservationSection from "@/components/sections/TableReservationSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CultureSection />
      <ChefSection />
      <CuisineSection />
      <SpecialOffersSection />
      <PrivateEventsSection />
      <TableReservationSection />
      <SpaceAestheticsSection />
      <ButcherShopSection />
      <LoyaltyProgramSection />
      <ContactsSection />
    </main>
  );
}
