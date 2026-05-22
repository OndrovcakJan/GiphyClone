import { useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical } from "react-icons/hi2";




const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

  return (
    <nav>
        <div className="relative flex gap-4 justify-between items-center mb-2">
            <Link to="/" className="flex gap-2">
                <img src="/logo.svg" className="w-8" alt="Giphy Logo" />
                <h1 className="text-5xl font-bold tracking-tight cursor-pointer">Giphy</h1>
            </Link>

    {/* render categories dropdown */}
    <Link className={`px-4 py-1 border-b-4 hidden lg:block hover:gradient ${showCategories ? "gradient" : ""}`}>
    Reactions</Link>
    <button onClick={() => setShowCategories(!showCategories)} >
        <HiEllipsisVertical size={35} 
        className={`py-0.5 border-b-4 hidden lg:block hover:gradient ${showCategories ? "gradient" : ""}`}/>
    </button>

    <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
    <Link to="/favorites">Favorite GIFs</Link>

    </div>
        </div>
        </nav>
  )
}

export default Header