import React, { useEffect } from "react";
import useCampingStore from "../../store/camping-store";
import { useAuth, useUser } from "@clerk/clerk-react";
import CampingCardUser from "../../components/cards/CampingCardUser";

const MyCamping = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const actionListCampingUser = useCampingStore(
    (state) => state.actionListCampingUser
  );

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.id) return;
      const id = user?.id ?? null;
      const token = await getToken();
      actionListCampingUser(token, id);
    };

    fetchData();
  }, [user?.id]);

  const campingUsers = useCampingStore((state) => state.campingUsers);

  return (
    <section>
      <h1 className="text-2xl font-semibold">My Camping</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-4">
        {campingUsers.map((item, index) => (
          <CampingCardUser key={index} camping={item} />
        ))}
      </div>
    </section>
  );
};

export default MyCamping;
