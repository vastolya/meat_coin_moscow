import AnimatedDiv from "@/components/ui/AnimatedDiv";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import chefGallerySteak1 from "@/public/chef-gallery-steak-1.webp";
import chefGallerySteak2 from "@/public/chef-gallery-steak-2.webp";
import chefGallerySteak3 from "@/public/chef-gallery-steak-3.webp";
import chefGallerySteak4 from "@/public/chef-gallery-steak-4.webp";
import chef from "@/public/chef-portrait.webp";
import chefSteaks from "@/public/chef-steaks.webp";
import Image from "next/image";
import GridSection from "../ui/GridSection";
import H3Title from "../ui/H3Title";
import PhotoSlider from "../ui/PhotoSlider";

const chefSlides = [
  { src: chefGallerySteak1, alt: "Стейк Meat_Coin крупным планом" },
  { src: chefGallerySteak2, alt: "Команда Meat_Coin" },
  { src: chefGallerySteak3, alt: "Шеф Meat_Coin за приготовлением мяса" },
  { src: chefGallerySteak4, alt: "Подача мясного блюда в Meat_Coin" },
];

export default function ChefSection() {
  return (
    <GridSection className="gap-y-6 pb-12 md:gap-y-20! md:py-30">
      <AnimatedDiv
        className="order-2 col-span-5 md:order-1 md:col-span-4"
        delay={{ mobile: 0.8, desktop: 0.2 }}
      >
        <Image
          src={chef}
          alt="Стейки в ресторане Meat_Coin Steak & Terrace"
          className="w-full"
        />
      </AnimatedDiv>

      <div className="text-beige order-1 col-span-5 flex flex-col md:order-2">
        <H2Title
          className="text-accent pb-6 md:pb-116 md:text-white"
          delay={{ mobile: 0.2, desktop: 0.4 }}
        >
          <span className="md:text-accent text-white">мясной ресторан,</span>{" "}
          где каждый стейк становится искусством
        </H2Title>
        <H3Title className="pb-2" delay={{ mobile: 0.4, desktop: 0.4 }}>
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве
        </H3Title>
        <Paragraph
          className="pb-2 md:pb-46.5"
          delay={{ mobile: 0.6, desktop: 0.4 }}
        >
          Каждое его движение у открытого огня как часть ритуала, за которым
          можно наблюдать бесконечно
        </Paragraph>
        <Paragraph
          className="pb-2 md:pb-46.5"
          delay={{ mobile: 0.8, desktop: 0.4 }}
        >
          Сегодня он является главным архитекторм вкуса Meat_Coin в Москве.
          Каждое его движение у открытого огня как часть ритуала, за которым
          можно наблюдать бесконечно
        </Paragraph>
        <Paragraph delay={{ mobile: 1, desktop: 0.4 }}>
          Мы работаем с лучшими фермерскими хозяйствами. В наших камерах сухого
          вызревания мясо проводит недели для получения неповторимого вкуса
        </Paragraph>
      </div>

      <AnimatedDiv
        className="order-3 col-span-5 hidden md:col-span-3 md:flex md:flex-col md:gap-7"
        delay={{ mobile: 1, desktop: 0.6 }}
      >
        {chefSlides.map((slide) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className="h-75 w-full rounded-sm object-cover"
          />
        ))}
      </AnimatedDiv>

      <AnimatedDiv className="order-3 col-span-5 md:hidden" delay={1}>
        <PhotoSlider slides={chefSlides} />
      </AnimatedDiv>

      <AnimatedDiv
        className="order-4 col-span-5 hidden md:col-span-12 md:block"
        delay={{ mobile: 0.2, desktop: 0.4 }}
      >
        <Image
          src={chefSteaks}
          alt="Стейки в ресторане Meat_Coin Steak & Terrace"
          className="h-75 w-full rounded-sm object-cover md:h-180"
        />
      </AnimatedDiv>
    </GridSection>
  );
}
