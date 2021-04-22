import React,{useState, FormEvent} from 'react';
import { typetactions } from './../hooks/typedactioncreators';
import { Formik } from 'formik';
import styles from '../style/auth.module.css'
const auth:React.FC<{}> = () => {
    const [email, setemail] = useState<string>('');
    const [password, setpassword] = useState<string>('');
    const {loginaction}= typetactions()
    // const onsubmit=(event:FormEvent)=>{
    //         event.preventDefault()
    //         loginaction({email,password})
            
    // }
    const onsubmit=(user:user)=>{
        loginaction(user)
        
}
interface user{
    email:string,
    password:string
}
    interface errors{
        email?:string,
        password?:string
    }
    return (
        <div>
            <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors:errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         if (!values.password || values.password.length < 6 ){
             errors.password="password must be longer then 6"
         }
         return errors;
       }}
       onSubmit={(values) => {
        onsubmit(values)
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleSubmit
       }) => (

         <form className={styles.formwraper} onSubmit={handleSubmit}>
           <input
             type="email"
             name="email"
             onChange={handleChange}
             value={values.email}
           />
           {errors.email && touched.email && <span className={styles.formik_error}>{errors.email}</span>}
           <input
             type="password"
             name="password"
             onChange={handleChange}
             value={values.password}
           />
           {errors.password && touched.password && <span className={styles.formik_error}>{errors.password}</span> }
           <button type="submit">
             Submit
           </button>
         </form>
       )}
     </Formik>
        </div>
    );
}

export default auth;
