"use client";

import { useState, useEffect } from "react";
import { translations } from "../data/translations";


export default function Home() {
  
  const [lang, setLang] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

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

  useEffect(() => {
  const handleScroll = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);


  return (
    <main className="page">

    
    <nav className="navbar">

  <div className="navbar-top">
    <p className="logo">BIMA//NEON</p>

    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      ☰
    </button>
  </div>


        <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
          <li className="nav-menu-close">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </li>

          <li><a href="#home" onClick={handleMenuClick}>{t.navbar.home}</a></li>
          <li><a href="/about" onClick={handleMenuClick}>{t.navbar.about}</a></li>
          <li><a href="/skills" onClick={handleMenuClick}>{t.navbar.skills}</a></li>
          <li><a href="/projects" onClick={handleMenuClick}>{t.navbar.projects}</a></li>
          <li><a href="/contact" onClick={handleMenuClick}>{t.navbar.contact}</a></li>
        </ul>

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

      </nav>


      <section className="hero" id="home">
        <h1>{t.hero.title}</h1>
        <p className="subtitle">{t.hero.subtitle}</p>

        <div className="hero-links">
          <a href="/projects" onClick={handleMenuClick}>
            {t.hero.viewProjects}
          </a>
          <a href="/contact" onClick={handleMenuClick}>
            {t.hero.contactMe}
          </a>
        </div>
      </section>
      <section className="section" id="journey">
  <h2>{t.journey.title}</h2>

  <div className="journey">
    {t.journey.items.map((item, index) => (
      <article className="journey-item" key={`${item.period}-${index}`}>
        <span className="journey-period">{item.period}</span>

        <div className="journey-content">
          <h3>{item.title}</h3>
          <p className="text">{item.description}</p>
        </div>
      </article>
    ))}
        </div>
      </section>
    </main>
  );
}