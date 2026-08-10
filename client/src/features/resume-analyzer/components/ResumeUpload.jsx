import { useRef, useState } from "react";
import { Upload, FileText, X, CheckCircle, Sparkles } from "lucide-react";

function ResumeUpload({ onAnalyze, isAnalyzing }) {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10MB.");
      return;
    }

    setFile(selectedFile);
  };

  const handleInputChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const removeFile = () => {
    setFile(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10">
      {!file && (
        <div className="bg-[#111111] border-2 border-dashed border-violet-500/30 rounded-3xl p-10 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-violet-600/20 flex items-center justify-center">
            <Upload size={30} className="text-violet-400" />
          </div>

          <h2 className="text-xl font-bold text-white mt-5">
            Upload Your Resume
          </h2>

          <p className="text-gray-500 text-sm mt-2">
            Upload your resume to check its ATS score.
          </p>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:scale-[1.02] transition"
          >
            Choose Resume
          </button>

          <p className="text-gray-600 text-xs mt-4">
            PDF • DOC • DOCX • Maximum 10MB
          </p>

          <input
            ref={inputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleInputChange}
            className="hidden"
          />
        </div>
      )}

      {file && (
        <div className="bg-[#111111] border border-violet-500/20 rounded-3xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-600/20 flex items-center justify-center">
              <FileText size={24} className="text-violet-400" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-white font-semibold truncate">{file.name}</h3>

              <p className="text-gray-500 text-sm mt-1">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              type="button"
              onClick={removeFile}
              className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 transition"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 text-green-400 text-sm mt-5">
            <CheckCircle size={17} />
            Resume uploaded successfully
          </div>

          <button
            type="button"
            onClick={() => onAnalyze(file)}
            disabled={isAnalyzing}
            className="w-full mt-5 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-700 text-white font-semibold hover:scale-[1.01] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Sparkles size={19} className={isAnalyzing ? "animate-spin" : ""} />

            {isAnalyzing ? "Analyzing Resume..." : "Analyze Resume"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
