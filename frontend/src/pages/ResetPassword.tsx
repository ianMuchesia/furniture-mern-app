import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseURL } from "../service";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((prevPass) => ({
      ...prevPass,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password.password || !password.confirmPassword) {
      setErrorMessage("please fill all the inputs");
      toast.warn("please fill all the inputs");
      return;
    }
    if (password.password !== password.confirmPassword) {
      setErrorMessage("passwords do not match");
      toast.warn("passwords do not match");
      return;
    }
    if (password.password.length <= 6) {
      setErrorMessage("password too short");
      toast.warn("password too short");
      return;
    }
    try {
      console.log(" i am here")
      const response = await fetch(`${baseURL}auth/resetpassword/${token}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password:password.password }),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        toast.success("password reset was successfully");
        navigate("/Login");
        setPassword({
          password:"",
          confirmPassword:""
        })
      }
      toast.error(data.msg)
      setErrorMessage(data.msg + ", expires after 5 minutes")
    } catch (error) {
      console.log(error);
      toast.error("something wrong happened");
    }
  };

  return (
    <section>
      <section className="flex flex-col gap-4 sm:p-12">
        <ToastContainer />
        <h3 className="text-center text-3xl font-bold my-6 ">
          Create Your New Password
        </h3>
        <div className="sm:flex items-center justify-center flex-row-reverse">
          <form
            className="flex flex-col p-4 gap-6 md:p-12 border-2  rounded-xl mx-2 md:mx-10 sm:w-[400px] "
            onSubmit={handleSubmit}
          >
            <div className="grid">
              <label htmlFor="email">Enter New Password</label>
              <input
                type="password"
                name="password"
                className=" border-none text-black font-bold bg-purple-800/10 focus:outline-none rounded-[10px]"
                value={password.password}
                onChange={handleChange}
              />
            </div>
            <div className="grid">
              <label htmlFor="email">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                className=" border-none text-black font-bold bg-purple-800/10 focus:outline-none rounded-[10px]"
                value={password.confirmPassword}
                onChange={handleChange}
              />
            </div>
  {errorMessage && <h3 className='text-center font-medium text-red-600 text-lg'>{errorMessage}</h3>}
            <button className="bg-purple-800 text-white py-2 px-4 rounded-lg mx-auto min-w-[70%] text-2xl">
              Submit{" "}
            </button>
            <h3 className="text-center font-medium  text-lg">{"  "}</h3>
          </form>
        </div>
      </section>
    </section>
  );
};

export default ResetPassword;
