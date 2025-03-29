import React from "react";

const FormTextArea = ({ name, register, errors }) => {
  return (
    <div className="space-y-1">
      <p className="capitalize">{name}</p>
      <textarea
        {...register(name)}
        className={`textarea w-full h-[130px] ${errors[name] && "input-error"}`}
        placeholder="Description" required
      ></textarea>
      {
        errors[name] && <p className="text-red-400 text-sm">{errors[name].message}</p>
      }
    </div>
  );
};

export default FormTextArea;
