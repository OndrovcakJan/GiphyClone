import { Link } from "react-router-dom";


const Gif = ({ gif, hover = true }) => {
  const imgSrc = gif?.images?.fixed_width?.webp || gif?.images?.original?.url || '';
  const title = gif?.title || 'gif';
  const to = gif?.type && gif?.slug ? `${gif.type}/${gif.slug}` : `/gif/${gif?.id || ''}`;

  return (
    <Link to={to}>
        <div className="w-full mb-2 relative cursor-pointer">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="w-full object-cover rounded transition-all duration-300"
          />
        ) : (
          <div className="w-full h-48 bg-gray-800 rounded" />
        )}

        </div>
    </Link>
  )
}

export default Gif