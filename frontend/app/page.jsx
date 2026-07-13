"use client";

import { useState, useEffect } from "react";


export default function Home() {
  
  const [projects, setProjects] = useState([]);

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
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">BIMA//NEON</p>
        <h1>Cyberpunk Portfolio</h1>
        <p className="subtitle">
          Frontend React + Next.js, backend Python FastAPI, dibungkus dengan vibe neon futuristik.
        </p>

        <div className="hero-links">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About</h2>
        <p className="text">
          Gue developer yang fokus bikin web modern, cepat, dan clean. Stack utama gue:
          React, Next.js, Vue.js, Python, dan PHP. Untuk project ini, gue pakai Next.js
          buat frontend dan FastAPI buat backend API.
        </p>
      </section>

      <section className="section" id="skills">
        <h2>Skills</h2>
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
        <h2>Projects</h2>
        <div className="projects">
          {projects.length > 0 ? (
            projects.map((project) => (
              <article className="projectCard" key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="tags">
                  {project.tech.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
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
        <h2>Contact</h2>
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
              alert("Pesan berhasil dikirim.");
              e.currentTarget.reset();
            } else {
              alert("Gagal mengirim pesan.");
            }
          }}
        >
          <input name="name" placeholder="Nama" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Pesan" rows="5" required />
          <button type="submit">Kirim Pesan</button>
        </form>
      </section>
    </main>
  );
}