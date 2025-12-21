import { useTranslation } from "react-i18next";
import {
  CALENDLY_FREE,
  FORM_MENTORING_SR,
  FORM_MENTORING_EN,
  FORM_GROUP,
  FORM_MASTERCLASS
} from "../config";

export default function Collaboration() {
  const { t, i18n } = useTranslation();

  const mentoringForm =
    i18n.language === "sr"
      ? FORM_MENTORING_SR
      : FORM_MENTORING_EN;

  return (
    <section className="section center" id="collaboration">
      {/* INTRO */}
      <h2>{t("collaboration.title")}</h2>
      <p className="section-intro">
        {t("collaboration.intro")}
      </p>

      {/* PROGRAMS */}
      <div className="cards-grid">

        {/* INTRO CALL */}
        <div className="card">
          <h3>{t("collaboration.intro_call_title")}</h3>
          <p>{t("collaboration.intro_call_text")}</p>

          <div className="card-cta">
            <a
              href={CALENDLY_FREE}
              target="_blank"
              rel="noopener noreferrer"
              className="button small"
            >
              {t("cta_buttons.free_call")}
            </a>
          </div>
        </div>

        {/* 1-on-1 MENTORING */}
        <div className="card">
          <div className="promo-badge">
            {i18n.language === "sr"
              ? "PROMO • 999 RSD"
              : "PROMO • $9.99"}
          </div>

          <h3>{t("collaboration.mentoring_title")}</h3>
          <p>{t("collaboration.mentoring_text")}</p>

          <div className="card-cta">
            <a
              href={mentoringForm}
              target="_blank"
              rel="noopener noreferrer"
              className="button small"
            >
              {t("cta_buttons.mentoring")}
            </a>
          </div>
        </div>

        {/* GROUP PROGRAM */}
        <div className="card">
          <h3>{t("collaboration.group_title")}</h3>
          <p>{t("collaboration.group_text")}</p>

          <div className="card-cta">
            <a
              href={FORM_GROUP}
              target="_blank"
              rel="noopener noreferrer"
              className="button small"
            >
              {t("cta_buttons.group")}
            </a>
          </div>
        </div>

        {/* MASTERCLASS */}
        <div className="card">
          <h3>{t("collaboration.masterclass_title")}</h3>
          <p>{t("collaboration.masterclass_text")}</p>

          <div className="card-cta">
            <a
              href={FORM_MASTERCLASS}
              target="_blank"
              rel="noopener noreferrer"
              className="button small"
            >
              {t("cta_buttons.masterclass")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
