import {
  Briefcase,
  Plus,
  Trash2,
  X,
} from "lucide-react";

function Experience({ resume, setResume }) {
  const addExperience = () => {
    const newExperience = {
      id: Date.now(),
      jobTitle: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
      responsibilities: [""],
    };

    setResume((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        newExperience,
      ],
    }));
  };

  const updateExperience = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      ),
    }));
  };

  const removeExperience = (id) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter(
        (item) => item.id !== id
      ),
    }));
  };

  const addResponsibility = (id) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === id
          ? {
              ...item,
              responsibilities: [
                ...item.responsibilities,
                "",
              ],
            }
          : item
      ),
    }));
  };

  const updateResponsibility = (
    experienceId,
    index,
    value
  ) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === experienceId
          ? {
              ...item,
              responsibilities:
                item.responsibilities.map(
                  (responsibility, i) =>
                    i === index
                      ? value
                      : responsibility
                ),
            }
          : item
      ),
    }));
  };

  const removeResponsibility = (
    experienceId,
    index
  ) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.map((item) =>
        item.id === experienceId
          ? {
              ...item,
              responsibilities:
                item.responsibilities.filter(
                  (_, i) => i !== index
                ),
            }
          : item
      ),
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">

            <Briefcase
              size={20}
              className="text-violet-400"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Experience
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Add your work experience and internships
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={addExperience}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
        >
          <Plus size={17} />
          Add Experience
        </button>

      </div>

      {resume.experience.length === 0 && (
        <div className="border border-dashed border-white/10 rounded-xl p-10 text-center">

          <Briefcase
            size={40}
            className="mx-auto text-gray-600"
          />

          <h3 className="text-white font-semibold mt-4">
            No experience added
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Add your jobs, internships, freelance work,
            or other professional experience.
          </p>

          <button
            type="button"
            onClick={addExperience}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            <Plus size={17} />
            Add Experience
          </button>

        </div>
      )}

      <div className="space-y-6">

        {resume.experience.map((item, index) => (
          <div
            key={item.id}
            className="bg-[#111111] border border-white/10 rounded-2xl p-5"
          >
            <div className="flex items-center justify-between mb-5">

              <h3 className="text-white font-semibold">
                Experience {index + 1}
              </h3>

              <button
                type="button"
                onClick={() =>
                  removeExperience(item.id)
                }
                className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                title="Delete experience"
              >
                <Trash2 size={17} />
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>

                <label className="resume-label">
                  Job Title
                </label>

                <input
                  type="text"
                  value={item.jobTitle}
                  onChange={(e) =>
                    updateExperience(
                      item.id,
                      "jobTitle",
                      e.target.value
                    )
                  }
                  placeholder="Software Engineer"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  Company
                </label>

                <input
                  type="text"
                  value={item.company}
                  onChange={(e) =>
                    updateExperience(
                      item.id,
                      "company",
                      e.target.value
                    )
                  }
                  placeholder="Company Name"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  Location
                </label>

                <input
                  type="text"
                  value={item.location}
                  onChange={(e) =>
                    updateExperience(
                      item.id,
                      "location",
                      e.target.value
                    )
                  }
                  placeholder="Bangalore, India"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  Start Date
                </label>

                <input
                  type="text"
                  value={item.startDate}
                  onChange={(e) =>
                    updateExperience(
                      item.id,
                      "startDate",
                      e.target.value
                    )
                  }
                  placeholder="June 2025"
                  className="resume-input"
                />

              </div>

              {!item.current && (
                <div>

                  <label className="resume-label">
                    End Date
                  </label>

                  <input
                    type="text"
                    value={item.endDate}
                    onChange={(e) =>
                      updateExperience(
                        item.id,
                        "endDate",
                        e.target.value
                      )
                    }
                    placeholder="December 2025"
                    className="resume-input"
                  />

                </div>
              )}

              <div
                className={`flex items-center ${
                  item.current
                    ? "md:col-span-1"
                    : ""
                }`}
              >

                <label className="flex items-center gap-3 cursor-pointer mt-6">

                  <input
                    type="checkbox"
                    checked={item.current}
                    onChange={(e) => {
                      updateExperience(
                        item.id,
                        "current",
                        e.target.checked
                      );

                      if (e.target.checked) {
                        updateExperience(
                          item.id,
                          "endDate",
                          ""
                        );
                      }
                    }}
                    className="w-4 h-4 accent-violet-600"
                  />

                  <span className="text-sm text-gray-300">
                    I currently work here
                  </span>

                </label>

              </div>

            </div>

            <div className="mt-5">

              <label className="resume-label">
                Description
              </label>

              <textarea
                value={item.description}
                onChange={(e) =>
                  updateExperience(
                    item.id,
                    "description",
                    e.target.value
                  )
                }
                rows={4}
                placeholder="Briefly describe your role and responsibilities..."
                className="resume-input resize-none"
              />

            </div>

            <div className="mt-6">

              <div className="flex items-center justify-between mb-3">

                <label className="resume-label mb-0">
                  Key Responsibilities & Achievements
                </label>

                <button
                  type="button"
                  onClick={() =>
                    addResponsibility(item.id)
                  }
                  className="text-sm text-violet-400 hover:text-violet-300"
                >
                  + Add Bullet
                </button>

              </div>

              <div className="space-y-3">

                {item.responsibilities.map(
                  (responsibility, responsibilityIndex) => (
                    <div
                      key={responsibilityIndex}
                      className="flex gap-2"
                    >

                      <input
                        type="text"
                        value={responsibility}
                        onChange={(e) =>
                          updateResponsibility(
                            item.id,
                            responsibilityIndex,
                            e.target.value
                          )
                        }
                        placeholder="e.g. Developed responsive web applications using React"
                        className="resume-input"
                      />

                      {item.responsibilities.length >
                        1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeResponsibility(
                              item.id,
                              responsibilityIndex
                            )
                          }
                          className="w-11 shrink-0 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center"
                        >
                          <X size={17} />
                        </button>
                      )}

                    </div>
                  )
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

      {resume.experience.length > 0 && (
        <button
          type="button"
          onClick={addExperience}
          className="w-full mt-6 py-3 rounded-xl border border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition flex items-center justify-center gap-2 font-semibold"
        >
          <Plus size={18} />
          Add Another Experience
        </button>
      )}

    </div>
  );
}

export default Experience;