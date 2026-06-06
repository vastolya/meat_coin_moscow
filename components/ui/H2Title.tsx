"use client";

import {
  type AnimationDelay,
  useResolvedDelay,
} from "@/components/hooks/useResolvedDelay";
import clsx from "clsx";
import { motion } from "framer-motion";

type H2TitleProps = {
  children: React.ReactNode;
  delay?: AnimationDelay;
  className?: string;
  disableAnimation?: boolean;
};

const H2Title = ({
  children,
  className,
  delay = 0,
  disableAnimation = false,
}: H2TitleProps) => {
  const resolvedDelay = useResolvedDelay(delay);

  return (
    <motion.h2
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
        "font-albertus text-[1.75rem] leading-[120%] font-normal tracking-[-1%] uppercase md:text-[2.5rem]",
        className,
      )}
    >
      {children}
    </motion.h2>
  );
};

export default H2Title;
