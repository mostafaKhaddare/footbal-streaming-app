import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar">
      <Head />
      <body className='direction-rtl' dir='rtl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
