import {
  Languages as LanguagesIcon,
  Plus,
  Trash2,
} from "lucide-react";

const proficiencyLevels = [
  "Native",
  "Fluent",
  "Advanced",
  "Intermediate",
  "Beginner",
];

function Languages({ resume, setResume }) {
  const addLanguage = () => {
    const newLanguage = {
      id: Date.now(),
      name: "",
      proficiency: "Intermediate",
    };

    setResume((prev) => ({
      ...prev,
      languages: [
        ...prev.languages,
        newLanguage,
      ],
    }));
  };

  const updateLanguage = (
    id,
    field,
    value
  ) => {
    setResume((prev) => ({
      ...prev,
      languages: prev.languages.map(
        (language) =>
          language.id === id
            ? {
                ...language,
                [field]: value,
              }
            : language
      ),
    }));
  };

  const removeLanguage = (id) => {
    setResume((prev) => ({
      ...prev,
      languages: prev.languages.filter(
        (language) => language.id !== id
      ),
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">

            <LanguagesIcon
              size={20}
              className="text-violet-400"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Languages
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Add the languages you can communicate in
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={addLanguage}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
        >
          <Plus size={17} />
          Add Language
        </button>

      </div>

      {resume.languages.length === 0 && (
        <div className="border border-dashed border-white/10 rounded-xl p-10 text-center">

          <LanguagesIcon
            size={40}
            className="mx-auto text-gray-600"
          />

          <h3 className="text-white font-semibold mt-4">
            No languages added
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Add languages and indicate your proficiency level.
          </p>

          <button
            type="button"
            onClick={addLanguage}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            <Plus size={17} />
            Add Language
          </button>

        </div>
      )}

      <div className="space-y-4">

        {resume.languages.map(
          (language, index) => (
            <div
              key={language.id}
              className="bg-[#111111] border border-white/10 rounded-2xl p-5"
            >

              <div className="flex items-center justify-between mb-4">

                <h3 className="text-white font-semibold">
                  Language {index + 1}
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    removeLanguage(language.id)
                  }
                  className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                  title="Delete language"
                >
                  <Trash2 size={17} />
                </button>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="resume-label">
                    Language
                  </label>

                  <input
                    type="text"
                    value={language.name}
                    onChange={(e) =>
                      updateLanguage(
                        language.id,
                        "name",
                        e.target.value
                      )
                    }
                    placeholder="English"
                    className="resume-input"
                  />

                </div>

                <div>

                  <label className="resume-label">
                    Proficiency
                  </label>

                  <select
                    value={language.proficiency}
                    onChange={(e) =>
                      updateLanguage(
                        language.id,
                        "proficiency",
                        e.target.value
                      )
                    }
                    className="resume-input"
                  >

                    {proficiencyLevels.map(
                      (level) => (
                        <option
                          key={level}
                          value={level}
                          className="bg-[#151515]"
                        >
                          {level}
                        </option>
                      )
                    )}

                  </select>

                </div>

              </div>

            </div>
          )
        )}

      </div>

      {resume.languages.length > 0 && (
        <button
          type="button"
          onClick={addLanguage}
          className="w-full mt-6 py-3 rounded-xl border border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition flex items-center justify-center gap-2 font-semibold"
        >
          <Plus size={18} />
          Add Another Language
        </button>
      )}

    </div>
  );
}

export default Languages;