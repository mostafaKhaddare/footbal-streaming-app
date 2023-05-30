import { TodayMatches } from '../components/index'
import { NextSeo } from 'next-seo'
import { getMatches} from "../services"
function today({matches}) {
  return (
    <>
     <NextSeo 
       title="مباريات اليوم"
       canonical="https://www.mostafatv.com/today"
       openGraph={
        {
          url :"https://www.mostafatv.com/today"
        }
       }
       />
      <TodayMatches matches={matches}/>
    </>
  )
}

export default today

export async function getStaticProps(){
  const matches = (await getMatches()) || []

  return{
    props : {
      matches,
      loading : false
    },
  }
}
