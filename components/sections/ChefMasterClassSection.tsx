import AnimatedDiv from "@/components/ui/AnimatedDiv";
import AnimatedImage from "@/components/ui/AnimatedImage";
import GridSection from "@/components/ui/GridSection";
import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import fireImage from "@/public/chef-masterclass-flame-bites.webp";
import chefClassImage from "@/public/chef-masterclass-guests.webp";
import chefPortraitImage from "@/public/chef-masterclass-mehmet-fire-portrait.webp";
import steakImage from "@/public/chef-masterclass-steak-closeup.webp";
import Image from "next/image";

export default function ChefMasterClassSection() {
  return (
    <div className="bg-beige">
      <GridSection className="py-12 md:py-30">
        <Paragraph className="text-accent col-span-5 md:col-span-4" delay={0.2}>
          Искусство, которое можно увидеть
        </Paragraph>
        <H2Title
          className="col-span-5 mb-7 md:col-span-8 md:col-start-5"
          delay={0.3}
        >
          Мастер-класс <br className="md:hidden" /> по жарке стейков
          <br /> в Москве
          <br className="md:hidden" /> для вас и вашей компании
        </H2Title>

        <div className="relative col-span-5 mb-5 h-111 md:col-span-4 md:mb-7">
          <AnimatedDiv
            delay={0.4}
            className="absolute top-0 right-0 h-75 w-75 overflow-hidden rounded-sm"
          >
            <Image
              fill
              src={fireImage}
              alt="Огонь на кухне Meat_Coin"
              sizes="(min-width: 768px) 25vw, 75vw"
              className="object-cover"
            />
          </AnimatedDiv>
          <AnimatedDiv
            delay={0.5}
            className="absolute bottom-0 left-0 h-75 w-75 overflow-hidden rounded-sm"
          >
            <Image
              fill
              src={steakImage}
              alt="Стейк на открытом огне"
              sizes="(min-width: 768px) 25vw, 75vw"
              className="object-cover"
            />
          </AnimatedDiv>
        </div>

        <div className="col-span-5 mb-7">
          <Paragraph className="mb-2" delay={0.6}>
            Мехмет Найджи регулярно проводит закрытые мастер-классы по стейкам
            <br className="md:hidden" /> в Москве для небольших групп
          </Paragraph>
          <Paragraph className="mb-2 md:mb-61" delay={0.7}>
            Это уникальная возможность не только увидеть виртуозную{" "}
            <br className="hidden md:block" /> работу мастера,
            <br className="md:hidden" /> но и самому встать к грилю
            <br /> под его руководством
          </Paragraph>
          <Paragraph delay={0.8}>
            Вы узнаете, как выбирать отрубы, определять степень прожарки
            <br className="md:hidden" /> и добиваться той самой карамелизации,
            которая делает стейк ресторанным
          </Paragraph>
        </div>

        <AnimatedImage
          src={chefPortraitImage}
          alt="Мехмет Найджи с мясом у открытого огня"
          className="col-span-5 mb-4 h-160 rounded-t-full md:col-span-4 md:mb-0 md:h-125"
          imgClsx="object-cover object-center md:object-[0%_0%]"
          sizes="(min-width: 768px) 33vw, 100vw"
          delay={0.9}
        />
        <div className="col-span-5 mb-5 md:mb-0">
          <H3Title className="mb-4" delay={1}>
            Кулинарные мастер
            <br className="md:hidden" />
            -классы в ресторане
            <br className="md:hidden" /> от Мехмета Найджи
          </H3Title>
          <Paragraph className="mb-2 md:mb-71" delay={1.1}>
            Формат мастер-классов варьируется
            <br className="md:hidden" /> от индивидуальных занятий
            <br className="md:hidden" /> до корпоративных мероприятий
          </Paragraph>
          <Paragraph delay={1.2}>
            В тёплой атмосфере ресторана
            <br className="md:hidden" /> на Смоленской гости погружаются
            <br className="md:hidden" /> в мир высокой мясной кухни,
            <br className="md:hidden" /> а завершается
            <br className="hidden md:block" /> всё совместной дегустацией
            приготовленных блюд
            <br /> в сопровождении идеально подобранного вина
          </Paragraph>
        </div>

        <AnimatedImage
          src={chefClassImage}
          alt="Мастер-класс по приготовлению мяса в Meat_Coin"
          className="col-span-5 h-75 rounded-sm md:col-span-3"
          imgClsx="scale-x-[-1] object-cover"
          sizes="(min-width: 768px) 25vw, 100vw"
          delay={1.3}
        />
      </GridSection>
    </div>
  );
}
