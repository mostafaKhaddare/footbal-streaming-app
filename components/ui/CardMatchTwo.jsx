import Link from "next/link"
import {SpecialButton} from "../index"
import Image from "next/image"

function CardMatchTwo({match , mySlug}) {
  const { teamOneImg  , teamTwoImg , title , teamOne , teamTwo  , start , finish , resault , time  , slug} = match
  
  return (
    <>
     <div className="card shadow  bg-white p-2  ">
          <Link href={!mySlug ? '/' : `/matches/${slug}` } key={title} className="group ">
              <div className="card-body py-4 px-4 bg-gray-200 rounded-lg relative  ">
                  <div className="row grid grid-cols-3  ">
                          <div className="flex flex-col justify-center items-center">
                               <div className=" mb-1 h-10 w-10   md:w-16 md:h-16 relative">
                                    <Image 
                                     className="rounded-full"
                                     rel='preload'
                                     priority  
                                     src={teamOneImg.url} 
                                     sizes="(max-width: 600px) 100vw, 50vw"
                                     fill  
                                     alt={teamOne}  />
                              </div>
                         </div>
                         <div className="flex flex-col justify-between	items-center my-auto	">
                         <SpecialButton
                                start={start} 
                                finish={finish} 
                                resault={resault}
                                time={time}
                                textWhenStart='مباشر' 
                                bgColorWhenStart='bg-amber-300 animate-pulse'
                                bgColorBeforeStart="bg-first-color"
                                bgColorAfterFinish="bg-rose-600"
                                mySlug = {mySlug}
                           />
                         </div>
                         <div className="flex flex-col justify-center	items-center">
                              <div className="rounded-full mb-1 h-10 w-10  md:w-16 md:h-16 relative">
                                   <Image 
                                   className="rounded-full" 
                                   rel='preload'
                                   priority 
                                   src={teamTwoImg.url} 
                                   sizes="(max-width: 600px) 100vw, 50vw"
                                   fill  
                                   alt={teamTwo}  />
                              </div>
                         </div>
                 </div>
             </div>
         </Link> 
     </div>
    </>
  )
}

export default CardMatchTwo