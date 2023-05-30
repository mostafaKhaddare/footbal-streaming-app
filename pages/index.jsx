import { TodayMatches  , YesterdayMatches  } from "../components"
import { getMatches} from "../services"
export default function Home({matches}) {
  return (
    <>
       <TodayMatches matches={matches}/>
       <YesterdayMatches matches={matches}/>
    </>
  )
}

export async function getStaticProps(){
  const matches = (await getMatches()) || []

  return{
    props : {
      matches,
      loading : false
    },
    revalidate : 1
  }
}



{/* <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff"> */}

