import Link from "next/Link";
import {RiFacebookCircleFill , RiInstagramFill , RiTwitterFill , RiYoutubeFill}  from "react-icons/ri";
import {Title} from '../index'
function FollowUs() {
  return (
    <>
    <div className=' foloow-us mb-8  rounded-t-lg'>
        <Title title={'تابعونا'} />
        <div className='social-media flex justify-center p-4  bg-slate-50 shadow'>
            <Link href="/">
              <RiFacebookCircleFill className='text-5xl text-first-color ml-8'/>
            </Link>
            <Link href="/">
              < RiInstagramFill className='text-5xl ml-8 text-red-300'/>
            </Link>
            <Link href="/">
              <RiTwitterFill className='text-5xl ml-8  text-sky-500'/>
            </Link>
            <Link href="/">
              <RiYoutubeFill className='text-5xl text-red-500'/>
            </Link>
        </div>
    </div>
    </>
  )
}
export default FollowUs