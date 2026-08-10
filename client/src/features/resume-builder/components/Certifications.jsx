import { Award, Plus, Trash2, ExternalLink } from "lucide-react";

function Certifications({ resume, setResume }) {
  const addCertification = () => {
    const newCertification = {
      id: Date.now(),
      name: "",
      organization: "",
      date: "",
      credentialId: "",
      credentialUrl: "",
    };

    setResume((prev) => ({
      ...prev,
      certifications: [...prev.certifications, newCertification],
    }));
  };

  const updateCertification = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      certifications: prev.certifications.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item,
      ),
    }));
  };

  const removeCertification = (id) => {
    setResume((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">
            <Award size={20} className="text-violet-400" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">Certifications</h2>

            <p className="text-gray-500 text-sm mt-1">
              Add certifications that support your professional profile
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={addCertification}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
        >
          <Plus size={17} />
          Add Certification
        </button>
      </div>

      {resume.certifications.length === 0 && (
        <div className="border border-dashed border-white/10 rounded-xl p-10 text-center">
          <Award size={40} className="mx-auto text-gray-600" />

          <h3 className="text-white font-semibold mt-4">
            No certifications added
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Add professional certificates, courses, or credentials.
          </p>

          <button
            type="button"
            onClick={addCertification}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            <Plus size={17} />
            Add Certification
          </button>
        </div>
      )}

      <div className="space-y-6">
        {resume.certifications.map((item, index) => (
          <div
            key={item.id}
            className="bg-[#111111] border border-white/10 rounded-2xl p-5"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-white font-semibold">
                Certification {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => removeCertification(item.id)}
                className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                title="Delete certification"
              >
                <Trash2 size={17} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="resume-label">Certification Name</label>

                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    updateCertification(item.id, "name", e.target.value)
                  }
                  placeholder="IBM Data Analyst Professional Certificate"
                  className="resume-input"
                />
              </div>

              <div>
                <label className="resume-label">Issuing Organization</label>

                <input
                  type="text"
                  value={item.organization}
                  onChange={(e) =>
                    updateCertification(item.id, "organization", e.target.value)
                  }
                  placeholder="IBM"
                  className="resume-input"
                />
              </div>

              <div>
                <label className="resume-label">Issue Date</label>

                <input
                  type="text"
                  value={item.date}
                  onChange={(e) =>
                    updateCertification(item.id, "date", e.target.value)
                  }
                  placeholder="June 2026"
                  className="resume-input"
                />
              </div>

              <div>
                <label className="resume-label">Credential ID</label>

                <input
                  type="text"
                  value={item.credentialId}
                  onChange={(e) =>
                    updateCertification(item.id, "credentialId", e.target.value)
                  }
                  placeholder="ABC123456"
                  className="resume-input"
                />
              </div>

              <div className="md:col-span-2">
                <label className="resume-label">Credential URL</label>

                <div className="relative">
                  <ExternalLink
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="url"
                    value={item.credentialUrl}
                    onChange={(e) =>
                      updateCertification(
                        item.id,
                        "credentialUrl",
                        e.target.value,
                      )
                    }
                    placeholder="https://credential.example.com"
                    className="resume-input !pl-11"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {resume.certifications.length > 0 && (
        <button
          type="button"
          onClick={addCertification}
          className="w-full mt-6 py-3 rounded-xl border border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition flex items-center justify-center gap-2 font-semibold"
        >
          <Plus size={18} />
          Add Another Certification
        </button>
      )}
    </div>
  );
}

export default Certifications;
