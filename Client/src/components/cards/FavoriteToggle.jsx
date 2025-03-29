import React, { useEffect, useState } from "react";
import { CardSingInButton, CardSubmitButton } from "./FavoriteButton";
import useCampingStore from "../../store/camping-store";
import { useForm } from "react-hook-form";
import { useAuth } from "@clerk/clerk-react";

const FavoriteToggle = ({ campingId, isFavorite }) => {
  //clerk
  const { getToken,isSignedIn } = useAuth();
  //hook from
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  //globalstate
  const actionAddorRemoveFavorite = useCampingStore(
    (state) => state.actionAddorRemoveFavorite
  );

  const hdlSubmit = async () => {
    const token = await getToken();
    await new Promise((resoLve) => setTimeout(resoLve, 1000));
    const res = await actionAddorRemoveFavorite(token, {
      campingId,
      isFavorite,
    });
    console.log(res);
  };
  if(!isSignedIn){
    return <CardSingInButton/>
  }
  return (
    <form onSubmit={handleSubmit(hdlSubmit)}>
      <CardSubmitButton isSubmitting={isSubmitting} isFavorite={isFavorite} />
    </form>
  );
};

export default FavoriteToggle;
