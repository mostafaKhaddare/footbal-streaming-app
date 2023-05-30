import  {IoMdTrophy } from "react-icons/io"
import {SpecialButton} from "./index"
import Image from "next/image";
function CardMatch({match}) {

  const { teamOne , teamOneImg , teamTwo , teamTwoImg , title , league , start , finish , resault , time  , slug} = match

  return (
    <>
    <a href={`/matches/${slug}`} className="cursor-pointer group" key={title}>
      <div className="card bg-gray-1000  mb-3 shadow relative rounded-lg  border border-gray-200">
         <div className="card-body py-4 px-2 relative">
            <div className="row grid grid-cols-3">
                  <div className="flex flex-col justify-center items-center">
                        <div className="mb-1 h-10 w-10 md:w-16 md:h-16 relative">
                            <Image 
                            className="rounded-full"  
                            rel='preload'
                            priority src={teamOneImg.url} 
                            blurDataURL="blur"  
                            sizes="(max-width: 600px) 100vw, 50vw" 
                            fill  
                            alt={teamOne}  />
                       </div>
                       <span className={`font-bold text-xs md:text-xl`}>{teamOne}</span>
                  </div>
                   <div className="flex flex-col justify-between items-center my-auto">
                        <SpecialButton
                            start={start} 
                            finish={finish} 
                            resault={resault}
                            time={time}
                            textWhenStart='جارية الان' 
                            bgColorWhenStart='bg-yellow-400 animate-pulse'
                            bgColorBeforeStart="bg-first-color"
                            bgColorAfterFinish="bg-rose-600"
                        />
                        <span className="w-36 md:w-44	 text-sm md:text-xl mb-1"> <IoMdTrophy className="inline  md:text-lg text-yellow-300"/> {league} </span>
                  </div>
                  <div className="flex flex-col justify-center	items-center">
                       <div className="rounded-full mb-1 h-10 w-10 md:w-16 md:h-16 relative">
                            <Image 
                            rel='preload'
                            className="rounded-full" 
                            priority 
                            src={teamTwoImg.url} 
                            sizes="(max-width: 600px) 100vw, 50vw" 
                            fill  
                            alt={teamTwo}  />
                       </div>
                       <span className="font-bold text-xs md:text-xl"> {teamTwo} </span>
                </div>
            </div>
         </div>
      </div>
    </a>
    </>
    
  )
}

export default CardMatch