"use client";

import { useState, useEffect } from "react";
import { translations } from "../../data/translations";
import Link from "next/link";

const skillCategories = [
  {
    id: "frontend",
    title: {
      id: "Frontend Development",
      en: "Frontend Development",
    },
    description: {
      id: "Membangun antarmuka web yang responsif, interaktif, dan mudah digunakan.",
      en: "Building responsive, interactive, and user-friendly web interfaces.",
    },
    skills: [
      {
        name: "HTML & CSS",
        description: {
          id: "Menyusun struktur halaman dan mengatur tampilan website menggunakan CSS.",
          en: "Structuring web pages and styling interfaces using CSS.",
        },
      },
      {
        name: "JavaScript",
        description: {
          id: "Mengembangkan interaksi dan perilaku dinamis pada website.",
          en: "Developing interactive and dynamic website behavior.",
        },
      },
      {
        name: "React",
        description: {
          id: "Membangun antarmuka menggunakan komponen yang dapat digunakan kembali.",
          en: "Building user interfaces with reusable components.",
        },
      },
      {
        name: "Next.js",
        description: {
          id: "Mengembangkan aplikasi React dengan sistem routing dan struktur aplikasi Next.js.",
          en: "Developing React applications with Next.js routing and application structure.",
        },
      },
      {
        name: "Vue.js",
        description: {
          id: "Membangun antarmuka web menggunakan pendekatan komponen Vue.",
          en: "Building web interfaces using Vue's component-based approach.",
        },
      },
      {
        name: "Responsive Design",
        description: {
          id: "Menyesuaikan layout website untuk desktop maupun perangkat mobile.",
          en: "Adapting website layouts for desktop and mobile devices.",
        },
      },
    ],
  },
  {
    id: "backend",
    title: {
      id: "Backend Development",
      en: "Backend Development",
    },
    description: {
      id: "Mengembangkan logika aplikasi dan komunikasi antara frontend dengan backend.",
      en: "Developing application logic and communication between frontend and backend.",
    },
    skills: [
      {
        name: "Python",
        description: {
          id: "Menggunakan Python untuk pengembangan aplikasi dan backend.",
          en: "Using Python for application and backend development.",
        },
      },
      {
        name: "FastAPI",
        description: {
          id: "Membangun REST API menggunakan framework FastAPI.",
          en: "Building REST APIs using the FastAPI framework.",
        },
      },
      {
        name: "PHP",
        description: {
          id: "Menggunakan PHP untuk pengembangan sisi server.",
          en: "Using PHP for server-side development.",
        },
      },
      {
        name: "REST API",
        description: {
          id: "Menghubungkan aplikasi melalui endpoint untuk pertukaran data.",
          en: "Connecting applications through endpoints for data exchange.",
        },
      },
    ],
  },
  {
    id: "database",
    title: {
      id: "Database & Integration",
      en: "Database & Integration",
    },
    description: {
      id: "Mengelola penyimpanan data dan integrasi layanan yang digunakan aplikasi.",
      en: "Managing data storage and integrating services used by applications.",
    },
    skills: [
      {
        name: "MongoDB",
        description: {
          id: "Database NoSQL yang digunakan pada project BimaMall.",
          en: "A NoSQL database used in the BimaMall project.",
        },
      },
      {
        name: "Firebase",
        description: {
          id: "Layanan backend yang digunakan dalam beberapa project untuk integrasi data.",
          en: "A backend service used for data integration in selected projects.",
        },
      },
    ],
  },
  {
    id: "tools",
    title: {
      id: "Tools & Workflow",
      en: "Tools & Workflow",
    },
    description: {
      id: "Menggunakan tools untuk membantu proses pengembangan, pengujian, dan pengelolaan kode.",
      en: "Using tools to support development, testing, and code management.",
    },
    skills: [
      {
        name: "Git",
        description: {
          id: "Mengelola perubahan kode dan riwayat pengembangan project.",
          en: "Managing code changes and project development history.",
        },
      },
      {
        name: "GitHub",
        description: {
          id: "Menyimpan repository dan mengelola project menggunakan GitHub.",
          en: "Hosting repositories and managing projects with GitHub.",
        },
      },
      {
        name: "VS Code",
        description: {
          id: "Menggunakan editor kode untuk pengembangan aplikasi.",
          en: "Using a code editor for application development.",
        },
      },
      {
        name: "Postman",
        description: {
          id: "Menguji endpoint API selama proses pengembangan.",
          en: "Testing API endpoints during development.",
        },
      },
    ],
  },
];

export default function Skills() {
  const [lang, setLang] = useState(null);

  const currentLang = lang || "id";
  const t = translations[currentLang];

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang === "id" || savedLang === "en") {
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

      <section className="section skills-page">
        <header className="skills-intro">
          <h2>{t.skills.title}</h2>

          <p className="text">
            {currentLang === "id"
              ? "Teknologi dan tools yang saya gunakan dalam membangun aplikasi web, dari antarmuka hingga integrasi backend."
              : "The technologies and tools I use to build web applications, from user interfaces to backend integration."}
          </p>
        </header>

        <div className="skills-categories">
          {skillCategories.map((category) => (
            <section className="skills-category" key={category.id}>
              <div className="skills-category-heading">
                <h3>{category.title[currentLang]}</h3>

                <p className="text">{category.description[currentLang]}</p>
              </div>

              <div className="grid skills-grid">
                {category.skills.map((skill) => (
                  <article className="card skill-card" key={skill.name}>
                    <h4>{skill.name}</h4>

                    <p className="text">{skill.description[currentLang]}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
