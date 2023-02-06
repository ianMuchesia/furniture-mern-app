import React, {useState} from "react";
import { FiLogIn } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";
import logo from "../assets/logo.jpg"
import { NavLink } from "react-router-dom";

const styles = {
  links: `my-3 md:my-0 mx-2 xl:mx-4 hover:underline hover:text-lg transition duration-500 ease-out hover:ease-in hover:text-red-500 xl:mx-4 xl:text-xl `,
};

const Navbar = () => {

  const [toggle , setToggle ] = useState(false)

  const handleClick =()=>{
    setToggle(prevToggle=>!prevToggle)
  }
  return (
    <header>
      <nav className="p-2 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
        <div className="grid place-items-center">

          <img src={logo} className="h-10 w-10"/>
         
          <h6 className="text-xs">Home Furnish</h6>
          </div>
              <ul className="hidden md:flex justify-evely">
          
          <li className={ styles.links}><NavLink to="/">Home</NavLink></li>
            <li className={styles.links}><NavLink to="Shop">Shop</NavLink></li>
            <li className={styles.links}><NavLink to="About">About</NavLink></li>
            <li className={styles.links}><NavLink to="Contact">Contact</NavLink></li>
            
          </ul>
          
        
        </div>
        <div className="flex justify-evenly">
          <span className="text-4xl mx-1 lg:mx-3"><AiOutlineSearch/></span>
          <span  className="text-4xl mx-1 lg:mx-3"><FiLogIn/></span>
          <span  className="text-4xl mx-1 lg:mx-3"><AiOutlineShoppingCart/></span>
          {!toggle && <span  className="text-4xl mx-1 md:hidden" onClick={handleClick}><AiOutlineMenu/></span>}
        </div>
        </div>
          <ul className={`h-full top-0  flex  flex-col items-center justify-center absolute  text-lg font-bold gap-0 w-full bg-white z-[1] ${toggle?"h-screen":"hidden"} `}>
           <li className="mb-12"><span onClick={handleClick}><AiOutlineClose size={40}/></span></li> 
           <li className={ styles.links}><NavLink to="/">Home</NavLink></li>
            <li className={styles.links}><NavLink to="Shop">Shop</NavLink></li>
            <li className={styles.links}><NavLink to="About">About</NavLink></li>
            <li className={styles.links}><NavLink to="Contact">Contact</NavLink></li>
          </ul>
        
      </nav>
    </header>
  )
};

export default Navbar;
