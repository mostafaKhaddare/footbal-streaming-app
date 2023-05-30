import {BsArrowUpCircleFill} from "react-icons/bs"
import { useState , useEffect } from "react"
function toTopButton() {
    const [showTopButton , setShowButton] = useState(false)

     useEffect(()=>{
       window.addEventListener("scroll" , ()=>{
        if(window.scrollY >= 500){
          setShowButton(true)
        }else{
          setShowButton(false)
        }
       })
     }, [])

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
  return (
    <> 
        {showTopButton && (
        <BsArrowUpCircleFill onClick={handleClick} className="fixed cursor-pointer bottom-4 right-2 text-first-color text-4xl md:text-5xl z-50"/> 
        )}
    </>
  )
}

export default toTopButton