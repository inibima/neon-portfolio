"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations } from "../../data/translations";
import projectsData from "../../data/projects";

export default function Projects() {
  const [lang, setLang] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const currentLang = lang || "id";
  const t = translations[currentLang];

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang === "en" || savedLang === "id") {
      setLang(savedLang);
    } else {
      setLang("id");
    }
  }, []);

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", lang);
    }
  }, [lang]);

  return (
    <main className="page">
      <div className="page-utility">
        <Link href="/" className="back-home">
          ← Back to Home
        </Link>

        <div className="languageSwitch">
          <button onClick={() => setLang("id")} disabled={lang === "id"}>
            ID
          </button>

          <button onClick={() => setLang("en")} disabled={lang === "en"}>
            EN
          </button>
        </div>
      </div>

      <section className="section">
        <h2>{t.projects.title}</h2>

        <div className="projects">
          {projectsData.length > 0 ? (
            projectsData.map((project) => (
              <article className="projectCard" key={project.id}>
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title[currentLang]}
                    className="project-image"
                    onClick={() => setSelectedImage(project.image)}
                  />
                )}

                <h3>{project.title[currentLang]}</h3>

                <p>{project.summary[currentLang]}</p>

                <p>
                  <strong>{t.projects.impact}:</strong>{" "}
                  {project.impact[currentLang]}
                </p>

                <div className="tags">
                  {project.tools.map((tool) => (
                    <span className="tag" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project ↗
                  </a>
                )}

                {project.video && (
                  <video className="project-video" controls preload="metadata">
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video element.
                  </video>
                )}
              </article>
            ))
          ) : (
            <p className="text">{t.projects.empty}</p>
          )}
        </div>
      </section>

      {selectedImage && (
        <div className="image-lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="image-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Project preview"
            className="image-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
