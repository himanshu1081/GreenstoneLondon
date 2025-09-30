import Navbar from "../Components/Navbar";
import Box from "../Components/Box";
import Features from "../Components/Features";

//icons
import { FaShieldHeart } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

function Home() {

    const fakeBoxes = [
        {
            image: "https://picsum.photos/id/1060/800/600", // ✅ works always
            name: "Cozy Cottage",
            description: "A peaceful cottage in the countryside with a beautiful garden.",
            price: 120,
            place: "Lakeview",
            rating: 4.5,
        },
        {
            image: "https://images.unsplash.com/photo-1560448075-bb485b067938?w=800&auto=format&fit=crop&q=60",
            name: "Modern Apartment",
            description: "A stylish apartment in the city center, close to all amenities.",
            price: 200,
            place: "Downtown",
            rating: 4.8,
        },
        {
            image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&auto=format&fit=crop&q=60",
            name: "Beach House",
            description: "Wake up to the sound of waves in this stunning beach house.",
            price: 350,
            place: "Sunny Shores",
            rating: 4.9,
        },
        {
            image: "https://picsum.photos/id/1018/800/600", // ✅ works always
            name: "Mountain Cabin",
            description: "A rustic cabin surrounded by pine trees, perfect for a retreat.",
            price: 150,
            place: "Highlands",
            rating: 4.7,
        },
    ];
    const features = [
        {
            icon: <FaShieldHeart />,
            title: "Verified & Safe",
            description: "Every property is verified and meets our high safety standards"
        },
        {
            icon: <IoMdTime />,
            title: "24/7 Support",
            description: "Round-the-clock customer support whenever you need assistance"
        },
        {
            icon: <FaRegHeart />,
            title: "Loved by Guests",
            description: "Thousands of happy guests have stayed with our trusted hosts"
        },
        {
            icon: <SlBadge />,
            title: "Best Price Guarantee",
            description: "Find a better price elsewhere? We'll match it and give you 5% off"
        }
    ];


    return (
        <>
            <Navbar />
            <div className="w-full h-full pt-20 hide-scrollbar">
                <div className="p-10 md:p-40 flex flex-col gap-4 bg-[#f8fcf9] w-full">
                    <div className="text-2xl sm:text-3xl md:text-5xl text-[#4cba75] font-extrabold font-figtree flex justify-center items-center w-full h-fit  text-center whitespace-nowrap">
                        Discover your dream space.
                    </div>
                    <div className="text-gray-400 text-center text-xs sm:text-sm font-figtree">
                        Discover unique places to stay, from cozy cabins to luxury villas, all verified and trusted by millions of guests worldwide.
                    </div>
                </div>
                <div className="bg-[#f3faf6] pb-10 md:pb-20 lg:pb-30">
                    <div className="text-center  p-5">
                        <div className="font-figtree text-xl md:text-3xl font-extrabold">
                            Featured Stays
                        </div>
                        <div className="text-gray-400 text-center text-xs sm:text-sm">
                            Handpicked properties loved by our guests
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center p-5 justify-items-center">
                        {fakeBoxes.map((f, index) => (
                            <Box
                                key={index}
                                name={f.name}
                                image={f.image}
                                description={f.description}
                                price={f.price}
                                place={f.place}
                                rating={f.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="bg-[#f8fcf9] flex flex-col justify-center items-center w-full gap-3 sm:gap-15  pb-10 md:pb-20 lg:pb-30 p-5 md:p-10 text-center">
                    <div className="flex flex-col gap-5 items-center justify-center" >
                        <div className="font-figtree text-xl sm:text-2xl md:text-3xl font-extrabold">
                            Why choose Greenstone London?
                        </div>
                        <div className="text-gray-600 font-figtree text-sm text-center">

                            We're committed to providing you with the best vacation rental experience
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-around items-center w-full gap-5">
                        {
                            features.map((f, index) => (
                                <Features title={f.title} icon={f.icon} description={f.description} />
                            ))
                        }
                    </div>
                </div>
                <div className="bg-[#f2faf6] pb-10 md:pb-20 lg:pb-30">
                    <div className="flex flex-col gap-5 items-center justify-center p-5 md:p-10" >
                        <div className="font-figtree text-xl sm:text-2xl md:text-3xl font-extrabold">
                            Ready to start your journey?
                        </div>
                        <div className="text-gray-600 font-figtree text-sm md:text-base text-center">
                            <p>
                                Join millions of travelers who trust Greenstone for their perfect vacation rentals.
                            </p>
                            <p>
                                Start exploring today and create unforgettable memories.
                            </p>
                        </div>
                        <div className="flex gap-2 text-center">
                            <div className="bg-[#15a349] p-2 rounded-md text-white border-b w-32">
                                Contact Us
                            </div>
                            <div className=" p-2 rounded-md text-black border-1 border-black/20 w-32">
                                Become a Host
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;