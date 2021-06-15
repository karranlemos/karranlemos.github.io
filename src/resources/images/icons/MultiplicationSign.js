import React from 'react'

import colors from '../../../commons/colors'

export default function MultiplicationSign({ size = 20, fill = colors.white }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}

      viewBox="10 10 100 100"
    >
      <path
        stroke={fill}
        stroke-width="8.3"
        stroke-linecap="round"
        d="M14,14 L106,106 M106,14 L14,106"
      />
    </svg>
  )
}