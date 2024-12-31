import React from "react";
import InputField from "../Foundations/InputField";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-blue-400">
        <div className=" bg-sky-100 rounded-lg shadow-md shadow-slate-500">
          <h1 className="text-center text-black text-lg font-medium font-custom mt-10 ">
            Login to EMS
          </h1>
          <form className="flex flex-col  px-24 py-10 mt-0 max-w-[500px]">
          
            <InputField label="Email" placeholder="Enter your email" type="text"/>
            <InputField label="Password" placeholder="Enter your password"
            type="password"/>

            <button
              className="bg-blue-600 mt-8 text-white font-semibold p-2 rounded-lg shadow-lg hover:bg-blue-500"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
