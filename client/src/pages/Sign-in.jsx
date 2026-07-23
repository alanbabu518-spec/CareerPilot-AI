import { Link } from "react-router-dom";
import { Eye, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../services/api";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try{
      e.preventDefault()

    const response = await axios.post(`${BASE_URL}/api/users/SignIn`, {
      email,
      password,
    },
  {
    withCredentials : true,
  })
    const data = response.data
    toast.success("Your Signed In Sucessfully")
    navigate("/")
    }
    catch(error){
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-purple-700/30 blur-[180px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-violet-700/30 blur-[180px] rounded-full bottom-0 right-0"></div>
      <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-purple-900/30 to-black">
            <h1 className="text-5xl font-bold text-white mb-6">
              CareerPilot
              <span className="text-purple-500"> AI</span>
            </h1>
            <p className="text-gray-300 leading-8 text-lg">
              Build ATS-friendly resumes, prepare for interviews, discover skill
              gaps and accelerate your career using AI.
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                1. AI Resume Analyzer
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                2. ATS Score Checker
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                3. Mock Interview
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                4. Career Roadmap
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-10 md:p-14">
            <h2 className="text-4xl font-bold text-white mb-2 ml-18">
              Welcome Back
            </h2>

            <p className="text-gray-400 mb-8 ml-20">
              Sign in to continue your journey.
            </p>
            <div className="mb-5">
              <label className="text-gray-300 mb-2 block">Email</label>

              <div className="flex items-center bg-[#151515] border border-gray-700 rounded-xl px-4">
                <Mail className="text-gray-400" size={20} />

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full bg-transparent outline-none py-4 px-3 text-white"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-gray-300 mb-2 block">Password</label>

              <div className="flex items-center bg-[#151515] border border-gray-700 rounded-xl px-4">
                <Lock className="text-gray-400" size={20} />

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full bg-transparent outline-none py-4 px-3 text-white"
                />

                <Eye className="text-gray-400 cursor-pointer" size={20} />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-8">
              <label className="flex items-center gap-2 text-gray-300">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-purple-400 hover:text-purple-500"
              >
                Forgot Password?
              </Link>
            </div>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:scale-[1.02] transition">
              Sign In
            </button>

            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-gray-700"></div>

              <span className="px-4 text-gray-500">OR</span>

              <div className="flex-1 h-px bg-gray-700"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="border border-gray-700 rounded-xl py-3 text-white hover:border-purple-500 transition">
                Google
              </button>

              <button className="border border-gray-700 rounded-xl py-3 text-white hover:border-purple-500 transition">
                GitHub
              </button>
            </div>

            <p className="text-center text-gray-400 mt-8">
              Don't have an account?
              <Link
                to="/signup"
                className="text-purple-400 ml-2 hover:text-purple-500"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
