import {Licence} from "../components/index"
import { NextSeo } from "next-seo"

function dmca() {
  const infos ={
    title : "DMACA" ,
    engText : ` Our brand BE_ IN_ MATCH is a 3 word tag
      They are BE, IN, and MATCH sequentially, with spaces between them
      Any similarity between it and another brand is purely coincidental
      Our brand BE_IN_FOOT is not related to any brand and does not belong to the beIn Media brand.
      We have nothing to do with the transmission links that we take from a third party and we do not transmit any events or matches
      Our site is only an intermediary between the viewer and the content and we are not responsible for any breach of laws and any breach borne by the party from which we took the displayed content
      Also, the colors or shape of the site is far from any copying or fraud and we have no relationship with the BEIN Group `,
    frText : `Notre marque BE_ IN_ MATCH est une étiquette de 3 mots Ils sont BE, IN et MATCH séquentiellement, avec des espaces entre eux Toute similitude entre elle et une autre marque est purement fortuite Notre marque BE_IN_FOOT n'est liée à aucune marque et n'appartient pas à la marque beIn Media. Nous n'avons rien à voir avec les liens de transmission que nous prenons d'un tiers et nous ne transmettons aucun événement ou match Notre site n'est qu'un intermédiaire entre le spectateur et le contenu et nous ne sommes pas responsables de toute violation des lois et de toute violation supportée par la partie à laquelle nous avons pris le contenu affiché Aussi, les couleurs ou la forme du site sont loin de toute copie ou fraude et nous n'avons aucun lien avec le Groupe BEIN    `,
    arText : `علامتنا التجارية BE_ IN_ MATCH هي علامة تتكون من 3 كلمات وهي BE و IN و MATCH بالتتابع وبينهم فراغات أي تشابه بينها و بين علامة تجارية ثانية فهو من محض الصدفة علامتنا BE_ IN_ MATCH و لا علاقة لها بأي علامة تجارية ولا تنتمي لعلامة beIn Media لا من قريب و لا من بعيد لا علاقة لنا بروابط النقل التي نقوم بأخذها من طرف ثالث ولا ننقل أي أحداث أو مباريات موقعنا عبارة عن وسيط فقط بين المشاهد و المحتوى و لسنا مسؤولين عن أي خرق للقوانين وأي خرق تتحمله الجهة التي أخذنا منها المحتوى المعروض كما أن ألوان الموقع أو شكله بعيد كل البعد عن أي نسخ أو تحايل وليس لنا أي علاقة مع مجموعة BEIN    `
  }
  return (
    <>
    <NextSeo 
       title="DMCA"
       canonical="www.beinfoot.live/dmca"
       openGraph={
        {
          url :"www.beinfoot.live/dmca"
        }
       }
       />
    <Licence title={infos.title} eng={infos.engText} fr={infos.frText} arb={infos.arText}/>
    </>
  )
}

export default dmca