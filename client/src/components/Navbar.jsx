import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AiFillAliwangwang} from "react-icons/ai";
import { Link } from "react-router-dom";
import SignIn from "../pages/Sign-in";
import SignUp from "../pages/Sign-up";



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-purple-900/30 h-17">
            <div className="max-w-7xl mx-auto px-3 lg:px-10">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                            <span className="text-white font-bold text-xl"><AiFillAliwangwang className="w-8 h-8"/></span>
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            CareerPilot
                            <span className="text-purple-500"> AI</span>
                        </h1>
                    </div>
                    <ul className="hidden md:flex items-center gap-10 text-white font-medium">
                        <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                            Home
                        </li>

                        <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                            Features
                        </li>

                        <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                            About
                        </li>

                        <li className="hover:text-purple-400 transition duration-300 cursor-pointer">
                            Pricing
                        </li>
                    </ul>
            
                    <div className="hidden md:flex items-center gap-4">
                        <Link to= "/SignIn" className="text-white hover:text-purple-400 transition">
                            Sign In
                        </Link>
                    
                        <Link to="/SignUp" className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30">
                            Get Started
                        </Link>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>
                {isOpen && (
                    <div className="md:hidden bg-[#111111] rounded-xl p-6 mb-4">

                        <ul className="flex flex-col gap-5 text-white font-medium">

                            <li className="hover:text-purple-400 cursor-pointer">
                                Home
                            </li>

                            <li className="hover:text-purple-400 cursor-pointer">
                                Features
                            </li>

                            <li className="hover:text-purple-400 cursor-pointer">
                                About
                            </li>

                            <li className="hover:text-purple-400 cursor-pointer">
                                Pricing
                            </li>

                        </ul>

                        <div className="mt-6 flex flex-col gap-3">
                            <button className="border border-purple-500 py-3 rounded-lg text-white hover:bg-purple-600 transition">
                                Sign In
                            </button>

                            <button className="py-3 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold">
                                Get Started
                            </button>

                        </div>

                    </div>
                )}
            </div>
        </nav>
    )
}



export default Navbar;