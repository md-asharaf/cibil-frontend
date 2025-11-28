"use client"

import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-background min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh]">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 h-full">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center h-full">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center flex-1 w-full text-center sm:text-left">
                        {/* Heading */}
                        <h1
  className="font-semibold text-[#2D8CFF]
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
  leading-[0.95] tracking-tight mb-4 sm:mb-6"
>
  Your credit <br /> your identity
</h1>




                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-md leading-relaxed">
                            Find out your credit rating and get personal or business recommendations for it.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded bg-accent text-primary font-medium hover:bg-accent transition text-sm sm:text-base">
                                Learn More
                            </button>
                            <button className="px-5 sm:px-6 py-2.5 sm:py-3 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/80 transition text-sm sm:text-base">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Image and Card */}
                    <div className="flex flex-col justify-center items-center flex-1 w-full relative">
                        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl aspect-4/3 mb-0">
                            <Image
                                src="/51a86e8db5c6159cad151b173937b5776ab5b3e4.png"
                                alt="Credit scoring illustration"
                                fill
                                className="rounded-2xl object-cover"
                            />
                        </div>

                        {/* Credit Score Card - positioned directly below image, shifted right */}
                        <div className="bg-white shadow-lg rounded-sm px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-sm border -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 ml-auto mr-0 sm:mr-2 md:mr-4 translate-x-2 sm:translate-x-4 md:translate-x-6">
                            <span className="text-gray-800 text-xs sm:text-sm md:text-lg whitespace-nowrap">Your credit scoring</span>
                            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-500">792</span>
                            <span className="text-gray-900 font-semibold text-xs sm:text-sm md:text-base">Good</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
