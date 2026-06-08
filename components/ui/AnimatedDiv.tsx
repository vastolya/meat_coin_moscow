"use client";

import {
  type AnimationDelay,
  useResolvedDelay,
} from "@/components/hooks/useResolvedDelay";
import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  className?: string;
  delay?: AnimationDelay;
  disableAnimation?: boolean;
  children?: ReactNode;
};

const AnimatedDiv = ({
  className = "",
  delay = 0,
  disableAnimation = false,
  children,
}: Props) => {
  const resolvedDelay = useResolvedDelay(delay);

  return (
    <motion.div
      initial={disableAnimation ? false : { x: 40, opacity: 0 }}
      {...(disableAnimation
        ? {}
        : {
            whileInView: { x: 0, opacity: 1 },
            viewport: { once: true },
            transition: {
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: resolvedDelay,
            },
          })}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
