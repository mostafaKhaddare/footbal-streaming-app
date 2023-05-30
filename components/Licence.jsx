import {Title} from './index'

function Licence({title , eng , arb , fr}) {
  return (
    <>
      <div className='mb-8 bg-slate-50'>
      <Title title={title}/>
      <article dir='ltr' className='mb-3 mt-4 px-4'>
        <h3 className='text-4xl text-left py-1 text-black' > EN </h3> 
        <p className=' text-justify leading-relaxed sm:text-base md:text-lg  text-gray-500'>
          {eng}
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
      </article>
      
      <article dir='ltr' className='mb-3 px-4'>
        <h3 className='text-4xl text-left py-1 text-black' > FR </h3> 
        <p className=' text-justify leading-relaxed sm:text-base md:text-lg  text-gray-500'>
          {fr}
        </p>
        <hr className="h-px my-8 bg-gray-200 border-0 "></hr>
      </article>
      <article className=' px-4'>
        <h3 className='text-4xl text-right py-1 text-black' > AR </h3> 
        <p className=' text-justify leading-relaxed sm:text-base md:text-lg  text-gray-500'>
          {arb}
        </p>
      </article>
    </div>
    </>
  )
}

export default Licence