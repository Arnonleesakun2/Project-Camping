import React, { useEffect } from "react";
import BookingCalender from "./BookingCalender";
import BookingForm from "./BookingForm";
import useBookingStore from "../../store/booking-store";
const BookingContainer = ({ campingId, price, bookings }) => {
  useEffect(() => {
    useBookingStore.setState({
      campingId: campingId,
      price: price,
      booking: bookings,
    });
  }, [campingId]);
  return (
    <div className="">
      <p className="text-3xl font-bold mt-4">Book accommodation</p>
      <BookingCalender />
      <BookingForm />
    </div>
  );
};

export default BookingContainer;
