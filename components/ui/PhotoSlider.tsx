"use client";

import H3Title from "@/components/ui/H3Title";
import HorizontalDragScroller from "@/components/ui/HorizontalDragScroller";
import Paragraph from "@/components/ui/Paragraph";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";

export type PhotoSlide = {
  id?: string;
  src: StaticImageData;
  alt: string;
  className?: string;
  badge?: string;
  title?: string;
  description?: string;
  descriptionClassName?: string;
  description2?: string;
  imgClassName?: string;
  imgWrapperClassName?: string;
};

type PhotoSliderProps = {
  slides: PhotoSlide[];
  desktopSlides?: PhotoSlide[];
  className?: string;
  imgClassName?: string;
  imgWrapperClassName?: string;
  slideClassName?: string;
  scrollerClassName?: string;
  indicatorsClassName?: string;
  indicatorCount?: number;
  indicatorTone?: "light" | "grey";
  useIntrinsicImageSize?: boolean;
};

const PhotoSlider = ({
  slides,
  desktopSlides,
  className,
  imgClassName,
  imgWrapperClassName,
  slideClassName,
  scrollerClassName,
  indicatorsClassName,
  indicatorCount,
  indicatorTone = "light",
  useIntrinsicImageSize = false,
}: PhotoSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [usesDesktopSlides, setUsesDesktopSlides] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlides = usesDesktopSlides && desktopSlides ? desktopSlides : slides;
  const visibleIndicatorCount = indicatorCount ?? activeSlides.length;

  useEffect(() => {
    if (!desktopSlides) {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateSlidesVariant = () => {
      setUsesDesktopSlides(mediaQuery.matches);
    };

    updateSlidesVariant();
    mediaQuery.addEventListener("change", updateSlidesVariant);

    return () => {
      mediaQuery.removeEventListener("change", updateSlidesVariant);
    };
  }, [desktopSlides]);

  useEffect(() => {
    slideRefs.current = [];
    containerRef.current?.scrollTo({ left: 0 });
  }, [activeSlides]);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const updateActiveSlide = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (maxScrollLeft <= 0 || activeSlides.length <= 1) {
        setActiveIndex(0);
        return;
      }

      if (container.scrollLeft <= 1) {
        setActiveIndex(0);
        return;
      }

      if (container.scrollLeft >= maxScrollLeft - 1) {
        setActiveIndex(visibleIndicatorCount - 1);
        return;
      }

      if (indicatorCount) {
        const progress = container.scrollLeft / maxScrollLeft;
        const progressIndex = Math.round(progress * (indicatorCount - 1));

        setActiveIndex(Math.min(Math.max(progressIndex, 0), indicatorCount - 1));
        return;
      }

      if (useIntrinsicImageSize) {
        const progress = container.scrollLeft / maxScrollLeft;
        const progressIndex = Math.round(progress * (activeSlides.length - 1));

        setActiveIndex(
          Math.min(Math.max(progressIndex, 0), activeSlides.length - 1),
        );
        return;
      }

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;
      const containerRect = container.getBoundingClientRect();
      const targetPosition = container.scrollLeft + container.clientWidth / 2;

      slideRefs.current.forEach((slide, index) => {
        if (!slide) {
          return;
        }

        const slideRect = slide.getBoundingClientRect();
        const slideStart =
          slideRect.left - containerRect.left + container.scrollLeft;
        const slidePosition = slideStart + slideRect.width / 2;
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
  }, [
    activeSlides,
    activeSlides.length,
    indicatorCount,
    useIntrinsicImageSize,
    visibleIndicatorCount,
  ]);

  const scrollToSlide = (index: number) => {
    const container = containerRef.current;
    const slide = slideRefs.current[index];

    if (!container || (!slide && !indicatorCount)) {
      return;
    }

    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (indicatorCount) {
      container.scrollTo({
        left: (maxScrollLeft * index) / Math.max(indicatorCount - 1, 1),
        behavior: "smooth",
      });
      return;
    }

    if (!slide) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();
    const slideStart = slideRect.left - containerRect.left + container.scrollLeft;
    const targetScrollLeft = useIntrinsicImageSize
      ? (maxScrollLeft * index) / Math.max(activeSlides.length - 1, 1)
      : slideStart - container.clientWidth / 2 + slideRect.width / 2;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };

  const scrollerClass = clsx(
    "no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 md:mx-0 md:-mr-20 md:gap-7 md:px-0",
    useIntrinsicImageSize
      ? "snap-x snap-mandatory md:snap-none"
      : "snap-x snap-mandatory",
    scrollerClassName,
  );

  const slideBaseClass = clsx(
    "w-[calc(100vw-2rem)] max-w-88 shrink-0 snap-center md:w-auto",
    slideClassName,
  );

  return (
    <div className={className}>
      <HorizontalDragScroller
        ref={containerRef}
        className={scrollerClass}
      >
        {activeSlides.map((slide, index) => (
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
            className={clsx(slideBaseClass, slide.className)}
          >
            <div
              className={clsx(
                "relative overflow-hidden rounded-sm",
                imgWrapperClassName,
                slide.imgWrapperClassName,
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                draggable={false}
                className={clsx(
                  "w-full object-cover",
                  useIntrinsicImageSize &&
                    "md:h-(--slide-height) md:w-(--slide-width)",
                  imgClassName,
                  slide.imgClassName,
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
      </HorizontalDragScroller>

      <div
        className={clsx(
          "mt-4 flex items-center justify-center gap-2",
          indicatorsClassName,
        )}
      >
        {Array.from({ length: visibleIndicatorCount }, (_, index) => (
          <button
            key={`indicator-${index}`}
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
