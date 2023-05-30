import {Presentation , Player, PostWidget , Title } from "../../components"
import {getMatches, getPostDetails } from "../../services"
import { NextSeo } from 'next-seo'


function MatchDetails({post}) {
  const {teamOne , teamTwo , league , linkOne} = post
  

  
  return (
    <>
     <NextSeo 
       title={`مشاهدة مباراة فريق ${teamOne} ${teamTwo} ${league} بمواجهة فريق المغرب الفاسي برسم البطولة المغربية الإحترافية`}
       canonical={ 'https://www.mostafatv.com' + post.slug}
       openGraph={
        {
          url : "https://www.mostafatv.com" + post.slug
        }
       }
       />

        <Player post={post}/>
    </>
  )
}

 export default MatchDetails

 export async function getStaticProps({params}){
  const post = await getPostDetails(params.slug)
  return{
    props : { post}
  }
 }

 export async function getStaticPaths(){
  const posts = await getMatches()
  return{
    paths : posts.map(({slug}) => ({params : {slug}}) ) ,
    fallback : false
  }
 }