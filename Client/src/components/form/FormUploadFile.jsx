import React, { useState } from "react";
import { resizeImage } from "../../utils/resizeimage";
import { useAuth } from "@clerk/clerk-react";
import { uploadImage } from "../../api/uploadfile";
import { RotateCw } from "lucide-react";

const FormUploadFile = ({ setValue,errors }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();
  const hdlOnchange = async (e) => {
    setIsLoading(true);
    const token = await getToken();
    const file = e.target.files[0];
    if (!file) return;
    try {
      const resizedImage = await resizeImage(file);
      const res = await uploadImage(token, resizedImage);
      setValue("image", res.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div className="space-y-1">
      <p className="capitalize">pick a file</p>
      <div className="flex items-center gap-2">
        <input
          type="file"
          className="file-input w-full"
          onChange={hdlOnchange}
        />
        {isLoading && <RotateCw className="animate-spin" />}
      </div>
      {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
    </div>
  );
};

export default FormUploadFile;
