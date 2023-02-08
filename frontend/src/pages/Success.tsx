import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { runFireworks } from "../utils/fireWorks";
const Success=()=>{

    useEffect(()=>{
        runFireworks();
    },[])
    return(
        <section>
        <div className="success-wrapper">
        <div className="success">
          <p className="icon">
            <BsBagCheckFill />
          </p>
          <h2>Thank you for your order!</h2>
          <p className="email-msg">Check your email inbox for the receipt.</p>
          <p className="description">
            If you have any questions, please email
            <a className="email" href="mailto:order@example.com">
              homefurnish@furniture.com
            </a>
          </p>
          <Link to="/">
            <button type="button"  className="btn bg-purple-800 w-[300px]">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      </section>
    )

}

export default Success