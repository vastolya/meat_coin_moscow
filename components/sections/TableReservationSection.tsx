import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import reservationImage from "@/public/reservation.webp";
import AnimatedDiv from "../ui/AnimatedDiv";
import AnimatedImage from "../ui/AnimatedImage";
import GridSection from "../ui/GridSection";

export default function TableReservationSection() {
  return (
    <GridSection className="relative pt-12 md:pt-30">
      <H2Title
        delay={0.2}
        className="col-span-5 mb-2 md:col-span-8 md:col-start-5 md:-mb-5"
      >
        Бронирование стола
      </H2Title>

      <Paragraph
        delay={0.3}
        className="col-span-5 mb-9 text-(--color-gray) md:col-span-8 md:col-start-5 md:mb-11"
      >
        Вечер в Meat_Coin — это возможность прикоснуться к культуре, где главный
        язык — вкус
      </Paragraph>

      <AnimatedDiv
        delay={0.4}
        className="col-span-5 mb-4 flex h-72 flex-col justify-between rounded-sm border border-(--color-devider) p-4 md:col-span-4 md:mb-0 md:h-151"
      >
        <div>
          <H3Title delay={0.5} className="mb-2">
            Забронируйте стол
          </H3Title>
          <Paragraph delay={0.6}>
            Позвольте себе погрузиться в незабываемую атмосферу
          </Paragraph>
        </div>

        <AnimatedDiv delay={0.7}>
          <Button text="Забронировать" className="w-full" />
        </AnimatedDiv>
      </AnimatedDiv>

      <AnimatedImage
        src={reservationImage}
        alt="Зал ресторана Meat_Coin с сервированными столами"
        className="col-span-5 h-60 w-full rounded-sm md:col-span-8 md:-mr-40 md:h-151 md:w-full!"
        imgClsx="object-cover"
        sizes="(min-width: 768px) calc(100vw - 516px), 100vw"
        delay={0.8}
      />
    </GridSection>
  );
}
