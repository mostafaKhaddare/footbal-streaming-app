
function Title({title , date }) {
  return (
    <>
    <div className={`title  flex space-between py-2 md:py-3 px-4 bg-first-color justify-between rounded-t-lg text-white font-bold`}>
        <h1 className="text-sm md:text-xl">  {title} </h1>
        <span className="text-sm md:text-xl"> {date} </span>
    </div>
    </>
  )
}

export default Title