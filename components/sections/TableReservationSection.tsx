import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import reservationImage from "@/public/reservation.webp";
import Image from "next/image";
import GridSection from "../ui/GridSection";

export default function TableReservationSection() {
  return (
    <GridSection className="relative pt-12 md:pt-30">
      <H2Title className="col-span-5 mb-2 md:col-span-8 md:col-start-5 md:-mb-5">
        Бронирование стола
      </H2Title>

      <Paragraph className="col-span-5 mb-9 text-(--color-gray) md:col-span-8 md:col-start-5 md:mb-11">
        Вечер в Meat_Coin — это возможность прикоснуться к культуре, где главный
        язык — вкус
      </Paragraph>

      <div className="col-span-5 mb-4 flex h-72 flex-col justify-between rounded-sm border border-(--color-devider) p-4 md:col-span-4 md:mb-0 md:h-151">
        <div>
          <H3Title className="mb-2">Забронируйте стол</H3Title>
          <Paragraph>
            Позвольте себе погрузиться в незабываемую атмосферу
          </Paragraph>
        </div>

        <Button text="Забронировать" className="w-full" />
      </div>

      <Image
        src={reservationImage}
        alt="Зал ресторана Meat_Coin с сервированными столами"
        className="col-span-5 h-60 w-full rounded-sm object-cover md:col-span-8 md:-mr-40 md:h-151 md:w-full!"
        sizes="(min-width: 768px) calc(100vw - 516px), 100vw"
      />
    </GridSection>
  );
}
