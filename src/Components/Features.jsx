function Features({ icon, title, description }) {
    return (
        <>
            <div 
            className="h-25 w-auto flex justify-center items-center flex-col p-5">
                <div className="bg-[#e2f5ea] text-[#16a34a] p-3 w-fit rounded-full md:text-3xl">
                    {icon}
                </div>
                <div className="font-bold whitespace-nowrap">
                    {title}
                </div>
                <div className="text-gray-600 font-figtree text-sm text-center">
                    {description}
                </div>
            </div>
        </>
    );
}

export default Features;