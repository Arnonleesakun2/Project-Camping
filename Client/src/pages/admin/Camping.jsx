import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import FormTextArea from "../../components/form/FormTextArea";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "../../utils/schemas";
import Buttons from "../../components/form/Buttons";
import CategoriesInput from "../../components/form/CategoriesInput";
import MainMap from "../../components/maps/MainMap";
import { useAuth } from "@clerk/clerk-react";
import { createCamping } from "../../api/camping";
import FormUploadFile from "../../components/form/FormUploadFile";
import { createAlert } from "../../utils/createAlert";

const Camping = () => {
  const { register, handleSubmit, formState, setValue, reset } = useForm({
    resolver: zodResolver(campingSchema),
  });
  const { errors, isSubmitting } = formState;
  const { getToken } = useAuth();
  const hdlSubmit = async (data) => {
    await new Promise((resoLve) => setTimeout(resoLve, 3000));
    const token = await getToken();
    createCamping(token, data)
      .then((res) => {
        reset();
        createAlert("success", res.data.message);
      })
      .catch((error) => {
        createAlert("error", error.response.data.message);
      });
  };
  return (
    <section>
      <h1 className="text-2xl font-semibold">CrateCamping</h1>
      <div className="p-8 my-4 rounded-md shadow-2xl border border-gray-200">
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <FormInput
              name="title"
              register={register}
              label="Your title"
              type="text"
              errors={errors}
            />
            <FormInput
              name="price"
              register={register}
              label="Your price"
              type="number"
              errors={errors}
            />
            <FormTextArea
              name="description"
              register={register}
              errors={errors}
            />
            <div className="space-y-2">
              <CategoriesInput
                name="category"
                register={register}
                setValue={setValue}
                errors={errors}
              />
              <FormUploadFile errors={errors} setValue={setValue} />
            </div>
          </div>
          <MainMap register={register} setValue={setValue} />
          <div className="flex justify-center mt-4">
            <Buttons
              text="Crate Camping"
              isSubmitting={isSubmitting}
              type="submit"
              color="btn-accent"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Camping;
