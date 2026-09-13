"use client";

import { useState, useEffect } from "react";
import { translations } from "../../data/translations";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [lang, setLang] = useState(null);
  
  const t = translations[lang || "id"];

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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl =
          process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

        const res = await fetch(`${baseUrl}/projects`, {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="page">
      <div className="page-utility">
      <a href="/" className="back-home">
      ← Back to Home
        </a>

        <div className="languageSwitch">
      <button
        onClick={() => setLang("id")}
        disabled={lang === "id"}
      >
        ID
      </button>

      <button
        onClick={() => setLang("en")}
        disabled={lang === "en"}
      >
        EN
      </button>
        </div>
      </div>
        
      <section className="section">
        <h2>{t.projects.title}</h2>

        <div className="projects">
          {projects.length > 0 ? (
            projects.map((project) => (
              <article className="projectCard" key={project.id}>
                <h3>{project.title[lang]}</h3>

                <p>{project.summary[lang]}</p>

                <p>
                  <strong>{t.projects.impact}:</strong>{" "}
                  {project.impact[lang]}
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
