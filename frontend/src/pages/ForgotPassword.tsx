import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { baseURL } from '../service';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const ForgotPassword = () => {

  const navigate = useNavigate()

  const [ emailForm , setEmailForm ] = useState("")

  const [successMessage , setSuccessMessage ] = useState("")
  const [errorMessage , setErrorMessage ] = useState("")


  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
   
    try {
      const response = await fetch(`${baseURL}auth/forgotPassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:emailForm}),
      });

      const data = await response.json()
      console.log(data)
      if(data.success){
        toast.success(" Please check your email for your reset password")
        setSuccessMessage(data.msg)       
      }
     
      
    } catch (error:any) {
  
      console.log(error)
      
      toast.error(error)
    }


  }
  return (
    <section className='flex flex-col gap-4 sm:p-12'>
      <ToastContainer/>
    <h3 className='text-center text-3xl font-bold my-6 '>
      Please input your email to recover your account
    </h3>
    <div className="sm:flex items-center justify-center flex-row-reverse">
    
       <form className='flex flex-col p-4 gap-6 md:p-12 border-2  rounded-xl mx-2 md:mx-10 sm:w-[400px] ' onSubmit={handleSubmit}>
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