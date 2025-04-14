import { useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateSearch = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  }, 500);

  const hdlSearch = (e) => {
    updateSearch(e.target.value);
  };
  return (
    <div className="">
      <label className="input ">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={hdlSearch}
          type="search"
          className="grow "
          placeholder="Search"
        />
        <kbd className="kbd kbd-sm">C</kbd>
        <kbd className="kbd kbd-sm">P</kbd>
      </label>
    </div>
  );
};

export default Search;
