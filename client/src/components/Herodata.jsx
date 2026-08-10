import banner1 from "../assets/CareerPilot.img1.png";
import banner2 from "../assets/CareerPilot.img2.png";
import banner3 from "../assets/CareerPilot.img3.jpg";
import banner4 from "../assets/CareerPilot.img4.jpg";

const heroData = [
  {
    id: 1,
    tag: "Resume Builder",
    titlePrefix: "Your resume, ",
    titleHighlight: "graded like an engineer",
    titleSuffix: ".",
    subtitle:
      "Upload once. Get an ATS score, line-by-line fixes, and a rewrite-ready resume in under 60 seconds.",
    button: "Build Your Resume",
    image: banner1,
    stat: { value: "98%", label: "Avg. ATS Score" },
    checklist: [
      "Contact details verified",
      "Keywords matched to JD",
      "Formatting ATS-safe",
    ],
  },
  {
    id: 2,
    tag: "Resume Analyzer",
    titlePrefix: "Your resume, ",
    titleHighlight: "graded like an engineer",
    titleSuffix: ".",
    subtitle:
      "Upload once. Get an ATS score, line-by-line fixes, and a rewrite-ready resume in under 60 seconds.",
    button: "Analyze My Resume",
    image: banner2,
    stat: { value: "92%", label: "Confidence Score" },
    checklist: [
      "Contact details verified",
      "Keywords matched to JD",
      "Formatting ATS-safe",
    ],
  },
  {
    id: 3,
    tag: "Mock Interviews",
    titlePrefix: "Practice the interview ",
    titleHighlight: "before it counts",
    titleSuffix: ".",
    subtitle:
      "AI-generated questions tailored to your target role, with instant feedback on clarity, structure, and confidence.",
    button: "Start Mock Interview",
    image: banner2,
    stat: { value: "92%", label: "Confidence Score" },
    checklist: [
      "Role-specific question bank",
      "Real-time speech feedback",
      "Answer structure scoring",
    ],
  },
  {
    id: 4,
    tag: "Career Roadmap",
    titlePrefix: "A plan to your ",
    titleHighlight: "dream company",
    titleSuffix: ", mapped out.",
    subtitle:
      "Turn a vague goal into a step-by-step roadmap — milestones, timelines, and the exact skills each stage needs.",
    button: "Generate My Roadmap",
    image: banner4,
    stat: { value: "95%", label: "Goal Clarity" },
    checklist: [
      "Milestone-based timeline",
      "Auto-adjusts to progress",
      "Exportable as PDF",
    ],
  },
];

export default heroData;
