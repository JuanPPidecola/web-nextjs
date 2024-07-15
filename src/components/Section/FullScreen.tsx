import React, { ReactNode } from 'react'
import { BgKey } from '../../interfaces'
import { gradientBgPurplePink, gradientBgDark, gradientBgPinkRed } from '../../colors'

type Props = {
  bg: BgKey
  children: ReactNode
}

export default function SectionFullScreen({ bg, children }: Props) {

  let componentClass = 'flex min-h-screen items-center justify-center bg-gradient-to-tr from-tertiary via-secondary to-primary'
  return <div className={componentClass}>{children}</div>
}
