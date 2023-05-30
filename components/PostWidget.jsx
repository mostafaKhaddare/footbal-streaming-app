import {useState , useEffect } from "react"
import {FollowUs} from "./index"
import { getTomorrowMatches , getRelatedMatches} from "../services"
import {CardMatchTwo , Title , CardSkelton} from "./index"
import moment from "moment"

const tomorrow = moment().add(1 , 'days').format("YYYY-MM-DD")
const today = moment().format("YYYY-MM-DD")


function PostWidget({slug}) {
    const [relatedMatches , setRelatedMatches] = useState([])
    const [loading , setLoading] = useState(false)
    
     useEffect(()=>{
       setTimeout(() => {
         if(slug){
            getRelatedMatches(slug).then((resault) => setRelatedMatches(resault))
            setLoading(true)
         } else{
            getTomorrowMatches().then((resault) => setRelatedMatches(resault))
            setLoading(true)
         }
       }, 1000);
       
     } , [slug])
     
  return (
    <>
         <FollowUs/>
         <Title title={slug ? "مباريات اليوم"  : 'مباريات الغد'} date={slug ? today  : tomorrow }/>
            <div className="mb-8 p-4 bg-slate-50">
        {loading ? (
          relatedMatches.length > 0 ? (
            relatedMatches.map((match) => (
              <CardMatchTwo key={match.id} match={match} mySlug={slug} />
            ))
          ) : (
            <div className="text-xl md:text-2x">No matches found</div>
          )
        ) : (
          <CardSkelton cardNumber={5}/>
        )}
                
             </div>
    </>
  )
}




     

export default PostWidget