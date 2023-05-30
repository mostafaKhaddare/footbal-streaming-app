import {useState} from "react";
import { NavList } from "./index";
import {RxHamburgerMenu} from "react-icons/rx"
import {MdOutlineClose} from "react-icons/md"
import { useRouter } from 'next/router';
import {Cairo} from "@next/font/google"
const cairo = Cairo({weight : "400"})

function Navbar() {
  
  const [isActive, setIsActive] = useState(false);
  const router = useRouter();
  
  const [navigations, setNavigation] = useState([
    {
    id : 1,
    name  : "الرئيسية",
    link : '/',
  },
  {
    id : 2,
    name  : "اهداف و ملخصات",
    link : '/summury',
  },
  {
    id : 3,
    name  : "مباريات اليوم",
    link : '/today',
  },
  {
    id : 4,
    name  : "راسلنا",
    link : '/contact',
  }
  ,
  {
    id : 5,
    name  : "DMCA",
    link : '/dmca',
  },
  {
    id : 6,
    name  : "CopyRight",
    link : '/copyright',
  }
]);

  // fc to toggle classes 
  const  toggleClass = ()=>{
    setIsActive(!isActive)
  }

  return (
    <>
    <nav className={`${cairo.className} bg-stone-800  fixed top-0 right-0 left-0 z-50 py-3 `}>
      <div className="container flex justify-between justify-items-center px-2 md:px-[4rem]  ">
        {/* logo */}
        <div className="logo">
         <a href={"/"}>
          <h1 className="text-3xl text-white font-bold"> be<span className="text-first-color">in</span>foot </h1>
         </a> 
        </div>
         {/* menue */}
         <ul className="hidden lg:nav-links">
         {navigations.map((item)=>(
          <NavList 
          key={item.id} 
          className={router.pathname === item.link ? 'text-first-color border-solid border-b-2 md:ml-6 last:ml-0 lg:ml-10 md:text-lg md:flex-none ease-in duration-300 leading-8	' : 'md:ml-6 last:ml-0 lg:ml-10 md:text-lg  md:flex-none ease-in duration-300 leading-8	'} 
          data={item} />
         ))}
        </ul>

         {/* burger */}
        <div className="burger lg:hidden">
           <RxHamburgerMenu className={`${isActive ? "hidden" : "text-white text-3xl" }`} onClick={toggleClass} />
           <MdOutlineClose className={`${isActive ? "text-first-color text-3xl" : "hidden" }`} onClick={toggleClass}/>
        </div>
        
        {/* collapse menue */}
        <ul className={`${isActive ? 'translate-x-[0]' : 'translate-x-[-100%]'} lg:hidden flex bg-stone-800 absolute top-[99%] left-0 h-screen flex-col justify-start w-2/4 items-center text-white	z-50 ease-in duration-300 py-12`}>
         {navigations.map((item)=>(
          <NavList 
          key={item.id} 
          className={router.pathname === item.link ? 'text-first-color border-solid border-b-2 mb-20 p-2 rounded ease-in duration-300' : 'mb-20 ease-in duration-300'}  
          data={item} 
          />
         ))}
          </ul>
      </div>
   </nav>
    </>

  )
}

export default Navbar
