import { listStat } from "../../api/admin";
import StatCard from "./StatCard";
import { Users, Tent, Album } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const StatContainer = () => {
  const [datas, setDatas] = useState();
  useEffect(() => {
    fetchStat();
  }, []);
  const { getToken } = useAuth();
  const fetchStat = async () => {
    try {
      const token = await getToken();
      const res = await listStat(token);
      setDatas(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StatCard label="Users" value={datas?.users || 0} Icon={Users} />
      <StatCard label="Camping" value={datas?.campings || 0} Icon={Tent} />
      <StatCard label="Booking" value={datas?.bookings || 0} Icon={Album} />
    </div>
  );
};

export default StatContainer;
