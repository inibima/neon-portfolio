"use client";

import { useState, useEffect } from "react";
import { translations } from "../data/translations";


export default function Home() {
  
  const [projects, setProjects] = useState([]);
  const [lang, setLang] = useState("id");

  const t = translations[lang];

  useEffect(() => {
  const savedLang = localStorage.getItem("lang");

  if (savedLang) {
    setLang(savedLang);
  }
  }, []);

  useEffect(() => {
  localStorage.setItem("lang", lang);
  }, [lang]);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";
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

      <section className="hero">
        <p className="eyebrow">BIMA//NEON</p>
        <h1>{t.hero.title}</h1>
        <p className="subtitle">{t.hero.subtitle}</p>

        <div className="hero-links">
          <a href="#projects">{t.hero.viewProjects}</a>
          <a href="#contact">{t.hero.contactMe}</a>
        </div>
      </section>

      <section className="section" id="about">
        <h2>{t.about.title}</h2>
        <p className="text">
          {t.about.description}
        </p>
      </section>

      <section className="section" id="skills">
        <h2>{t.skills.title}</h2>
        <div className="grid">
          <div className="card">React</div>
          <div className="card">Next.js</div>
          <div className="card">Vue.js</div>
          <div className="card">Python</div>
          <div className="card">PHP</div>
          <div className="card">REST API</div>
        </div>
      </section>

      <section className="section" id="projects">
        <h2>{t.projects.title}</h2>
        <div className="projects">
          {projects.length > 0 ? (
            projects.map((project) => (
              <article className="projectCard" key={project.id}>
                <h3>{project.title[lang]}</h3>

                <p>{project.summary[lang]}</p>

                <p>
                  <strong>Impact:</strong> {project.impact[lang]}
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
            <p className="text">Project belum kebaca dari backend.</p>
          )}
        </div>
      </section>

      <section className="section" id="contact">
        <h2>{t.contact.title}</h2>
        <form
          className="form"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const payload = Object.fromEntries(formData.entries());

            const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

            const res = await fetch(`${baseUrl}/contact`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            });

            if (res.ok) {
              alert(t.contact.success);

              console.log(e.currentTarget);
              
              e.currentTarget.reset();
            } else {
              alert(t.contact.failed);
            }
          }}
        >
          <input
            name="name"
            placeholder={t.contact.name}
            required
         />
          <input
            name="email"
            type="email"
            placeholder={t.contact.email}
            required
         />
          <textarea
            name="message"
            placeholder={t.contact.message}
            rows="5"
            required
         />
          <button type="submit">{t.contact.send}</button>
        </form>
      </section>
    </main>
  );
}