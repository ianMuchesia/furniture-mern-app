import React from 'react'
import LazyLoad from 'react-lazy-load';
import 'animate.css';
import { hero_section } from '../../assets';
import Loader from '../Loader';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
  <section>
    <div className='relative  w-full max-h-[800px] '>
    
    <img src={hero_section} alt="image" className='object-cover w-full max-h-[800px] min-h-[450px] rounded-xl md:rounded-2xl xl:rounded-3xl  opacity-60 sm:opacity-70 md:opacity-80 '/> 
 
      <div className="pt-10 absolute top-0 left-0 right-0 grid place-items-center gap-4">
      <h1 className="text-4xl font-bold  text-center  text-purple-800 lg:text-6xl xl:text-9xl ">Home Furnish</h1>
      <h3 className="text-center font-bold text-2xl text-yellow-900">Your Home, Your Style</h3>
      <Link to="Shop"> <button className='animate__animated animate__backInUp bg-purple-800 px-8 md:px-10 lg:font-bold lg:tracking-wider py-5 text-white text-xl rounded-lg cursor-pointer xl:text-2xl'>Start</button></Link>
     
      <h3 className="text-center text-lg text-purple-800 font-semibold mt-4 sm:hidden">Upgrade your lifestyle with our furniture now!</h3>
      </div>
        
    </div>
    </section>
  )
}

export default Hero