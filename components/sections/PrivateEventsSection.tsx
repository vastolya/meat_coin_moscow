import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import Tag from "@/components/ui/Tag";
import privateEventsArchedHall from "@/public/private-events-arched-hall.webp";
import privateEventsBanquetHall from "@/public/private-events-banquet-hall.webp";
import privateEventsLounge from "@/public/private-events-lounge.webp";
import privateEventsTerrace from "@/public/private-events-terrace.webp";
import privateEventsVipTable from "@/public/private-events-vip-table.webp";
import AnimatedDiv from "../ui/AnimatedDiv";
import AnimatedImage from "../ui/AnimatedImage";
import GridSection from "../ui/GridSection";
import H3Title from "../ui/H3Title";

const eventTags = ["День рождения", "Семейные торжества", "Банкет"];
const celebrationSlides = [
  {
    id: "celebration-1",
    src: privateEventsVipTable,
    alt: "Приватный зал Meat_Coin с сервировкой",
  },
  {
    id: "celebration-2",
    src: privateEventsBanquetHall,
    alt: "Интерьер зала Meat_Coin для частных мероприятий",
  },
  {
    id: "celebration-3",
    src: privateEventsTerrace,
    alt: "Терраса Meat_Coin для частных мероприятий",
  },
  {
    id: "celebration-4",
    src: privateEventsLounge,
    alt: "Приватное пространство Meat_Coin для торжеств",
  },
];

export default function PrivateEventsSection() {
  return (
    <GridSection className="pb-12 md:pt-30 md:pb-0">
      <Paragraph
        delay={0.2}
        className="col-span-5 mb-2 text-(--color-gray) md:col-span-4 md:mb-0 md:w-102"
      >
        Проведение приватных мероприятий
      </Paragraph>

      <H2Title delay={0.3} className="col-span-5 mb-9 md:col-span-8 md:mb-11">
        Место для вашего праздника
      </H2Title>

      <AnimatedImage
        src={privateEventsArchedHall}
        alt="Приватный зал Meat_Coin для камерных мероприятий"
        className="col-span-5 mb-9 h-225 w-102 md:col-span-4 md:mb-0"
        delay={0.4}
      />

      <div className="col-span-5 flex flex-col md:col-span-8">
        <H3Title delay={0.5} className="mb-4 md:w-129.25">
          Для тех, кто ценит уединение имеется отдельный зал
        </H3Title>

        <div className="mb-7 flex flex-wrap items-center gap-4 md:mb-11">
          <Tag
            delay={0.6}
            variant="black"
            className="gap-1.5 p-3! text-(--color-beige) md:p-4!"
          >
            <Paragraph disableAnimation>На</Paragraph>
            <span className="text-2xl leading-[116%] font-extrabold tracking-normal">
              25
            </span>
            <Paragraph disableAnimation>гостей</Paragraph>
          </Tag>

          <Paragraph delay={0.7}>
            С камином, личной террасой и санузлом
          </Paragraph>
        </div>

        <H3Title delay={0.8} className="mb-4 md:mb-7 md:w-80">
          Пространство создано для празднования
        </H3Title>

        <div className="flex flex-wrap gap-2">
          {eventTags.map((tag, index) => (
            <Tag
              key={tag}
              text={tag}
              delay={0.9 + index * 0.08}
              variant="black"
              className="p-3! text-base leading-none font-medium"
            />
          ))}
        </div>

        <AnimatedDiv delay={1.2} className="mt-7 mb-9 md:mt-18 md:mb-0">
          <Button
            text="Забронировать вип-зал"
            className="w-full py-5 text-center"
          />
        </AnimatedDiv>
      </div>

      <AnimatedDiv className="col-span-5 md:col-span-12 md:mt-4" delay={1.3}>
        <PhotoSlider
          slides={celebrationSlides}
          slideClassName="max-w-none"
          imgClassName="h-[300px] md:h-[720px]"
          indicatorsClassName="justify-start pl-4 md:pl-0"
        />
      </AnimatedDiv>
    </GridSection>
  );
}
