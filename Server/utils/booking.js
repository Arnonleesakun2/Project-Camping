const calNight = (checkIn, checkOut) => {
  const milliDay = checkOut.getTime() - checkIn.getTime();
  // 1000 = 1 วินาที => นาที => ชั่วโมง => วัน
  const diffDay = milliDay / (1000 * 60 * 60 * 24);
  return diffDay;
};
exports.calTotal = (checkIn, checkOut, price) => {
  if (!checkIn || !checkOut) return;
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const totalNight = calNight(checkInDate, checkOutDate);
  const total = totalNight * price;
  return { total, totalNight };
};
