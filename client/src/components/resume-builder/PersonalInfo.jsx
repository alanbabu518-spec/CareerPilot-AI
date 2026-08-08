import { User, Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function PersonalInfo({ resume, setResume }) {
  const handleChange = (field, value) => {
    setResume((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">
          <User className="text-violet-400" size={20} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">Personal Information</h2>

          <p className="text-gray-500 text-sm">
            Add your contact and professional details
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            value={resume.personal.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            placeholder="e.g. Alan Babu"
            className="resume-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Professional Title
          </label>

          <input
            type="text"
            value={resume.personal.jobTitle}
            onChange={(e) => handleChange("jobTitle", e.target.value)}
            placeholder="e.g. Full Stack Developer"
            className="resume-input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>

          <div className="relative">
            <Mail
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="email"
              value={resume.personal.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="you@example.com"
              className="resume-input pl-11"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone
          </label>

          <div className="relative">
            <Phone
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="tel"
              value={resume.personal.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+91 98765 43210"
              className="resume-input pl-11"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Location
          </label>

          <div className="relative">
            <MapPin
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              value={resume.personal.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="City, Country"
              className="resume-input pl-11"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Portfolio Website
          </label>

          <div className="relative">
            <Globe
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="url"
              value={resume.personal.website}
              onChange={(e) => handleChange("website", e.target.value)}
              placeholder="https://yourportfolio.com"
              className="resume-input pl-11"
            />
          </div>
        </div>

        {/* LinkedIn */}

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            LinkedIn
          </label>

          <div className="relative">
            <FaLinkedin
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={17}
            />

            <input
              type="url"
              value={resume.personal.linkedin}
              onChange={(e) => handleChange("linkedin", e.target.value)}
              placeholder="linkedin.com/in/yourname"
              className="resume-input pl-11"
            />
          </div>
        </div>

        {/* GitHub */}

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            GitHub
          </label>

          <div className="relative">
            <FaGithub
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={17}
            />

            <input
              type="url"
              value={resume.personal.github}
              onChange={(e) => handleChange("github", e.target.value)}
              placeholder="github.com/yourusername"
              className="resume-input pl-11"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
