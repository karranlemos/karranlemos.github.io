import { colors } from '../../../commons/colors'

interface IOwnProps {
  size?: number
  fill?: string
}

export const EyeCrossedGray = ({
  size = 20,
  fill = colors.white
}: IOwnProps) => (
  <svg
    width={size}
    height={size}
    version="1.1"
    viewBox="0 0 101.86 60.679"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      transform="rotate(-39.2)"
      x="12.549"
      y="16.529"
      width="7.7194"
      height="84.913"
      fill={fill}
      strokeLinejoin="round"
      strokeWidth="1.942"
    />
    <g
      transform="translate(-101.2 -92.488)"
      fill={fill}
      strokeWidth=".99991"
    >
      <path
        d="m152 105.3c-27.517 0.26458-50.8 23.812-50.8 23.812s22.886 24.606 50.8 24.474c27.914-0.13229 51.065-24.474 51.065-24.474s-23.548-24.077-51.065-23.812zm0 6.35a17.462 17.462 0 0 1 17.462 17.462 17.462 17.462 0 0 1-17.462 17.462 17.462 17.462 0 0 1-17.462-17.462 17.462 17.462 0 0 1 17.462-17.462zm-0.0444 7.0264a10.436 10.436 0 0 0-10.392 10.436 10.436 10.436 0 0 0 10.437 10.437 10.436 10.436 0 0 0 10.436-10.437 10.436 10.436 0 0 0-10.436-10.436 10.436 10.436 0 0 0-0.045 0z"
        fill={fill}
        strokeWidth=".99991"
      />
    </g>
  </svg>
)