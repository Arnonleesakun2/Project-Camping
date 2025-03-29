import { SignOutButton } from "@clerk/clerk-react";
import { useToast } from "../toast/ToastContext";

const SignOutLink = () => {
  const { showToast } = useToast();
  const handleLogout = () => {
    showToast("คุณได้ออกจากระบบแล้ว!", "success"); // เรียก Toast ได้จากทุกหน้า
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
};

export default SignOutLink;
