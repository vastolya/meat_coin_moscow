import MobileHeroImageReveal from "@/components/sections/MobileHeroImageReveal";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import Button from "@/components/ui/Button";
import GridSection from "@/components/ui/GridSection";
import H1Title from "@/components/ui/H1Title";
import privateDiningTableImage from "@/public/hero-private-dining-table.webp";
import terraceEntranceImage from "@/public/hero-terrace-entrance.webp";
import wineRoomSeatingImage from "@/public/hero-wine-room-seating.webp";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <MobileHeroImageReveal />
      <DesktopHeroSection />
    </>
  );
}

function DesktopHeroSection() {
  return (
    <GridSection className="hidden gap-0 pt-18 pb-0 md:grid">
      <div className="col-span-12 flex flex-col">
        <H1Title className="mb-11" delay={0.2}>
          <span className="text-accent">Meat_Coin Steak & Terrace — </span>{" "}
          стейк-хаус с панорамной террасой в Москве
        </H1Title>
        <AnimatedDiv delay={0.4} className="mb-18 flex items-start gap-2">
          <Button
            text="Меню"
            variant="secondary"
            className="w-fit! border-[1.5px] border-(--color-accent) py-4 text-center text-base leading-[150%] text-white"
          />
          <Button
            text="Забронировать стол"
            variant="primary"
            className="w-fit! border-[1.5px] border-(--color-accent) py-4 text-center text-base leading-[150%] text-white"
          />
        </AnimatedDiv>
      </div>

      <AnimatedDiv
        delay={0.6}
        className="relative col-span-12 flex w-full flex-col items-center gap-0"
      >
        <Image
          src={terraceEntranceImage}
          alt="Терраса и интерьер ресторана Meat_Coin Steak & Terrace"
          className="h-158 max-w-265.5 rounded-sm"
        />
        <Image
          src={wineRoomSeatingImage}
          alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
          className="absolute top-19.5 right-0 h-119 max-w-102 rounded-sm"
        />
        <Image
          src={privateDiningTableImage}
          alt="Лаунж зона ресторана Meat_Coin Steak & Terrace"
          className="absolute top-19.5 left-0 h-119 max-w-102 rounded-sm"
        />
      </AnimatedDiv>
    </GridSection>
  );
}
