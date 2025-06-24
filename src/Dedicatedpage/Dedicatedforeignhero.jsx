import React from 'react'
import Hero11 from "../assets/10.png"

const Dedicatedforeignhero = () => {
    const Items = [
        { name: "See All Plans", targetId: "foreign" },
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section
            className="relative bg-white from-[#dff6fd] to-[#f7fafe] h-[60vh] min-h-[500px] overflow-hidden"
        >
            <div className="container mx-auto px-6 h-full relative">
                {/* Carousel Container */}
                <div className="relative w-full h-full flex items-center">
                    <div className="w-full h-full flex items-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
                            {/* Left Side - Text Content */}
                            <div className="flex flex-col justify-center space-y-7 order-1 lg:order-1">
                                <h1 className="text-lg lg:text-2xl xl:text-4xl  font-bold leading-tight text-[#0a2540]">
                                    Dedicated Server{' '}
                                    <span className="bg-gray-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">
                                        5% OFF
                                    </span>
                                </h1>
                                <p className="text-sm lg:text-lg leading-relaxed text-[#3b3f5c] max-w-lg">
                                    Expand without limits, secure your global success with our top-tier dedicated servers, and seize the opportunity to save 20% on annual subscriptions for a limited time.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    {Items.map((item, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleScroll(item.targetId)}
                                            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <span className="relative flex items-center gap-2">
                                                {item.name}
                                            </span>

                                        </button>
                                    ))}
                                </div>
                            </div>


                            {/* Right Side - Image */}
                            <div className="flex justify-center lg:justify-end items-center order-2 lg:order-2 animate-gentle-bounce">
                                <div className="w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px]  ">
                                    <img
                                        src={Hero11}
                                        className="max-w-2xl h-auto object-cover lg:pl-6 xl:pl-44 "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dedicatedforeignhero;
