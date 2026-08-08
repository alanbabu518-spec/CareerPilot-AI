import { useState } from "react";
import { Save, Download, Sparkles, Eye } from "lucide-react";

import { Link } from "react-router-dom";

import BuilderSidebar from "../components/resume-builder/BuilderSidebar";
import PersonalInfo from "../components/resume-builder/PersonalInfo";
import Summary from "../components/resume-builder/ProffesionalSummery";
import Education from "../components/resume-builder/Education";
import ResumePreview from "../components/resume-builder/ResumePreview";
import Experience from "../components/resume-builder/Experience";
import Skills from "../components/resume-builder/Skills";
import Projects from "../components/resume-builder/Project";
import Certifications from "../components/resume-builder/Certifications";
import Languages from "../components/resume-builder/Languages";
import Achievements from "../components/resume-builder/Achievements";

export const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState("personal");

  const [mobileView, setMobileView] = useState("editor");

  const [resume, setResume] = useState({
    personal: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
    },

    summary: "",

    education: [],

    experience: [],

    skills: [],

    projects: [],

    certifications: [],

    languages: [],

    achievements: [],
  });

  const [template, setTemplate] = useState("modern");

  return (
    <div className="min-h-screen bg-[#050505] text-white">

      <header className="sticky top-0 z-40 h-16 bg-[#090909]/95 backdrop-blur-xl border-b border-white/10">
        <div className="h-full px-4 lg:px-6 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center">
              <Sparkles size={18} />
            </div>

            <div>
              <h1 className="font-bold">Resume Builder</h1>

              <p className="hidden sm:block text-xs text-gray-500">
                Build your professional resume
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151515] border border-white/10 hover:border-violet-500/40 transition"
            >
              Home
            </Link>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151515] border border-white/10 hover:border-violet-500/40 transition">
              <Save size={17} />
              Save
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#151515] border border-white/10 hover:border-violet-500/40 transition">
              <Download size={17} />
              Download
            </button>

            <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-700 hover:scale-[1.02] transition font-semibold">
              <Sparkles size={17} />
              Analyze Resume
            </button>
          </div>
        </div>
      </header>

      <div className="md:hidden sticky top-16 z-30 bg-[#090909] border-b border-white/10 p-3">
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setMobileView("editor")}
            className={`py-2 rounded-lg text-sm ${
              mobileView === "editor"
                ? "bg-violet-600 text-white"
                : "bg-[#151515] text-gray-400"
            }`}
          >
            Editor
          </button>

          <button
            onClick={() => setMobileView("preview")}
            className={`py-2 rounded-lg text-sm ${
              mobileView === "preview"
                ? "bg-violet-600 text-white"
                : "bg-[#151515] text-gray-400"
            }`}
          >
            <Eye size={16} className="inline mr-1" />
            Preview
          </button>

          <button
            onClick={() => setMobileView("template")}
            className={`py-2 rounded-lg text-sm ${
              mobileView === "template"
                ? "bg-violet-600 text-white"
                : "bg-[#151515] text-gray-400"
            }`}
          >
            Template
          </button>
        </div>
      </div>

      <main className="max-w-[19000px] mx-auto p-4 lg:p-6">
        <div className="grid lg:grid-cols-[280px_minmax(0,0.99fr)_520px] gap-6 items-start">

          <div
            className={`${
              mobileView === "editor" ? "block" : "hidden"
            } md:block`}
          >
            <BuilderSidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          </div>


          <div
            className={`${
              mobileView === "editor" ? "block" : "hidden"
            } md:block`}
          >
            {activeSection === "personal" && (
              <PersonalInfo resume={resume} setResume={setResume} />
            )}

            {activeSection === "summary" && (
              <Summary resume={resume} setResume={setResume} />
            )}

            {activeSection === "education" && (
              <Education resume={resume} setResume={setResume} />
            )}

            {activeSection === "experience" && (
              <Experience resume={resume} setResume={setResume} />
            )}

            {activeSection === "skills" && (
              <Skills resume={resume} setResume={setResume} />
            )}

            {activeSection === "projects" && (
              <Projects resume={resume} setResume={setResume} />
            )}

            {activeSection === "certifications" && (
              <Certifications resume={resume} setResume={setResume} />
            )}

            {activeSection === "languages" && (
              <Languages resume={resume} setResume={setResume} />
            )}

            {activeSection === "achievements" && (
              <Achievements resume={resume} setResume={setResume} />
            )}
          </div>

          <div
            className={`${
              mobileView === "preview" ? "block" : "hidden"
            } md:block`}
          >
            <ResumePreview
              resume={resume}
              template={template}
              setTemplate={setTemplate}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResumeBuilder;