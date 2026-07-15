import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye } from "lucide-react";
import { useState } from "react";
import { use } from "react";
import BASE_URL from "../services/api";
import {ToastContainer,toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

function SignUp() {

  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit= async(e) =>{
    e.preventDefault()

    const response = await fetch(
      `${BASE_URL}/api/users/Signup`,
      {
        method:"POST",
        headers : {
          "content-type" : "application/json",
        },
        body : JSON.stringify({
          name,
          email,
          password
        })
      }
    )
    const data = await response.json()

    if(response.ok){
      localStorage.setItem("token",data.token)
      localStorage.setItem("username",data.name)
      toast.success("your signed up")
      navigate("/")
    }
    else{
      toast.error("Something Wrong")
    }

  }
  
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">

      <div className="absolute w-96 h-96 bg-purple-700/30 blur-[180px] rounded-full -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-violet-700/30 blur-[180px] rounded-full bottom-0 right-0"></div>
      <div className="relative z-10 w-full max-w-5xl rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-purple-900/30 to-black">

            <h1 className="text-5xl font-bold text-white mb-6">
              CareerPilot
              <span className="text-purple-500"> AI</span>
            </h1>

            <p className="text-gray-300 text-lg leading-8">
              Join thousands of job seekers who use AI to improve resumes,
              prepare for interviews, and accelerate their careers.
            </p>

            <div className="mt-10 space-y-4">

              <div className="flex items-center gap-3 text-gray-200">
                 Build ATS-Friendly Resume
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                 AI Resume Analysis
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                AI Mock Interview
              </div>

              <div className="flex items-center gap-3 text-gray-200">
                 Career Growth Dashboard
              </div>

            </div>

          </div>

          <form onSubmit={handleSubmit} className="p-10 md:p-14">

            <h2 className="text-4xl font-bold text-white mb-2">
              Create Account 
            </h2>

            <p className="text-gray-400 mb-8">
              Start your AI-powered career journey.
            </p>

            <div className="mb-5">
             
              <label className="block text-gray-300 mb-2">
                Full Name
              </label>

              <div className="flex items-center bg-[#151515] border border-gray-700 rounded-xl px-4">
                <User className="text-gray-400" size={20} />
                <input type="text" placeholder="UserName" value={name}
                  className="w-full py-4 px-3 bg-transparent outline-none text-white"
                  onChange={(e)=>setName(e.target.value)}/>

              </div>

            </div>

            <div className="mb-5">

              <label className="block text-gray-300 mb-2">
                Email
              </label>

              <div className="flex items-center bg-[#151515] border border-gray-700 rounded-xl px-4">

                <Mail className="text-gray-400" size={20} />

                <input type="email" placeholder="example@gmail.com" value={email}
                  className="w-full py-4 px-3 bg-transparent outline-none text-white" 
                  onChange={(e)=>setEmail(e.target.value)}/>

              </div>

            </div>

            <div className="mb-5">

              <label className="block text-gray-300 mb-2">
                Password
              </label>

              <div className="flex items-center bg-[#151515] border border-gray-700 rounded-xl px-4">
                <Lock className="text-gray-400" size={20} />
                <input type="password" placeholder="••••••••" value={password}
                  className="w-full py-4 px-3 bg-transparent outline-none text-white"
                  onChange={(e)=>setPassword(e.target.value)} />

                <Eye className="text-gray-400 cursor-pointer" size={20} />

              </div>

            </div>

            <div className="mb-6">

              <label className="block text-gray-300 mb-2">
                Confirm Password
              </label>

              <div className="flex items-center bg-[#151515] border border-gray-700 rounded-xl px-4">

                <Lock className="text-gray-400" size={20} />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full py-4 px-3 bg-transparent outline-none text-white"
                />

                <Eye className="text-gray-400 cursor-pointer" size={20} />

              </div>

            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-semibold hover:scale-[1.02] transition duration-300 shadow-lg shadow-purple-600/30">
              Create Account
            </button>

            <div className="my-8 flex items-center">
              <div className="flex-1 h-px bg-gray-700"></div>
              <span className="px-4 text-gray-500">
                OR
              </span>
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
              Already have an account?
              <Link
                to="/signin"
                className="text-purple-400 ml-2 hover:text-purple-500"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}

export default SignUp