"use client";

import H3Title from "@/components/ui/H3Title";
import Paragraph from "@/components/ui/Paragraph";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";

export type PhotoSlide = {
  id?: string;
  src: StaticImageData;
  alt: string;
  badge?: string;
  title?: string;
  description?: string;
  descriptionClassName?: string;
  description2?: string;
};

type PhotoSliderProps = {
  slides: PhotoSlide[];
  className?: string;
  imgClassName?: string;
  imgWrapperClassName?: string;
  slideClassName?: string;
  scrollerClassName?: string;
  indicatorsClassName?: string;
  indicatorTone?: "light" | "grey";
  useIntrinsicImageSize?: boolean;
};

const PhotoSlider = ({
  slides,
  className,
  imgClassName,
  imgWrapperClassName,
  slideClassName,
  scrollerClassName,
  indicatorsClassName,
  indicatorTone = "light",
  useIntrinsicImageSize = false,
}: PhotoSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateActiveSlide = () => {
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) {
          return;
        }

        const targetPosition = useIntrinsicImageSize
          ? container.scrollLeft
          : container.scrollLeft + container.clientWidth / 2;
        const slidePosition = useIntrinsicImageSize
          ? slide.offsetLeft
          : slide.offsetLeft + slide.clientWidth / 2;
        const distance = Math.abs(slidePosition - targetPosition);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveSlide();
    container.addEventListener("scroll", updateActiveSlide, { passive: true });
    window.addEventListener("resize", updateActiveSlide);

    return () => {
      container.removeEventListener("scroll", updateActiveSlide);
      window.removeEventListener("resize", updateActiveSlide);
    };
  }, [slides.length, useIntrinsicImageSize]);

  const scrollToSlide = (index: number) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className={clsx(
          "no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 md:mx-0 md:-mr-20 md:gap-7 md:px-0",
          scrollerClassName,
        )}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id ?? `${slide.alt}-${index}`}
            style={
              useIntrinsicImageSize
                ? ({
                    "--slide-width": `${slide.src.width}px`,
                    "--slide-height": `${slide.src.height}px`,
                  } as CSSProperties)
                : undefined
            }
            ref={(element) => {
              slideRefs.current[index] = element;
            }}
            className={clsx(
              "w-[calc(100vw-2rem)] max-w-88 shrink-0 snap-center md:w-auto",
              slideClassName,
            )}
          >
            <div
              className={clsx(
                "relative overflow-hidden rounded-sm",
                imgWrapperClassName,
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                className={clsx(
                  "w-full object-cover",
                  useIntrinsicImageSize &&
                    "md:h-(--slide-height) md:w-(--slide-width)",
                  imgClassName,
                )}
              />
              {slide.badge ? (
                <span className="absolute inset-x-4 bottom-4 rounded-sm bg-(--color-dark-black)/35 px-4 py-3 text-center text-xl leading-[118%] font-bold text-white backdrop-blur-md">
                  {slide.badge}
                </span>
              ) : null}
            </div>
            {slide.title ? (
              <H3Title className="mt-2 text-(--color-grey-black) md:text-xl md:leading-[118%] md:font-bold">
                {slide.title}
              </H3Title>
            ) : null}
            {slide.description ? (
              <Paragraph
                className={clsx(
                  slide.title ? "mt-2" : "mt-4",
                  "text-dark-black/78 tracking-[0%]",
                  slide.descriptionClassName,
                )}
              >
                {slide.description}
              </Paragraph>
            ) : null}
            {slide.description2 ? (
              <Paragraph className="text-dark-black/78 mt-2 tracking-[0%]">
                {slide.description2}
              </Paragraph>
            ) : null}
          </div>
        ))}
      </div>

      <div
        className={clsx(
          "mt-4 flex items-center justify-center gap-2",
          indicatorsClassName,
        )}
      >
        {slides.map((slide, index) => (
          <button
            key={`indicator-${slide.id ?? `${slide.alt}-${index}`}`}
            type="button"
            aria-label={`Перейти к слайду ${index + 1}`}
            onClick={() => scrollToSlide(index)}
            className={clsx(
              "h-3 rounded-full transition-all",
              indicatorTone === "light" && "border border-white/30",
              indicatorTone === "grey" && "border border-[#BBB6AF]",
              activeIndex === index
                ? indicatorTone === "light"
                  ? "w-6 bg-white/60"
                  : "w-6 bg-[#BBB6AF]"
                : indicatorTone === "light"
                  ? "w-3 bg-transparent hover:bg-white/20"
                  : "hover:bg-dark-black/15 w-3 bg-transparent",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
