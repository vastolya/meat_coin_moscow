"use client";

import {
  type AnimationDelay,
  useResolvedDelay,
} from "@/components/hooks/useResolvedDelay";
import clsx from "clsx";
import { motion } from "framer-motion";

type H3TitleProps = {
  children: React.ReactNode;
  delay?: AnimationDelay;
  className?: string;
  animate?: import("framer-motion").TargetAndTransition;
  disableAnimation?: boolean;
};

const H3Title = ({
  children,
  delay = 0,
  className,
  animate: animateProp,
  disableAnimation = false,
}: H3TitleProps) => {
  const resolvedDelay = useResolvedDelay(delay);

  return (
    <motion.h3
      initial={disableAnimation ? false : { x: 40, opacity: 0 }}
      {...(disableAnimation
        ? { animate: { x: 0, opacity: 1 } }
        : animateProp
          ? { animate: animateProp }
          : { whileInView: { x: 0, opacity: 1 }, viewport: { once: true } })}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: resolvedDelay,
      }}
      className={clsx(
        "text-xl leading-[118%] font-bold tracking-normal md:text-2xl md:font-extrabold md:tracking-normal",
        className,
      )}
    >
      {children}
    </motion.h3>
  );
};

export default H3Title;
