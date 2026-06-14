import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import spaceAestheticsBuildingView from "@/public/space-aesthetics-building-view.webp";
import spaceAestheticsDesktopBuildingView from "@/public/space-aesthetics-desktop-building-view.webp";
import spaceAestheticsDesktopDiningHall from "@/public/space-aesthetics-desktop-dining-hall.webp";
import spaceAestheticsDesktopLiveEdgeTable from "@/public/space-aesthetics-desktop-live-edge-table.webp";
import spaceAestheticsDesktopTerracePanorama from "@/public/space-aesthetics-desktop-terrace-panorama.webp";
import spaceAestheticsDesktopTerraceTable from "@/public/space-aesthetics-desktop-terrace-table.webp";
import spaceAestheticsDesktopTerraceWide from "@/public/space-aesthetics-desktop-terrace-wide.webp";
import spaceAestheticsDesktopWindowTables from "@/public/space-aesthetics-desktop-window-tables.webp";
import spaceAestheticsDiningHall from "@/public/space-aesthetics-dining-hall.webp";
import spaceAestheticsLiveEdgeTable from "@/public/space-aesthetics-live-edge-table.webp";
import spaceAestheticsTerracePanorama from "@/public/space-aesthetics-terrace-panorama.webp";
import spaceAestheticsTerraceTable from "@/public/space-aesthetics-terrace-table.webp";
import spaceAestheticsTerraceWide from "@/public/space-aesthetics-terrace-wide.webp";
import spaceAestheticsWindowTables from "@/public/space-aesthetics-window-tables.webp";
import AnimatedDiv from "../ui/AnimatedDiv";
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

const desktopSpaceSlides = [
  {
    id: "space-desktop-building-view",
    src: spaceAestheticsDesktopBuildingView,
    alt: "Вид на здание МИД с панорамной террасы Meat_Coin",
  },
  {
    id: "space-desktop-terrace-wide",
    src: spaceAestheticsDesktopTerraceWide,
    alt: "Панорамная терраса Meat_Coin с видом на город",
  },
  {
    id: "space-desktop-terrace-table",
    src: spaceAestheticsDesktopTerraceTable,
    alt: "Сервированный стол на террасе Meat_Coin",
  },
  {
    id: "space-desktop-terrace-panorama",
    src: spaceAestheticsDesktopTerracePanorama,
    alt: "Терраса Meat_Coin с панорамным видом",
  },
  {
    id: "space-desktop-dining-hall",
    src: spaceAestheticsDesktopDiningHall,
    alt: "Обеденный зал Meat_Coin с деревянными столами",
  },
  {
    id: "space-desktop-window-tables",
    src: spaceAestheticsDesktopWindowTables,
    alt: "Столы Meat_Coin у панорамных окон",
  },
  {
    id: "space-desktop-live-edge-table",
    src: spaceAestheticsDesktopLiveEdgeTable,
    alt: "Длинный деревянный стол в интерьере Meat_Coin",
  },
];

export default function SpaceAestheticsSection() {
  return (
    <GridSection className="-mx-4 px-4 pt-11 md:pt-30">
      <H2Title
        delay={0.2}
        className="col-span-5 mb-2 md:col-span-8 md:col-start-5 md:mb-7"
      >
        Эстетика пространства
      </H2Title>

      <AnimatedDiv
        delay={0.3}
        className="col-span-5 mb-9 md:col-span-8 md:col-start-5 md:max-w-129.25"
      >
        <Paragraph delay={0.4} className="mb-2">
          Дизайн от бюро DA Bureau сочетает природные материалы, приглушенный
          свет и открытую кухню
        </Paragraph>
        <Paragraph delay={0.5}>
          Главный акцент на панорамной террасе с видом на Садовое кольцо и
          здание МИД
        </Paragraph>
      </AnimatedDiv>

      <AnimatedDiv
        delay={0.6}
        className="col-span-5 h-full md:col-span-12 md:-mt-66"
      >
        <PhotoSlider
          slides={spaceSlides}
          desktopSlides={desktopSpaceSlides}
          useIntrinsicImageSize
          scrollerClassName="md:items-end"
          slideClassName="flex flex-col justify-end md:max-w-none"
          indicatorsClassName="justify-start"
        />
      </AnimatedDiv>
    </GridSection>
  );
}
