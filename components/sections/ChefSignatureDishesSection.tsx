import AnimatedDiv from "@/components/ui/AnimatedDiv";
import Button from "@/components/ui/Button";
import GridSection from "@/components/ui/GridSection";
import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import PhotoSlider from "@/components/ui/PhotoSlider";
import Tag from "@/components/ui/Tag";
import filetMignonImage from "@/public/chef-signature-filet-mignon.webp";
import lambRackImage from "@/public/chef-signature-lamb-rack.webp";
import ribeyeImage from "@/public/chef-signature-ribeye.webp";
import tboneImage from "@/public/chef-signature-tbone.webp";
import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import { Fragment, type ReactNode } from "react";

const steakTags = ["Рибай", "Тибон", "Филе Миньон"];

type SignatureDish = {
  id: string;
  src: StaticImageData;
  alt: string;
};

const signatureDishes: SignatureDish[] = [
  {
    id: "ribeye",
    src: ribeyeImage,
    alt: "Рибай на деревянной доске",
  },
  {
    id: "tbone",
    src: tboneImage,
    alt: "Стейк тибон на углях",
  },
  {
    id: "filet-mignon",
    src: filetMignonImage,
    alt: "Филе миньон с соусом и картофелем",
  },
  {
    id: "lamb-rack",
    src: lambRackImage,
    alt: "Каре ягнёнка на деревянной доске",
  },
];

const mobileSlides = [
  {
    ...signatureDishes[0],
    badge: "Рибай",
    description: "Идеальный баланс мраморной говядины и времени",
    description2:
      "30 дней в камере превращают плотную текстуру в маслянистую нежность, а на гриле рождается та самая карамелизированная корочка",
  },
  {
    ...signatureDishes[1],
    badge: "Тибон",
    description:
      "Два стейка в одном нежнейшее филе с одной стороны кости и сочный, насыщенный нью-йорк — с другой",
    descriptionClassName: "text-accent!",
    description2:
      "Томление на открытом огне делает границу между текстурами почти невесомой, а кость отдаёт мясу свой глубокий, благородный аромат",
  },
  {
    ...signatureDishes[2],
    badge: "Филе Миньон",
    description:
      "Этот отруб лишён лишнего жира, но именно поэтому требует особого почтения",
    description2:
      "Шеф подаёт его с соусом из чёрного трюфеля, подчёркивая бархатистую чистоту вкуса",
  },
  {
    ...signatureDishes[3],
  },
];

const desktopSignatureItems: Array<{
  id: string;
  textClassName: string;
  content: ReactNode;
  image: StaticImageData;
  imageAlt: string;
  badge?: string;
}> = [
  {
    id: "ribeye",
    textClassName: "col-span-5 md:col-span-4",
    content: (
      <>
        <H3Title delay={0.2} className="mb-4">
          Авторские стейки
        </H3Title>

        <AnimatedDiv delay={0.2} className="mb-4 flex flex-wrap gap-1">
          {steakTags.map((tag) => (
            <Tag key={tag} className="bg-beige! text-accent px-2! py-1!">
              {tag}
            </Tag>
          ))}
        </AnimatedDiv>

        <Paragraph className="mb-23.5" delay={0.2}>
          Визитная карточка шефа — стейки, приготовленные на гриле ручной работы
        </Paragraph>

        <H3Title delay={0.2} className="mb-22.5">
          В их числе
        </H3Title>
        <Paragraph className="mb-2" delay={0.2}>
          Идеальный баланс мраморной говядины и времени
        </Paragraph>
        <Paragraph delay={0.2}>
          30 дней в камере превращают плотную текстуру в маслянистую нежность, а
          на гриле рождается та самая карамелизированная корочка
        </Paragraph>
      </>
    ),
    image: ribeyeImage,
    imageAlt: "Рибай на деревянной доске",
    badge: "Рибай",
  },
  {
    id: "tbone",
    textClassName: "md:col-span-4 md:self-end",
    content: (
      <>
        <Paragraph className="text-accent mb-2" delay={0.2}>
          Два стейка в одном нежнейшее филе с одной стороны кости и сочный,
          насыщенный нью-
          <br className="hidden md:block" />
          йорк — с другой
        </Paragraph>
        <Paragraph delay={0.2}>
          Томление на открытом огне делает границу между текстурами почти
          невесомой, а кость отдаёт мясу свой глубокий, благородный аромат
        </Paragraph>
      </>
    ),
    image: tboneImage,
    imageAlt: "Стейк тибон на углях",
    badge: "Тибон",
  },
  {
    id: "filet-mignon",
    textClassName: "md:col-span-4 md:self-end",
    content: (
      <>
        <Paragraph className="mb-2" delay={0.2}>
          Этот отруб лишён лишнего жира, но именно поэтому требует особого
          почтения
        </Paragraph>
        <Paragraph delay={0.2}>
          Шеф подаёт его с соусом из чёрного трюфеля, подчёркивая бархатистую
          чистоту вкуса
        </Paragraph>
      </>
    ),
    image: filetMignonImage,
    imageAlt: "Филе миньон с соусом и картофелем",
    badge: "Филе Миньон",
  },
  {
    id: "lamb-rack",
    textClassName: "md:col-span-4 md:self-end",
    content: null,
    image: lambRackImage,
    imageAlt: "Каре ягнёнка на деревянной доске",
  },
];

export default function ChefSignatureDishesSection() {
  return (
    <div className="bg-beige">
      <GridSection className="rounded-t-[60px] bg-white py-12 md:rounded-t-[128px] md:py-30">
        <AnimatedDiv
          delay={0.2}
          className="order-8 col-span-5 mt-7 flex flex-row gap-2 md:order-0 md:col-span-4 md:mt-0"
        >
          <Button
            text="Меню"
            variant="secondary"
            className="h-14! flex-1 px-3! whitespace-nowrap md:w-fit md:flex-none md:px-6!"
          />
          <Button
            text="Винная карта"
            variant="secondary"
            className="h-14! flex-1 px-3! whitespace-nowrap md:w-fit md:flex-none md:px-6!"
          />
        </AnimatedDiv>

        <H2Title
          delay={0.3}
          className="order-1 col-span-5 mb-7 md:order-0 md:col-span-8 md:mb-11"
        >
          Фирменные блюда от шефа
        </H2Title>

        <div className="order-2 col-span-5 md:hidden">
          <H3Title delay={0.4} className="mb-2">
            Авторские стейки
          </H3Title>

          <AnimatedDiv
            delay={0.5}
            className="mb-2 flex flex-wrap gap-1 md:mb-4"
          >
            {steakTags.map((tag) => (
              <Tag key={tag} className="bg-beige! text-accent px-3! py-1!">
                <span className="text-sm leading-[148%] font-medium">
                  {tag}
                </span>
              </Tag>
            ))}
          </AnimatedDiv>
          <Paragraph delay={0.6} className="mb-7 md:mb-8">
            Визитная карточка шефа — стейки, приготовленные на гриле ручной
            работы
          </Paragraph>
        </div>

        <PhotoSlider
          slides={mobileSlides}
          className="order-3 col-span-5 md:hidden"
          imgWrapperClassName="h-104.5"
          imgClassName="h-full"
          indicatorsClassName="justify-start"
          indicatorTone="grey"
        />

        <AnimatedDiv delay={0.4} className="hidden md:contents">
          {desktopSignatureItems.map((item, index) => (
            <Fragment key={item.id}>
              <div className={clsx("flex flex-col", item.textClassName)}>
                {item.content}
              </div>

              <AnimatedDiv delay={0.4 + index * 0.08} className="col-span-8">
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-120 w-full object-cover"
                  />
                  {item.badge ? (
                    <span className="bg-dark/03 absolute bottom-4 left-4 rounded-sm p-4 text-2xl leading-[116%] font-bold text-white backdrop-blur-md">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
              </AnimatedDiv>
            </Fragment>
          ))}
        </AnimatedDiv>

        <div className="order-7 col-span-5 mt-8 md:hidden">
          <Paragraph delay={1.3} className="text-gray md:max-w-76">
            Мехмет лично контролирует процесс от разделки до финального аккорда
            на тарелке
          </Paragraph>
        </div>

        <div className="hidden md:order-8 md:col-span-5 md:col-start-5 md:block">
          <Paragraph className="mb-2" delay={0.2}>
            Каждое блюдо является результатом скрупулёзного отбора и понимания
            того, как подача может превратить ужин в искусство
          </Paragraph>
          <Paragraph className="text-gray" delay={0.2}>
            Мехмет лично контролирует процесс от разделки до финального аккорда
            на тарелке
          </Paragraph>
        </div>
      </GridSection>
    </div>
  );
}
