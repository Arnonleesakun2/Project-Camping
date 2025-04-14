import React, { useEffect } from "react";
import MapHome from "../maps/MapHome";
import CampingLists from "./CampingLists";
import useCampingStore from "../../store/camping-store";
import { useUser } from "@clerk/clerk-react";
import CategoryList from "./CategoryList";
import { useSearchParams } from "react-router";

const CampingContainer = () => {
  const actionListCamping = useCampingStore((state) => state.actionListCamping);
  const actionFilter = useCampingStore((state) => state.actionFilter);
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useUser();
  const id = user?.id ?? null;
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  useEffect(() => {
    if (category || search) {
      actionFilter(category, search);
    } else if (!category && !search) {
      actionListCamping(id);
    }
  }, [category, search]);
  return (
    <div>
      <MapHome />
      <CategoryList />
      <CampingLists />
    </div>
  );
};

export default CampingContainer;
