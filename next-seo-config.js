
export const SEO = {
      title:'موقع النقل المباشر الأول عربيا',
      description:"روابط النقل المباشر للمباريات بجودة عالية ومصادر متنوعة ودون انقطاع",
      useAppDir :false,
      themeColor  : "0075ff" ,
      titleTemplate : ` mostafatv - %s `,
      canonical: "https://www.mostafatv.com",
      defaultTitle : ' mostafatv - موقع النقل المباشر الأول عربيا ',
      openGraph:{
          type : "website",
          locale : "ar_MA",
          siteName : "mostafatv",
          url : "https://www.mostafatv.com",
          images : {
            url: "https://www.mostafatv.com/poster.jpg",
            width: 850,
            height: 650,
            alt: 'Photo of text',
          }
      },
      twitter : {
          handle : '@handle',
          site : '@site',
          cardType : "summary_large_image"
      },
      additionalMetaTags :[
       {
        name: 'application-name',
        content: "mostafatv"
      }, 
      {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      },
      
      ],
      additionalLinkTags :[
        {
          rel: 'icon',
          href: '/favicon-16x16.png',
        },
        {
            rel: 'icon',
            href: '/favicon-32x32.png',
        },
        {
            rel: 'icon',
            href: '/favicon-192x192.png',
        },
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png"',
          sizes: '180x180'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'preload',
          href: 'https://www.test.ie/font/sample-font.woof2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        }
      ]
}