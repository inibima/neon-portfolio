"use client";

import { useState, useEffect } from "react";
import { translations } from "../../data/translations";
import Link from "next/link";

const email = "business.bima@proton.me";
const whatsapp = "62881036344150";

const whatsappUrl = `https://wa.me/${whatsapp}`;

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
        <h2>{t.contact.title}</h2>

        <div className="contact-methods">
          <a
            href="https://mail.proton.me/"
            className="contact-method"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 6H20V18H4V6Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M4 7L12 13L20 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h3>Email</h3>
              <p>{email}</p>
              <span>Send an email</span>
            </div>
          </a>

          <a
            href={whatsappUrl}
            className="contact-method"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="contact-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 11.5C20 16.194 16.194 20 11.5 20C10.048 20 8.692 19.636 7.5 18.994L4 20L5.006 16.5C4.364 15.308 4 13.952 4 12.5C4 7.806 7.806 4 12.5 4C17.194 4 21 7.806 21 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 9.5C9.3 9 9.7 9 10 9.5L10.7 10.7C10.9 11 10.9 11.3 10.7 11.6C10.4 12 10.8 12.7 11.4 13.3C12 13.9 12.7 14.3 13.1 14C13.4 13.8 13.7 13.8 14 14L15.2 14.7C15.7 15 15.7 15.4 15.2 15.7C14.5 16.2 13.5 16 12.3 15.4C11.1 14.8 9.2 12.9 8.6 11.7C8 10.5 7.8 9.5 9 9.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h3>WhatsApp</h3>
              <p>{whatsapp}</p>
              <span>Chat on WhatsApp</span>
            </div>
          </a>
        </div>

        <form
          className="form"
          onSubmit={async (e) => {
            e.preventDefault();

            const formData = new FormData(e.currentTarget);
            const payload = Object.fromEntries(formData.entries());

            const baseUrl =
              process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

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
          <input name="name" placeholder={t.contact.name} required />

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
