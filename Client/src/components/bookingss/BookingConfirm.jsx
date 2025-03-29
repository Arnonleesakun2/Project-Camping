import React, { useEffect } from "react";
import Buttons from "../form/Buttons";
import useBookingStore from "../../store/booking-store";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { createBooking } from "../../api/booking";
import { useNavigate } from "react-router";

const BookingConfirm = () => {
  //global state
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;
  const campingId = useBookingStore((state) => state.campingId);
  //clerk
  const { getToken, userId } = useAuth();
  //Hookfrom
  const { handleSubmit, setValue, formState } = useForm();
  const { isSubmitting } = formState;
  //Navigate
  const navigate = useNavigate();
  if (!userId) {
    return (
      <div className="card-actions justify-center mt-6">
        <SignInButton
          mode="modal"
          forceRedirectUrl={`/user/camping/${campingId}`}
        >
          <button className="btn btn-outline btn-primary">Login Please</button>
        </SignInButton>
      </div>
    );
  }
  useEffect(() => {
    if (campingId) setValue("campingId", campingId);
    if (checkIn) setValue("checkIn", checkIn);
    if (checkOut) setValue("checkOut", checkOut);
  }, [range]);
  const hdlBooking = async (vaLue) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    const token = await getToken();
    try {
      const res = await createBooking(token, vaLue);
      const bookingId = res.data.result;
      navigate(`/user/checkout/${bookingId}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card-actions justify-center mt-6">
      <form onSubmit={handleSubmit(hdlBooking)}>
        <Buttons
          text="Confirm"
          type="submit"
          color="btn-accent"
          isSubmitting={isSubmitting}
        />
      </form>
    </div>
  );
};

export default BookingConfirm;
