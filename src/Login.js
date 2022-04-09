


import { Formik,Form,Field } from "formik";
import { useHistory } from "react-router-dom";


import React from 'react'

const Login = ({data}) => {
  const history=useHistory();

  return (
    <Formik 
    initialValues={{
    
      password: "",
      email: "",
    }}
    validate={(values) => {
      console.log(values);
      const errors = {};
      if (!values.email) {
        errors.email = "Required email address";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if(!values.password){
        errors.password ='Required  password';
      }else if (
      !/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(values.password)
      ){
        errors.password = "Invalid password";
      }
      
      return errors;
    }}
    onSubmit={(values) => {
      console.log(values);
    history.push('/meals')
    data();


    }}
    >{
      ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      })=>(
      <Form >
      <label>Password:</label>
          <Field name="password" type="password" onChange={handleChange} onBlur={handleBlur} />
          <p style={{ color:'red'}}>{errors.password &&  touched.password && errors.password}</p>
          <br />
          <br />
          <label>Email:</label>
          <Field name="email" type="email" onChange={handleChange} onBlur={handleBlur} />
          <p style={{ color:'red'}}>{errors.email &&  touched.email && errors.email}</p>

       {/* <p style={{color:'red'}}>{errors.email &&  touched.email && errors.email}<p/> */}
          <br />
          <br />
      <button type="submit" disabled={isSubmitting}>Click</button>


      </Form>
      )}
    </Formik>
  )
}

export default Login
/*
import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const Login = ({data}) => {
    const history=useHistory()

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailIsValid = email.trim() !== "" && email.includes("@");

  const passwordIsValid = password.trim()!== "" && password.trim().length > 6;

  const EmailHandler = (e) => {
    setemail(e.target.value);
  };
  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();
    history.push('/meals')
    const a=data();
   // cartShow();
     console.log("data",a);
    {(emailIsValid && passwordIsValid) && (
    alert("succesfully login ")) };
  };
 
  return (
    <form onSubmit={Submit}>
      <label>Email</label>
      <input type="text " 
      name="email" 
      value={email}
       onChange={EmailHandler} />
      {!emailIsValid && <p>please enter valid email</p>}     <br/> <br/>
 
      <label>password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={passwordHandler}
      />
      {!passwordIsValid && <p>please enter valid password</p>}    <br/> <br/>

      <button type="submit " disabled={!emailIsValid || !passwordIsValid}>Click</button>
    </form>
  );
};

export default Login;
*/