import { Navbar , Footer , AboutUs , AdsPannel, PostWidget , ToTopButton } from "./index";
import {Cairo} from "@next/font/google"
import { useRouter } from 'next/router';

const cairo = Cairo({
   weight : "400",
   subsets: ['latin'],
})

function Layout({children}){
   const router = useRouter();
   return (
    <>
     <header  className="mb-16">
       <Navbar />
     </header> 
     <main className={`${cairo.className} container py-8 mx-auto px-2 md:px-[4rem] `}>
        <div className=" xl:grid  xl:grid-cols-3 gap-8 ">
            <div className="right-side text-center lg:col-span-2 ">
                {children}
            </div>
         <div className="left-side">
            <PostWidget slug={router.query.slug}/>
         </div>
        </div>
      <AboutUs/>
      <ToTopButton/>      
     </main>
     <footer>
        <Footer/>
     </footer>
    </>
   )
}
export default Layout;
