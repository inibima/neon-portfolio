"use client";

import { useState, useEffect } from "react";
import { translations } from "../../data/translations";
import Link from "next/link";

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

      <section className="section about-card">
        <div className="about-description">
          <h3>{t.about.title}</h3>
          <p className="text">{t.about.intro}</p>

          <h3>{t.about.labels.background}</h3>
          <p className="text">{t.about.background}</p>

          <h3>{t.about.labels.focus}</h3>
          <p className="text">{t.about.focus}</p>

          <h3>{t.about.labels.direction}</h3>
          <p className="text">{t.about.direction}</p>
        </div>
      </section>
    </main>
  );
}
