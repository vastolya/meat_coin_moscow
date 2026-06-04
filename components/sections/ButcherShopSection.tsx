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
import GridSection from "../ui/GridSection";
import H3Title from "../ui/H3Title";

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
];

export default function ButcherShopSection() {
  return (
    <GridSection className="-mx-4 px-4 py-12 md:py-30">
      <H2Title className="order-1 col-span-5 mb-4 md:order-2 md:col-span-8 md:col-start-5 md:mb-18">
        <span className="text-(--color-accent)">Мясная лавка</span> Выберите
        свой идеальный стейк
      </H2Title>

      <Tag className="order-2 col-span-5 mb-7 self-start p-3! md:order-1 md:col-span-4 md:mb-0 md:p-4!">
        <span className="mr-1">Ежедневно</span>
        <span className="text-xl leading-[116%] font-extrabold md:text-2xl">
          12:00–23:00
        </span>
      </Tag>

      <div className="order-3 col-span-5 md:col-span-5 md:col-start-5 md:w-120">
        <H3Title className="mb-2 w-75 md:w-full">
          Мраморная говядина Прайм и Вагю
        </H3Title>
        <Paragraph className="mb-7 text-sm text-(--color-gray)">
          Для ценителей и гурманов
        </Paragraph>

        <Paragraph className="md:mb-2 mb-4">
          В мясной лавке представлены отрубы
        </Paragraph>

        <div className="mb-4 flex flex-wrap gap-2 md:mb-2">
          {cutTags.map((tag) => (
            <Tag key={tag} text={tag} className="px-3! py-3!" />
          ))}
        </div>

        <Paragraph className="mb-9 w-77 md:mb-11 md:w-full">
          Наши мастера помогут выбрать мясо и нужную степень прожарки, чтобы ваш
          домашний опыт достиг ресторанного уровня
        </Paragraph>

        <Button
          text="Заказать с доставкой"
          variant="secondary"
          className="mb-9 w-full border-(--color-accent)! text-white hover:border-(--color-accent)! md:mb-18"
        />
      </div>

      <div className="no-scrollbar order-4 col-span-5 -mr-4 flex snap-x snap-mandatory gap-2 overflow-x-auto md:col-span-12 md:-mx-20 md:mt-1 md:gap-7">
        {butcherPhotos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.src}
            alt={photo.alt}
            className="h-72 w-72 rounded-sm object-cover md:h-85 md:w-85"
          />
        ))}
      </div>
    </GridSection>
  );
}
