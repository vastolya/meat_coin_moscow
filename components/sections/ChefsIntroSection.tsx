import AnimatedDiv from "@/components/ui/AnimatedDiv";
import GridSection from "@/components/ui/GridSection";
import H1Title from "@/components/ui/H1Title";
import Paragraph from "@/components/ui/Paragraph";

export default function ChefsIntroSection() {
  return (
    <GridSection className="bg-beige pt-7 md:bg-white md:pt-18 md:pb-30">
      <AnimatedDiv
        className="md:text-gray hidden md:col-span-4 md:flex md:h-full md:flex-col md:justify-between"
        delay={0.2}
      >
        <Paragraph className="text-[#BBB6AF]">
          «Мясо — это язык, на котором я говорю с гостями. Моя задача — чтобы
          каждый понял его без слов»
        </Paragraph>
        <Paragraph className="text-[#BBB6AF]">— Мехмет Найджи</Paragraph>
      </AnimatedDiv>

      <div className="col-span-5 md:col-span-8">
        <H1Title className="text-accent" delay={0.4}>
          Мехмет <br className="md:hidden" /> Найджи —<br /> шеф московск
          <br className="md:hidden" />
          ого ресторана Meat_Coin
        </H1Title>
        <Paragraph className="mt-1 md:mt-2" delay={0.6}>
          Традиции, шоу и искусство стейка
        </Paragraph>
      </div>
    </GridSection>
  );
}
