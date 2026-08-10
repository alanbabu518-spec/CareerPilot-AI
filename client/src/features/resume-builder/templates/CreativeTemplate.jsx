import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function CreativeTemplate({ resume }) {
  const personal = resume.personal || {};

  return (
    <div className="bg-white text-black min-h-[1100px] w-full">
      <header className="bg-gradient-to-r from-violet-700 to-purple-600 text-white p-8 sm:p-10">
        <h1 className="text-4xl sm:text-5xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-lg text-violet-100 mt-2">
          {personal.jobTitle || "Professional Title"}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-5 text-sm text-violet-100">
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

        <div className="flex flex-wrap gap-5 mt-3 text-sm">
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
        </div>
      </header>

      <div className="p-8 sm:p-10">
        {resume.summary && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">About Me</h2>
            </div>

            <p className="text-sm text-gray-700 leading-6">{resume.summary}</p>
          </section>
        )}

        {resume.skills?.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">Skills</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-xs font-semibold border border-violet-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {resume.experience?.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">Experience</h2>
            </div>

            <div className="space-y-6">
              {resume.experience.map((item) => (
                <div
                  key={item.id}
                  className="relative pl-6 border-l-2 border-violet-200"
                >
                  <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-violet-600" />

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-base">
                        {item.jobTitle || "Job Title"}
                      </h3>

                      <p className="text-sm text-violet-600 font-medium mt-1">
                        {item.company || "Company Name"}
                      </p>
                    </div>

                    <span className="text-xs text-gray-500">
                      {item.startDate}

                      {item.startDate && <span> – </span>}

                      {item.current ? "Present" : item.endDate}
                    </span>
                  </div>

                  {item.location && (
                    <p className="text-xs text-gray-400 mt-1">
                      {item.location}
                    </p>
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
                          <li key={index} className="text-sm text-gray-700">
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
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">Projects</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {resume.projects.map((project) => (
                <div
                  key={project.id}
                  className="border border-gray-200 rounded-xl p-4 hover:border-violet-300 transition"
                >
                  <h3 className="font-bold text-base">
                    {project.name || "Project Name"}
                  </h3>

                  {project.description && (
                    <p className="text-sm text-gray-700 leading-5 mt-2">
                      {project.description}
                    </p>
                  )}

                  {project.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {project.technologies.map((technology, index) => (
                        <span
                          key={index}
                          className="text-[10px] px-2 py-1 rounded bg-gray-100 text-gray-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 mt-3 text-xs text-violet-600 font-medium">
                    {project.githubUrl && <span>GitHub</span>}

                    {project.liveUrl && <span>Live Demo</span>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.education?.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">Education</h2>
            </div>

            <div className="space-y-5">
              {resume.education.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="font-bold">
                        {item.degree || "Degree / Qualification"}
                      </h3>

                      <p className="text-sm text-violet-600 mt-1">
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
                    <p className="text-xs text-gray-400 mt-1">
                      {item.location}
                    </p>
                  )}

                  {item.grade && (
                    <p className="text-xs text-gray-600 mt-2">
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
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">Certifications</h2>
            </div>

            <div className="space-y-3">
              {resume.certifications.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:justify-between gap-2"
                >
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
                    <span className="text-xs text-gray-500">{item.date}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.languages?.length > 0 && (
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">Languages</h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {resume.languages.map((language) => (
                <div
                  key={language.id}
                  className="flex justify-between bg-gray-50 rounded-lg px-3 py-2"
                >
                  <span className="text-sm font-medium">
                    {language.name || "Language"}
                  </span>

                  <span className="text-xs text-gray-500">
                    {language.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.achievements?.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-7 rounded-full bg-violet-600" />

              <h2 className="text-xl font-bold">Achievements</h2>
            </div>

            <div className="space-y-4">
              {resume.achievements.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold">
                        {item.title || "Achievement"}
                      </h3>

                      {item.organization && (
                        <p className="text-sm text-violet-600">
                          {item.organization}
                        </p>
                      )}
                    </div>

                    {item.date && (
                      <span className="text-xs text-gray-500">{item.date}</span>
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

export default CreativeTemplate;
