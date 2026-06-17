"use client";

import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import specialOfferGalaDinner from "@/public/special-offer-gala-dinner.webp";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
import AnimatedDiv from "../ui/AnimatedDiv";
import AnimatedImage from "../ui/AnimatedImage";
import Button from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import FormInput from "../ui/FormInput";
import GridSection from "../ui/GridSection";
import SlideModal from "../ui/SlideModal";

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

type ScheduleEvent = {
  id: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
  date: string;
  bookingDate: string;
  bookingTime: string;
  bookingSeats: string;
  descriptionLabel: string;
  description: string;
};

const scheduleEvents: ScheduleEvent[] = [
  {
    id: "gala-dinner",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в МИТКОИН",
    date: "26 марта в 19:30",
    bookingDate: "Четверг 26 марта",
    bookingTime: "19:30–22:30",
    bookingSeats: "5 мест",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН с винами Viña Vik",
    description:
      "26 марта Состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова и бренд-шефа Григория Ким при поддержке винторговой компании DP-Trade!",
  },
  {
    id: "ribeye-masterclass",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша мастер-класса по рибаю Meat_Coin",
    title: "Мастер-класс «Искусство рибая»",
    date: "20 марта в 19:30",
    bookingDate: "Пятница 20 марта",
    bookingTime: "19:30–21:30",
    bookingSeats: "5 мест",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН с винами Viña Vik",
    description:
      "26 марта Состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова и бренд-шефа Григория Ким при поддержке винторговой компании DP-Trade!",
  },
  {
    id: "private-masterclass",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша индивидуального мастер-класса Meat_Coin",
    title: "Индивидуальный мастер-класс",
    date: "20 марта в 19:30",
    bookingDate: "Пятница 20 марта",
    bookingTime: "19:30–21:30",
    bookingSeats: "5 мест",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН с винами Viña Vik",
    description:
      "26 марта Состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова и бренд-шефа Григория Ким при поддержке винторговой компании DP-Trade!",
  },
];

function BookingSideOverlay({
  event,
  onClose,
}: {
  event: ScheduleEvent | null;
  onClose: () => void;
}) {
  const isOpen = Boolean(event);

  const handleSubmit = (submitEvent: FormEvent<HTMLFormElement>) => {
    submitEvent.preventDefault();
  };

  return (
    <SlideModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={event ? `Запись на событие: ${event.title}` : undefined}
    >
      {event && (
        <div className="flex min-h-[calc(100dvh-3.25rem)] flex-col pt-6 md:min-h-[calc(100dvh-9rem)] md:pt-0">
          <div>
            <H2Title className="mb-4" disableAnimation>
              {event.title}
            </H2Title>

            <Paragraph className="text-gray mb-2" disableAnimation>
              {event.descriptionLabel}
            </Paragraph>

            <Paragraph className="" disableAnimation>
              {event.description}
            </Paragraph>
          </div>

          <form
            className="mt-16 flex flex-1 flex-col justify-end md:mt-63"
            onSubmit={handleSubmit}
          >
            <div className="mb-11 flex flex-col gap-7 md:mb-7 md:flex-row md:items-end md:justify-between md:gap-10">
              <BookingDateLabel value={event.bookingDate} />

              <div className="bg-beige relative w-fit self-start rounded-sm px-4 py-4 md:self-auto">
                <span className="border-beige absolute -top-5 left-1/2 -translate-x-1/2 rounded-sm border bg-white px-2 py-1 text-base leading-none whitespace-nowrap text-(--color-accent)">
                  {event.bookingSeats}
                </span>
                <span className="text-2xl leading-none font-extrabold whitespace-nowrap text-(--color-accent)">
                  {event.bookingTime}
                </span>
              </div>
            </div>

            <div className="mb-9 flex flex-col gap-5">
              <FormInput name="name" type="text" placeholder="Имя" />
              <FormInput name="phone" type="tel" placeholder="Телефон" />
            </div>

            <Button
              text="Оставить заявку"
              type="submit"
              className="mb-2 w-full"
            />

            <Checkbox
              className="items-center!"
              label={
                <>
                  Вы соглашаетесь с нашими{" "}
                  <Link href="/rules" className="underline" target="_blank">
                    условиями
                  </Link>{" "}
                  и{" "}
                  <Link href="/policy" className="underline" target="_blank">
                    политикой конфиденциальности
                  </Link>
                </>
              }
            />
          </form>
        </div>
      )}
    </SlideModal>
  );
}

function BookingDateLabel({ value }: { value: string }) {
  const [, weekday, day, month] = value.match(/^(.+?)\s+(\d+)\s+(.+)$/) ?? [];

  if (!weekday || !day || !month) {
    return (
      <span className="text-2xl leading-none font-extrabold">{value}</span>
    );
  }

  return (
    <div className="flex items-baseline gap-2 whitespace-nowrap">
      <span className="text-2xl leading-none font-extrabold">{weekday}</span>
      <span className="text-5xl leading-none font-medium md:text-[3.25rem]">
        {day}
      </span>
      <span className="text-2xl leading-none font-extrabold">{month}</span>
    </div>
  );
}

function ScheduleEventCard({
  event,
  index,
  onSignupClick,
}: {
  event: ScheduleEvent;
  index: number;
  onSignupClick: () => void;
}) {
  const baseDelay = 0.4 + index * 0.35;

  return (
    <article className="border-devider col-span-5 grid grid-cols-5 gap-2 border-b py-4 md:col-span-12 md:-mt-3 md:grid-cols-12 md:gap-7 md:pt-0 md:pb-4">
      <AnimatedImage
        src={event.imageSrc}
        alt={event.imageAlt}
        delay={baseDelay}
        className="col-span-5 mb-4 h-86 w-86 overflow-hidden rounded-sm md:col-span-3 d:mb-0 md:h-75 md:w-75"
      />

      <div className="col-span-5 md:col-span-4 md:col-start-5 md:flex md:flex-col md:items-start">
        <H3Title delay={baseDelay + 0.05} className="mb-2 md:mb-2">
          {event.title}
        </H3Title>
        <AnimatedDiv delay={baseDelay + 0.1} className="mb-7 md:mb-0">
          <Tag text={event.date} variant="gray" />
        </AnimatedDiv>
      </div>

      <div className="col-span-5 md:col-span-4 md:col-start-9 md:flex md:flex-col md:items-start">
        <Paragraph
          delay={baseDelay + 0.1}
          className="hidden text-(--color-gray) md:mb-2 md:block"
        >
          {event.descriptionLabel}
        </Paragraph>

        <Paragraph
          delay={baseDelay + 0.15}
          className="hidden md:mb-7 md:block md:max-w-97.25"
        >
          {event.description}
        </Paragraph>

        <button
          type="button"
          onClick={onSignupClick}
          className="cursor-pointer"
        >
          <Paragraph
            delay={baseDelay + 0.2}
            className="flex items-center gap-2 text-(--color-accent) transition-colors duration-300 hover:text-white"
          >
            Записаться <ArrowIcon />
          </Paragraph>
        </button>
      </div>
    </article>
  );
}

export default function ChefsScheduleSection() {
  const [selectedEvent, setSelectedEvent] = useState<ScheduleEvent | null>(
    null,
  );

  return (
    <div className="bg-dark text-white">
      <GridSection className="py-12 pb-12 md:px-20 md:py-30 md:pb-0">
        <div className="contents md:col-span-8 md:col-start-5 md:flex md:flex-col md:gap-2">
          <H2Title delay={0.2} className="col-span-5 mb-4 md:mb-2">
            Расписание и бронирование
          </H2Title>

          <Paragraph delay={0.3} className="text-gray col-span-5 mb-9 md:mb-12">
            Ближайшие мастер-классы по стейкам в Москве и график шоу
          </Paragraph>
        </div>

        {scheduleEvents.map((event, index) => (
          <ScheduleEventCard
            key={event.id}
            event={event}
            index={index}
            onSignupClick={() => setSelectedEvent(event)}
          />
        ))}

        <AnimatedDiv
          delay={1.55}
          className="md:items-cente col-span-5 mt-9 flex flex-col gap-2 md:col-span-8 md:col-start-5 md:mt-11 md:flex-row md:justify-center md:gap-4"
        >
          <Button
            text="Все события"
            variant="secondary"
            className="w-full text-white md:w-102"
          />
          <Paragraph disableAnimation className="text-gray md:w-75">
            Информация о ближайших событиях появится здесь
          </Paragraph>
        </AnimatedDiv>
      </GridSection>

      <BookingSideOverlay
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
