"use client";

import clsx from "clsx";
import Image from "next/image";
import { motion } from "motion/react";

interface OrnamentProps {
  className?: string;
}

const transition = {
  type: "spring",
  stiffness: 80,
  damping: 15,
  delay: 0.1,
} as const;

export default function Ornament({ className }: OrnamentProps) {
  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={transition}
        className={clsx(
          "col-span-5 hidden items-center justify-center md:flex md:h-65",
          className,
        )}
      >
        <div className="relative h-65 w-16.5">
          <Image src="ornament.svg" alt="ornament" fill sizes="auto" />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 40, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={transition}
        className={clsx(
          "col-span-5 flex items-center justify-center md:hidden",
          className,
        )}
      >
        <div className="relative h-16.5 w-65">
          <div className="absolute top-1/2 left-1/2 h-65 w-16.5 -translate-x-1/2 -translate-y-1/2 rotate-90">
            <Image src="ornament.svg" alt="ornament" fill sizes="auto" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
