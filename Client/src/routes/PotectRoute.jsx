import { useAuth } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router";

const PotectRoute = ({ eL }) => {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-[#09090B]">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>
              Loading <span className="loading loading-bars loading-lg"></span>
            </code>
          </pre>
        </div>
      </div>
    );
  }
  if (!isSignedIn) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-[#09090B]">
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>Access denied!!!</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            <code>go to...</code>
          </pre>
          <pre data-prefix=">" className="text-success">
            <Link to="/">
              <code>Home!</code>
            </Link>
          </pre>
        </div>
      </div>
    );
  }
  return eL;
};

export default PotectRoute;
