import { useState } from "react";
import { Mail, Phone, MapPin, Palette, X } from "lucide-react";

import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import TemplateRenderer from "../templates/TemplateRenderer";

function ResumePreview({ resume, template, setTemplate }) {
  const [showTemplates, setShowTemplates] = useState(false);

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
        <TemplateRenderer template={template} resume={resume} />
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
