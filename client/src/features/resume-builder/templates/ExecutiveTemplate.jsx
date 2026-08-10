import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function ExecutiveTemplate({ resume }) {
  const personal = resume.personal || {};

  return (
    <div className="bg-white text-black min-h-[1100px] w-full">
      <header className="bg-gray-900 text-white px-8 sm:px-12 py-9">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-lg text-gray-300 mt-2">
          {personal.jobTitle || "Professional Title"}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm text-gray-300">
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

        <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-300">
          {personal.linkedin && (
            <span className="flex items-center gap-1.5">
              <FaLinkedin />
              {personal.linkedin}
            </span>
          )}

          {personal.github && (
            <span className="flex items-center gap-1.5">
              <FaGithub />
              {personal.github}
            </span>
          )}

          {personal.x && (
            <span className="flex items-center gap-1.5">
              <FaXTwitter />
              {personal.x}
            </span>
          )}
        </div>
      </header>

      <div className="p-8 sm:p-12">
        {resume.summary && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Professional Summary
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-4" />

            <p className="text-sm text-gray-700 leading-6">{resume.summary}</p>
          </section>
        )}

        {resume.experience?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Professional Experience
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-5" />

            <div className="space-y-7">
              {resume.experience.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {item.jobTitle || "Job Title"}
                      </h3>

                      <p className="text-sm font-semibold text-gray-600 mt-1">
                        {item.company || "Company Name"}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      {item.startDate}

                      {item.startDate && <span> – </span>}

                      {item.current ? "Present" : item.endDate}
                    </span>
                  </div>

                  {item.location && (
                    <p className="text-xs text-gray-500 mt-1">
                      {item.location}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-sm text-gray-700 leading-6 mt-3">
                      {item.description}
                    </p>
                  )}

                  {item.responsibilities?.length > 0 && (
                    <ul className="list-disc pl-5 mt-3 space-y-1.5">
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

        {resume.education?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Education
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-5" />

            <div className="space-y-5">
              {resume.education.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="text-base font-bold">
                        {item.degree || "Degree / Qualification"}
                      </h3>

                      <p className="text-sm text-gray-600 mt-1">
                        {item.institution || "Institution"}
                      </p>
                    </div>

                    <span className="text-sm text-gray-500">
                      {item.startDate}

                      {item.startDate && item.endDate && <span> – </span>}

                      {item.endDate}
                    </span>
                  </div>

                  {item.location && (
                    <p className="text-xs text-gray-500 mt-1">
                      {item.location}
                    </p>
                  )}

                  {item.grade && (
                    <p className="text-xs text-gray-600 mt-2">
                      Grade: {item.grade}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-sm text-gray-700 mt-2 leading-5">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.projects?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Selected Projects
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-5" />

            <div className="space-y-6">
              {resume.projects.map((project) => (
                <div key={project.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <h3 className="text-base font-bold">
                      {project.name || "Project Name"}
                    </h3>

                    <div className="flex gap-3 text-xs text-gray-500">
                      {project.githubUrl && <span>GitHub</span>}

                      {project.liveUrl && <span>Live Demo</span>}
                    </div>
                  </div>

                  {project.description && (
                    <p className="text-sm text-gray-700 leading-6 mt-2">
                      {project.description}
                    </p>
                  )}

                  {project.technologies?.length > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
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

        {resume.skills?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Core Skills
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-4" />

            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-2">
              {resume.skills.map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="text-sm text-gray-700 border-b border-gray-200 pb-2"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.certifications?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Certifications
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-5" />

            <div className="space-y-4">
              {resume.certifications.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold">
                        {item.name || "Certification"}
                      </h3>

                      {item.organization && (
                        <p className="text-sm text-gray-600">
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
          <section className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Languages
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-4" />

            <div className="grid sm:grid-cols-2 gap-3">
              {resume.languages.map((language) => (
                <div
                  key={language.id}
                  className="flex justify-between border-b border-gray-200 pb-2"
                >
                  <span className="text-sm font-medium">
                    {language.name || "Language"}
                  </span>

                  <span className="text-sm text-gray-500">
                    {language.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.achievements?.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-900">
              Achievements
            </h2>

            <div className="w-16 h-1 bg-gray-900 mt-2 mb-5" />

            <div className="space-y-4">
              {resume.achievements.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold">
                        {item.title || "Achievement"}
                      </h3>

                      {item.organization && (
                        <p className="text-sm text-gray-600">
                          {item.organization}
                        </p>
                      )}
                    </div>

                    {item.date && (
                      <span className="text-sm text-gray-500">{item.date}</span>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-sm text-gray-700 leading-5 mt-2">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ExecutiveTemplate;
