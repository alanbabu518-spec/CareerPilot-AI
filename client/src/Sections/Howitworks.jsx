import { motion } from "framer-motion";
import {
  UserPlus,
  Upload,
  BrainCircuit,
  MessageSquareCode,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up and personalize your CareerPilot AI profile to start your career journey.",
    icon: UserPlus,
  },
  {
    title: "Upload Your Resume",
    description:
      "Upload your resume and let our AI understand your education, skills, and experience.",
    icon: Upload,
  },
  {
    title: "AI Career Analysis",
    description:
      "Receive ATS score, skill-gap analysis, resume feedback, and career recommendations.",
    icon: BrainCircuit,
  },
  {
    title: "Practice Mock Interviews",
    description:
      "Prepare with AI-powered HR and technical interviews with instant feedback.",
    icon: MessageSquareCode,
  },
  {
    title: "Apply With Confidence",
    description:
      "Download your optimized resume and confidently apply for your dream opportunities.",
    icon: Briefcase,
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 bg-[#050505] overflow-hidden text-white"
    >
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[180px]" />
      <div className="absolute bottom-0 -right-40 w-[450px] h-[450px] rounded-full bg-purple-700/20 blur-[180px]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold">
            How
            <span className="text-violet-500"> It Works</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Five simple AI-powered steps to accelerate your career.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-violet-600 -translate-x-1/2 hidden lg:block"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -150 : 150,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.8,
                }}
                className={`mb-24 flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="w-full lg:w-1/2 relative">
                  <div
                    className={`bg-[#111111] border border-violet-500/20 rounded-2xl p-8
          hover:-translate-y-2
          hover:border-violet-500
          hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]
          transition-all duration-300
          ${index % 2 === 0 ? "lg:mr-14" : "lg:ml-14"}`}
                  >
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-700 flex items-center justify-center shadow-lg">
                        <Icon size={30} className="text-white" />
                      </div>

                      <div>
                        <span className="text-violet-400 font-bold text-sm tracking-widest">
                          STEP {index + 1}
                        </span>

                        <h3 className="text-3xl font-bold mt-2">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-gray-400 leading-8 text-lg">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className={`hidden lg:flex absolute top-12 ${
                      index % 2 === 0 ? "-right-6" : "-left-6"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 border-4 border-[#050505] flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,.5)]">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
