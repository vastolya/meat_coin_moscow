'use client'

import { useState } from 'react'

interface CheckboxProps {
  label: React.ReactNode
  className?: string
}

export default function Checkbox({ label, className = '' }: CheckboxProps) {
  const [checked, setChecked] = useState(false)

  return (
    <label className={`flex cursor-pointer items-start gap-4 ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="sr-only"
      />
      <span
        className={` ${checked ? 'bg-nove' : 'bg-devider border-devider border'} flex h-9 w-9 shrink-0 items-center justify-center rounded-sm outline-none`}
        aria-hidden="true"
      >
        {checked ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 0C1.79086 0 0 1.79086 0 4V16C0 18.2091 1.79086 20 4 20H16C18.2091 20 20 18.2091 20 16V4C20 1.79086 18.2091 0 16 0H4Z M10 5L15 10L10 15L5 10Z"
              fill="#8D7E65"
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
  )
}
