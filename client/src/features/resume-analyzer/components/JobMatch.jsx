import { useState } from "react";
import {
  BriefcaseBusiness,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Target,
} from "lucide-react";

function JobMatch({ jobMatch }) {
  const [jobDescription, setJobDescription] = useState("");
  const [matchResult, setMatchResult] = useState(null);

  const handleAnalyzeJob = () => {
    if (!jobDescription.trim()) {
      alert("Please paste a job description first.");
      return;
    }

    const result = {
      matchScore: 76,

      matchedSkills: ["React", "JavaScript", "Node.js", "MongoDB", "REST API"],

      missingSkills: ["TypeScript", "Docker", "AWS", "CI/CD"],

      keywords: [
        "Full Stack",
        "React",
        "Node.js",
        "REST API",
        "Git",
        "Agile",
        "Cloud",
      ],
    };

    setMatchResult(result);
  };

  const result = matchResult || jobMatch;

  return (
    <section className="bg-[#111111] border border-purple-500/20 rounded-3xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
          <BriefcaseBusiness size={21} className="text-purple-400" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Job Description Match
          </h3>

          <p className="text-gray-500 text-sm">
            Compare your resume with a specific job description.
          </p>
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-300 font-medium">
          Paste Job Description
        </label>

        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here..."
          rows={8}
          className="w-full mt-3 bg-[#0b0b0b] border border-white/10 rounded-2xl p-4 text-gray-300 placeholder:text-gray-600 outline-none resize-none focus:border-purple-500/50 transition"
        />
      </div>

      <button
        type="button"
        onClick={handleAnalyzeJob}
        className="mt-4 flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-700 text-white font-semibold hover:scale-[1.01] transition"
      >
        <Sparkles size={18} />
        Analyze Job Match
      </button>

      {result && (
        <div className="mt-8">
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="text-gray-500 text-sm">Resume Match</p>

                <h4 className="text-4xl font-bold text-white mt-1">
                  {result.matchScore}%
                </h4>
              </div>

              <div className="flex-1 sm:max-w-md">
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-violet-400 rounded-full transition-all duration-700"
                    style={{
                      width: `${result.matchScore}%`,
                    }}
                  />
                </div>

                <p className="text-gray-500 text-xs mt-3">
                  Compatibility with this job description
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle size={18} className="text-green-400" />

                <h4 className="text-white font-semibold">Matching Skills</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {result.matchedSkills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle size={18} className="text-yellow-400" />

                <h4 className="text-white font-semibold">Skills to Consider</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {result.missingSkills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {result.keywords?.length > 0 && (
            <div className="mt-5 bg-white/[0.03] border border-white/5 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Target size={18} className="text-purple-400" />

                <h4 className="text-white font-semibold">
                  Important Job Keywords
                </h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {result.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export default JobMatch;
