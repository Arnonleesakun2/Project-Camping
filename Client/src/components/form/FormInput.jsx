import React from "react";

const FormInput = ({name,register,type,label,errors}) => {
  return (
    <div className="space-y-1">
      <p className="capitalize">{name}</p>
      <label htmlFor={name} className="floating-label ">
        <span>{label}</span>
        <input
          {...register(name)}
          type={type}
          placeholder={name}
          className={`input input-md w-full ${errors[name] && "input-error"}`}
        required/>
      </label>
      {
        errors[name] && (<p className="text-red-400 text-sm">{errors[name].message}</p>)
      }
    </div>
  );
};

export default FormInput;
