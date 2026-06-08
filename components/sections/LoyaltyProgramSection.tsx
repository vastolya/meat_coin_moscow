import ArrowIcon from "@/components/icons/ArrowIcon";
import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import loyaltyCards from "@/public/loyalty.svg";
import Image from "next/image";
import Link from "next/link";
import AnimatedDiv from "../ui/AnimatedDiv";
import GridSection from "../ui/GridSection";
import H3Title from "../ui/H3Title";

const loyaltyBenefits = [
  "Приоритетное бронирование столов",
  "Доступ к предпродаже на специальные мероприятия",
  "Персональные предложения и накопление баллов (meat_coins)",
  "Подарочный сертификат на сумму номинала — универсальный статусный подарок",
];

export default function LoyaltyProgramSection() {
  return (
    <GridSection className="px-4 pb-13 md:px-20 md:pb-16">
      <Paragraph
        delay={0.2}
        className="text-gray col-span-5 md:col-span-3 md:col-start-1 md:row-start-1 md:mb-0 md:pt-1"
      >
        Станьте частью закрытого круга
      </Paragraph>

      <H2Title
        delay={0.3}
        className="col-span-5 mb-7 md:col-span-8 md:col-start-5 md:mb-11"
      >
        <span className="text-accent hidden md:inline">MEAT_COIN CLUB </span>
        Программа лояльности
      </H2Title>

      <Paragraph
        delay={0.4}
        className="text-accent col-span-5 -mb-2 md:col-span-8 md:col-start-5 md:-mb-3"
      >
        Участники программы получают
      </Paragraph>

      <AnimatedDiv
        delay={0.5}
        className="hidden md:col-span-3 md:col-start-1 md:row-span-3 md:row-start-3 md:mt-60 md:block"
      >
        <Image
          src={loyaltyCards}
          alt="Карты программы лояльности Meat_Coin Club"
          className="md:w-75"
        />
      </AnimatedDiv>

      <div className="col-span-5 md:col-span-8 md:col-start-5 md:mb-11">
        {loyaltyBenefits.map((benefit, index) => (
          <H3Title
            key={benefit}
            delay={0.55 + index * 0.12}
            className="border-devider w-77 border-b py-6 md:w-full md:py-11"
          >
            {benefit}
          </H3Title>
        ))}
      </div>

      <AnimatedDiv
        delay={1.1}
        className="col-span-5 px-0 pt-7 md:col-span-8 md:col-start-5 md:flex md:items-start md:justify-between md:pt-0"
      >
        <AnimatedDiv delay={1.2} className="w-full md:w-auto">
          <Button
            text="Оформить"
            variant="secondary"
            className="w-full text-white md:w-96 md:py-3"
          />
        </AnimatedDiv>

        <AnimatedDiv delay={1.3}>
          <Link
            href="#"
            className="text-accent mt-2 flex items-center justify-center gap-2 pt-1.5 pb-2.5 text-[16px] leading-[148%] font-medium md:mt-0 md:px-21 md:pt-3 md:pb-3"
          >
            <span>О программе лояльности</span>
            <ArrowIcon width={26} height={26} />
          </Link>
        </AnimatedDiv>
      </AnimatedDiv>
    </GridSection>
  );
}
