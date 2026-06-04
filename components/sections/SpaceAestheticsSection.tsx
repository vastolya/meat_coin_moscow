import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import spaceAestheticsBuildingView from "@/public/space-aesthetics-building-view.webp";
import spaceAestheticsDiningHall from "@/public/space-aesthetics-dining-hall.webp";
import spaceAestheticsLiveEdgeTable from "@/public/space-aesthetics-live-edge-table.webp";
import spaceAestheticsTerracePanorama from "@/public/space-aesthetics-terrace-panorama.webp";
import spaceAestheticsTerraceTable from "@/public/space-aesthetics-terrace-table.webp";
import spaceAestheticsTerraceWide from "@/public/space-aesthetics-terrace-wide.webp";
import spaceAestheticsWindowTables from "@/public/space-aesthetics-window-tables.webp";
import GridSection from "../ui/GridSection";

const spaceSlides = [
  {
    id: "space-building-view",
    src: spaceAestheticsBuildingView,
    alt: "Вид на здание МИД с панорамной террасы Meat_Coin",
  },
  {
    id: "space-terrace-wide",
    src: spaceAestheticsTerraceWide,
    alt: "Панорамная терраса Meat_Coin с видом на город",
  },
  {
    id: "space-terrace-table",
    src: spaceAestheticsTerraceTable,
    alt: "Сервированный стол на террасе Meat_Coin",
  },
  {
    id: "space-terrace-panorama",
    src: spaceAestheticsTerracePanorama,
    alt: "Терраса Meat_Coin с панорамным видом",
  },
  {
    id: "space-dining-hall",
    src: spaceAestheticsDiningHall,
    alt: "Обеденный зал Meat_Coin с деревянными столами",
  },
  {
    id: "space-window-tables",
    src: spaceAestheticsWindowTables,
    alt: "Столы Meat_Coin у панорамных окон",
  },
  {
    id: "space-live-edge-table",
    src: spaceAestheticsLiveEdgeTable,
    alt: "Длинный деревянный стол в интерьере Meat_Coin",
  },
];

export default function SpaceAestheticsSection() {
  return (
    <GridSection className="-mx-4 px-4 pt-11 md:pt-30">
      <H2Title className="col-span-5 mb-2 md:mb-7 md:col-start-5 md:col-span-8">
        Эстетика пространства
      </H2Title>

      <div className="col-span-5 mb-9 md:max-w-129.25 md:col-start-5 md:col-span-8">
        <Paragraph className="mb-2">
          Дизайн от бюро DA Bureau сочетает природные материалы, приглушенный
          свет и открытую кухню
        </Paragraph>
        <Paragraph>
          Главный акцент на панорамной террасе с видом на Садовое кольцо и
          здание МИД
        </Paragraph>
      </div>

      <PhotoSlider
        slides={spaceSlides}
        useIntrinsicImageSize
        scrollerClassName="md:items-end"
        slideClassName="flex flex-col justify-end md:max-w-none"
        indicatorsClassName="justify-start"
        imgWrapperClassName="h-105 md:h-auto"
        imgClassName="h-full md:h-(--slide-height)"
        className="md:-mt-66 col-span-5 h-full md:col-span-12"
      />
    </GridSection>
  );
}
