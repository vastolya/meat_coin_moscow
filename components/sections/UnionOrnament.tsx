import union from "/public/ornament-union.webp";
import { clsx } from "clsx";
import Image from "next/image";

type UnionOrnamentProps = {
  className?: string;
};

export default function UnionOrnament({ className = "" }: UnionOrnamentProps) {
  return (
    <div
      className={clsx(
        "flex justify-center md:relative md:mx-0 md:block md:h-63 md:w-16.5 md:shrink-0",
        className,
      )}
    >
      <Image
        src={union}
        alt="Union"
        className="md:absolute md:top-1/2 md:left-1/2 md:w-63 md:max-w-none md:-translate-x-1/2 md:-translate-y-1/2 md:rotate-90"
      />
    </div>
  );
}
