import {
  FileText,
  ScanSearch,
  GraduationCap,
  Briefcase,
  BookOpen,
  MessageSquareCode,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <FileText size={38} />,
      title: "Resume Builder",
      description:
        "Create professional ATS-friendly resumes using intelligent AI templates designed for modern recruitment.",
    },
    {
      icon: <ScanSearch size={38} />,
      title: "Resume Review",
      description:
        "Upload your resume and receive AI-powered feedback to improve formatting, keywords, and overall quality.",
    },
    {
      icon: <Briefcase size={38} />,
      title: "Interview Preparation",
      description:
        "Practice HR and technical interviews with AI-generated questions and receive instant performance feedback.",
    },
    {
      icon: <GraduationCap size={38} />,
      title: "Career Guidance",
      description:
        "Receive personalized career recommendations, roadmaps, and job role suggestions based on your goals.",
    },
    {
      icon: <BookOpen size={38} />,
      title: "Learning Recommendations",
      description:
        "Discover the best courses, certifications, projects, and learning resources tailored to your career path.",
    },
    {
      icon: <MessageSquareCode size={38} />,
      title: "AI Career Assistant",
      description:
        "Ask anything about careers, resumes, interviews, skills, or projects and receive intelligent AI assistance.",
    },
  ];

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      <div className="absolute -top-40 right-0 w-[420px] h-[420px] rounded-full bg-violet-700/20 blur-[170px]" />
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] rounded-full bg-purple-700/20 blur-[170px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[5px] text-violet-400 font-semibold">
            Services
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            AI Powered Career Services
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            CareerPilot AI offers everything you need to prepare for your dream
            career—from building an ATS-friendly resume to mastering interviews
            and receiving personalized AI career guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:-translate-y-3 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-purple-700/0 group-hover:from-violet-600/10 group-hover:to-purple-700/10 transition duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">{service.description}</p>

                <button className="mt-8 text-violet-400 font-semibold hover:text-white transition">
                  Learn More →
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

          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:scale-105 transition shadow-lg shadow-violet-700/30">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
