import Head from "next/head"
import { Navbar } from ".";
import { Footer } from "./";
function Layout({children}){
   return (
    <>
     <Head>
        <title>beinfoot</title>
        <meta name="description" content="This is the page home" />
     </Head>
     <header>
       <Navbar/>
     </header> 
     <div className="container mx-auto px-6">
     <main className="py-5 direction-rtl">
        {children}
     </main>
    </div>
     <footer>
        <Footer/>
     </footer>
    </>
   )
}
export default Layout;
