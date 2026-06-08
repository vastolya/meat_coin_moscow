"use client";

import Image, { StaticImageData } from "next/image";
import type { ReactNode } from "react";
import type { AnimationDelay } from "../hooks/useResolvedDelay";
import AnimatedDiv from "./AnimatedDiv";

type Props = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imgClsx?: string;
  sizes?: string;
  delay?: AnimationDelay;
  disableAnimation?: boolean;
  children?: ReactNode;
};

const AnimatedImage = ({
  src,
  alt,
  className,
  imgClsx,
  sizes = "(min-width: 768px) 25vw, 100vw",
  delay = 0,
  disableAnimation = false,
  children,
}: Props) => (
  <AnimatedDiv
    delay={delay}
    disableAnimation={disableAnimation}
    className={`relative overflow-hidden ${className}`}
  >
    <Image
      fill
      src={src}
      alt={alt}
      sizes={sizes}
      className={imgClsx ?? "object-cover"}
    />
    {children}
  </AnimatedDiv>
);

export default AnimatedImage;
