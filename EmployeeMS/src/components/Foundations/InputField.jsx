import React from "react";

const InputField = ({ label, placeholder, type }) => {
  return (
    <>
      <label htmlFor="password" className="text-sm mt-5">
        {label}
      </label>
      <input
        type={type}
        className="outline-none p-2 rounded-lg min-w-64 placeholder-slate-300 placeholder:text-sm shadow-md"
        placeholder={placeholder}
      />
    </>
  );
};

export default InputField;
