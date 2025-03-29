import React, { useEffect } from "react";
import MapHome from "../maps/MapHome";
import CampingLists from "./CampingLists";
import useCampingStore from "../../store/camping-store";
import { useUser } from "@clerk/clerk-react";

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  const { user } = useUser();
  useEffect(() => {
    const id = user?.id ?? null;
    actionListCamping(id);
  }, [user?.id]);
  return (
    <div>
      <MapHome />
      <CampingLists />
    </div>
  );
};

export default CampingContainer;
