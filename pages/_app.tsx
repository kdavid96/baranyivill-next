import type { AppProps } from 'next/app'
import React from 'react';
import { Layout } from '../components';
import Router from 'next/router';
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import '../styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {  
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
