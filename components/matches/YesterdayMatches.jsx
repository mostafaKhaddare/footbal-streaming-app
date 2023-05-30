import react , {useState , useEffect} from "react"
import { getYesterdayMatches } from "../../services"
import {CardMatch , CardSkeltonTwo , Title } from "../index"
import moment from "moment"

const yesterday = moment().subtract(1 , 'days').format("YYYY-MM-DD")

function YesterdayMatches({matches}) {
  const [YesterdayMatches , setyesterdayMatches] = useState([])
  const [loading , setLoading] = useState(false)
  
  useEffect(()=>{
 
       setTimeout(() => {
         getYesterdayMatches().then((resault) => setyesterdayMatches(resault))
         setLoading(true)
       }, 1000);
       
  },[])

  return (
    <>
    <div className="m-yesterday md:mb-8 text-xl md:text-2xl">
      <Title title={" أهداف وملخصات مباريات أمس "} date={yesterday}/>
      <div className="p-4 bg-slate-50">
        {loading ? (
          YesterdayMatches.length > 0 ? (
            YesterdayMatches.map((match) => (
              <CardMatch key={match.id} match={match} />
            ))
          ) : (
            <div>No matches found</div>
          )
        ) : (
          <CardSkeltonTwo cardNumber={5}/>
        )}
      </div>
    </div>
    </>
  )
}

export default YesterdayMatches