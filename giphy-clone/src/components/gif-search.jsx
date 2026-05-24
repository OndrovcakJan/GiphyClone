import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        className="w-full pl-4 pr-14 py-3 text-lg text-gray-800 bg-white rounded-lg border border-gray-300 outline-none placeholder-gray-400 shadow-sm focus:ring-2 "
      />

      
    </div>
  );
};

export default GifSearch;
