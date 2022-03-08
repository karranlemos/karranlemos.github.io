import { colors } from '../../../commons/colors'

interface IOwnProps {
  size?: number
  fill?: string
  strokeWidth?: number
}

export const MultiplicationSign = ({
  size = 20,
  fill = colors.white,
  strokeWidth = 12
}: IOwnProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}

    viewBox="10 10 100 100"
  >
    <path
      stroke={fill}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      d="M14,14 L106,106 M106,14 L14,106"
    />
  </svg>
)