"use client";

import { useState, useEffect } from "react";
import { translations } from "../../data/translations";

export default function Skills() {
  const [lang, setLang] = useState(null);

  const t = translations[lang || "id"];

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "id";
    setLang(savedLang);
  }, []);

  useEffect(() => {
    if (lang) {
    localStorage.setItem("lang", lang);
    }
  }, [lang]);

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
    </main>
  );
}