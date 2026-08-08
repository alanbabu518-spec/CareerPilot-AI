import { useState } from "react";
import { Mail, Phone, MapPin, Palette, X } from "lucide-react";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function ResumePreview({ resume, template, setTemplate }) {
  const [showTemplates, setShowTemplates] = useState(false);

  const personal = resume.personal || {};

  const templates = [
    {
      id: "modern",
      name: "Modern",
      description: "Clean and modern",
      color: "bg-violet-500",
    },
    {
      id: "professional",
      name: "Professional",
      description: "Corporate and professional",
      color: "bg-blue-500",
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Simple and ATS-friendly",
      color: "bg-gray-700",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Modern creative style",
      color: "bg-pink-500",
    },
    {
      id: "executive",
      name: "Executive",
      description: "Elegant professional",
      color: "bg-emerald-500",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-white text-lg font-bold">Resume Preview</h2>

          <p className="text-gray-500 text-sm mt-1">
            Your resume updates automatically
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowTemplates(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold transition"
        >
          <Palette size={17} />
          Choose Template
        </button>
      </div>

      <div className="bg-white text-black w-full max-w-[1500px] mx-auto min-h-[1100px] shadow-2xl">
        <div className="p-10 sm:p-12">
          <div className="border-b-2 border-gray-800 pb-5">
            <h1 className="text-4xl font-bold tracking-tight">
              {personal.fullName || "Your Name"}
            </h1>

            <p className="text-lg text-gray-600 mt-1">
              {personal.jobTitle || "Professional Title"}
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-gray-600">
              {personal.email && (
                <span className="flex items-center gap-1.5">
                  <Mail size={14} />
                  {personal.email}
                </span>
              )}

              {personal.phone && (
                <span className="flex items-center gap-1.5">
                  <Phone size={14} />
                  {personal.phone}
                </span>
              )}

              {personal.location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  {personal.location}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-5 mt-3 text-sm">
              {personal.linkedin && (
                <span className="flex items-center gap-1.5 text-gray-700">
                  <FaLinkedin />
                  {personal.linkedin}
                </span>
              )}

              {personal.github && (
                <span className="flex items-center gap-1.5 text-gray-700">
                  <FaGithub />
                  {personal.github}
                </span>
              )}

              {personal.x && (
                <span className="flex items-center gap-1.5 text-gray-700">
                  <FaXTwitter />
                  {personal.x}
                </span>
              )}

              {personal.website && (
                <span className="text-gray-700">{personal.website}</span>
              )}
            </div>
          </div>

          {resume.summary && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Professional Summary
              </h2>

              <p className="text-sm leading-6 text-gray-700 mt-3">
                {resume.summary}
              </p>
            </section>
          )}

          {resume.skills?.length > 0 && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Skills
              </h2>

              <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
                {resume.skills.map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="text-sm text-gray-700"
                  >
                    {skill}

                    {index !== resume.skills.length - 1 && " •"}
                  </span>
                ))}
              </div>
            </section>
          )}

          {resume.experience?.length > 0 && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Experience
              </h2>

              <div className="mt-4 space-y-6">
                {resume.experience.map((item) => (
                  <div key={item.id}>

                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-base">
                          {item.jobTitle || "Job Title"}
                        </h3>

                        <p className="text-sm text-gray-700 mt-1">
                          {item.company || "Company Name"}
                        </p>
                      </div>

                      <div className="text-right text-sm text-gray-600 whitespace-nowrap">
                        {item.startDate && <span>{item.startDate}</span>}

                        {item.startDate && <span>{" – "}</span>}

                        <span>{item.current ? "Present" : item.endDate}</span>
                      </div>
                    </div>

                    {item.location && (
                      <p className="text-sm text-gray-500 mt-1">
                        {item.location}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-sm text-gray-600 leading-6 mt-2">
                        {item.description}
                      </p>
                    )}

                    {item.responsibilities?.some((responsibility) =>
                      responsibility.trim(),
                    ) && (
                      <ul className="mt-3 space-y-1.5 list-disc pl-5">
                        {item.responsibilities
                          .filter((responsibility) => responsibility.trim())
                          .map((responsibility, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-700 leading-5"
                            >
                              {responsibility}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}


          {resume.projects?.length > 0 && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Projects
              </h2>

              <div className="mt-4 space-y-5">
                {resume.projects.map((project) => (
                  <div key={project.id}>
                    {/* Project Header */}

                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-base">
                          {project.name || "Project Name"}
                        </h3>

                        {project.role && (
                          <p className="text-sm text-gray-600">
                            {project.role}
                          </p>
                        )}
                      </div>

                      <div className="flex gap-3 text-xs text-gray-600">
                        {project.githubUrl && <span>GitHub</span>}

                        {project.liveUrl && <span>Live Demo</span>}
                      </div>
                    </div>

                    {/* Description */}

                    {project.description && (
                      <p className="text-sm text-gray-700 leading-5 mt-2">
                        {project.description}
                      </p>
                    )}

                    {/* Technologies */}

                    {project.technologies?.length > 0 && (
                      <p className="text-sm text-gray-600 mt-2">
                        <strong>Technologies:</strong>{" "}
                        {project.technologies.join(" • ")}
                      </p>
                    )}

                    {/* Achievements */}

                    {project.achievements?.some((item) => item.trim()) && (
                      <ul className="mt-2 space-y-1 list-disc pl-5">
                        {project.achievements
                          .filter((item) => item.trim())
                          .map((item, index) => (
                            <li key={index} className="text-sm text-gray-700">
                              {item}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.education?.length > 0 && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Education
              </h2>

              <div className="mt-4 space-y-5">
                {resume.education.map((education) => (
                  <div key={education.id}>
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-base">
                          {education.degree || "Degree / Qualification"}
                        </h3>

                        <p className="text-sm text-gray-700 mt-1">
                          {education.institution || "Institution"}
                        </p>
                      </div>

                      <div className="text-right text-sm text-gray-600 whitespace-nowrap">
                        {education.startDate || education.endDate ? (
                          <>
                            {education.startDate}

                            {education.startDate && education.endDate
                              ? " – "
                              : ""}

                            {education.endDate}
                          </>
                        ) : null}
                      </div>
                    </div>

                    <div className="flex justify-between mt-1">
                      {education.location && (
                        <p className="text-sm text-gray-500">
                          {education.location}
                        </p>
                      )}

                      {education.grade && (
                        <p className="text-sm text-gray-600">
                          {education.grade}
                        </p>
                      )}
                    </div>

                    {education.description && (
                      <p className="text-sm text-gray-600 leading-6 mt-2">
                        {education.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.certifications?.length > 0 && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Certifications
              </h2>

              <div className="mt-4 space-y-3">
                {resume.certifications.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-sm">
                          {item.name || "Certification Name"}
                        </h3>

                        {item.organization && (
                          <p className="text-sm text-gray-700">
                            {item.organization}
                          </p>
                        )}
                      </div>

                      {item.date && (
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>

                    {item.credentialId && (
                      <p className="text-xs text-gray-500 mt-1">
                        Credential ID: {item.credentialId}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.languages?.length > 0 && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Languages
              </h2>

              <div className="mt-3 space-y-1">
                {resume.languages.map((language) => (
                  <div
                    key={language.id}
                    className="flex justify-between gap-4 text-sm"
                  >
                    <span className="font-medium text-gray-800">
                      {language.name || "Language"}
                    </span>

                    <span className="text-gray-600">
                      {language.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {resume.achievements?.length > 0 && (
            <section className="mt-7">
              <h2 className="text-sm font-bold uppercase tracking-widest border-b border-gray-300 pb-2">
                Achievements
              </h2>

              <div className="mt-4 space-y-4">
                {resume.achievements.map((item) => (
                  <div key={item.id}>
                    <div className="flex justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-sm">
                          {item.title || "Achievement"}
                        </h3>

                        {item.organization && (
                          <p className="text-sm text-gray-700">
                            {item.organization}
                          </p>
                        )}
                      </div>

                      {item.date && (
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>

                    {item.description && (
                      <p className="text-sm text-gray-700 leading-5 mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

    
      {showTemplates && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowTemplates(false)}
        >
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Choose Template
                </h2>

                <p className="text-gray-500 text-sm mt-1">
                  Select a design for your resume
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowTemplates(false)}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {templates.map((item) => {
                const isSelected = template === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setTemplate(item.id);
                      setShowTemplates(false);
                    }}
                    className={`text-left rounded-xl p-3 border transition-all ${
                      isSelected
                        ? "border-violet-500 bg-violet-500/10"
                        : "border-white/10 bg-[#181818] hover:border-white/20"
                    }`}
                  >

                    <div className="h-44 bg-white rounded-lg p-4">
                      <div className="flex gap-2 items-center">
                        <div className={`w-8 h-8 rounded-full ${item.color}`} />

                        <div className="flex-1">
                          <div className="h-2 bg-gray-800 rounded w-24" />

                          <div className="h-1.5 bg-gray-300 rounded w-16 mt-2" />
                        </div>
                      </div>

                      <div className="mt-5 space-y-2">
                        <div className="h-1.5 bg-gray-300 rounded w-full" />

                        <div className="h-1.5 bg-gray-300 rounded w-5/6" />

                        <div className="h-1.5 bg-gray-300 rounded w-full" />

                        <div className="h-1.5 bg-gray-300 rounded w-4/6" />
                      </div>

                      <div
                        className={`h-1.5 rounded w-12 mt-5 ${item.color}`}
                      />

                      <div className="mt-3 space-y-1.5">
                        <div className="h-1 bg-gray-300 rounded w-full" />

                        <div className="h-1 bg-gray-300 rounded w-4/5" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div>
                        <h3 className="text-white text-sm font-semibold">
                          {item.name}
                        </h3>

                        <p className="text-gray-500 text-xs mt-1">
                          {item.description}
                        </p>
                      </div>

                      {isSelected && (
                        <span className="text-xs text-violet-400 font-semibold">
                          Selected
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumePreview;
