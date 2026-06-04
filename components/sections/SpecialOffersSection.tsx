import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import specialOfferGalaDinner from "@/public/special-offer-gala-dinner.webp";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "../icons/ArrowIcon";
import Button from "../ui/Button";
import GridSection from "../ui/GridSection";

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
  descriptionLabel: string;
  description: string;
  href: string;
};

const specialOffers: SpecialOffer[] = [
  {
    id: "gala-dinner-1",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН",
    description:
      "26 марта состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова",
    href: "#",
  },
  {
    id: "gala-dinner-2",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН",
    description:
      "26 марта состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова",
    href: "#",
  },
  {
    id: "gala-dinner-3",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН",
    description:
      "26 марта состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова",
    href: "#",
  },
  {
    id: "gala-dinner-4",
    imageSrc: specialOfferGalaDinner,
    imageAlt: "Афиша гала-ужина Meat_Coin",
    title: "Гала-ужин в Meat_Coin",
    date: "26 марта в 19:30",
    descriptionLabel: "Эксклюзивный гала-ужин во МИТКОИН",
    description:
      "26 марта состоится незабываемый гала-ужин в 4 руки от Хайяма Аминова",
    href: "#",
  },
];

function SpecialOfferCard({ offer }: { offer: SpecialOffer }) {
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

        <Link href={offer.href}>
          <Paragraph className="flex items-center gap-2 text-(--color-accent)">
            Записаться <ArrowIcon />
          </Paragraph>
        </Link>
      </div>
    </article>
  );
}

export default function SpecialOffersSection() {
  return (
    <GridSection className="mt-12 mb-12 md:mt-30 md:mb-0 md:px-20">
      <Paragraph className="col-span-5 mb-2 text-(--color-gray) md:col-span-4">
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
        <SpecialOfferCard key={offer.id} offer={offer} />
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
  );
}
