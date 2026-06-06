"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface DropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  buttonClassName?: string;
  contentClassName?: string;
  iconClassName?: string;
  iconColor?: string;
}

const Dropdown = ({
  isOpen,
  onToggle,
  trigger,
  children,
  className = "",
  buttonClassName = "",
  contentClassName = "",
  iconClassName = "",
  iconColor = "#81807D",
}: DropdownProps) => {
  return (
    <div className={className}>
      <button
        type="button"
        className={buttonClassName}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {trigger}
        <span
          className={clsx(
            "inline-flex h-6 w-6 origin-center items-center justify-center transition-transform duration-300 ease-out",
            isOpen ? "rotate-180" : "rotate-0",
          )}
          aria-hidden="true"
        >
          <span
            className={clsx("block h-6 w-6", iconClassName)}
            style={{
              backgroundColor: iconColor,
              mask: "url('/dropdown.svg') center / contain no-repeat",
              WebkitMask: "url('/dropdown.svg') center / contain no-repeat",
            }}
          />
        </span>
      </button>

      <div
        className={clsx(
          "grid transition-[grid-template-rows,opacity] duration-1000 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        aria-hidden={!isOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={contentClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
