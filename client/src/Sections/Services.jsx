import {
  FileText,
  ScanSearch,
  GraduationCap,
  Briefcase,
  BookOpen,
  MessageSquareCode,
  LogIn,
  UserPlus,
  X,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedPath, setSelectedPath] = useState("");

  const services = [
    {
      icon: <FileText size={30} />,
      title: "Resume Builder",
      description:
        "Create professional ATS-friendly resumes using intelligent AI templates designed for modern recruitment.",
      path: "/resumebuilder",
    },
    {
      icon: <ScanSearch size={30} />,
      title: "Resume Analyzer",
      description:
        "Upload your resume and receive AI-powered feedback to improve formatting, keywords, and overall quality.",
      path: "/resumeanalyzer",
    },
    {
      icon: <GraduationCap size={30} />,
      title: "Interview Preparation",
      description:
        "Practice HR and technical interviews with AI-generated questions and receive instant performance feedback.",
      path: "/interview-preparation",
    },
    {
      icon: <Briefcase size={30} />,
      title: "Career Guidance",
      description:
        "Receive personalized career recommendations, roadmaps, and job role suggestions based on your goals.",
      path: "/career-guidance",
    },
    {
      icon: <BookOpen size={30} />,
      title: "Learning Recommendations",
      description:
        "Discover the best courses, certifications, projects, and learning resources tailored to your career path.",
      path: "/learning",
    },
    {
      icon: <MessageSquareCode size={30} />,
      title: "AI Career Assistant",
      description:
        "Ask anything about careers, resumes, interviews, skills, or projects and receive intelligent AI assistance.",
      path: "/ai-assistant",
    },
  ];

  const isAuthenticated = () => {
    const userName = localStorage.getItem("userName");

    return Boolean(userName);
  };

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);

    if (isAuthenticated()) {
      navigate(path);
      return;
    }

    setSelectedPath(path);
    setShowAuthModal(true);
  };

  const handleSignIn = () => {
    setShowAuthModal(false);

    navigate("/SignIn", {
      state: {
        from: selectedPath,
      },
    });
  };

  const handleSignUp = () => {
    setShowAuthModal(false);

    navigate("/SignUp", {
      state: {
        from: selectedPath,
      },
    });
  };

  const closeAuthModal = () => {
    setShowAuthModal(false);
    setSelectedPath("");
  };

  return (
    <>
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-violet-400 font-bold tracking-widest uppercase text-4xl">
              Services
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              AI Powered Career Services
            </h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
              CareerPilot AI offers everything you need to prepare for your
              dream career—from building an ATS-friendly resume to mastering
              interviews and receiving personalized AI career guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleNavigate(service.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleNavigate(service.path);
                  }
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:-translate-y-3 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-purple-700/0 group-hover:from-violet-600/10 group-hover:to-purple-700/10 transition duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-7">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigate(service.path);
                    }}
                    className="mt-8 text-violet-400 font-semibold hover:text-white transition inline-flex items-center gap-1"
                  >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-3xl border border-violet-500/20 bg-gradient-to-r from-violet-900/30 to-purple-900/30 backdrop-blur-xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold text-white">
                Ready to Accelerate Your Career?
              </h3>

              <p className="text-gray-400 mt-4 max-w-2xl">
                Let CareerPilot AI analyze your resume, prepare you for
                interviews, identify your skill gaps, and build a personalized
                roadmap toward your dream job.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleNavigate("/resumebuilder")}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:scale-105 transition shadow-lg shadow-violet-700/30 whitespace-nowrap"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {showAuthModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={closeAuthModal}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#111118] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeAuthModal}
              className="absolute right-5 top-5 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition"
            >
              <X size={20} />
            </button>

            <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center text-white">
              <LogIn size={30} />
            </div>

            <div className="text-center mt-6">
              <h2 className="text-2xl font-bold text-white">
                Sign in to continue
              </h2>

              <p className="text-gray-400 mt-3 leading-6">
                Sign in or create an account to access CareerPilot AI services.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <button
                type="button"
                onClick={handleSignIn}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:scale-[1.02] transition"
              >
                <LogIn size={20} />
                Sign In
              </button>

              <button
                type="button"
                onClick={handleSignUp}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition"
              >
                <UserPlus size={20} />
                Create an Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
