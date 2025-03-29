import React from "react";
import { Trash2 } from "lucide-react";
import { deleteCamping } from "../../api/camping";
import { useAuth } from "@clerk/clerk-react";
import { createAlert } from "../../utils/createAlert";
import useCampingStore from "../../store/camping-store";

const DeleteCardButton = ({ id }) => {
  const { getToken } = useAuth();
  const actionDeleteCampingUser = useCampingStore((state) => state.actionDeleteCampingUser);
  const hdl = async (id) => {
    try {
      const token = await getToken();
      const res = await deleteCamping(token, id);
      actionDeleteCampingUser(id);
      createAlert("success", res.data.message);
    } catch (error) {
      createAlert("error", err.message);
    }
  };
  return (
    <button
      onClick={() => hdl(id)}
      className="absolute top-2 right-2 p-1 bg-white rounded-md cursor-pointer"
    >
      <Trash2 />
    </button>
  );
};

export default DeleteCardButton;
