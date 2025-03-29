import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useBookingStore from "../../store/booking-store";
const defaultSelected = {
  from: undefined,
  to: undefined,
};
const BookingCalender = () => {
  const [range, setRange] = useState(defaultSelected); // ใช้ object เก็บค่า
  const [numDays, setNumDays] = useState(0);
  useEffect(() => {
    useBookingStore.setState({
      range: range,
    });
  }, [range]);
  const handleDateChange = (dates) => {
    if (dates[0] && dates[1]) {
      setRange({ from: dates[0], to: dates[1] });

      const diffTime = Math.abs(dates[1] - dates[0]);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNumDays(diffDays);
    } else {
      setRange({ from: dates[0], to: null });
    }
  };
  return (
    <div className="mt-2">
      <DatePicker
        selected={range.from} // กำหนดวันที่เริ่มต้น
        onChange={handleDateChange} // เมื่อเลือกวัน
        startDate={range.from} // กำหนดวันที่เริ่มต้น
        endDate={range.to} // กำหนดวันที่สิ้นสุด
        selectsRange // เปิดใช้งานการเลือกช่วงวันที่
        inline // แสดงปฏิทินในหน้าเดียว
        placeholderText="Select a date range"
        dateFormat="yyyy/MM/dd" // รูปแบบวันที่
      />
    </div>
  );
};

export default BookingCalender;
