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
import Image from "next/image";

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

export default function ChefsArchiveSection() {
  return (
    <section className="bg-beige text-dark px-4 py-12 md:hidden">
      <H2Title delay={0.2} className="mb-9">
        Архивы
      </H2Title>

      <div className="mb-7 flex pl-1">
        <Image
          src={chefArchiveAvatar}
          alt="Архив мастер-классов Meat_Coin"
          className="order-4 h-30 w-30 rounded-full border-4 border-white object-cover p-1"
        />
        <Image
          src={chefArchiveAvatar}
          alt="Архив мастер-классов Meat_Coin"
          className="order-4 -ml-3 h-30 w-30 rounded-full border-4 border-white object-cover p-1"
        />
      </div>

      <PhotoSlider
        slides={archiveSlides}
        scrollerClassName="items-end"
        slideClassName="max-w-none"
        indicatorsClassName="mt-2 justify-start gap-1"
        indicatorTone="grey"
      />
    </section>
  );
}
