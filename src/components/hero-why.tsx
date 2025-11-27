"use client"

import Image from "next/image"

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-background min-h-[60vh]">

            <div className="relative  px-4 sm:px-6 lg:px-8 py-12 md:py-20 h-full">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center h-full">
                    {/* Left Content */}
                    <div className="flex flex-col justify-center flex-1 w-full text-center sm:text-left">
                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl  lg:text-8xl font-bold text-primary leading-tight mb-6">
                            Your credit <br className="hidden sm:block" /> your identity
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-700 mb-8 max-w-md leading-relaxed">
                            Find out your credit rating and get personal or business recommendations for it.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col  sm:flex-row gap-4">
                            <button className="px-6 py-3 rounded bg-accent text-primary font-medium hover:bg-accent transition">
                                Learn More
                            </button>
                            <button className="px-6 py-3 rounded bg-primary text-primary-foreground font-medium hover:bg-primary/80 transition">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center flex-1 w-full ">
                        <div className="relative w-full max-w-2xl left-0 aspect-4/3 h-full md:mr-90 mr-40">
                            <Image
                                src="/51a86e8db5c6159cad151b173937b5776ab5b3e4.png"
                                alt="ss"
                                fill
                                className="rounded-2xl object-cover "
                            />
                        </div>

                        {/* Credit Score Card - positioned below the image */}
                        <div className="bg-white shadow-lg rounded-sm px-4 sm:px-6 py-4 flex items-center justify-center gap-3 sm:gap-6 w-full max-w-sm border  ">

                            <span className="text-gray-800 text-sm sm:text-lg whitespace-nowrap">Your credit scoring</span>
                            <span className="text-2xl sm:text-3xl font-bold text-emerald-500">792</span>
                            <span className="text-gray-900 font-semibold text-sm sm:text-base">Good</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}
