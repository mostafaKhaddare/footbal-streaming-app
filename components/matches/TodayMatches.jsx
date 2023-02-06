import {CardMatch , Title} from "../index"
import moment from "moment"
const today = moment().format('YYYY-MM-DD')

function TodayMatches({matches}) {
  return (
    <>
       <div className="m-today mb-8">
           <Title title={"مباريات اليوم"} date={today}/>
           <div className="p-4 bg-slate-50 shadow">
               {matches.map((match)=> <CardMatch key={match.id} match={match} /> )}
           </div>
       </div>
    </>
  )
}
export default TodayMatches