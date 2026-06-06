import { InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightSlot?: React.ReactNode
}

export default function FormInput({ rightSlot, className = '', ...props }: FormInputProps) {
  const base =
    'placeholder:text-gray border-[#C2C2C0] text-[20px] w-full border-b pt-1 pb-4 outline-none placeholder:text-base placeholder:leading-[148%] placeholder:font-medium placeholder:tracking-[0.01em]'
  const noSpin =
    props.type === 'number'
      ? ' [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
      : ''

  if (rightSlot) {
    return (
      <div className="relative">
        <input className={`${base}${noSpin} pr-8 ${className}`} {...props} />
        <span className="pointer-events-none absolute top-1 right-3">{rightSlot}</span>
      </div>
    )
  }

  return <input className={`${base}${noSpin} ${className}`} {...props} />
}
