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

export async function getServerSideProps(){
  const matches = (await getMatches()) || []

  return{
    props : {
      matches,
      loading : false
    },
  }
}
