import { CheckCircle, AlertTriangle, XCircle, FileText } from "lucide-react";

function SectionAnalysis({ sections }) {
  if (!sections) return null;

  const getStatusIcon = (status) => {
    if (status === "good") {
      return <CheckCircle size={20} className="text-green-400" />;
    }

    if (status === "warning") {
      return <AlertTriangle size={20} className="text-yellow-400" />;
    }

    return <XCircle size={20} className="text-red-400" />;
  };

  const getStatusText = (status) => {
    if (status === "good") return "Good";
    if (status === "warning") return "Needs Improvement";
    return "Missing";
  };

  const getStatusColor = (status) => {
    if (status === "good") {
      return "text-green-400 bg-green-500/10 border-green-500/20";
    }

    if (status === "warning") {
      return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
    }

    return "text-red-400 bg-red-500/10 border-red-500/20";
  };

  return (
    <section className="bg-[#111111] border border-cyan-500/20 rounded-3xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <FileText size={21} className="text-cyan-400" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Resume Section Analysis
          </h3>

          <p className="text-gray-500 text-sm">
            Review of the important sections in your resume
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white/[0.03] border border-white/5 rounded-2xl p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {getStatusIcon(section.status)}

                <div>
                  <h4 className="text-white font-semibold">{section.name}</h4>

                  <p className="text-gray-500 text-xs mt-1">
                    {getStatusText(section.status)}
                  </p>
                </div>
              </div>

              <span
                className={`px-2.5 py-1 rounded-lg border text-xs font-medium ${getStatusColor(
                  section.status,
                )}`}
              >
                {section.score}%
              </span>
            </div>

            {section.feedback && (
              <p className="text-gray-400 text-sm leading-5 mt-4">
                {section.feedback}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionAnalysis;
