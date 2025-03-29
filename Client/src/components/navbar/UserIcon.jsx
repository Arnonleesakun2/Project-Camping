import { useUser } from "@clerk/clerk-react";
import React from "react";

const UserIcon = () => {
  const { user } = useUser();
  if (user) {
    return (
      <img
        src={user.imageUrl}
        alt={user.email}
        className="rounded-full h-10 w-10"
      />
    );
  }
  return (
    <div className="">
      <img
        alt="Tailwind CSS Navbar component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      />
    </div>
  );
};

export default UserIcon;
