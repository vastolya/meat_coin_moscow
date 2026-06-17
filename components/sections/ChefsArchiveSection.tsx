import H2Title from "@/components/ui/H2Title";
import PhotoSlider, { type PhotoSlide } from "@/components/ui/PhotoSlider";
import chefArchiveAvatar from "@/public/chef-archive-avatar.webp";
import chefArchiveFlambe from "@/public/chef-archive-flambe.webp";
import chefArchiveGrillSmoke from "@/public/chef-archive-grill-smoke.webp";
import chefArchiveLambRackCarving from "@/public/chef-archive-lamb-rack-carving.webp";
import chefArchivePortraitPlating from "@/public/chef-archive-portrait-plating.webp";
import chefArchiveRibRack from "@/public/chef-archive-rib-rack.webp";
import chefArchiveSaucePour from "@/public/chef-archive-sauce-pour.webp";
import chefArchiveServingBoard from "@/public/chef-archive-serving-board.webp";
import chefArchiveSteakPrep from "@/public/chef-archive-steak-prep.webp";
import chefArchiveEventChefPortrait from "@/public/chef-archive-event-chef-portrait.webp";
import chefArchiveEventChefsPlating from "@/public/chef-archive-event-chefs-plating.webp";
import chefArchiveEventFlambe from "@/public/chef-archive-event-flambe.webp";
import chefArchiveEventGrillSmoke from "@/public/chef-archive-event-grill-smoke.webp";
import chefArchiveEventLambRackCarving from "@/public/chef-archive-event-lamb-rack-carving.webp";
import chefArchiveEventRibRack from "@/public/chef-archive-event-rib-rack.webp";
import chefArchiveEventSaucePour from "@/public/chef-archive-event-sauce-pour.webp";
import chefArchiveEventServingBoard from "@/public/chef-archive-event-serving-board.webp";
import Image from "next/image";
import GridSection from "../ui/GridSection";

const archiveSlides: PhotoSlide[] = [
  {
    id: "lamb-rack-carving",
    src: chefArchiveLambRackCarving,
    alt: "Каре ягненка во время нарезки",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
  {
    id: "steak-prep",
    src: chefArchiveSteakPrep,
    alt: "Шефы готовят стейк на мастер-классе Meat_Coin",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
  {
    id: "serving-board",
    src: chefArchiveServingBoard,
    alt: "Шеф подает блюдо гостям Meat_Coin",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
  {
    id: "flambe",
    src: chefArchiveFlambe,
    alt: "Подача с открытым огнем в Meat_Coin",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
  {
    id: "portrait-plating",
    src: chefArchivePortraitPlating,
    alt: "Шеф Мехмет Найджи готовит блюдо",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
  {
    id: "rib-rack",
    src: chefArchiveRibRack,
    alt: "Шеф с премиальным реберным отрубом",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
  {
    id: "grill-smoke",
    src: chefArchiveGrillSmoke,
    alt: "Мясо на гриле с дымом",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
  {
    id: "sauce-pour",
    src: chefArchiveSaucePour,
    alt: "Шеф поливает мясное блюдо соусом",
    className: "w-40 max-w-none",
    imgClassName: "h-full",
  },
];

const desktopArchiveSlides: PhotoSlide[] = [
  {
    id: "lamb-rack-carving-desktop",
    src: chefArchiveEventLambRackCarving,
    alt: "Каре ягненка во время нарезки",
    imgClassName: "md:h-[598px]",
  },
  {
    id: "chefs-plating-desktop",
    src: chefArchiveEventChefsPlating,
    alt: "Шефы готовят стейк на мастер-классе Meat_Coin",
    imgClassName: "md:h-[476px]",
  },
  {
    id: "serving-board-desktop",
    src: chefArchiveEventServingBoard,
    alt: "Шеф подает блюдо гостям Meat_Coin",
    imgClassName: "md:h-[476px]",
  },
  {
    id: "flambe-desktop",
    src: chefArchiveEventFlambe,
    alt: "Подача с открытым огнем в Meat_Coin",
    imgClassName: "md:h-[476px]",
  },
  {
    id: "chef-portrait-desktop",
    src: chefArchiveEventChefPortrait,
    alt: "Шеф Мехмет Найджи готовит блюдо",
    imgClassName: "md:h-[688px]",
  },
  {
    id: "rib-rack-desktop",
    src: chefArchiveEventRibRack,
    alt: "Шеф с премиальным реберным отрубом",
    imgClassName: "md:h-[476px]",
  },
  {
    id: "grill-smoke-desktop",
    src: chefArchiveEventGrillSmoke,
    alt: "Мясо на гриле с дымом",
    imgClassName: "md:h-[476px]",
  },
  {
    id: "sauce-pour-desktop",
    src: chefArchiveEventSaucePour,
    alt: "Шеф поливает мясное блюдо соусом",
    imgClassName: "md:h-[476px]",
  },
];

export default function ChefsArchiveSection() {
  return (
    <GridSection className="bg-beige md:relative pb-12 md:py-30">
      <H2Title
        delay={0.2}
        className="col-span-5 mb-9 md:col-span-2 md:col-start-5 md:mb-11"
      >
        Архивы
      </H2Title>

      <div className="col-span-5 mb-9 flex md:absolute md:top-19 md:right-20">
        <div className="shadow-avatar-accent relative z-20 h-30 w-30 rounded-full border-4 border-white p-1">
          <Image
            src={chefArchiveAvatar}
            alt="Архив мастер-классов Meat_Coin"
            className="h-30 object-cover"
          />
        </div>

        <div className="shadow-avatar-accent relative z-10 -ml-6 h-30 w-30 rounded-full border-4 border-white p-1 md:-ml-6">
          <Image
            src={chefArchiveAvatar}
            alt="Архив мастер-классов Meat_Coin"
            className="h-30 object-cover"
          />
        </div>
      </div>

      <PhotoSlider
        slides={archiveSlides}
        desktopSlides={desktopArchiveSlides}
        scrollerClassName="items-end  md:gap-5"
        slideClassName="max-w-none"
        indicatorCount={desktopArchiveSlides.length}
        indicatorsClassName="mt-2 justify-start gap-1"
        indicatorTone="grey"
        className="col-span-5 md:col-span-12 md:-mt-52.5"
      />
    </GridSection>
  );
}
