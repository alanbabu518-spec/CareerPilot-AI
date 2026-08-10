import { CheckCircle, AlertTriangle, Search } from "lucide-react";

function KeywordAnalysis({ keywords }) {
  const result = {
    score: 82,

    keywords: {
      matchScore: 78,

      matched: [
        "React",
        "JavaScript",
        "Node.js",
        "MongoDB",
        "Express.js",
        "HTML",
        "CSS",
        "Git",
      ],

      missing: ["TypeScript", "Docker", "AWS", "CI/CD"],
    },

    strengths: [
      "Clear contact information",
      "Good technical skills section",
      "Relevant projects included",
    ],

    improvements: [
      {
        title: "Add job-specific keywords",
        description:
          "Add relevant keywords from the job description that match your actual skills.",
      },
      {
        title: "Add measurable achievements",
        description:
          "Use numbers and measurable results to make your experience stronger.",
      },
    ],

    missing: ["More measurable achievements", "Relevant certifications"],

    suggestions: [
      "Improve your professional summary.",
      "Use stronger action verbs in your experience section.",
      "Add relevant GitHub projects.",
      "Tailor your resume to the target job.",
    ],
  };
  if (!keywords) return null;

  const matchScore = keywords.matchScore || 0;

  return (
    <section className="bg-[#111111] border border-blue-500/20 rounded-3xl p-6">
      {/* Header */}

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
          <Search size={21} className="text-blue-400" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Keyword Analysis</h3>

          <p className="text-gray-500 text-sm">
            Important keywords detected in your resume
          </p>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-400 text-sm">Keyword Match</span>

          <span className="text-white font-bold">{matchScore}%</span>
        </div>

        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-700"
            style={{
              width: `${matchScore}%`,
            }}
          />
        </div>

        <p className="text-gray-500 text-xs mt-3">
          Higher keyword relevance can improve your ATS compatibility.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle size={18} className="text-green-400" />

            <h4 className="text-white font-semibold">Matched Keywords</h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {keywords.matched?.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} className="text-yellow-400" />

            <h4 className="text-white font-semibold">Missing Keywords</h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {keywords.missing?.map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeywordAnalysis;
