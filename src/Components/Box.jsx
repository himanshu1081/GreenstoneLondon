import { IoStar } from "react-icons/io5";

function Box({ image, name, description, price, place, rating }) {
    return (
        <>
            <div
                className="bg-[#d9ffe8] transition-all ease-in-out w-auto h-90 max-w-80 lg:max-w-60 lg:w-600 xl:max-w-80  rounded-md flex flex-col items-center justify-start p-5 hover:bg-[#47ef85] font-figtree">
                <img
                    src={image} alt="location-image"
                    className="h-50 w-60 rounded-lg object-cover " />
                <div className="flex items-center justify-between w-full">
                    <div className="font-bold">
                        {name}
                    </div>
                    <div className="font-bold whitespace-nowrap flex justify-center items-center">
                        <IoStar color="gold" />
                        {rating}
                    </div>
                </div>
                <div className="font-figtree text-gray-600">
                    {description}
                </div>
                <div
                    className="flex flex-col items-center justify-start w-full">
                    <div>
                        {place}
                    </div>
                    <div className="whitespace-nowrap font-bold">
                        £{price}/night
                    </div>
                </div>
            </div>
        </>
    );
}

export default Box;