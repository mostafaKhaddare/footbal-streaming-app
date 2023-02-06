import { NextSeo } from "next-seo"
import { Title } from "../components"
import { useFormik } from "formik"
import {basicSchema} from "../schemas/index"
import { sendContactForm } from "../services"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function contact() {
  const notify = () => toast.success("لقد تم ارسال رسالتك بنجاح" , {autoClose: 1000,});
  const onSubmit = async (values , actions)=>{
    await sendContactForm(values)
    notify()
    actions.resetForm()
  }

   const {values , handleChange , handleSubmit , errors ,touched, handleBlur , isSubmitting} = useFormik({
    initialValues : {
      name : "",
      email : "",
      message : ""
    },
    validationSchema : basicSchema,
    onSubmit,
   })
  return (
    <>
     <NextSeo 
       title="contact us"
       canonical="www.beinfoot.live/contact"
       openGraph={
        {
          url :"www.beinfoot.live/contact"
        }
       }
       />
       <Title title="راسلنا" />
       <div className="py-5 px-3 bg-slate-50 shadow">
           <form onSubmit={handleSubmit} autoComplete='off'>
            <div className="mb-2">
                  <input 
                        onChange={handleChange} 
                        value={values.name} 
                        onBlur={handleBlur}
                        className={`${errors.name && touched.name ? "border-b-2 border-red-500" : ""} main-input`} 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="الاسم الكامل" 
                   />
                  {errors.name && touched.name ?  <p className="text-red-500 text-right "> {errors.name} </p> : ""}
            </div>
              <div  className="mb-2">
                    <input 
                        onChange={handleChange} 
                        value={values.email} 
                        onBlur={handleBlur}
                        className={`${errors.email && touched.email ? "border-b-2 border-red-500" : ""} main-input`} 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="example@gmail.com"
                     />
                  {errors.email && touched.email ?  <p className="text-red-500 text-right "> {errors.email} </p> : ""}
              </div>
               <div  className="mb-2">
                    <textarea 
                        onChange={handleChange} 
                        value={values.message} 
                        onBlur={handleBlur}
                        className={`${errors.message && touched.message ? "border-b-2 border-red-500" : ""} main-input h-52 resize-none`} 
                        name="message" 
                        id="message" 
                        placeholder="اترك تعليقك">
                    </textarea>
                    {errors.message && touched.message ? <p className="text-red-500 text-right "> {errors.message} </p> : ""}
               </div>
             <button className={`${isSubmitting ? "opacity-30" : ""} p-2 text-white bg-first-color rounded-md block cursor-pointer  `} type="submit">
             ارسل تعليقك
            </button>
          </form>
          <ToastContainer />
       </div>
      
    </>
  )
}

export default contact