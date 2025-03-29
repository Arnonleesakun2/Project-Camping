const calNight = (checkIn, checkOut) => {
  const milliDay = checkOut - checkIn;
  // 1000 = 1 วินาที => นาที => ชั่วโมง => วัน
  const diffDay = milliDay / (1000 * 60 * 60 * 24);
  return diffDay;
};
export const calTotal = (checkIn, checkOut, price) => {
  if (!checkIn && !checkOut) return;
  const totalNight = calNight(checkIn, checkOut);
  const total = totalNight * price;
  return { total, totalNight };
};
