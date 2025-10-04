import Navbar from "../Components/Navbar";

function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-[#f8fcf9] flex justify-center items-center px-6 py-12">
                <div className="max-w-3xl bg-white shadow-lg rounded-2xl p-10">
                    <h1 className="text-3xl font-extrabold text-[#4cba75] text-center mb-6">
                        About Us
                    </h1>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">
                        At <span className="font-semibold text-[#4cba75]">Greenstone London</span>, 
                        we are redefining the way people find their perfect stay. 
                        Our platform brings together travelers and hosts, offering comfort, style, 
                        and convenience across every booking.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        We are committed to delivering a seamless experience, 
                        ensuring trust, transparency, and quality from start to finish. 
                        Whether it’s a quick getaway or an extended retreat, 
                        we make discovering unique stays effortless.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Our mission is simple: to help you feel at home, wherever you go.  
                        With Greenstone, your journey begins the moment you start exploring.
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
