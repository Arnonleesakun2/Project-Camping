import { SignOutButton } from "@clerk/clerk-react";
import { createAlert } from "../../utils/createAlert";

const SignOutLink = () => {
  const handleLogout = () => {
    createAlert("success", "Logout Success");
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
};

export default SignOutLink;
