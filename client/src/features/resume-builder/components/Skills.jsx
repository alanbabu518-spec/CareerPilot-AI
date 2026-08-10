import { useState } from "react";
import { Code2, Plus, X } from "lucide-react";

function Skills({ resume, setResume }) {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (
      resume.skills.some((item) => item.toLowerCase() === skill.toLowerCase())
    ) {
      setSkillInput("");
      return;
    }

    setResume((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));

    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">
          <Code2 size={20} className="text-violet-400" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Skills</h2>

          <p className="text-gray-500 text-sm mt-1">
            Add the skills that are relevant to your target role
          </p>
        </div>
      </div>

      <div>
        <label className="resume-label">Add Skill</label>

        <div className="flex gap-3">
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="e.g. React.js"
            className="resume-input"
          />

          <button
            type="button"
            onClick={addSkill}
            className="px-5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white flex items-center gap-2 font-semibold transition"
          >
            <Plus size={18} />
            Add
          </button>
        </div>

        <p className="text-xs text-gray-600 mt-2">
          Press Enter or click Add to add a skill.
        </p>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-300">Your Skills</h3>

          <span className="text-xs text-gray-500">
            {resume.skills.length} skills
          </span>
        </div>

        {resume.skills.length === 0 ? (
          <div className="border border-dashed border-white/10 rounded-xl p-8 text-center">
            <Code2 size={32} className="mx-auto text-gray-600" />

            <p className="text-gray-500 text-sm mt-3">No skills added yet.</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {resume.skills.map((skill, index) => (
              <div
                key={`${skill}-${index}`}
                className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 rounded-xl px-3 py-2"
              >
                <span className="text-sm font-medium">{skill}</span>

                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="text-violet-400 hover:text-red-400 transition"
                  aria-label={`Remove ${skill}`}
                >
                  <X size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-7 bg-violet-500/5 border border-violet-500/10 rounded-xl p-4">
        <h3 className="text-sm font-semibold text-white">ATS Tip</h3>

        <p className="text-sm text-gray-500 mt-1 leading-6">
          Add skills that match the job description. For example, if the job
          requires React, Node.js, MongoDB, and REST APIs, include those skills
          when you genuinely have experience with them.
        </p>
      </div>
    </div>
  );
}

export default Skills;
