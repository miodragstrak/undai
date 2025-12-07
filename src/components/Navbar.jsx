import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import UkFlag from "../assets/ukflag.svg";
import RsFlag from "../assets/srbflag.svg";
import Logo from "../assets/undai-logo.svg";
import { CALENDLY_FREE } from "../config";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    window.location.reload();
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">

        {/* LOGO */}
        <div className="navbar-logo">
          <img src={Logo} alt="NelutAI Logo" style={{ height: "50px" }} />
        </div>

        {/* LINKS */}
        <div className="navbar-links">
          <a href="#home">{t("navbar.home")}</a>
          <a href="#programs">{t("navbar.programs")}</a>

          <div className="lang-switcher">
            <img
              src={UkFlag}
              alt="English"
              className={`flag-icon ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => changeLang("en")}
            />
            <img
              src={RsFlag}
              alt="Serbian"
              className={`flag-icon ${i18n.language === "sr" ? "active" : ""}`}
              onClick={() => changeLang("sr")}
            />
          </div>

          <a href={CALENDLY_FREE} target="_blank" rel="noopener noreferrer" className="navbar-cta">
            {t("navbar.book")}
          </a>
        </div>
      </div>
    </nav>
  );
}
