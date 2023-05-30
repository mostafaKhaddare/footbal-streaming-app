import { YesterdayMatches } from '../components'
import { NextSeo } from 'next-seo'
function summury() {


  return (
    <>
     <NextSeo 
       title="اهداف و ملخصات"
       canonical="www.mostafatv.com/summury"
       openGraph={
        {
          url :"www.mostafatv.com/summury"
        }
       }
       />
      <YesterdayMatches/>
    </>
  )
}

export default summury