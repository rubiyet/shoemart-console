import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {

  const [search, setSearch] = useState();

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="border w-[33rem] h-11 p-5 text-sm text-gray-500 bg-white rounded-md border-gray-300 focus:outline-none"
        placeholder="Search For Products, Brands & Categories"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute top-0 right-0 pr-5 pt-3"
        onChange={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} className="text-md text-gray-600" />
      </button>
    </div>
  );
}
