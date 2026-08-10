import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Lightbulb,
  Target,
  RotateCcw,
} from "lucide-react";

import KeywordAnalysis from "./KeyWordAnalysis";
import SectionAnalysis from "./SectionAnalysis";
import FormattingAnalysis from "./FormattingAnalysis";
import JobMatch from "./JobMatch";
import ActionPlan from "./ActionPlan";

function ATSResult({ result, onAnalyzeAnother }) {
  if (!result) return null;

  const score = result.score;

  const getScoreLabel = () => {
    if (score >= 80) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 60) return "Needs Improvement";
    return "Needs Major Improvement";
  };

  const getScoreColor = () => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Resume Analysis
          </h2>

          <p className="text-gray-500 mt-1">
            Here's how your resume performs against ATS requirements.
          </p>
        </div>

        <button
          type="button"
          onClick={onAnalyzeAnother}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#151515] border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/40 transition"
        >
          <RotateCcw size={17} />
          Analyze Another
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-[#111111] border border-violet-500/20 rounded-3xl p-6">
          <p className="text-gray-500 text-sm">Overall ATS Score</p>

          <div className="flex items-center gap-5 mt-5">
            <div className="relative w-28 h-28 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-white/10"
                />

                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${score * 2.64} 264`}
                  className={getScoreColor()}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-2xl font-bold ${getScoreColor()}`}>
                  {score}
                </span>
              </div>
            </div>

            <div>
              <h3 className={`text-xl font-bold ${getScoreColor()}`}>
                {getScoreLabel()}
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-5">
                Your resume has a good foundation but can still be improved.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#111111] border border-white/10 rounded-3xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
              <Target size={20} className="text-violet-400" />
            </div>

            <div>
              <h3 className="text-white font-bold">ATS Score Breakdown</h3>

              <p className="text-gray-500 text-xs">
                Performance across important resume areas
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <ScoreBar label="Formatting" score={90} />

            <ScoreBar label="Keywords" score={75} />

            <ScoreBar label="Skills" score={85} />

            <ScoreBar label="Experience" score={80} />

            <ScoreBar label="Education" score={88} />
          </div>
        </div>
      </div>

      <KeywordAnalysis keywords={result.keywords} />
      <SectionAnalysis sections={result.sections} />
      <FormattingAnalysis formatting={result.formatting} />
      <JobMatch jobMatch={result.jobMatch} />

      <section className="bg-[#111111] border border-green-500/20 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
            <CheckCircle size={21} className="text-green-400" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Strengths</h3>

            <p className="text-gray-500 text-sm">
              Things your resume is already doing well
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {result.strengths?.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-green-500/5 border border-green-500/10 rounded-xl p-4"
            >
              <CheckCircle
                size={18}
                className="text-green-400 mt-0.5 shrink-0"
              />

              <p className="text-gray-300 text-sm leading-5">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] border border-yellow-500/20 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <AlertTriangle size={21} className="text-yellow-400" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Areas to Improve</h3>

            <p className="text-gray-500 text-sm">
              Changes that can improve your ATS score
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {result.improvements?.map((item, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border border-white/5 rounded-2xl p-5"
            >
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-yellow-500/10 flex items-center justify-center shrink-0">
                  <AlertTriangle size={18} className="text-yellow-400" />
                </div>

                <div>
                  <h4 className="text-white font-semibold">{item.title}</h4>

                  <p className="text-gray-400 text-sm leading-6 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] border border-red-500/20 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
            <XCircle size={21} className="text-red-400" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Missing Areas</h3>

            <p className="text-gray-500 text-sm">
              Sections or information you should consider adding
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {result.missing?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-red-500/5 border border-red-500/10 rounded-xl p-4"
            >
              <XCircle size={18} className="text-red-400 shrink-0" />

              <span className="text-gray-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111111] border border-violet-500/20 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
            <Lightbulb size={21} className="text-violet-400" />
          </div>

          <div>
            <h3 className="text-lg font-bold text-white">Suggestions</h3>

            <p className="text-gray-500 text-sm">
              Recommended actions to improve your resume
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {result.suggestions?.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-violet-500/5 border border-violet-500/10 rounded-xl p-4"
            >
              <div className="w-7 h-7 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 font-bold text-sm shrink-0">
                {index + 1}
              </div>

              <p className="text-gray-300 text-sm leading-6">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <ActionPlan actions={result.actions} />
    </div>
  );
}

function ScoreBar({ label, score }) {
  const getColor = () => {
    if (score >= 80) {
      return "from-green-500 to-emerald-400";
    }

    if (score >= 60) {
      return "from-yellow-500 to-orange-400";
    }

    return "from-red-500 to-rose-400";
  };

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-400 text-sm">{label}</span>

        <span className="text-white text-sm font-semibold">{score}%</span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${getColor()} rounded-full transition-all duration-700`}
          style={{
            width: `${score}%`,
          }}
        />
      </div>
    </div>
  );
}

export default ATSResult;
