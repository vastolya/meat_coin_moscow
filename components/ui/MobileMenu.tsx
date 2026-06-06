"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RESTAURANTS } from "../../consts/restaurants";
import { COPYRIGHT_TEXT } from "../../consts/site";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Paragraph from "./Paragraph";

interface NavItem {
  title: string;
  link?: string;
  dropdown?: boolean;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: NavItem[];
  onClose: () => void;
}

const MobileMenu = ({ isOpen, navItems, onClose }: MobileMenuProps) => {
  const [isRestaurantsOpen, setIsRestaurantsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-1100 bg-black/28 backdrop-blur-md transition-opacity duration-500 md:hidden",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={clsx(
          "absolute top-16.5 right-0 left-0 origin-top bg-(--color-beige) transition-[opacity,clip-path] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen
            ? "opacity-100 [clip-path:inset(0_0_0_0)]"
            : "opacity-0 [clip-path:inset(0_0_100%_0)]",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-[calc(100dvh-108px)] max-h-180 flex-col px-5 pt-16 pb-8 text-(--color-dark)">
          <div className="flex-1 overflow-y-auto scrollbar-none [-ms-overflow-style:none]">
            <Dropdown
              isOpen={isRestaurantsOpen}
              onToggle={() => setIsRestaurantsOpen((current) => !current)}
              buttonClassName="flex w-full items-center justify-between pb-4 text-left text-[2rem] leading-[104%] font-medium"
              contentClassName="flex flex-col gap-4 mb-2"
              iconClassName="bg-(--color-dark)"
              iconColor="#1E1E1E"
              trigger={<Paragraph disableAnimation>Рестораны</Paragraph>}
            >
              {RESTAURANTS.map((item) => (
                <Link
                  key={item.city}
                  href="/"
                  className="group flex flex-col"
                  onClick={onClose}
                >
                  <Paragraph className="leading-[120%]!">{item.city}</Paragraph>
                  <Paragraph className="text-(--color-gray)">
                    {item.restaurant}
                  </Paragraph>
                </Link>
              ))}
            </Dropdown>

            <nav className="flex flex-col">
              {navItems
                .filter((item) => !item.dropdown)
                .map((item) => (
                  <Link
                    key={item.title}
                    href={item.link!}
                    className="py-4 text-base leading-[148%] font-medium"
                    onClick={onClose}
                  >
                    {item.title}
                  </Link>
                ))}
            </nav>
          </div>

          <div className="pt-11">
            <Paragraph disableAnimation className="pb-6 text-(--color-accent)">
              RU
            </Paragraph>
            <div className="flex items-center gap-6">
              <Image src="/yandex_mesto.svg" alt="" width={95} height={54} />
              <Button
                text="Оставить отзыв"
                variant="secondary"
                className="flex w-full justify-center border-[1.5px] border-(--color-accent)! leading-[150%]! tracking-[1%] text-(--color-accent)!"
              />
            </div>
            <p className="pt-6 text-sm leading-[148%] text-(--color-gray)">
              {COPYRIGHT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
