import {
  User,
  FileText,
  GraduationCap,
  Briefcase,
  Code2,
  FolderGit2,
  Award,
  Languages,
  Trophy,
  Plus,
} from "lucide-react";

const sections = [
  {
    id: "personal",
    title: "Personal Information",
    icon: User,
  },
  {
    id: "summary",
    title: "Professional Summary",
    icon: FileText,
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
  },
  {
    id: "experience",
    title: "Experience",
    icon: Briefcase,
  },
  {
    id: "skills",
    title: "Skills",
    icon: Code2,
  },
  {
    id: "projects",
    title: "Projects",
    icon: FolderGit2,
  },
  {
    id: "certifications",
    title: "Certifications",
    icon: Award,
  },
  {
    id: "languages",
    title: "Languages",
    icon: Languages,
  },
  {
    id: "achievements",
    title: "Achievements",
    icon: Trophy,
  },
];

function BuilderSidebar({ activeSection, setActiveSection }) {
  return (
    <aside className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden">
      <div className="p-5 border-b border-white/10">
        <h2 className="text-white text-lg font-bold">Resume Sections</h2>

        <p className="text-gray-500 text-sm mt-1">
          Build your resume step by step
        </p>
      </div>

      <div className="p-3 space-y-1">
        {sections.map((section) => {
          const Icon = section.icon;

          const active = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                active
                  ? "bg-violet-600/15 text-violet-400 border border-violet-500/30"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <Icon
                size={19}
                className={active ? "text-violet-400" : "text-gray-500"}
              />

              <span className="text-sm font-medium">{section.title}</span>
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => {
            console.log("Add custom section");
          }}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10 hover:border-violet-500/50 transition"
        >
          <Plus size={18} />

          <span className="text-sm font-semibold">Add Custom Section</span>
        </button>
      </div>
    </aside>
  );
}

export default BuilderSidebar;
