import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGIFs = async () => {
    if (query.trim() === "") return;

    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for GIFs and Stickers"
        className="w-full pl-4 pr-14 py-3 text-lg text-gray-800 bg-white border border-gray-300 outline-none placeholder-gray-400 shadow-sm focus:ring-2 "
      />

      {query && (
        <button
          onClick={() => setQuery("")}
          className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-3.5 cursor-pointer p-1"
        >
          <HiMiniXMark size={22} />
        </button>
      )}

      <button
        onClick={searchGIFs}
        className="bg-linear-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br cursor-pointer"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
