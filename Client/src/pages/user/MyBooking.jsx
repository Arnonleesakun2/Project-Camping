import { useAuth } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { listBookings } from "../../api/booking";
import { formatDate, formatNumber } from "../../utils/fomats";
import BookingPDF from "../../components/bookingss/BookingPDF";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { getToken } = useAuth();
  useEffect(() => {
    fetchBooking();
  }, []);
  const fetchBooking = async () => {
    try {
      const token = await getToken();
      const res = await listBookings(token);
      setBookings(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bookings);
  return (
    <section>
      <h1 className="text-2xl font-semibold">My Booking</h1>
      <div className="p-8 my-4 rounded-md shadow-2xl border border-gray-200">
        <div className="overflow-x-auto my-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>*</th>
                <th>Camping</th>
                <th>Stay_Nights</th>
                <th>Price</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((item, index) => {
                return (
                  <tr key={index} className="hover:bg-base-300">
                    <th>{item.id}</th>
                    <td>{item.camping.title}</td>
                    <td>{item.totalNights}</td>
                    <td>{formatNumber(item.total)}</td>
                    <td>{formatDate(item.checkIn)}</td>
                    <td>{formatDate(item.checkOut)}</td>
                    <td>
                      <BookingPDF booking={item} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyBooking;
