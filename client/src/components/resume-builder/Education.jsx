import {
  GraduationCap,
  Plus,
  Trash2,
} from "lucide-react";

function Education({ resume, setResume }) {
  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      grade: "",
      description: "",
    };

    setResume((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        newEducation,
      ],
    }));
  };

  const updateEducation = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      ),
    }));
  };

  const removeEducation = (id) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter(
        (item) => item.id !== id
      ),
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between gap-4 mb-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">

            <GraduationCap
              size={20}
              className="text-violet-400"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Education
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Add your academic background
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={addEducation}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
        >
          <Plus size={17} />
          Add Education
        </button>

      </div>

      {resume.education.length === 0 && (
        <div className="border border-dashed border-white/10 rounded-xl p-10 text-center">

          <GraduationCap
            size={40}
            className="mx-auto text-gray-600"
          />

          <h3 className="text-white font-semibold mt-4">
            No education added
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Add your degree, college, school, or other
            educational qualifications.
          </p>

          <button
            type="button"
            onClick={addEducation}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            <Plus size={17} />
            Add Education
          </button>

        </div>
      )}

      <div className="space-y-6">

        {resume.education.map((item, index) => (
          <div
            key={item.id}
            className="border border-white/10 bg-[#111111] rounded-2xl p-5"
          >

            <div className="flex items-center justify-between mb-5">

              <h3 className="text-white font-semibold">
                Education {index + 1}
              </h3>

              <button
                type="button"
                onClick={() =>
                  removeEducation(item.id)
                }
                className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                title="Delete education"
              >
                <Trash2 size={17} />
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="resume-label">
                  Degree / Qualification
                </label>

                <input
                  type="text"
                  value={item.degree}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "degree",
                      e.target.value
                    )
                  }
                  placeholder="Bachelor of Computer Applications"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  Institution
                </label>

                <input
                  type="text"
                  value={item.institution}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "institution",
                      e.target.value
                    )
                  }
                  placeholder="University / College"
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
                    updateEducation(
                      item.id,
                      "location",
                      e.target.value
                    )
                  }
                  placeholder="Kerala, India"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  Grade / CGPA
                </label>

                <input
                  type="text"
                  value={item.grade}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "grade",
                      e.target.value
                    )
                  }
                  placeholder="8.6 CGPA"
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
                    updateEducation(
                      item.id,
                      "startDate",
                      e.target.value
                    )
                  }
                  placeholder="June 2023"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  End Date
                </label>

                <input
                  type="text"
                  value={item.endDate}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "endDate",
                      e.target.value
                    )
                  }
                  placeholder="May 2026"
                  className="resume-input"
                />

              </div>

              <div className="md:col-span-2">

                <label className="resume-label">
                  Description
                </label>

                <textarea
                  value={item.description}
                  onChange={(e) =>
                    updateEducation(
                      item.id,
                      "description",
                      e.target.value
                    )
                  }
                  placeholder="Add relevant coursework, achievements, activities, or other details..."
                  rows={4}
                  className="resume-input resize-none"
                />

              </div>

            </div>

          </div>
        ))}

      </div>

      {resume.education.length > 0 && (
        <button
          type="button"
          onClick={addEducation}
          className="w-full mt-6 py-3 rounded-xl border border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition flex items-center justify-center gap-2 font-semibold"
        >
          <Plus size={18} />
          Add Another Education
        </button>
      )}

    </div>
  );
}

export default Education;