
import React, {useState} from 'react'
import Lottie from "lottie-react";
import signUpAnimation from '../assets/96546-login-morado.json'
import { Link } from 'react-router-dom';

const SignUp = () => {



  const [signUpForm , setsignUpForm] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })

 
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setsignUpForm(prevForm=>({
      ...prevForm,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <section className='flex flex-col gap-4 sm:p-12'>
      <h3 className='text-center text-3xl font-bold my-6 '>
       Create Your Home Furnish Account
      </h3>
      <div className="sm:flex items-center justify-center flex-row-reverse">
      <div className="hidden md:block w-[400px] border-3">
      <Lottie animationData={signUpAnimation} loop={true}></Lottie>   
      </div>
         <form className='flex flex-col p-4 gap-6 md:p-12 border-2  rounded-xl mx-2 md:mx-10 md:w-[400px] '>
         <div className="grid">
        <label htmlFor='firstName'>
          First Name
          </label>
          <input
          id="firstName"
          type='name'
          name="firstName"
          placeholder='First Name'
          className=' border-none text-black font-bold bg-purple-800/10 focus:outline-none rounded-[10px] p-2'
          value={signUpForm.firstName}
          onChange={handleChange}
          />
      </div>
      <div className="grid">
        <label htmlFor='lastName'>
          Last Name
          </label>
          <input
          id="lastName"
          type='lastName'
          name="name"
          placeholder='Last Name'
          className=' border-none text-black font-bold bg-purple-800/10 focus:outline-none rounded-[10px] p-2'
          value={signUpForm.lastName}
          onChange={handleChange}
          />
      </div>
      <div className="grid">
        <label htmlFor='email'>
          Email
          </label>
          <input
          id="email"
          type='email'
          name="email"
          placeholder='e.g yourname@email.com'
          className=' border-none text-black font-bold bg-purple-800/10  focus:outline-none rounded-[10px] p-2'
          value={signUpForm.email}
          onChange={handleChange}
          />
      </div>
      <div className="grid">
        <label htmlFor='password'>
          Password </label>
          <input
          id="password"
          type='password'
          name="password"
          value={signUpForm.password}
          autoComplete='off'
          className=' border-none text-black font-bold bg-purple-800/10 focus:outline-none rounded-[10px] p-2'
          onChange={handleChange}
          />
      
      </div>
        <h3 className='text-center font-medium text-red-600 text-lg'>Error</h3>
        <button className='bg-purple-800 text-white py-2 px-4 rounded-lg mx-auto min-w-[70%] text-2xl'>Sign Up </button>
        <h3 className='text-center font-medium  text-lg'>You already have an account? <Link to='/Login' > <b>Click here Login</b></Link></h3>
      </form>
      </div>
    </section>
  )
}

export default SignUp