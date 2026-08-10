import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function ProfessionalTemplate({ resume }) {
  const personal = resume.personal || {};

  return (
    <div className="bg-white text-black min-h-[1100px] w-full p-8 sm:p-10">
      <header className="pb-5 border-b-2 border-gray-800">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
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

      {resume.summary && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Professional Summary
          </h2>

          <p className="text-sm leading-6 text-gray-700 mt-3">
            {resume.summary}
          </p>
        </section>
      )}

      {resume.education?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Education
          </h2>

          <div className="mt-4 space-y-5">
            {resume.education.map((education) => (
              <div key={education.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base">
                      {education.degree || "Degree / Qualification"}
                    </h3>

                    <p className="text-sm text-gray-700 mt-1">
                      {education.institution || "Institution"}
                    </p>
                  </div>

                  <div className="text-right text-sm text-gray-600 whitespace-nowrap">
                    {education.startDate}

                    {education.startDate && education.endDate && (
                      <span> – </span>
                    )}

                    {education.endDate}
                  </div>
                </div>

                <div className="flex justify-between mt-1">
                  {education.location && (
                    <p className="text-sm text-gray-500">
                      {education.location}
                    </p>
                  )}

                  {education.grade && (
                    <p className="text-sm text-gray-600">{education.grade}</p>
                  )}
                </div>

                {education.description && (
                  <p className="text-sm text-gray-600 leading-6 mt-2">
                    {education.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.experience?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Professional Experience
          </h2>

          <div className="mt-4 space-y-6">
            {resume.experience.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base">
                      {item.jobTitle || "Job Title"}
                    </h3>

                    <p className="text-sm text-gray-700 mt-1">
                      {item.company || "Company Name"}
                    </p>
                  </div>

                  <div className="text-right text-sm text-gray-600 whitespace-nowrap">
                    {item.startDate}

                    {item.startDate && <span> – </span>}

                    {item.current ? "Present" : item.endDate}
                  </div>
                </div>

                {item.location && (
                  <p className="text-sm text-gray-500 mt-1">{item.location}</p>
                )}

                {item.description && (
                  <p className="text-sm text-gray-700 leading-6 mt-2">
                    {item.description}
                  </p>
                )}

                {item.responsibilities?.some((responsibility) =>
                  responsibility.trim(),
                ) && (
                  <ul className="mt-3 space-y-1.5 list-disc pl-5">
                    {item.responsibilities
                      .filter((responsibility) => responsibility.trim())
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
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Projects
          </h2>

          <div className="mt-4 space-y-5">
            {resume.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-base">
                      {project.name || "Project Name"}
                    </h3>

                    {project.role && (
                      <p className="text-sm text-gray-600">{project.role}</p>
                    )}
                  </div>

                  <div className="flex gap-3 text-xs text-gray-600">
                    {project.githubUrl && <span>GitHub</span>}

                    {project.liveUrl && <span>Live Demo</span>}
                  </div>
                </div>

                {project.description && (
                  <p className="text-sm text-gray-700 leading-5 mt-2">
                    {project.description}
                  </p>
                )}

                {project.technologies?.length > 0 && (
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Technologies:</strong>{" "}
                    {project.technologies.join(" • ")}
                  </p>
                )}

                {project.achievements?.some((item) => item.trim()) && (
                  <ul className="mt-2 space-y-1 list-disc pl-5">
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
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Technical Skills
          </h2>

          <div className="mt-3 text-sm text-gray-700 leading-7">
            {resume.skills.map((skill, index) => (
              <span key={`${skill}-${index}`}>
                {skill}

                {index !== resume.skills.length - 1 && <span> • </span>}
              </span>
            ))}
          </div>
        </section>
      )}

      {resume.certifications?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Certifications
          </h2>

          <div className="mt-4 space-y-3">
            {resume.certifications.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-sm">
                      {item.name || "Certification Name"}
                    </h3>

                    {item.organization && (
                      <p className="text-sm text-gray-700">
                        {item.organization}
                      </p>
                    )}
                  </div>

                  {item.date && (
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {item.date}
                    </span>
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
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Languages
          </h2>

          <div className="mt-3 space-y-1">
            {resume.languages.map((language) => (
              <div key={language.id} className="flex justify-between text-sm">
                <span className="font-medium">
                  {language.name || "Language"}
                </span>

                <span className="text-gray-600">{language.proficiency}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume.achievements?.length > 0 && (
        <section className="mt-6">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 pb-2">
            Achievements
          </h2>

          <div className="mt-4 space-y-4">
            {resume.achievements.map((item) => (
              <div key={item.id}>
                <div className="flex justify-between gap-4">
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
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {item.date}
                    </span>
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

export default ProfessionalTemplate;
