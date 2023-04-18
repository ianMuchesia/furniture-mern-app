import React, {useState} from 'react'
import Lottie from "lottie-react";
import loginAnimation from '../assets/96546-login-morado.json'
import { Link } from 'react-router-dom';
const Login = () => {

  const [loginForm , setLoginForm] = useState({
    email:"",
    password:"",
  })

 
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginForm(prevForm=>({
      ...prevForm,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <section className='flex flex-col gap-4 sm:p-12'>
      <h3 className='text-center text-3xl font-bold my-6 '>
        Welcome Back to Home Furnish
      </h3>
      <div className="sm:flex items-center justify-center flex-row-reverse">
      <div className="hidden md:block w-[400px] border-3">
      <Lottie animationData={loginAnimation} loop={true}></Lottie>   
      </div>
         <form className='flex flex-col p-4 gap-6 md:p-12 border-2  rounded-xl mx-2 md:mx-10 md:w-[400px] '>
      <div className="grid">
        <label htmlFor='email'>
          Email
          </label>
          <input
          type='email'
          name="email"
          placeholder='e.g yourname@email.com'
          className=' border-none text-black font-bold bg-purple-800/10 focus:outline-none rounded-[10px]'
          value={loginForm.email}
          onChange={handleChange}
          />
      </div>
      <div className="grid">
        <label htmlFor='password'>
          Password </label>
          <input
          type='password'
          name="password"
          value={loginForm.password}
          autoComplete='off'
          className=' border-none text-black font-bold bg-purple-800/10 focus:outline-none rounded-[10px]'
          onChange={handleChange}
          />
          <Link to="/ForgotPassword" className='font-bold text-sm'>Forgot Password?</Link>
      </div>
        <h3 className='text-center font-medium text-red-600 text-lg'>Error</h3>
        <button className='bg-purple-800 text-white py-2 px-4 rounded-lg mx-auto min-w-[70%] text-2xl'>Log in </button>
        <h3 className='text-center font-medium  text-lg'>You don't have an account? <Link to='/SignUp' > <b>Click here to Sign up</b></Link></h3>
      </form>
      </div>
    </section>
  )
}

export default Login