import Navbar from "../Components/Navbar";

function ContactUs() {
    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-[#f8fcf9] flex justify-center items-center px-6 py-12">
                <div className="max-w-lg w-full bg-white shadow-lg rounded-2xl p-8">
                    <h1 className="text-3xl font-extrabold text-[#4cba75] text-center mb-6">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 text-center mb-6">
                        Have questions or need support? We’d love to hear from you.
                    </p>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cba75]"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cba75]"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4cba75]"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#4cba75] text-white font-semibold py-3 rounded-lg hover:bg-[#15a349] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
