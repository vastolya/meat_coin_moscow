"use client";

import Button from "@/components/ui/Button";
import AnimatedDiv from "@/components/ui/AnimatedDiv";
import GridSection from "@/components/ui/GridSection";
import H1Title from "@/components/ui/H1Title";
import Paragraph from "@/components/ui/Paragraph";
import heroSteakTerraceMobileImage from "@/public/hero-steak-terrace-mobile.webp";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

function buildClipPath(imageProgress: number) {
  return `inset(${(1 - imageProgress) * 100}% 0px 0px 0px)`;
}

export default function MobileHeroImageReveal() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  const menuButtonOpacity = useTransform(smoothScroll, [0, 0.22], [1, 0]);
  const menuButtonY = useTransform(smoothScroll, [0, 0.22], [0, -16]);
  const imageProgress = useTransform(smoothScroll, [0.28, 1], [0, 1]);
  const clipPath = useTransform(imageProgress, buildClipPath);

  return (
    <GridSection
      ref={containerRef}
      className="relative h-[200svh] px-0! md:hidden"
    >
      <div className="sticky top-0 col-span-5 h-svh overflow-hidden px-4 pt-6">
        <div className="flex h-full w-full flex-col">
          <Paragraph
            className="mb-2 text-[16px] tracking-[1%] text-(--color-gray)"
            delay={0.2}
          >
            Бренд, где выбор отрубов, выдержка и прожарка — традиция поколений
          </Paragraph>
          <H1Title className="mb-1" delay={0.4}>
            <span className="text-accent">Meat_Coin Steak & Terrace — </span>{" "}
            <span>стейк-хаус с панорамной террасой в Москве</span>
          </H1Title>
          <motion.div
            className="mt-auto pb-38"
            style={{ opacity: menuButtonOpacity, y: menuButtonY }}
          >
            <AnimatedDiv delay={0.6}>
              <Button
                text="Меню"
                variant="secondary"
                className="w-full border-[1.5px] border-(--color-accent) py-4 text-center text-[16px] leading-[150%] text-white"
              />
            </AnimatedDiv>
          </motion.div>
        </div>

        <motion.div
          className="absolute inset-0 z-20 overflow-hidden"
          style={{ clipPath }}
        >
          <Image
            src={heroSteakTerraceMobileImage}
            alt="Терраса и интерьер ресторана Meat_Coin Steak & Terrace"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <AnimatedDiv className="fixed right-4 bottom-4 left-4 z-1000" delay={0.8}>
        <Button
          text="Забронировать стол"
          variant="primary"
          className="w-full"
        />
      </AnimatedDiv>
    </GridSection>
  );
}
