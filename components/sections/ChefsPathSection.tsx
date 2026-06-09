import AnimatedImage from "@/components/ui/AnimatedImage";
import GridSection from "@/components/ui/GridSection";
import H2Title from "@/components/ui/H2Title";
import Paragraph from "@/components/ui/Paragraph";
import chefFireImage from "@/public/chef-mehmet-open-fire.webp";
import chefPortraitImage from "@/public/chef-mehmet-ribeye-portrait.webp";
import H3Title from "../ui/H3Title";

export default function ChefsPathSection() {
  return (
    <div className="bg-beige">
      <GridSection className="items-start py-12 md:py-30">
        <AnimatedImage
          src={chefPortraitImage}
          alt="Мехмет Найджи с ножом и отрубом мяса"
          className="order-2 col-span-5 my-4 h-160 rounded-t-full md:order-1 md:col-span-4 md:my-0 md:h-191"
          imgClsx="object-cover object-center"
          sizes="(min-width: 768px) 33vw, 100vw"
          delay={{ mobile: 0.4, desktop: 0.2 }}
        />

        <div className="contents md:order-2 md:col-span-8 md:flex md:h-191 md:flex-col">
          <H2Title className="text-accent order-1 col-span-5" delay={0.4}>
            Путь шефа из Турции в Москву
          </H2Title>

          <Paragraph
            className="order-1 col-span-5 text-[#BBB6AF] md:mt-2"
            delay={0.4}
          >
            Концепт-шеф
          </Paragraph>

          <div className="order-3 col-span-5 md:col-span-5 md:col-start-5 md:mt-11 md:max-w-129">
            <Paragraph className="mb-2" delay={0.5}>
              История Мехмета Найджи началась в Турции
            </Paragraph>
            <Paragraph className="mb-2" delay={0.6}>
              С детства он впитывал знания старших, наблюдая{" "}
              <br className="hidden md:block" />
              за искусством разделки и приготовления мяса на открытом огне
            </Paragraph>
            <Paragraph className="mb-2" delay={0.7}>
              Позже судьба привела его в команду, стоявшую у истоков бренда
              Meat_Coin
            </Paragraph>
            <Paragraph delay={0.8}>
              В 2017 году он вместе с другими турецкими мастерами приехал в
              Санкт-Петербург, чтобы познакомить российскую публику с подлинной
              культурой стейка
            </Paragraph>
          </div>

          <Paragraph
            className="order-4 col-span-5 mt-5 md:mt-auto md:max-w-129"
            delay={0.9}
          >
            Сегодня Мехмет — шеф московского ресторана Meat_Coin Steak &
            Terrace, где продолжает дело, начатое его наставниками
          </Paragraph>
        </div>

        <div className="order-5 col-span-5 mt-10 md:col-span-5 md:col-start-5 md:mt-6">
          <H3Title delay={1}>
            <span className="text-accent">Философия</span>
             уважение к мясу
            <br className="md:hidden" />
             и открытому огню
          </H3Title>
          <Paragraph className="text-accent mt-2" delay={1.1}>
            В основе философии Мехмета — три незыблемых принципа безупречный
            выбор мяса, виртуозная разделка и абсолютное понимание открытого
            огня
          </Paragraph>
        </div>

        <AnimatedImage
          src={chefFireImage}
          alt="Мехмет Найджи работает с открытым огнем"
          className="order-6 col-span-5 my-2 h-51 rounded-sm md:col-span-12 md:my-0 md:h-119"
          imgClsx="scale-x-[-1] object-cover object-center"
          sizes="(min-width: 768px) 100vw, 100vw"
          delay={1.2}
        />

        <div className="order-7 col-span-5 md:col-span-7 md:col-start-5">
          <Paragraph className="mb-2" delay={1.3}>
            Он убеждён, что настоящий стейк
            <br className="md:hidden" /> не терпит суеты только спокойствие,
            точность и диалог <br className="hidden md:block" />с жаром
            позволяют раскрыть глубину вкуса премиальной говядины
          </Paragraph>
          <Paragraph delay={1.4}>
            Путь от первого ресторана
            <br className="md:hidden" /> на Рубинштейна до загородного клуба
            <br className="md:hidden" /> в Комарово —
            <br className="hidden md:block" /> это история роста, дерзости и
            любви к своему делу
          </Paragraph>
        </div>
      </GridSection>
    </div>
  );
}
