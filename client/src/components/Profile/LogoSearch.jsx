import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";

function LogoSearch() {
  return (
    <div className="flex gap-3 items-center">
      <Link to={"/"}>
        <img src="/favicon.svg" alt="logo" width={30} />
      </Link>
      <div className="flex items-center rounded-lg bg-gray-200 h-9 w-full">
        <input
          type="text"
          placeholder="#Explore"
          className="bg-transparent w-full px-2 outline-none"
        />
        <button className="text-gray-200 bg-gray-400 h-full px-3 rounded-r-lg">
          <GoSearch size={20} />
        </button>
      </div>
    </div>
  );
}

export default LogoSearch;
