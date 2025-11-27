import Link from "next/link"

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 p-4 px-6">
            <nav className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex">

                    <Link href="/" className="flex items-center gap-2 mr-12">
                        <div className="relative inline-block">
                            <span className="text-7xl font-extrabold text-blue-600
                   stroke-gray-400 [text-stroke-width:3px] ">
                                C
                            </span>

                            <span className="absolute inset-0 flex items-center justify-center
                   text-7xl font-extrabold text-blue-600">
                                S
                            </span>
                        </div>


                        <span className="text-xl font-bold text-gray-900 hidden sm:inline">
                            Credit Scoring
                        </span>
                    </Link>


                    {/* Navigation Menu - hidden on mobile */}
                    <div className="hidden md:flex items-center gap-8 flex-1">
                        <Link href="/personal" className="text-gray-800 hover:text-gray-900 font-medium transition">
                            Personal
                        </Link>
                        <Link href="/business" className="text-gray-800 hover:text-gray-900 font-medium transition">
                            Business
                        </Link>
                        <Link href="/scoring" className="text-gray-800 hover:text-gray-900 font-medium transition">
                            Scoring
                        </Link>
                        <Link href="/report" className="text-gray-800 hover:text-gray-900 font-medium transition">
                            Report
                        </Link>
                    </div>
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3 ml-auto">
                    <button className="text-[#308FFF] hover:text-blue-700 font-medium px-6 py-2 transition bg-blue-100 ">Login</button>
                    <button className="bg-[#308FFF] hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition">
                        Registration
                    </button>
                </div>
            </nav>
        </header>
    )
}
