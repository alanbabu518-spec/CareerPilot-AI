import { useState } from "react";
import {
  FolderGit2,
  Plus,
  Trash2,
  ExternalLink,
} from "lucide-react";

import {
  FaGithub
} from "react-icons/fa6";

function Projects({ resume, setResume }) {
  const [techInput, setTechInput] = useState("");

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: "",
      role: "",
      description: "",
      technologies: [],
      liveUrl: "",
      githubUrl: "",
      achievements: [""],
    };

    setResume((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }));
  };

  const updateProject = (id, field, value) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id
          ? {
              ...project,
              [field]: value,
            }
          : project
      ),
    }));
  };

  const removeProject = (id) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.filter(
        (project) => project.id !== id
      ),
    }));
  };

  const addTechnology = (projectId) => {
    const technology = techInput.trim();

    if (!technology) return;

    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              technologies: project.technologies.some(
                (item) =>
                  item.toLowerCase() ===
                  technology.toLowerCase()
              )
                ? project.technologies
                : [
                    ...project.technologies,
                    technology,
                  ],
            }
          : project
      ),
    }));

    setTechInput("");
  };

  const removeTechnology = (
    projectId,
    technology
  ) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              technologies:
                project.technologies.filter(
                  (item) => item !== technology
                ),
            }
          : project
      ),
    }));
  };

  const addAchievement = (projectId) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              achievements: [
                ...project.achievements,
                "",
              ],
            }
          : project
      ),
    }));
  };

  const updateAchievement = (
    projectId,
    index,
    value
  ) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              achievements:
                project.achievements.map(
                  (achievement, i) =>
                    i === index
                      ? value
                      : achievement
                ),
            }
          : project
      ),
    }));
  };

  const removeAchievement = (
    projectId,
    index
  ) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              achievements:
                project.achievements.filter(
                  (_, i) => i !== index
                ),
            }
          : project
      ),
    }));
  };

  return (
    <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-6">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-violet-600/15 flex items-center justify-center">

            <FolderGit2
              size={20}
              className="text-violet-400"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-white">
              Projects
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Showcase your best projects and technical work
            </p>

          </div>

        </div>

        <button
          type="button"
          onClick={addProject}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
        >
          <Plus size={17} />
          Add Project
        </button>

      </div>

      {resume.projects.length === 0 && (
        <div className="border border-dashed border-white/10 rounded-xl p-10 text-center">

          <FolderGit2
            size={40}
            className="mx-auto text-gray-600"
          />

          <h3 className="text-white font-semibold mt-4">
            No projects added
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Add projects that demonstrate your skills and experience.
          </p>

          <button
            type="button"
            onClick={addProject}
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition"
          >
            <Plus size={17} />
            Add Project
          </button>

        </div>
      )}

      <div className="space-y-6">

        {resume.projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-[#111111] border border-white/10 rounded-2xl p-5"
          >

            <div className="flex items-center justify-between mb-5">

              <h3 className="text-white font-semibold">
                Project {index + 1}
              </h3>

              <button
                type="button"
                onClick={() =>
                  removeProject(project.id)
                }
                className="w-9 h-9 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                title="Delete project"
              >
                <Trash2 size={17} />
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-5">

              <div>

                <label className="resume-label">
                  Project Name
                </label>

                <input
                  type="text"
                  value={project.name}
                  onChange={(e) =>
                    updateProject(
                      project.id,
                      "name",
                      e.target.value
                    )
                  }
                  placeholder="Movie Finder"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  Your Role
                </label>

                <input
                  type="text"
                  value={project.role}
                  onChange={(e) =>
                    updateProject(
                      project.id,
                      "role",
                      e.target.value
                    )
                  }
                  placeholder="Full Stack Developer"
                  className="resume-input"
                />

              </div>

              <div>

                <label className="resume-label">
                  Live Demo URL
                </label>

                <div className="relative">

                  <ExternalLink
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  />

                  <input
                    type="url"
                    value={project.liveUrl}
                    onChange={(e) =>
                      updateProject(
                        project.id,
                        "liveUrl",
                        e.target.value
                      )
                    }
                    placeholder="https://yourproject.com"
                    className="resume-input pl-11"
                  />

                </div>

              </div>

              <div>

                <label className="resume-label">
                  GitHub URL
                </label>

                <div className="relative">

                  <FaGithub
  size={17}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
/>

                  <input
                    type="url"
                    value={project.githubUrl}
                    onChange={(e) =>
                      updateProject(
                        project.id,
                        "githubUrl",
                        e.target.value
                      )
                    }
                    placeholder="https://github.com/username/project"
                    className="resume-input pl-11"
                  />

                </div>

              </div>

            </div>

            <div className="mt-5">

              <label className="resume-label">
                Project Description
              </label>

              <textarea
                value={project.description}
                onChange={(e) =>
                  updateProject(
                    project.id,
                    "description",
                    e.target.value
                  )
                }
                rows={4}
                placeholder="Describe what the project does, the problem it solves, and your contribution..."
                className="resume-input resize-none"
              />

            </div>

            <div className="mt-5">

              <label className="resume-label">
                Technologies
              </label>

              <div className="flex gap-3">

                <input
                  type="text"
                  value={techInput}
                  onChange={(e) =>
                    setTechInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addTechnology(project.id);
                    }
                  }}
                  placeholder="React, Node.js, MongoDB..."
                  className="resume-input"
                />

                <button
                  type="button"
                  onClick={() =>
                    addTechnology(project.id)
                  }
                  className="px-5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold"
                >
                  Add
                </button>

              </div>

              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">

                  {project.technologies.map(
                    (technology) => (
                      <div
                        key={technology}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300"
                      >

                        <span className="text-sm">
                          {technology}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            removeTechnology(
                              project.id,
                              technology
                            )
                          }
                        >
                          <X
                            size={14}
                            className="hover:text-red-400"
                          />
                        </button>

                      </div>
                    )
                  )}

                </div>
              )}

            </div>

            <div className="mt-6">

              <div className="flex items-center justify-between mb-3">

                <label className="resume-label mb-0">
                  Key Contributions
                </label>

                <button
                  type="button"
                  onClick={() =>
                    addAchievement(project.id)
                  }
                  className="text-sm text-violet-400 hover:text-violet-300"
                >
                  + Add Bullet
                </button>

              </div>

              <div className="space-y-3">

                {project.achievements.map(
                  (achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="flex gap-2"
                    >

                      <input
                        type="text"
                        value={achievement}
                        onChange={(e) =>
                          updateAchievement(
                            project.id,
                            achievementIndex,
                            e.target.value
                          )
                        }
                        placeholder="e.g. Improved application performance by 30%"
                        className="resume-input"
                      />

                      {project.achievements.length >
                        1 && (
                        <button
                          type="button"
                          onClick={() =>
                            removeAchievement(
                              project.id,
                              achievementIndex
                            )
                          }
                          className="w-11 shrink-0 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 flex items-center justify-center"
                        >
                          <X size={17} />
                        </button>
                      )}

                    </div>
                  )
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

      {resume.projects.length > 0 && (
        <button
          type="button"
          onClick={addProject}
          className="w-full mt-6 py-3 rounded-xl border border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition flex items-center justify-center gap-2 font-semibold"
        >
          <Plus size={18} />
          Add Another Project
        </button>
      )}

    </div>
  );
}

export default Projects;