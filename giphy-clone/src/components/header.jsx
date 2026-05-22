import { useState } from "react";
import { Link } from "react-router-dom";


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
    <Link className="px-4 py-1 border-b-4 hidden lg:block hover:bg-gradient-to-r hover:from-purple-600 hover:via-blue-600 hover:to-pink-600">
    Reactions</Link>


        </div>
        </nav>
  )
}

export default Header