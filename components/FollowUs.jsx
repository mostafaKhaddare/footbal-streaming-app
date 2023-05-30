
import {RiFacebookCircleFill , RiInstagramFill , RiTwitterFill , RiYoutubeFill}  from "react-icons/ri";
import {Title} from './index'
function FollowUs() {
  return (
    <>
    <div className=' foloow-us mb-8  rounded-t-lg'>
        <Title title={'تابعونا'} />
        <div className='social-media flex justify-center p-4  bg-slate-50 shadow'>
            <a href="/">
              <RiFacebookCircleFill className='text-5xl text-first-color ml-8'/>
            </a>
            <a href="/">
              < RiInstagramFill className='text-5xl ml-8 text-red-300'/>
            </a>
            <a href="/">
              <RiTwitterFill className='text-5xl ml-8  text-sky-500'/>
            </a>
            <a href="/">
              <RiYoutubeFill className='text-5xl text-red-500'/>
            </a>
        </div>
    </div>
    </>
  )
}
export default FollowUs