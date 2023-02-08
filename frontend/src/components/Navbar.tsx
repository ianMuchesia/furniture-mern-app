import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";

const styles = {
  links: `my-3 md:my-0 mx-2 xl:mx-4 hover:underline hover:text-lg transition duration-500 ease-out hover:ease-in hover:text-red-500 xl:mx-4 xl:text-xl `,
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const dispatch = useAppDispatch();

  const cartItemsQuantity = useAppSelector((state) => state.cart.totalQuantity);
  console.log(cartItemsQuantity);

  const handleClick = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <header>
      <nav className="p-2 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="grid place-items-center">
              <NavLink to="/">
                <img src={logo} className="h-10 w-10" />
              </NavLink>

              <h6 className="text-xs">Home Furnish</h6>
            </div>
            <ul className="hidden md:flex justify-evely">
              <li className={styles.links}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={styles.links}>
                <NavLink to="Shop">Shop</NavLink>
              </li>
              <li className={styles.links}>
                <NavLink to="About">About</NavLink>
              </li>
              <li className={styles.links}>
                <NavLink to="Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-evenly">
            <span className="text-4xl mx-1 lg:mx-3">
              <AiOutlineSearch />
            </span>
            <span className="text-4xl mx-1 lg:mx-3">
              <FiLogIn />
            </span>
            <NavLink to="Cart" className="relative flex">
              <span className="text-4xl mx-1 lg:mx-3">
                <AiOutlineShoppingCart />
              </span>
              {cartItemsQuantity > 0 && (
                <span className="absolute right-0 top-0 rounded-full bg-red-600 w-5 h-5 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">{cartItemsQuantity}</span>
              )}
            </NavLink>
            {!toggle && (
              <span className="text-4xl mx-1 md:hidden" onClick={handleClick}>
                <AiOutlineMenu />
              </span>
            )}
          </div>
        </div>
        <ul
          className={`h-full top-0  flex  flex-col items-center justify-center absolute  text-lg font-bold gap-0 w-full bg-white z-[1] ${
            toggle ? "h-screen" : "hidden"
          } `}
        >
          <li className="mb-12">
            <span onClick={handleClick}>
              <AiOutlineClose size={40} />
            </span>
          </li>
          <li className={styles.links}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={styles.links}>
            <NavLink to="Shop">Shop</NavLink>
          </li>
          <li className={styles.links}>
            <NavLink to="About">About</NavLink>
          </li>
          <li className={styles.links}>
            <NavLink to="Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
