import {Licence} from "../components/index"
import { NextSeo } from "next-seo"

function copyright() {
  const infos ={
    title : "COPY RIGHT" ,
    engText : "Our brand MostafaTv is a 2-word tag. They are Mostafa, Tv, and sequentially, with spaces between them. Any similarity with another brand is purely coincidental. Our brand MostafaTv is not related to any other brand and does not belong to the beIn Media brand. We have no involvement with the transmission links we obtain from a third party, and we do not broadcast any events or matches. Our site only acts as an intermediary between the viewer and the content, and we are not responsible for any violations of laws or any breaches committed by the party from whom we obtained the displayed content. Additionally, the colors or layout of the site are distinct and not intended to copy or deceive, and we have no affiliation with the Yaccine or BEIN Group",
    frText : "Notre marque MostafaTv est un tag de 2 mots. Ils sont Mostafa, Tv, et séquentiellement, avec des espaces entre eux. Toute similitude avec une autre marque est purement fortuite. Notre marque MostafaTv n'est liée à aucune autre marque et n'appartient pas à la marque beIn Media. Nous n'avons rien à voir avec les liens de transmission que nous obtenons d'un tiers et nous ne diffusons aucun événement ou match. Notre site n'est qu'un intermédiaire entre le spectateur et le contenu et nous ne sommes pas responsables de toute violation des lois et de toute infraction commise par la partie à partir de laquelle nous avons pris le contenu affiché. De plus, les couleurs ou la forme du site sont loin de toute copie ou fraude et nous n'avons aucune relation avec le groupe BEIN OR YACCINE",
    arText : "ماركتنا مصطفى تي في هو وسم مكون من 3 كلمات. هم مصطفى، تي في، وبتتابع، مع وجود مسافات بينهم. أي تشابه مع علامة تجارية أخرى هو صدفة بحتة. ماركتنا مصطفى تي في غير مرتبطة بأي علامة تجارية أخرى ولا تنتمي إلى علامة beIn Media. ليس لدينا أي علاقة بروابط البث التي نحصل عليها من جهة ثالثة ونحن لا نقوم بنقل أي أحداث أو مباريات. موقعنا هو فقط وسيط بين المشاهد والمحتوى ونحن لسنا مسؤولين عن أي انتهاك للقوانين وأي انتهاك يتحمله الطرف الذي حصلنا منه على المحتوى المعروض. بالإضافة إلى ذلك، فإن الألوان أو شكل الموقع بعيدة عن أي نسخ أو احتيال وليس لدينا أي علاقة بمجموعة BEIN OR  Yaccine"
  }
  return (
    <>
    <NextSeo 
       title="Copyright"
       canonical="https://www.mostafatv.com/copyright"
       openGraph={
        {
          url :"https://www.mostafatv.com/copyright"
        }
       }
       />
    <Licence title={infos.title} eng={infos.engText} fr={infos.frText} arb={infos.arText}/>
    </>
  )
}
export default copyright