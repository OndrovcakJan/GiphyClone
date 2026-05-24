import { Link } from "react-router-dom";


const Gif = ({ gif, hover = true }) => {
  const imgSrc = gif?.images?.fixed_width?.webp || gif?.images?.original?.url || '';
  const title = gif?.title || 'gif';
  const to = gif?.type && gif?.slug ? `${gif.type}/${gif.slug}` : `/gif/${gif?.id || ''}`;

  return (
    <Link to={to}>
        <div className="w-full mb-2 relative cursor-pointer group aspect-video">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="w-full object-cover rounded transition-all duration-300"
          /> ) : (
          <div className="w-full h-48 bg-gray-800 rounded" />
        )}
          {hover && (
            <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2 ">
                <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-8"
                />
                <span>{gif?.user?.display_name}</span>
            </div>
          )}
       {/*  */}

        </div>
    </Link>
  )
}

export default Gif