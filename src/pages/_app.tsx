import '../styles/global'
import { globalCss } from '@stitches/react'
import type { AppProps } from 'next/app'

import { Nunito } from 'next/font/google'

export const nunito = Nunito({ subsets: ['latin']})

globalCss()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
