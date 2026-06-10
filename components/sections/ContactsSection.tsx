"use client";

import MailIcon from "@/components/icons/MailIcon";
import Button from "@/components/ui/Button";
import H2Title from "@/components/ui/H2Title";
import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import Tag from "@/components/ui/Tag";
import Telegram from "@/components/ui/Telegram";
import AnimatedDiv from "../ui/AnimatedDiv";
import GridSection from "../ui/GridSection";
import clsx from "clsx";

const phone = "+7 499 283-19-11";
const moscowMapUrl =
  "https://yandex.ru/map-widget/v1/?um=constructor%3A8fa274675addcb7c5913109f940af88d15084baefad65478edc23090113f6f82&source=constructor";

export default function ContactsSection({className}: {className?: string}) {
  return (
    <GridSection className={clsx("px-4 pt-0 pb-20 md:px-20 md:pt-16 md:pb-30", className)}>
      <div className="col-span-5 pb-13 md:col-span-8 md:col-start-5 md:pb-11">
        <H2Title delay={0.2} className="mb-2">
          Адрес и контакты
        </H2Title>
        <Paragraph delay={0.3} className="md:text-gray">
          Стейк-хаус в Москве на 4 этаже бизнес-центра «Смоленский пассаж 2»
        </Paragraph>
      </div>

      <div className="col-span-5 mb-4 flex flex-col md:col-span-3 md:mb-0">
        <H3Title delay={0.4} className="mb-2">
          Steak & Terrace
        </H3Title>
        <Tag delay={0.5} variant="gray" className="mb-2">
          Москва
        </Tag>

        <Paragraph delay={0.6} className="text-gray md:hidden">
          Бесплатный крытый паркинг
          <br /> для гостей
        </Paragraph>
      </div>

      <div className="col-span-5 mb-4 flex flex-col gap-1 md:col-span-8 md:col-start-5 md:mb-0">
        <Paragraph delay={0.6} className="text-gray mb-1">
          Адрес
        </Paragraph>
        <Paragraph delay={0.7}>Смоленская площадь • 5</Paragraph>
        <Paragraph delay={0.8} className="text-gray">
          (отдельный вход со стороны Николощеповского переулка)
        </Paragraph>
      </div>

      <div className="col-span-5 mb-4 flex flex-col gap-1 md:col-span-8 md:col-start-5 md:mb-0">
        <Paragraph delay={0.9} className="text-gray">
          Режим работы
        </Paragraph>
        <div className="flex items-baseline gap-4">
          <Paragraph delay={1}>Ежедневно</Paragraph>
          <H3Title delay={1.1}>12:00-00:00</H3Title>
        </div>
      </div>

      <Paragraph
        delay={1.2}
        className="md:text-gray hidden md:col-span-2 md:block"
      >
        Для гостей доступна бесплатная парковка
      </Paragraph>

      <div className="col-span-5 mb-4 flex flex-col items-center gap-2 md:col-span-8 md:col-start-5 md:flex-row md:gap-4">
        <AnimatedDiv delay={1.3} className="w-full md:w-auto">
          <Button text="Оставить заявку" className="w-full md:w-61" />
        </AnimatedDiv>

        <Paragraph
          delay={1.4}
          className="text-accent my-2 flex w-full items-center justify-between gap-7 pr-4 md:w-64 md:justify-start"
        >
          <a href="tel:+74992831911">{phone}</a>
          <a href="mailto:info@meat-coin.ru" aria-label="Написать на почту">
            <MailIcon width={24} height={24} color="white" />
          </a>
          <a href="https://t.me/" target="_blank" aria-label="Открыть Telegram">
            <Telegram width={24} height={24} color="white" />
          </a>
        </Paragraph>
      </div>

      <AnimatedDiv delay={1.5} className="col-span-5 md:col-span-12">
        <iframe
          src={moscowMapUrl}
          width="100%"
          height="100%"
          className="relative left-1/2 h-105 w-screen -translate-x-1/2 border-0 md:h-119"
          allowFullScreen
          title="Карта Яндекса: Steak & Terrace"
        />
      </AnimatedDiv>
    </GridSection>
  );
}
