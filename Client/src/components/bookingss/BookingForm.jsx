import React from "react";
import useBookingStore from "../../store/booking-store";
import { calTotal } from "../../utils/booking";
import { formatNumber } from "../../utils/fomats";
import BookingConfirm from "./BookingConfirm";

const BookingForm = () => {
  const price = useBookingStore((state) => state.price);
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;

  const result = calTotal(checkIn, checkOut, price);
  if (!range || !range.from || !range.to) return null;
  return (
    <div>
      <div className="card bg-base-100 border-[0.5px] border-gray-300 w-[243px] ">
        <div className="card-body">
          <h2 className="text-2xl font-bold">Total </h2>
          <div className="flex justify-between">
            <span className="text-md">{`₿${price} x ${result.totalNight} Day`}</span>
            <span className="text-md">{formatNumber(result.total)} ₿</span>
          </div>
          <BookingConfirm />
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
