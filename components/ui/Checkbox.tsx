"use client";

import clsx from "clsx";
import { useState } from "react";

interface CheckboxProps {
  label: React.ReactNode;
  className?: string;
}

export default function Checkbox({ label, className = "" }: CheckboxProps) {
  const [checked, setChecked] = useState(false);

  return (
    <label className={clsx("flex cursor-pointer items-start gap-2", className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="peer sr-only"
      />
      <span
        className={clsx(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-sm transition-colors duration-300 peer-focus-visible:ring-2 peer-focus-visible:ring-(--color-accent) peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-white",
          checked ? "bg-(--color-accent)" : "bg-[#BBB6AF]",
        )}
        aria-hidden="true"
      >
        {checked ? (
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7L6.33333 12L17 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3301_16230)">
              <rect
                x="0.75"
                y="0.75"
                width="18.5"
                height="18.5"
                rx="3.25"
                stroke="white"
                strokeWidth="1.5"
              />
            </g>
            <defs>
              <clipPath id="clip0_3301_16230">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </span>
      <span className="text-gray text-sm leading-[148%]">{label}</span>
    </label>
  );
}
