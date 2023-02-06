import Router from 'next/router'
import dynamic from 'next/dynamic';
import { Title , Presentation } from '.././index';
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false
});

// player functioin
function Player({post}) {

  // MATCH DATA
  const {teamOne , teamTwo, linkOne , linkTwo , start , finish } = post

  // reload page
  const reloadPage = () =>{
    Router.reload(window.location.pathname)
  }  

  return (
    <>
       <Presentation post={post}/>
       <Title title={`مشاهدة ${start && finish ? "ملخص" : ""} فريق ${teamOne} ضد فريق ${teamTwo}`} />
        <div className='py-5 px-3 bg-slate-50 shadow mb-8'>
             {/* PLAYER TOP */}
             <div className="player bg-white rounded-lg w-full ">
                  <div className="quality flex justify-between items-center p-4  ">
                        <div className=" text-base md:text-2xl quality-one bg-first-color text-white rounded px-10 py-1 md:w-80 cursor-pointer	">
                             البث الرئيسي 
                         </div>
                  </div>
             </div>
             {/* PLAYER */}
             { !start  ?   <img src="https://via.placeholder.com/200.png/09f/fff" width="100%" height='' alt="test1" /> 
             :
             <ReactPlayer 
                className='bg-slate-900'
                width="100%" 
                height="24rem"  
                url={start && !finish ? linkOne : linkTwo}
                controls 
                playing
             />  }
             {/* PLAYER BOTTOM */}
             <div className="bg-white  text-center p-2 rounded-b-lg">
                   <button onClick={reloadPage} className="reload  bg-red-600  text-center p-1 text-white rounded w-fit flex px-6 mr-1">  تحديث الصفحة  </button>
             </div>
        </div>
    </>
  )
}

export default Player