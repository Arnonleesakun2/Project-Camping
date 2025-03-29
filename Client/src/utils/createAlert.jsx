import Swal from "sweetalert2";

export const createAlert = (icon, text) => {
  return Swal.fire({
    text: text || "Something Wrong!!!",
    icon: icon || "info",
    timer: 3000,
  });
};
