import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/gif-contex";




const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    const {gf, filter, setFilter, favorites} = GifState();

    const fetchGifCategories = async () => {
        const { data } = await gf.categories();
        setCategories(data);
    }

    useEffect(() => {
        fetchGifCategories();
    }, []);

//oprava api key
  return (
    <nav>
        <div className="relative flex gap-4 justify-between items-center mb-2">
            <Link to="/" className="flex gap-2">
                <img src="/logo.svg" className="w-8" alt="Giphy Logo" />
                <h1 className="text-5xl font-bold tracking-tight cursor-pointer">Giphy</h1>
            </Link>
            <div className="font-bold text-md flex gap-2 items-center"> 

    {/* render categories dropdown */}
    {categories?.slice(0, 5).map((category) => {
        return(
    <Link 
        key={category.name} 
        to={`/${category.name_encoded}`}
        className={`px-4 py-1 border-b-4 hidden lg:block hover:gradient ${showCategories ? "gradient" : ""}`}
        >
        {category.name}
    </Link>
    );
    })}
    
    <button onClick={() => setShowCategories(!showCategories)} >
        <HiEllipsisVertical size={35} 
        className={`py-0.5 border-b-4 hidden lg:block hover:gradient ${showCategories ? "gradient" : ""}`}/>
    </button>

    <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
    <Link to="/favorites">Favorite GIFs</Link>

    </div>
    <button>
        <HiMiniBars3BottomRight className="text-sky-400 block lg:hidden" 
        size={30}/>
        </button>
    </div>
        {showCategories && (
        <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20r">
            <span>Categories</span>
            <hr />
            <div>
                <Link className="font-bold">
                Reactions
                </Link>
            </div>
            </div>
        )}
        </div>
        {/* search bar */}
        </nav>
  )
}

export default Header