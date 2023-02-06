import * as yup from 'yup';

export const basicSchema = yup.object().shape({
  name: yup.string().trim().required("حقل مطلوب")
           .min(4 ,"يجب ان يتكون اسمك  من  4 حروف  على الاقل")
           .max(20 ,"لا يجب ان يتعدى اسمك 20 حرفا"),
  email: yup.string().email("يرجى إدخال البريد الإلكتروني الصحيح").required("حقل مطلوب"),
  message : yup.string().trim().required("حقل مطلوب")
           .min(20 ,"يجب ان يتكون اسمك  من  20 حروف  على الاقل").
           max(200,"لا يجب ان يتعدى اسمك 200 حرفا")
});