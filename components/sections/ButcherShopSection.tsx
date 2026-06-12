import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import butcherShopAgingRoom from "@/public/butcher-shop-aging-room.webp";
import butcherShopCounter from "@/public/butcher-shop-counter.webp";
import butcherShopRibeye from "@/public/butcher-shop-ribeye.webp";
import butcherShopSpices from "@/public/butcher-shop-spices.webp";
import butcherShopSteak from "@/public/butcher-shop-steak.webp";
import butcherShopWagyu from "@/public/butcher-shop-wagyu.webp";
import Image from "next/image";
import AnimatedDiv from "../ui/AnimatedDiv";
import GridSection from "../ui/GridSection";
import H3Title from "../ui/H3Title";
import HorizontalDragScroller from "../ui/HorizontalDragScroller";

const cutTags = ["Рибай на кости", "Нью-Йорк", "Филе-миньон", "Вагю"];

const butcherPhotos = [
  {
    id: "butcher-shop-1",
    src: butcherShopCounter,
    alt: "Мясная витрина Meat_Coin",
  },
  {
    id: "butcher-shop-2",
    src: butcherShopSpices,
    alt: "Специи для стейка Meat_Coin",
  },
  {
    id: "butcher-shop-3",
    src: butcherShopAgingRoom,
    alt: "Камера сухого вызревания мяса Meat_Coin",
  },
  {
    id: "butcher-shop-4",
    src: butcherShopRibeye,
    alt: "Отруб мраморной говядины Meat_Coin",
  },
  {
    id: "butcher-shop-5",
    src: butcherShopSteak,
    alt: "Стейк из мясной лавки Meat_Coin",
  },
  {
    id: "butcher-shop-6",
    src: butcherShopWagyu,
    alt: "Премиальная говядина Meat_Coin",
  },
  {
    id: "butcher-shop-4",
    src: butcherShopRibeye,
    alt: "Отруб мраморной говядины Meat_Coin",
  },
  {
    id: "butcher-shop-5",
    src: butcherShopSteak,
    alt: "Стейк из мясной лавки Meat_Coin",
  },
  {
    id: "butcher-shop-6",
    src: butcherShopWagyu,
    alt: "Премиальная говядина Meat_Coin",
  },
  {
    id: "butcher-shop-4",
    src: butcherShopRibeye,
    alt: "Отруб мраморной говядины Meat_Coin",
  },
  {
    id: "butcher-shop-5",
    src: butcherShopSteak,
    alt: "Стейк из мясной лавки Meat_Coin",
  },
  {
    id: "butcher-shop-6",
    src: butcherShopWagyu,
    alt: "Премиальная говядина Meat_Coin",
  },
];

export default function ButcherShopSection() {
  return (
    <GridSection className="-mx-4 px-4 py-12 md:py-30">
      <H2Title
        delay={0.3}
        className="order-1 col-span-5 mb-4 md:order-2 md:col-span-8 md:col-start-5 md:mb-11"
      >
        <span className="text-accent">Мясная лавка</span> Выберите свой
        идеальный стейк
      </H2Title>

      <Tag
        delay={0.2}
        className="order-2 col-span-5 mb-7 self-start p-3! md:order-1 md:col-span-4 md:mb-0 md:p-4!"
      >
        <span className="mr-1">Ежедневно</span>
        <span className="text-xl leading-[116%] font-extrabold md:text-2xl">
          12:00–23:00
        </span>
      </Tag>

      <div className="order-3 col-span-5 md:col-span-5 md:col-start-5 md:w-120">
        <H3Title delay={0.4} className="mb-2 w-75 md:w-full">
          Мраморная говядина Прайм и Вагю
        </H3Title>
        <Paragraph delay={0.5} className="mb-7 text-sm text-(--color-gray)">
          Для ценителей и гурманов
        </Paragraph>

        <Paragraph delay={0.6} className="mb-4 md:mb-2">
          В мясной лавке представлены отрубы
        </Paragraph>

        <div className="mb-4 flex flex-wrap gap-2 md:mb-2">
          {cutTags.map((tag, index) => (
            <Tag
              key={tag}
              text={tag}
              delay={0.7 + index * 0.08}
              className="px-3! py-3!"
            />
          ))}
        </div>

        <Paragraph delay={1.05} className="mb-9 w-77 md:mb-11 md:w-full">
          Наши мастера помогут выбрать мясо и нужную степень прожарки, чтобы ваш
          домашний опыт достиг ресторанного уровня
        </Paragraph>

        <AnimatedDiv delay={1.15} className="mb-9 md:mb-11">
          <Button
            text="Заказать с доставкой"
            variant="secondary"
            className="border-accent! hover:border-accent! w-full text-white"
          />
        </AnimatedDiv>
      </div>

      <HorizontalDragScroller className="no-scrollbar order-4 col-span-5 -mr-4 flex snap-x snap-mandatory gap-2 overflow-x-auto md:relative md:left-1/2 md:col-span-12 md:mt-1 md:w-screen md:-translate-x-1/2 md:gap-7">
        {butcherPhotos.map((photo, index) => (
          <AnimatedDiv
            key={photo.id}
            delay={0.3 + index * 0.08}
            className="shrink-0 snap-center"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              draggable={false}
              className="h-75 w-75 rounded-sm object-cover"
            />
          </AnimatedDiv>
        ))}
      </HorizontalDragScroller>
    </GridSection>
  );
}
