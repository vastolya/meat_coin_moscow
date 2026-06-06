interface PlusIconProps {
  width?: number
  height?: number
}

export default function PlusIcon({ width = 24, height = 24 }: PlusIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.0711 12.0703H4.92893M12 4.99927V19.1414"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
