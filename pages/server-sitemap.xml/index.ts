import { GetServerSideProps } from "next";
import { getMatches } from "../../services";
import { getServerSideSitemap , ISitemapField } from "next-sitemap";

export const  getServerSideSiteProps : GetServerSideProps = async (ctx) => {
     const matches : any [] = await getMatches()
     const fields : ISitemapField[]  = matches.map((match)=> (
      {
         loc : `http://localhost:3000/matches/${match.id}`,
         lastmod : new Date().toISOString() 
      }

     ))
     
     return   getServerSideSitemap(ctx , fields)
      
}

export default function Site(){}