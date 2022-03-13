import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const IconAdd = (props: SvgProps) => (
  <Svg
    width={25}
    height={25}
    fill={'#72A8BC'}
    viewBox="0 0 357 357"
    {...props}
  >
    <Path d="M340.08 161.58H195.42V16.92A16.93 16.93 0 0 0 178.5 0a16.93 16.93 0 0 0-16.92 16.92v144.66H16.92a16.92 16.92 0 1 0 0 33.84h144.66v144.66A16.93 16.93 0 0 0 178.5 357a16.93 16.93 0 0 0 16.92-16.92V195.42h144.66a16.92 16.92 0 1 0 0-33.84Z" />
  </Svg>
)

