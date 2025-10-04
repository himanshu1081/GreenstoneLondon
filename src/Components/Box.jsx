import { IoStar } from "react-icons/io5";

function Box({ image, name, description, price, place, rating }) {
  return (
    <div className="bg-[#d9ffe8] hover:bg-[#47ef85] transition duration-300 ease-in-out rounded-xl shadow-md overflow-hidden w-full max-w-xs lg:max-w-sm flex flex-col font-figtree">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <div className="flex items-center gap-1 font-semibold text-gray-700">
            <IoStar color="gold" />
            {rating}
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>

        <div className="mt-2 flex items-center justify-between">
          <span className="text-gray-800 font-medium">{place}</span>
          <span className="text-gray-900 font-bold">£{price}/night</span>
        </div>
      </div>
    </div>
  );
}

export default Box;
