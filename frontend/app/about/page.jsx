"use client";

import { useState, useEffect } from "react";
import { translations } from "../../data/translations";

export default function About() {
  const [lang, setLang] = useState(null);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "id";
    setLang(savedLang);
  }, []);

  useEffect(() => {
    if (lang) {
    localStorage.setItem("lang", lang);
    }
  }, [lang]);

  const t = translations[lang || "id"];

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
        
      <section className="section about-card">
        <h2>{t.about.title}</h2>

        <div className="about-description">
          <p className="text">
            {t.about.description}
          </p>
        </div>
      </section>
    </main>
  );
}