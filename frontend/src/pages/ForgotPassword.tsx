import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  const [ emailForm , setEmailForm ] = useState("")
  return (
    <section className='flex flex-col gap-4 sm:p-12'>
    <h3 className='text-center text-3xl font-bold my-6 '>
      Please input your email to recover your account
    </h3>
    <div className="sm:flex items-center justify-center flex-row-reverse">
    
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
        value={emailForm}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setEmailForm(e.target.value)}}
        />
    </div>
  
     
      <button className='bg-purple-800 text-white py-2 px-4 rounded-lg mx-auto min-w-[70%] text-2xl'>Submit </button>
      <h3 className='text-center font-medium  text-lg'>{"  "}</h3>
    </form>
    </div>
  </section>
  )
}

export default ForgotPassword