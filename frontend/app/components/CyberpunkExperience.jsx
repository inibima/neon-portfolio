"use client";

import "../styles/cyberpunk.css";
import { useEffect, useRef, useState } from "react";
import { translations } from "../../data/translations";

const basePath = process.env.NODE_ENV === "production" ? "/neon-portfolio" : "";

export default function CyberpunkExperience() {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(25);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("id");
  const radioText = translations[lang].neonRadio;

  useEffect(() => {
    const updateLanguage = (event) => {
      const savedLang = event?.detail || localStorage.getItem("lang") || "id";

      setLang(savedLang === "en" ? "en" : "id");
    };

    updateLanguage();

    window.addEventListener("languageChange", updateLanguage);
    window.addEventListener("storage", updateLanguage);

    return () => {
      window.removeEventListener("languageChange", updateLanguage);
      window.removeEventListener("storage", updateLanguage);
    };
  }, []);

  useEffect(() => {
    const openRadio = () => setIsOpen(true);

    window.addEventListener("openNeonRadio", openRadio);

    return () => {
      window.removeEventListener("openNeonRadio", openRadio);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const savedVolume = localStorage.getItem("cyberpunk-volume");
    const savedMusicPreference = localStorage.getItem("cyberpunk-music");

    const initialVolume = savedVolume !== null ? Number(savedVolume) : 25;

    const safeVolume = Number.isFinite(initialVolume)
      ? Math.min(100, Math.max(0, initialVolume))
      : 25;

    setVolume(safeVolume);
    audio.volume = safeVolume / 100;

    // Jika pengguna sebelumnya memilih pause,
    // jangan mencoba memutar musik secara otomatis.
    if (savedMusicPreference === "paused") {
      return;
    }

    // Mencoba autoplay. Browser mungkin menolaknya.
    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      })
      .catch(() => {
        setIsPlaying(false);
        setAutoplayBlocked(true);
      });
  }, []);

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();

        setIsPlaying(true);
        setAutoplayBlocked(false);

        localStorage.setItem("cyberpunk-music", "playing");
      } catch {
        setIsPlaying(false);
        setAutoplayBlocked(true);
      }
    } else {
      audio.pause();

      setIsPlaying(false);
      setAutoplayBlocked(false);

      localStorage.setItem("cyberpunk-music", "paused");
    }
  }

  function handleVolumeChange(event) {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }

    localStorage.setItem("cyberpunk-volume", String(newVolume));
  }

  return (
    <>
      <div className="cyberpunk-backdrop" aria-hidden="true">
        <div className="cyberpunk-grid" />
        <div className="cyberpunk-glow cyberpunk-glow-cyan" />
        <div className="cyberpunk-glow cyberpunk-glow-pink" />
        <div className="cyberpunk-scanlines" />
        <div className="cyberpunk-particles" />
      </div>

      <audio
        ref={audioRef}
        src={`${basePath}/audio/cyberpunk.mp3`}
        loop
        preload="auto"
      />

      {!isOpen && (
        <button
          type="button"
          className="cyberpunk-radio-launcher"
          onClick={() => setIsOpen(true)}
          aria-label="Open NEON RADIO"
          title="NEON RADIO"
        >
          ♫
        </button>
      )}

      {isOpen && (
        <aside
          className="cyberpunk-music-panel"
          aria-label="NEON RADIO music controls"
        >
          <div className="cyberpunk-music-header">
            <div className="cyberpunk-music-info">
              <span className="cyberpunk-music-indicator">
                {isPlaying ? "●" : "○"}
              </span>

              <div className="cyberpunk-music-title">
                <strong>NEON RADIO</strong>

                <span className="cyberpunk-music-status">
                  {isPlaying
                    ? radioText.active
                    : autoplayBlocked
                      ? radioText.pressPlay
                      : radioText.paused}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="cyberpunk-minimize-button"
              onClick={() => setIsOpen(false)}
              aria-label="Hide NEON RADIO"
              title="Hide NEON RADIO"
            >
              ×
            </button>
          </div>

          <div className="cyberpunk-music-controls">
            <button
              type="button"
              className="cyberpunk-play-button"
              onClick={toggleMusic}
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              {isPlaying ? "Ⅱ" : "▶"}
            </button>

            <label className="cyberpunk-volume-control">
              <span aria-hidden="true">VOL</span>

              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                aria-label="Music volume"
              />

              <span>{volume}%</span>
            </label>
          </div>
        </aside>
      )}
    </>
  );
}
