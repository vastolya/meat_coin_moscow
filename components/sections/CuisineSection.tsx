import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import cuisineAuthorKitchen1 from "@/public/cuisine-author-kitchen-1.webp";
import cuisineAuthorKitchen2 from "@/public/cuisine-author-kitchen-2.webp";
import cuisineAuthorKitchen3 from "@/public/cuisine-author-kitchen-3.webp";
import cuisineBar from "@/public/cuisine-bar.webp";
import cuisineKitchenFire from "@/public/cuisine-kitchen-fire.webp";
import cuisineKitchenPlating from "@/public/cuisine-kitchen-plating.webp";
import cuisineKitchenService from "@/public/cuisine-kitchen-service.webp";
import cuisineWinePairing from "@/public/cuisine-wine-pairing.webp";
import clsx from "clsx";
import Image from "next/image";
import { Fragment } from "react";
import AnimatedDiv from "../ui/AnimatedDiv";
import Button from "../ui/Button";
import GridSection from "../ui/GridSection";
import H3Title from "../ui/H3Title";
import PhotoSliderTabs from "../ui/PhotoSliderTabs";

const kitchenSlides = [
  {
    id: "kitchen-1",
    src: cuisineKitchenFire,
    alt: "Кухня Meat_Coin",
    title: "Основу гриль-меню составляют блюда с огня",
    description:
      "Мастера точно знают, как добиться идеальной прожарки, сохранив внутри сок",
    description2:
      "Помимо стейков представлены позиции, созданные под руководством шефа",
  },
  {
    id: "kitchen-2",
    src: cuisineKitchenPlating,
    alt: "Кухня Meat_Coin",
    description: "Отдельный раздел в меню посвящен гастрономическим парам",
  },
  {
    id: "kitchen-3",
    src: cuisineKitchenService,
    alt: "Кухня Meat_Coin",
  },
];

const barSlides = [
  {
    id: "bar-1",
    src: cuisineBar,
    alt: "Бар Meat_Coin",
    title: "Винной карте более 300 позиций",
    description:
      "Сомелье тщательно отбирает этикетки Старого и Нового Света, чтобы каждая бутылка гармонировала с насыщенным вкусом мяса",
    description2: "Отдельный раздел в меню посвящен гастрономическим парам",
  },
];

const whiteSectionTabs = [
  { label: "Кухня", slides: kitchenSlides },
  { label: "Бар", slides: barSlides },
];

const desktopCuisineItems = [
  {
    id: "grill",
    textClassName: "col-span-5 md:col-span-4",
    title: (
      <>
        Основу гриль-меню <br />
        составляют блюда с&nbsp;огня
      </>
    ),
    paragraphs: [
      "Мастера точно знают, как добиться идеальной прожарки, сохранив внутри сок",
      "Помимо стейков представлены позиции, созданные под руководством шефа",
    ],
    image: cuisineAuthorKitchen1,
    imageClassName: "col-span-5 md:col-span-8",
  },
  {
    id: "pairs",
    textClassName: "md:col-span-4 md:self-end ",
    paragraphs: ["Отдельный раздел в меню посвящен гастрономическим парам"],
    image: cuisineAuthorKitchen2,
    imageClassName: "col-span-5 md:col-span-8",
  },
  {
    id: "service",
    textClassName: "md:col-span-4 ",
    image: cuisineAuthorKitchen3,
    imageClassName: "col-span-5 md:col-span-8",
  },
  {
    id: "wine",
    textClassName: "col-span-4 ",
    title: "Винной карте более 300 позиций",
    paragraphs: [
      "Сомелье тщательно отбирает этикетки Старого и Нового Света, чтобы каждая бутылка гармонировала с насыщенным вкусом мяса",
    ],
    image: cuisineWinePairing,
    imageClassName: "col-span-5 md:col-span-8 ",
  },
];

export default function CuisineSection() {
  return (
    <div className="bg-beige text-dark-black rounded-t-[60px]">
      <GridSection className="px-4 py-12 md:py-30">
        <AnimatedDiv
          delay={0.2}
          className="order-last col-span-5 flex flex-col gap-2 md:order-0 md:col-span-4 md:mb-11 md:flex-row"
        >
          <Button text="Меню" variant="secondary" className="w-full md:w-fit" />
          <Button
            text="Винная карта"
            variant="secondary"
            className="w-full md:w-fit"
          />
        </AnimatedDiv>

        <Paragraph className="text-gray col-span-5 md:hidden">
          География вкуса
        </Paragraph>

        <H2Title
          delay={0.4}
          className="col-span-5 hidden text-(--color-dark-black) md:col-span-8 md:block"
        >
          Авторская кухня ресторана
        </H2Title>

        <H2Title className="md:9 col-span-5 mb-9 text-(--color-dark-black) md:hidden">
          Авторская кухня и турецкие <br />
          традиции мясников
        </H2Title>

        <AnimatedDiv delay={0.4} className="hidden md:contents">
          {desktopCuisineItems.map((item) => (
            <Fragment key={item.id}>
              <div className={clsx(`flex flex-col gap-2`, item.textClassName)}>
                {item.title ? (
                  <H3Title delay={0.2} className="mb-2">{item.title}</H3Title>
                ) : null}
                {item.paragraphs?.map((paragraph) => (
                  <Paragraph delay={0.2}  key={paragraph}>{paragraph}</Paragraph>
                ))}
              </div>

              <AnimatedDiv delay={0.4} className={item.imageClassName}>
                <Image src={item.image} alt="Кухня Meat_Coin" />
              </AnimatedDiv>
            </Fragment>
          ))}
        </AnimatedDiv>

        <PhotoSliderTabs
          items={whiteSectionTabs}
          className="col-span-5 mb-9 md:hidden"
          imgWrapperClassName="h-104.5"
        />
      </GridSection>
    </div>
  );
}
