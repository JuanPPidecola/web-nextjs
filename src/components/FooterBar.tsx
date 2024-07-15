import React, { ReactNode } from 'react'
import { containerMaxW } from '../config'

type Props = {
  children: ReactNode
}

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear()

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <div className="block md:flex items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <b>
            &copy;{year},{` `}
            Desarrollos Tecnológicos Pidecola C.A.
            .
          </b>
          {` `}
          {children}
        </div>
        <div className="md:py-2">
          <a href="https://justboil.me" rel="noreferrer" target="_blank">
          <img
            className="w-24 md:ml-1 ml-24"
            alt="Logo Pidecola"
            src="/logos/logoCompleto.png"
          ></img>
          </a>
        </div>
      </div>
    </footer>
  )
}
