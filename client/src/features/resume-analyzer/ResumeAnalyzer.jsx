import { useState } from "react";

import Navbar from "../../components/Navbar";
import ResumeUpload from "./components/ResumeUpload";
import ATSResult from "./components/ATSResult";

function ResumeAnalyzer() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async (file) => {
    if (!file) return;

    setIsAnalyzing(true);

    console.log("Selected resume:", file);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = {
      score: 82,

      strengths: [
        "Clear contact information",
        "Good technical skills section",
        "Relevant projects included",
      ],

      improvements: [
        {
          title: "Add job-specific keywords",
          description:
            "Add relevant keywords from the job description that match your actual skills.",
        },
        {
          title: "Add measurable achievements",
          description:
            "Use numbers and measurable results to make your experience stronger.",
        },
      ],

      missing: ["More measurable achievements", "Relevant certifications"],

      suggestions: [
        "Improve your professional summary.",
        "Use stronger action verbs in your experience section.",
        "Add relevant GitHub projects.",
        "Tailor your resume to the target job.",
      ],

      sections: [
        {
          name: "Personal Information",
          status: "good",
          score: 95,
          feedback: "Contact information is clearly presented.",
        },
        {
          name: "Professional Summary",
          status: "warning",
          score: 68,
          feedback: "Your summary could be more specific to your target role.",
        },
        {
          name: "Experience",
          status: "good",
          score: 88,
          feedback: "Experience section contains relevant information.",
        },
        {
          name: "Education",
          status: "good",
          score: 90,
          feedback: "Education details are clearly structured.",
        },
        {
          name: "Skills",
          status: "good",
          score: 85,
          feedback: "Technical skills are easy to identify.",
        },
        {
          name: "Projects",
          status: "warning",
          score: 72,
          feedback: "Add more measurable results and technologies used.",
        },
        {
          name: "Certifications",
          status: "warning",
          score: 60,
          feedback: "Consider adding relevant certifications.",
        },
        {
          name: "Achievements",
          status: "missing",
          score: 0,
          feedback: "No achievements section was detected.",
        },
      ],

      formatting: {
        compatibility: 88,

        checks: [
          {
            name: "Resume Length",
            status: "good",
            description:
              "The resume length is appropriate for most professional applications.",
          },
          {
            name: "Section Headings",
            status: "good",
            description:
              "Important resume sections use clear and recognizable headings.",
          },
          {
            name: "Font Consistency",
            status: "good",
            description: "Font usage appears consistent throughout the resume.",
          },
          {
            name: "Bullet Points",
            status: "good",
            description:
              "Experience and project information uses readable bullet points.",
          },
          {
            name: "Tables & Complex Layouts",
            status: "warning",
            description:
              "Complex tables or multi-column layouts may reduce ATS readability.",
          },
          {
            name: "Graphics & Images",
            status: "warning",
            description:
              "Avoid placing important information inside images or graphics.",
          },
          {
            name: "Contact Information",
            status: "good",
            description:
              "Contact information is available in a readable text format.",
          },
          {
            name: "File Structure",
            status: "good",
            description:
              "The resume structure is straightforward and easy to parse.",
          },
        ],
        jobMatch: {
          matchScore: 76,

          matchedSkills: [
            "React",
            "JavaScript",
            "Node.js",
            "MongoDB",
            "REST API",
          ],

          missingSkills: ["TypeScript", "Docker", "AWS", "CI/CD"],

          keywords: [
            "Full Stack",
            "React",
            "Node.js",
            "REST API",
            "Git",
            "Agile",
            "Cloud",
          ],
        },
      },
      actions: [
        {
          priority: "high",
          title: "Improve your professional summary",
          description:
            "Make your summary more specific to the software engineering roles you are targeting and include relevant technologies.",
        },

        {
          priority: "high",
          title: "Add job-specific keywords",
          description:
            "Include relevant keywords from the job description where they accurately represent your skills and experience.",
        },

        {
          priority: "medium",
          title: "Add measurable achievements",
          description:
            "Use numbers, percentages, or measurable outcomes to demonstrate the impact of your projects and experience.",
        },

        {
          priority: "medium",
          title: "Improve project descriptions",
          description:
            "Explain the technologies used, your contribution, and the result of each project.",
        },

        {
          priority: "low",
          title: "Add relevant certifications",
          description:
            "Consider adding certifications that are relevant to your target job role.",
        },
      ],
    };

    setAnalysisResult(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />

      <main className="pt-24 px-4 sm:px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Resume ATS Analyzer
            </h1>

            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Upload your resume and get an AI-powered ATS score, suggestions,
              and improvement recommendations.
            </p>
          </div>

          {!analysisResult && (
            <ResumeUpload onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
          )}

          {analysisResult && (
            <ATSResult
              result={analysisResult}
              onAnalyzeAnother={() => setAnalysisResult(null)}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default ResumeAnalyzer;
