import { useAuth, useUser } from "@clerk/clerk-react";
import { Link } from "react-router";

const AdminPotectRoute = ({ eL }) => {
  const { isLoaded } = useAuth();
  const { user } = useUser();
  const isAdmin = user?.publicMetadata?.isAdmin;

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
  if (!isAdmin) {
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

export default AdminPotectRoute;
