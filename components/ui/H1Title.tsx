"use client";

import {
  type AnimationDelay,
  useResolvedDelay,
} from "@/components/hooks/useResolvedDelay";
import clsx from "clsx";
import { motion } from "framer-motion";

type H1TitleProps = {
  children: React.ReactNode;
  delay?: AnimationDelay;
  className?: string;
  disableAnimation?: boolean;
};

const H1Title = ({
  children,
  delay = 0,
  className,
  disableAnimation = false,
}: H1TitleProps) => {
  const resolvedDelay = useResolvedDelay(delay);

  return (
    <motion.h1
      initial={disableAnimation ? false : { x: 40, opacity: 0 }}
      {...(disableAnimation
        ? { animate: { x: 0, opacity: 1 } }
        : { whileInView: { x: 0, opacity: 1 }, viewport: { once: true } })}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: resolvedDelay,
      }}
      className={clsx(
        "font-albertus text-4xl leading-[122%] font-[250] tracking-[-1%] uppercase md:text-6xl md:leading-[113%]",
        className,
      )}
    >
      {children}
    </motion.h1>
  );
};

export default H1Title;
