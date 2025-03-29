import CampingCard from "../cards/CampingCard";
import useCampingStore from "../../store/camping-store";
import Search from "./Search";

const CampingLists = () => {
  const campings = useCampingStore((state) => state.campings);
  return (
    <section className="py-10">
      <div className="flex justify-between items-center mb-2">
        <div className="text-3xl font-bold ">Campings</div>
        <Search/>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
        {campings.map((item, index) => {
          return <CampingCard key={index} camping={item} />;
        })}
      </div>
    </section>
  );
};

export default CampingLists;
