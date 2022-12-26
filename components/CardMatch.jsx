
function CardMatch() {
  return (
    <div className="card bg-slate-50 shadow relative rounded-md mb-3 last:mb-0">
       <div className="card-body py-4 px-4">
          <div className="row grid grid-cols-3">
              <div className="flex flex-col justify-center items-center">
                <img  className="rounded-full mb-1 h-10 w-10 md:w-16 md:h-16" src="https://via.placeholder.com/40" alt="الهلال" />
                <span className="font-bold sm:text-sm  md:text-xl">الهلال</span>
              </div>
              <div className="flex flex-col justify-center	items-center my-auto	">
                <span className="sm:text-sm md:text-xl mb-1">كأس خادم الحرمين </span>
                <span className="font-bold sm:text-base md:text-2xl ">18:00</span>
              </div>
              <div className="flex flex-col justify-center	items-center	">
                <img className="rounded-full mb-1 h-10 w-10 md:w-16 md:h-16" src="https://via.placeholder.com/40" alt="الهلال" />
                <span className="font-bold sm:text-sm md:text-xl">الهلال</span>
              </div>
          </div>
       </div>
    </div>
  )
}

export default CardMatch