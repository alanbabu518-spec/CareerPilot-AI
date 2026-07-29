import { useState } from "react";
import { Menu, X, User, Settings, LogOut, ArrowLeftRight } from "lucide-react";
import { AiFillAliwangwang } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const userName = localStorage.getItem("userName") || "";

  const handleLogout = () => {
    localStorage.removeItem("userName");
    setIsProfileOpen(false);
    window.location.reload();
  };

  return (
    <>
      {isProfileOpen && (
        <div
          onClick={() => setIsProfileOpen(false)}
          className="fixed inset-0 bg-black/60 z-[90]"
        />
      )}

      {userName && (
        <div
          className={`fixed top-0 right-0 h-screen w-80 bg-[#0f0f0f] border-l border-purple-700/30 shadow-2xl z-[100] transform transition-transform duration-300 ${
            isProfileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <h2 className="text-white text-xl font-semibold">Profile</h2>

            <button
              onClick={() => setIsProfileOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col items-center py-10">
            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center text-white text-6xl font-bold shadow-lg shadow-purple-600/40">
              {userName.charAt(0).toUpperCase()}
            </div>

            <h2 className="text-3xl font-bold text-white mt-6">
              Hi, {userName}
            </h2>
          </div>

          <div className="px-6 space-y-4">
            <Link
              to="/SignIn"
              className="w-full flex items-center gap-4 bg-white/5 hover:bg-purple-600 rounded-xl px-5 py-4 text-white transition"
            >
              <ArrowLeftRight size={22} />
              Switch Account
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-4 bg-red-600 hover:bg-red-700 rounded-xl px-5 py-4 text-white transition"
            >
              <LogOut size={22} />
              Logout
            </button>
          </div>
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-purple-900/30">
        <div className="max-w-7xl mx-auto px-3 lg:px-10">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <AiFillAliwangwang className="w-8 h-8 text-white" />
              </div>

              <h1 className="text-2xl font-bold text-white tracking-wide">
                CareerPilot
                <span className="text-purple-500"> AI</span>
              </h1>
            </Link>

            <ul className="hidden md:flex items-center gap-10 text-white font-medium">
              <Link
                to="/"
                className="hover:text-purple-400 transition duration-300"
              >
                Home
              </Link>

              <ScrollLink
                to="services"
                className="cursor-pointer hover:text-purple-400 transition"
              >
                Services
              </ScrollLink>

              <Link
                to="/About"
                className="hover:text-purple-400 transition duration-300"
              >
                About
              </Link>
              <ScrollLink
                to="pricing"
                className="cursor-pointer hover:text-purple-400 transition"
              >
                Pricing
              </ScrollLink>
            </ul>

            <div className="hidden md:flex items-center justify-end w-52">
              {userName ? (
                <div
                  onClick={() => setIsProfileOpen(true)}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 flex items-center justify-center text-white text-2xl font-bold cursor-pointer hover:scale-105 transition"
                >
                  {userName.charAt(0).toUpperCase()}
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    to="/SignIn"
                    className="text-white hover:text-purple-400"
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/SignUp"
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-500 text-white"
                  >
                    Get Started
                  </Link>
                </div>
              )}
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
                <Link to="/">Home</Link>

                <li>Services</li>

                <Link to="/About">About</Link>

                <li>Pricing</li>
              </ul>

              {!userName && (
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    to="/SignIn"
                    className="border border-purple-500 py-3 rounded-lg text-center text-white hover:bg-purple-600 transition"
                  >
                    Sign In
                  </Link>

                  <Link
                    to="/SignUp"
                    className="py-3 rounded-lg text-center bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
