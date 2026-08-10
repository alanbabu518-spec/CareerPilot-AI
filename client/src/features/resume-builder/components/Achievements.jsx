import { Trophy, Plus, Trash2 } from "lucide-react";

function Achievements({ resume, setResume }) {
  const addAchievement = () => {
    const newAchievement = {
      id: Date.now(),
      title: "",
      organization: "",
      date: "",
      description: "",
    };

    setResume((prev) => ({
      ...prev,
      achievements: [...prev.achievements, newAchievement],
    }));
  };

  const updateAchievement = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      achievements: prev.achievements.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  };

  const removeAchievement = (id) => {
    setResume((prev) => ({
      ...prev,
      achievements: prev.achievements.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">
            <Trophy size={20} className="text-violet-400" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Achievements</h2>

            <p className="text-gray-500 text-sm mt-1">
              Highlight awards, competitions, leadership, and other
              accomplishments
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={addAchievement}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
        >
          <Plus size={17} />
          Add Achievement
        </button>
      </div>

      {resume.achievements.length === 0 && (
        <div className="border border-dashed border-white/10 rounded-xl p-10 text-center">
          <Trophy size={40} className="mx-auto text-gray-600" />

          <h3 className="text-white font-semibold mt-4">
            No achievements added
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Add awards, hackathons, competitions, leadership roles, or other
            achievements.
          </p>

          <button
            type="button"
            onClick={addAchievement}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            <Plus size={17} />
            Add Achievement
          </button>
        </div>
      )}

      <div className="space-y-6">
        {resume.achievements.map((item, index) => (
          <div
            key={item.id}
            className="bg-[#111111] border border-white/10 rounded-2xl p-5"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-semibold">
                Achievement {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeAchievement(item.id)}
                className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                title="Delete achievement"
              >
                <Trash2 size={17} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="resume-label">Achievement / Award</label>

                <input
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    updateAchievement(item.id, "title", e.target.value)
                  }
                  placeholder="Winner - College Hackathon"
                  className="resume-input"
                />
              </div>

              <div>
                <label className="resume-label">Organization</label>

                <input
                  type="text"
                  value={item.organization}
                  onChange={(e) =>
                    updateAchievement(item.id, "organization", e.target.value)
                  }
                  placeholder="University / Organization"
                  className="resume-input"
                />
              </div>

              <div>
                <label className="resume-label">Date</label>

                <input
                  type="text"
                  value={item.date}
                  onChange={(e) =>
                    updateAchievement(item.id, "date", e.target.value)
                  }
                  placeholder="March 2026"
                  className="resume-input"
                />
              </div>

              <div className="md:col-span-2">
                <label className="resume-label">Description</label>

                <textarea
                  value={item.description}
                  onChange={(e) =>
                    updateAchievement(item.id, "description", e.target.value)
                  }
                  rows={4}
                  placeholder="Describe what you achieved and why it was important..."
                  className="resume-input resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {resume.achievements.length > 0 && (
        <button
          type="button"
          onClick={addAchievement}
          className="w-full mt-6 py-3 rounded-xl border border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition flex items-center justify-center gap-2 font-semibold"
        >
          <Plus size={18} />
          Add Another Achievement
        </button>
      )}
    </div>
  );
}

export default Achievements;
