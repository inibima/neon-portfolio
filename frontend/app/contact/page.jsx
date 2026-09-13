"use client";

import { useState, useEffect } from "react";
import { translations } from "../../data/translations";

export default function Contact() {
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
        <h2>{t.contact.title}</h2>

        <form
          className="form"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const payload = Object.fromEntries(formData.entries());

            const baseUrl =
              process.env.NEXT_PUBLIC_API_URL ||
              "http://127.0.0.1:8000";

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