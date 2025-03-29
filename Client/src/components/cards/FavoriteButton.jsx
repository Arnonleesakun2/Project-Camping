import { SignInButton } from "@clerk/clerk-react";
import { Heart, RotateCw } from "lucide-react";
export const CardSubmitButton = ({ isSubmitting, isFavorite }) => {
  return (
    <button className="absolute  top-2 right-2 cursor-pointer">
      {isSubmitting ? (
        <RotateCw stroke="white" className="animate-spin " />
      ) : isFavorite ? (
        <Heart
          className="hover:scale-110 duration-700 "
          fill="red"
          fillOpacity="70%"
          stroke="white"
        />
      ) : (
        <Heart
          className="hover:scale-110 duration-700 "
          fill="black"
          fillOpacity="70%"
          stroke="white"
        />
      )}
    </button>
  );
};

export const CardSingInButton = () => {
  return (
    <button className="absolute  top-2 right-2 cursor-pointer">
      <SignInButton mode="modal">
        <Heart
          className="hover:scale-110 duration-700 "
          fill="black"
          fillOpacity="70%"
          stroke="white"
        />
      </SignInButton>
    </button>
  );
};
