import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  LayoutTemplate,
} from "lucide-react";

function FormattingAnalysis({ formatting }) {
  if (!formatting) return null;

  const getIcon = (status) => {
    if (status === "good") {
      return <CheckCircle size={19} className="text-green-400" />;
    }

    if (status === "warning") {
      return <AlertTriangle size={19} className="text-yellow-400" />;
    }

    return <XCircle size={19} className="text-red-400" />;
  };

  const getStatusLabel = (status) => {
    if (status === "good") return "Good";
    if (status === "warning") return "Needs Attention";
    return "Problem";
  };

  const getStatusStyle = (status) => {
    if (status === "good") {
      return "text-green-400 bg-green-500/10 border-green-500/20";
    }

    if (status === "warning") {
      return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20";
    }

    return "text-red-400 bg-red-500/10 border-red-500/20";
  };

  return (
    <section className="bg-[#111111] border border-orange-500/20 rounded-3xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
          <LayoutTemplate size={21} className="text-orange-400" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">
            Formatting & ATS Compatibility
          </h3>

          <p className="text-gray-500 text-sm">
            Check whether your resume is easy for ATS systems to read
          </p>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-gray-500 text-sm">ATS Compatibility</p>

            <h4 className="text-2xl font-bold text-white mt-1">
              {formatting.compatibility}%
            </h4>
          </div>

          <div className="flex-1 sm:max-w-md">
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-700"
                style={{
                  width: `${formatting.compatibility}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {formatting.checks?.map((check, index) => (
          <div
            key={index}
            className="bg-white/[0.03] border border-white/5 rounded-2xl p-4"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0">{getIcon(check.status)}</div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-white font-semibold">{check.name}</h4>

                  <span
                    className={`w-fit px-2.5 py-1 rounded-lg border text-xs font-medium ${getStatusStyle(
                      check.status,
                    )}`}
                  >
                    {getStatusLabel(check.status)}
                  </span>
                </div>

                <p className="text-gray-400 text-sm leading-5 mt-2">
                  {check.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FormattingAnalysis;
