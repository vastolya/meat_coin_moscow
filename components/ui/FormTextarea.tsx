import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  resizeIcon?: React.ReactNode;
}

export default function FormTextarea({
  resizeIcon,
  className = "",
  ...props
}: FormTextareaProps) {
  const base =
    "placeholder:text-gray border-devider w-full resize-none border-b pt-1 pb-4 outline-none placeholder:text-base placeholder:leading-[148%] placeholder:font-medium placeholder:tracking-[0.01em]";

  if (resizeIcon) {
    return (
      <div className="relative">
        <textarea className={clsx(base, className)} {...props} />
        <span className="pointer-events-none absolute right-0 bottom-0">
          {resizeIcon}
        </span>
      </div>
    );
  }

  return <textarea className={clsx(base, className)} {...props} />;
}
