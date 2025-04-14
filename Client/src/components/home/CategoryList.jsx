import { categories } from "../../utils/categories";
import { useSearchParams } from "react-router";

const CategoryList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const hdlFilter = (category) => {
    const params = new URLSearchParams(searchParams);
    const c = searchParams.get("category") || "";
    if (c === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setSearchParams(params);
  };
  return (
    <section className="flex justify-center items-center gap-6 py-8">
      {categories.map((item, index) => {
        return (
          <button
            onClick={() => hdlFilter(item.label)}
            className="flex flex-col items-center cursor-pointer p-2 hover:bg-black/10 rounded-md duration-500"
            key={index}
          >
            <item.icon size={20} />
            <span className=" capitalize">{item.label}</span>
          </button>
        );
      })}
    </section>
  );
};

export default CategoryList;
