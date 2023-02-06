export const SEO = {
      title:'موقع النقل المباشر الأول عربيا',
      description:"روابط النقل المباشر للمباريات بجودة عالية ومصادر متنوعة ودون انقطاع",
      useAppDir :true,
      themeColor  : "0075ff" ,
      titleTemplate : "Bein Foot - %s ",
      canonical:'https://beinfoot.live',
      defaultTitle : "beinfoot - موقع النقل المباشر الأول عربيا'",
      openGraph:{
          type : "website",
          locale : "ar_MA",
          siteName : "bein foot",
          url : "https://beinfoot.live",
          images : {
            url: 'https://beinmatch.biz/poster.jpg',
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
        content: 'beinfoot'
      }, 
      {
        httpEquiv: 'x-ua-compatible',
        content: 'IE=edge; chrome=1'
      },
      
      ],
      additionalLinkTags :[
        {
          rel: 'icon',
          href: 'https://beinmatch.biz/favicon-32x32.png',
        },
        {
            rel: 'icon',
            href: 'https://beinmatch.biz/favicon-96x96.png',
        },
        {
            rel: 'icon',
            href: 'https://beinmatch.biz/favicon-192x192.png',
        },
        {
            rel: 'icon',
            href: 'https://beinmatch.biz/favicon-x16.png',
        },
        {
          rel: 'apple-touch-icon',
          href: 'https://www.test.ie/touch-icon-ipad.jpg',
          sizes: '76x76'
        },
        // {
        //   rel: 'manifest',
        //   href: '/manifest.json'
        // },
        {
          rel: 'preload',
          href: 'https://www.test.ie/font/sample-font.woof2',
          as: 'font',
          type: 'font/woff2',
          crossOrigin: 'anonymous'
        }
      ]
}