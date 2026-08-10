import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function ModernTemplate({ resume }) {
  const personal = resume.personal || {};

  return (
    <div className="bg-white text-black min-h-[1100px] w-full p-8 sm:p-10">
      <header className="border-b-4 border-violet-600 pb-5">
        <h1 className="text-3xl sm:text-4xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-lg text-gray-600 mt-1">
          {personal.jobTitle || "Professional Title"}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-gray-600">
          {personal.email && (
            <span className="flex items-center gap-2">
              <Mail size={14} />
              {personal.email}
            </span>
          )}

          {personal.phone && (
            <span className="flex items-center gap-2">
              <Phone size={14} />
              {personal.phone}
            </span>
          )}

          {personal.location && (
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              {personal.location}
            </span>
          )}

          {personal.website && (
            <span className="flex items-center gap-2">
              <Globe size={14} />
              {personal.website}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-600">
          {personal.github && (
            <span className="flex items-center gap-1.5">
              <FaGithub />
              {personal.github}
            </span>
          )}

          {personal.linkedin && (
            <span className="flex items-center gap-1.5">
              <FaLinkedin />
              {personal.linkedin}
            </span>
          )}

          {personal.x && (
            <span className="flex items-center gap-1.5">
              <FaXTwitter />
              {personal.x}
            </span>
          )}

          {personal.website && <span>{personal.website}</span>}
        </div>
      </header>

      {resume.summary && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Professional Summary
          </h2>

          <p className="text-sm leading-6 text-gray-700 mt-3">
            {resume.summary}
          </p>
        </section>
      )}

      {resume.skills?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2 mt-3">
            {resume.skills.map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-violet-50 text-violet-700 rounded text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.experience?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Experience
          </h2>

          <div className="mt-4 space-y-6">
            {resume.experience.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base">
                      {item.jobTitle || "Job Title"}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {item.company || "Company Name"}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 sm:text-right">
                    {item.startDate && <span>{item.startDate}</span>}

                    {item.startDate && <span> – </span>}

                    <span>{item.current ? "Present" : item.endDate}</span>
                  </div>
                </div>

                {item.location && (
                  <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                )}

                {item.description && (
                  <p className="text-sm text-gray-700 leading-5 mt-2">
                    {item.description}
                  </p>
                )}

                {item.responsibilities?.length > 0 && (
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {item.responsibilities
                      .filter((item) => item.trim())
                      .map((responsibility, index) => (
                        <li
                          key={index}
                          className="text-sm text-gray-700 leading-5"
                        >
                          {responsibility}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.projects?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Projects
          </h2>

          <div className="mt-4 space-y-5">
            {resume.projects.map((project) => (
              <div key={project.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <h3 className="font-bold text-base">
                    {project.name || "Project Name"}
                  </h3>

                  <div className="flex gap-3 text-xs text-gray-500">
                    {project.githubUrl && <span>GitHub</span>}

                    {project.liveUrl && <span>Live Demo</span>}
                  </div>
                </div>

                {project.description && (
                  <p className="text-sm text-gray-700 leading-5 mt-1">
                    {project.description}
                  </p>
                )}

                {project.technologies?.length > 0 && (
                  <p className="text-xs text-gray-500 mt-2">
                    <strong>Technologies:</strong>{" "}
                    {project.technologies.join(" • ")}
                  </p>
                )}

                {project.achievements?.length > 0 && (
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {project.achievements
                      .filter((item) => item.trim())
                      .map((item, index) => (
                        <li key={index} className="text-sm text-gray-700">
                          {item}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.education?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Education
          </h2>

          <div className="mt-4 space-y-5">
            {resume.education.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-base">
                      {item.degree || "Degree / Qualification"}
                    </h3>

                    <p className="text-sm text-gray-700">
                      {item.institution || "Institution"}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 sm:text-right">
                    {item.startDate}

                    {item.startDate && item.endDate && <span> – </span>}

                    {item.endDate}
                  </div>
                </div>

                {item.location && (
                  <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                )}

                {item.grade && (
                  <p className="text-xs text-gray-600 mt-1">
                    Grade: {item.grade}
                  </p>
                )}

                {item.description && (
                  <p className="text-sm text-gray-700 mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.certifications?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Certifications
          </h2>

          <div className="mt-4 space-y-3">
            {resume.certifications.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm">
                      {item.name || "Certification"}
                    </h3>

                    {item.organization && (
                      <p className="text-sm text-gray-700">
                        {item.organization}
                      </p>
                    )}
                  </div>

                  {item.date && (
                    <span className="text-sm text-gray-500">{item.date}</span>
                  )}
                </div>

                {item.credentialId && (
                  <p className="text-xs text-gray-500 mt-1">
                    Credential ID: {item.credentialId}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.languages?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Languages
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-3">
            {resume.languages.map((language) => (
              <div key={language.id} className="flex justify-between text-sm">
                <span className="font-medium">
                  {language.name || "Language"}
                </span>

                <span className="text-gray-500">{language.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.achievements?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-violet-600 border-b border-gray-200 pb-1">
            Achievements
          </h2>

          <div className="mt-4 space-y-4">
            {resume.achievements.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="font-bold text-sm">
                      {item.title || "Achievement"}
                    </h3>

                    {item.organization && (
                      <p className="text-sm text-gray-700">
                        {item.organization}
                      </p>
                    )}
                  </div>

                  {item.date && (
                    <span className="text-sm text-gray-500">{item.date}</span>
                  )}
                </div>

                {item.description && (
                  <p className="text-sm text-gray-700 leading-5 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ModernTemplate;
