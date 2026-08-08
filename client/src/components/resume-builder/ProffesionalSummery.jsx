import { FileText, Sparkles } from "lucide-react";

function Summary({ resume, setResume }) {
  const handleChange = (e) => {
    setResume((prev) => ({
      ...prev,
      summary: e.target.value,
    }));
  };

  const generateSummary = () => {
    const jobTitle =
      resume.personal?.jobTitle || "Software Developer";

    const summary = `Motivated ${jobTitle} with a strong passion for building scalable and user-friendly applications. Experienced in developing practical projects, solving technical problems, and continuously learning modern technologies. Passionate about contributing to innovative software solutions and growing as a professional developer.`;

    setResume((prev) => ({
      ...prev,
      summary,
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">

            <FileText
              size={20}
              className="text-violet-400"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Professional Summary
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Write a short introduction about yourself
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={generateSummary}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600/10 border border-violet-500/30 text-violet-400 hover:bg-violet-600/20 transition"
        >

          <Sparkles size={17} />

          Generate with AI

        </button>

      </div>

      <div>

        <label className="block text-sm font-medium text-gray-300 mb-2">
          About You
        </label>

        <textarea
          value={resume.summary}
          onChange={handleChange}
          rows={9}
          maxLength={800}
          placeholder="Example: Motivated full-stack developer with experience building responsive web applications using React, Node.js, Express, and MongoDB..."
          className="w-full bg-[#151515] border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 outline-none resize-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/10 transition"
        />

        <div className="flex justify-between mt-2">

          <p className="text-xs text-gray-600">
            Keep your summary concise and focused.
          </p>

          <p className="text-xs text-gray-500">
            {resume.summary.length}/800
          </p>

        </div>

      </div>

      <div className="mt-6 p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">

        <div className="flex gap-3">

          <Sparkles
            size={18}
            className="text-violet-400 shrink-0 mt-0.5"
          />

          <div>

            <h3 className="text-sm font-semibold text-white">
              Resume Tip
            </h3>

            <p className="text-sm text-gray-500 mt-1 leading-6">
              Highlight your experience, strongest skills,
              achievements, and the type of role you are
              targeting. Avoid generic statements.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Summary;