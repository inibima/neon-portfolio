"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { translations } from "../../data/translations";
import projectsData from "../../data/projects";

export default function Projects() {
  const [lang, setLang] = useState(null);

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
              </article>
            ))
          ) : (
            <p className="text">{t.projects.empty}</p>
          )}
        </div>
      </section>
    </main>
  );
}
