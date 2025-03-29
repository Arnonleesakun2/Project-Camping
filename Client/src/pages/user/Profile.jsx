import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "../../utils/schemas";
import { createProfile } from "../../api/profile";
//clerk imports
import { useAuth } from "@clerk/clerk-react";
import { createAlert } from "../../utils/createAlert";

const Profile = () => {
  const { register, handleSubmit, formState, setValue } = useForm({
    resolver: zodResolver(profileSchema),
  });
  const { errors, isSubmitting } = formState;
  //clerk
  const { getToken, userId } = useAuth();
  const hdlSubmit = async (data) => {
    // await new Promise((resoLve) => setTimeout(resoLve, 3000));
    const token = await getToken();
    createProfile(token, data)
      .then((res) => {
        createAlert("success", res.data.message);
      })
      .catch((error) => {
        createAlert("success", error.response.data.message);
      });
  };
  return (
    <section>
      <h1 className="text-2xl font-semibold">CrateProfile</h1>
      <div className="p-8 my-4 rounded-md shadow-2xl border border-gray-200">
        <div className="w-[50%] mx-auto">
          <form onSubmit={handleSubmit(hdlSubmit)}>
            <FormInput
              name="firstname"
              register={register}
              label="Your firstname"
              type="text"
              errors={errors}
            />
            <FormInput
              name="lastname"
              register={register}
              label="Your lastname"
              type="text"
              errors={errors}
            />
            <div className="flex justify-center mt-4">
              <Buttons
                text="Crate Profile"
                // isSubmitting={isSubmitting}
                type="submit"
                color="btn-accent"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
