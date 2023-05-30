import Image1 from ".././public/img1.jpg"
import Image from "next/image"

function PageDetails({post}) {
    
   const {teamOne , teamOneImg , teamTwo , teamTwoImg , title } = post
  
  return (
    <>
    <div className="card shadow relative rounded-xl mb-8">
      <Image src={Image1}  alt={title} placeholder="blur" loading="lazy" fill style={{objectFit:"cover" , zIndex : "-1" , borderRadius : "10px" }}/>
       <div className="card-body py-4 px-4">
          <div className="row grid grid-cols-3">
              <div className="flex flex-col justify-center items-center">
                  <img  className="rounded-full mb-1 h-16 w-16 md:w-24 md:h-24" width={24} height={24} src={teamOneImg.url} alt={teamOne} />
                  <span className="font-bold text-sm  md:text-2xl text-white"> {teamOne} </span>
              </div>
                  <div className=" justify-between	items-center my-auto font-bold text-2xl md:text-6xl text-white	">
                    VS
                  </div>
              <div className="flex flex-col justify-center	items-center">
                   <img className="rounded-full mb-1 h-16 w-16 md:w-24 md:h-24" src={teamTwoImg.url} alt={teamOne} />
                   <span className="font-bold text-sm md:text-2xl text-white"> {teamTwo} </span>
              </div>
          </div>
       </div>
    </div>
    </>
    )
}
export default PageDetails