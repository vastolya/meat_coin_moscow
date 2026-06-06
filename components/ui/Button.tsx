import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const baseStyles =
  "w-fit h-fit font-extrabold text-base leading-relaxed uppercase px-6 py-4 rounded-sm cursor-pointer transition-all duration-300";

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "text-white bg-(--color-accent) hover:bg-(--color-dark)",
  secondary:
    "border-[1.5px] text-(--color-accent) hover:text-white border-(--color-accent) hover:bg-(--color-accent)",
};

const Button = ({
  text,
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
