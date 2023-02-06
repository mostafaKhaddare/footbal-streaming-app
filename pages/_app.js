import '../styles/globals.css'
import '../styles/nprogress.css'
import { Layout } from '../components'
import { DefaultSeo } from 'next-seo'
import { SEO } from '../next-seo-config'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
NProgress.configure({showSpinner:false})

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, []);

  return(
    <>
    <DefaultSeo 
      {...SEO}
      />
          <Layout>
            <Component {...pageProps} />
          </Layout>
    </>
  )
}
