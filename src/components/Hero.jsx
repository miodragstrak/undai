import { useTranslation } from "react-i18next";
import Logo from "../assets/undai-logo.svg";
import { CALENDLY_FREE } from "../config";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="section hero center" id="home">
      <div className="hero-inner">

        <img src={Logo} className="hero-logo" alt="logo" />

        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>

        <a href={CALENDLY_FREE} target="_blank" rel="noopener noreferrer" className="button">
          {t("hero.cta")}
        </a>

      </div>
    </section>
  );
}
