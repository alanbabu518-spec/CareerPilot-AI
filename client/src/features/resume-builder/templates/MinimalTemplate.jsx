import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function MinimalTemplate({ resume }) {
  const personal = resume.personal || {};

  return (
    <div className="bg-white text-black min-h-[1100px] w-full p-8 sm:p-12">
      <header className="pb-6 border-b border-gray-300">
        <h1 className="text-4xl font-normal tracking-tight text-gray-900">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-base text-gray-500 mt-2">
          {personal.jobTitle || "Professional Title"}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-xs text-gray-500">
          {personal.email && (
            <span className="flex items-center gap-1.5">
              <Mail size={12} />
              {personal.email}
            </span>
          )}

          {personal.phone && (
            <span className="flex items-center gap-1.5">
              <Phone size={12} />
              {personal.phone}
            </span>
          )}

          {personal.location && (
            <span className="flex items-center gap-1.5">
              <MapPin size={12} />
              {personal.location}
            </span>
          )}

          {personal.website && (
            <span className="flex items-center gap-1.5">
              <Globe size={12} />
              {personal.website}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-500">
          {personal.github && (
            <span className="flex items-center gap-1">
              <FaGithub />
              {personal.github}
            </span>
          )}

          {personal.linkedin && (
            <span className="flex items-center gap-1">
              <FaLinkedin />
              {personal.linkedin}
            </span>
          )}

          {personal.x && (
            <span className="flex items-center gap-1">
              <FaXTwitter />
              {personal.x}
            </span>
          )}
        </div>
      </header>

      {resume.summary && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Summary
          </h2>

          <p className="text-sm leading-6 text-gray-700 mt-3">
            {resume.summary}
          </p>
        </section>
      )}

      {resume.skills?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Skills
          </h2>

          <p className="text-sm leading-7 text-gray-700 mt-3">
            {resume.skills.join(" • ")}
          </p>
        </section>
      )}

      {resume.experience?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Experience
          </h2>

          <div className="mt-5 space-y-7">
            {resume.experience.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.jobTitle || "Job Title"}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.company || "Company Name"}
                    </p>
                  </div>

                  <span className="text-xs text-gray-500 sm:text-right">
                    {item.startDate}

                    {item.startDate && <span> – </span>}

                    {item.current ? "Present" : item.endDate}
                  </span>
                </div>

                {item.location && (
                  <p className="text-xs text-gray-400 mt-1">{item.location}</p>
                )}

                {item.description && (
                  <p className="text-sm text-gray-700 leading-6 mt-3">
                    {item.description}
                  </p>
                )}

                {item.responsibilities?.length > 0 && (
                  <ul className="list-disc pl-5 mt-3 space-y-1">
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
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Projects
          </h2>

          <div className="mt-5 space-y-6">
            {resume.projects.map((project) => (
              <div key={project.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <h3 className="text-base font-semibold text-gray-900">
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
                  <p className="text-xs text-gray-500 mt-2">
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
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Education
          </h2>

          <div className="mt-5 space-y-5">
            {resume.education.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {item.degree || "Degree / Qualification"}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {item.institution || "Institution"}
                    </p>
                  </div>

                  <span className="text-xs text-gray-500">
                    {item.startDate}

                    {item.startDate && item.endDate && <span> – </span>}

                    {item.endDate}
                  </span>
                </div>

                {item.location && (
                  <p className="text-xs text-gray-400 mt-1">{item.location}</p>
                )}

                {item.grade && (
                  <p className="text-xs text-gray-500 mt-1">
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

      {resume.certifications?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Certifications
          </h2>

          <div className="mt-5 space-y-4">
            {resume.certifications.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.name || "Certification"}
                    </h3>

                    {item.organization && (
                      <p className="text-sm text-gray-500">
                        {item.organization}
                      </p>
                    )}
                  </div>

                  {item.date && (
                    <span className="text-xs text-gray-500">{item.date}</span>
                  )}
                </div>

                {item.credentialId && (
                  <p className="text-xs text-gray-400 mt-1">
                    Credential ID: {item.credentialId}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.languages?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Languages
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4">
            {resume.languages.map((language) => (
              <div key={language.id} className="flex justify-between text-sm">
                <span className="font-medium text-gray-800">
                  {language.name || "Language"}
                </span>

                <span className="text-gray-500">{language.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.achievements?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs uppercase tracking-[0.25em] text-gray-500">
            Achievements
          </h2>

          <div className="mt-5 space-y-4">
            {resume.achievements.map((item) => (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.title || "Achievement"}
                    </h3>

                    {item.organization && (
                      <p className="text-sm text-gray-500">
                        {item.organization}
                      </p>
                    )}
                  </div>

                  {item.date && (
                    <span className="text-xs text-gray-500">{item.date}</span>
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

export default MinimalTemplate;
