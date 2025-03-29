import React from "react";
import { RotateCw } from 'lucide-react';


const Buttons = ({text,isSubmitting,type,color}) => {
  return (
    <button type={type} className={`btn btn-outline ${color}`}>
        {
        isSubmitting ? <><RotateCw className="animate-spin"/><span>Please wait...</span></>:<p>{text}</p>
        }
    </button>
  );
};

export default Buttons;
