import {
  Brain,
  FileText,
  Briefcase,
  Target,
  ShieldCheck,
  Sparkles,
  Rocket,
  Code2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/Slider";

function About() {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white min-h-screen">
        <div className="relative overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-700/30 blur-[180px] rounded-full -top-20 -left-20 mt-5"></div>
          <div className="absolute w-96 h-96 bg-violet-700/30 blur-[180px] rounded-full bottom-0 right-0"></div>

          <div className="relative max-w-7xl mx-auto px-7 py-28">
            <div className="grid lg:grid-cols-2 items-center gap-16">
              <div>
                <p className="text-purple-400 uppercase tracking-widest mb-4">
                  About CareerPilot AI
                </p>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  Your AI Powered
                  <br />
                  Career Assistant
                </h1>

                <p className="mt-8 text-gray-400 text-lg leading-8">
                  CareerPilot AI is a next-generation AI-powered career
                  development platform built to empower students, graduates, and
                  professionals throughout their career journey.By combining
                  Artificial Intelligence with modern web technologies, the
                  platform delivers intelligent resume analysis, ATS
                  optimization, AI mock interviews, career roadmaps, skill gap
                  analysis, and personalized recommendations. Whether you're
                  applying for your first internship or preparing for your dream
                  job, CareerPilot AI provides the tools and insights needed to
                  build confidence and stand out in today's competitive job
                  market.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <HeroSlider />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Mission</h2>

            <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
              We believe every job seeker deserves access to intelligent career
              guidance. Our mission is to bridge the gap between education and
              employment by combining AI with modern technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
              <Brain className="text-purple-500 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">
                AI Resume Analysis
              </h3>
              <p className="text-gray-400">
                Analyze resumes instantly and receive intelligent suggestions
                for improving content, keywords, and overall quality.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
              <FileText className="text-purple-500 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">ATS Optimization</h3>
              <p className="text-gray-400">
                Improve ATS compatibility with AI-generated recommendations and
                keyword optimization.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
              <Briefcase className="text-purple-500 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">
                AI Mock Interviews
              </h3>
              <p className="text-gray-400">
                Practice HR and technical interviews with AI-generated questions
                and personalized feedback.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
              <Target className="text-purple-500 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">
                Skill Gap Analysis
              </h3>
              <p className="text-gray-400">
                Discover missing skills required for your target role and
                receive personalized learning recommendations.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
              <ShieldCheck className="text-purple-500 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">Secure Platform</h3>
              <p className="text-gray-400">
                Built with secure authentication and modern web technologies to
                keep user information safe.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition">
              <Sparkles className="text-purple-500 mb-5" size={40} />
              <h3 className="text-2xl font-semibold mb-3">Career Roadmap</h3>
              <p className="text-gray-400">
                Receive AI-generated career guidance, learning paths, and
                project recommendations tailored to your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#0b0b0b] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold">Why Choose CareerPilot AI?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex gap-5">
                <Rocket className="text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Fast & Intelligent
                  </h3>
                  <p className="text-gray-400">
                    AI-powered recommendations delivered within seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <ShieldCheck className="text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Secure Authentication
                  </h3>
                  <p className="text-gray-400">
                    Your personal information remains protected using secure
                    authentication practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Brain className="text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Personalized AI
                  </h3>
                  <p className="text-gray-400">
                    Every recommendation is customized based on your career
                    goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Code2 className="text-purple-500" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Modern Technology
                  </h3>
                  <p className="text-gray-400">
                    Built using React, Node.js, Express, MongoDB and Generative
                    AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center py-24 px-6">
          <h2 className="text-4xl font-bold mb-8">Our Vision</h2>

          <p className="text-gray-400 leading-9 text-lg">
            We envision a future where Artificial Intelligence becomes every
            student's personal career mentor. CareerPilot AI is designed to help
            millions of learners confidently build resumes, prepare for
            interviews, discover new opportunities, and achieve long-term career
            success.
          </p>
        </div>

        <div className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rounded-3xl bg-gradient-to-r from-purple-700 to-violet-600 p-14 text-center">
              <h2 className="text-5xl font-bold mb-6">
                Start Building Your Dream Career Today
              </h2>

              <p className="text-lg text-gray-200 mb-10">
                Join CareerPilot AI and unlock personalized AI-powered career
                guidance, resume optimization, interview preparation, and much
                more.
              </p>

              <Link
                to="/"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
