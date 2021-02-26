import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@spicy-ui/core'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js TypeScript Quickstart</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
