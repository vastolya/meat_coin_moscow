"use client";

import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import specialOfferGalaDinner from "@/public/special-offer-gala-dinner.webp";
import Image from "next/image";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import ArrowIcon from "../icons/ArrowIcon";
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

type SpecialOffer = {
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
  href: string;
};

const specialOffers: SpecialOffer[] = [
  {
    id: "gala-dinner-1",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Миткоин",
    date: "28 октября в 15:00",
    bookingDate: "Суббота 28 октября",
    bookingTime: "15:00–17:00",
    bookingSeats: "5 мест",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН с винами Viña Vik",
    description:
      "26 марта Состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова и бренд-шефа Григория Ким при поддержке винторговой компании DP-Trade!",
    href: "#",
  },
  {
    id: "gala-dinner-2",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Миткоин",
    date: "28 октября в 15:00",
    bookingDate: "Суббота 28 октября",
    bookingTime: "15:00–17:00",
    bookingSeats: "5 мест",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН с винами Viña Vik",
    description:
      "26 марта Состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова и бренд-шефа Григория Ким при поддержке винторговой компании DP-Trade!",
    href: "#",
  },
  {
    id: "gala-dinner-3",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Миткоин",
    date: "28 октября в 15:00",
    bookingDate: "Суббота 28 октября",
    bookingTime: "15:00–17:00",
    bookingSeats: "5 мест",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН с винами Viña Vik",
    description:
      "26 марта Состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова и бренд-шефа Григория Ким при поддержке винторговой компании DP-Trade!",
    href: "#",
  },
  {
    id: "gala-dinner-4",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Миткоин",
    date: "28 октября в 15:00",
    bookingDate: "Суббота 28 октября",
    bookingTime: "15:00–17:00",
    bookingSeats: "5 мест",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН с винами Viña Vik",
    description:
      "26 марта Состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова и бренд-шефа Григория Ким при поддержке винторговой компании DP-Trade!",
    href: "#",
  },
];

function BookingSideOverlay({
  offer,
  onClose,
}: {
  offer: SpecialOffer | null;
  onClose: () => void;
}) {
  const isOpen = Boolean(offer);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SlideModal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={offer ? `Запись на событие: ${offer.title}` : undefined}
    >
      {offer && (
        <div className="flex min-h-[calc(100dvh-3.25rem)] flex-col pt-6 md:min-h-[calc(100dvh-9rem)] md:pt-0">
          <div>
            <H2Title className="mb-4" disableAnimation>{offer.title}</H2Title>

            <Paragraph className="text-gray mb-2" disableAnimation>
              {offer.descriptionLabel}
            </Paragraph>

            <Paragraph className="" disableAnimation>
              {offer.description}
            </Paragraph>
          </div>

          <form
            className="mt-16 flex flex-1 flex-col justify-end md:mt-63"
            onSubmit={handleSubmit}
          >
            <div className="mb-11 md:mb-7 flex flex-col gap-7 md:flex-row md:items-end md:justify-between md:gap-10">
              <BookingDateLabel value={offer.bookingDate} />

              <div className="bg-beige relative w-fit self-start rounded-sm px-4 py-4 md:self-auto">
                <span className="border-beige absolute -top-5 left-1/2 -translate-x-1/2 rounded-sm border bg-white px-2 py-1 text-base leading-none whitespace-nowrap text-(--color-accent)">
                  {offer.bookingSeats}
                </span>
                <span className="text-2xl leading-none font-extrabold whitespace-nowrap text-(--color-accent)">
                  {offer.bookingTime}
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

function SpecialOfferCard({
  offer,
  onSignupClick,
}: {
  offer: SpecialOffer;
  onSignupClick: () => void;
}) {
  return (
    <article className="contents border-b border-(--color-devider) py-4 md:pt-0 md:pb-4">
      <div className="col-span-5 mb-4 overflow-hidden rounded-sm md:col-span-3 md:mb-0 md:w-75">
        <Image src={offer.imageSrc} alt={offer.imageAlt} className="md:w-75" />
      </div>

      <div className="col-span-5 md:col-span-3 md:col-start-5 md:flex md:flex-col md:items-start">
        <H3Title className="mb-2 md:mb-2">{offer.title}</H3Title>
        <Tag text={offer.date} variant="gray" className="mb-7 md:mb-0" />
      </div>

      <div className="col-span-5 md:col-span-4 md:col-start-9 md:flex md:flex-col md:items-start">
        <Paragraph className="hidden text-(--color-gray) md:mb-2 md:block">
          {offer.descriptionLabel}
        </Paragraph>

        <Paragraph className="hidden md:mb-7 md:block md:max-w-97.25">
          {offer.description}
        </Paragraph>

        <button
          type="button"
          onClick={onSignupClick}
          className="cursor-pointer"
        >
          <Paragraph className="flex items-center gap-2 text-(--color-accent) transition-colors duration-300 hover:text-white">
            Записаться <ArrowIcon />
          </Paragraph>
        </button>
      </div>
    </article>
  );
}

export default function SpecialOffersSection() {
  const [selectedOffer, setSelectedOffer] = useState<SpecialOffer | null>(null);

  return (
    <>
      <GridSection className="mt-12 mb-12 md:mt-30 md:mb-0 md:px-20">
        <Paragraph className="text-gray col-span-5 mb-2 md:col-span-4">
          Особые моменты
        </Paragraph>

        <div className="contents md:col-span-8 md:col-start-5 md:flex md:w-117.5 md:flex-col md:gap-2">
          <H2Title className="col-span-5 mb-4 md:mb-2">Спецпредложения</H2Title>

          <Paragraph className="col-span-5 mb-2">
            Дегустационный сет «Загородный» — дает возможность за один вечер
            исследовать разные текстуры и техники
          </Paragraph>

          <Paragraph className="col-span-5 mb-9 md:mb-18">
            Также мы проводим закрытые гастроужины,
            <br className="hidden md:block" /> где шеф представляет новые
            авторские позиции
          </Paragraph>
        </div>

        {specialOffers.map((offer) => (
          <SpecialOfferCard
            key={offer.id}
            offer={offer}
            onSignupClick={() => setSelectedOffer(offer)}
          />
        ))}

        <div className="md:items-cente col-span-5 mt-9 flex flex-col gap-2 md:col-span-8 md:col-start-5 md:mt-18 md:flex-row md:justify-center md:gap-4">
          <Button
            text="Все события"
            variant="secondary"
            className="w-full text-white md:w-102"
          />
          <Paragraph className="text-gray md:w-75">
            Информация о ближайших событиях появится здесь
          </Paragraph>
        </div>
      </GridSection>

      <BookingSideOverlay
        offer={selectedOffer}
        onClose={() => setSelectedOffer(null)}
      />
    </>
  );
}
