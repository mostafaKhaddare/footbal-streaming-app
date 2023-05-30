import {BiTime} from "react-icons/bi"

function SpecialButton({start , finish , resault ,textWhenStart , bgColorWhenStart  , bgColorBeforeStart , bgColorAfterFinish , time}){

   let text;
   let myClass;
   let hide;
   let overLayClass;
   let overLayText;

  if(start && !finish) {
     text = textWhenStart
     myClass = bgColorWhenStart
     hide = "hidden"
     overLayClass = "bg-yellow-400"
     overLayText="شاهد المباراة"

  }else if(!start){
    text = time
    myClass = bgColorBeforeStart
    overLayText="لم تبدا بعد"
    overLayClass = "bg-black"
    
  }else if(start && finish){
    text = resault
    myClass = bgColorAfterFinish
    hide = "hidden"
    overLayText="شاهد الملخص"
    overLayClass="bg-red-800"
  }

  return (
    <>
        <span className= {`${myClass} text-center w-24 md:w-32 bg-first-color px-2 py-1 rounded-lg text-white mb-3 text-sm md:text-xl`}>
              <BiTime className={`${hide}  inline  text-white ml-2 md:text-lg mb-1` }/>
              {text}
        </span>
        <div className={`${overLayClass} absolute top-0 left-0 right-0 bottom-0  opacity-0 group-hover:opacity-80 w-full h-full text-center font-bold ease-in duration-300 rounded-lg z-20`}>
             <div className="absolute top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] text-white  text-sm md:text-2xl">{overLayText}</div>
        </div>
    </>
  )
}

export default SpecialButton