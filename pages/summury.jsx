import { YesterdayMatches } from '../components'
import { NextSeo } from 'next-seo'
function summury() {
  return (
    <>
     <NextSeo 
       title="اهداف و ملخصات"
       canonical="www.beinfoot.live/summury"
       openGraph={
        {
          url :"www.beinfoot.live/summury"
        }
       }
       />
      <YesterdayMatches/>
    </>
  )
}

export default summury