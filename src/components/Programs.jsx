import { useTranslation } from "react-i18next";
import { CALENDLY_FREE, CALENDLY_MENTORING, FORM_GROUP, FORM_MASTERCLASS } from "../config";


export default function Programs() {
  const { t } = useTranslation();

  return (
    <section className="section center" id="programs">
      <h2>{t("programs.title")}</h2>

      <div className="cards-grid">

        <div className="card">
          <h3>{t("programs.freecall_title")}</h3>
          <p>{t("programs.freecall_text")}</p>
          <div className="card-cta">
            <a href={CALENDLY_FREE} target="_blank" rel="noopener noreferrer" className="button small">{t("programs.freecall_cta")}</a>
          </div>
        </div>

        <div className="card">
          <div className="promo-badge">{t("programs.mentoring_promo")}</div>
          <h3>{t("programs.mentoring_title")}</h3>
          <p>{t("programs.mentoring_text")}</p>
          <div className="card-cta">
            <a href={t("programs.mentoring_url")} target="_blank" rel="noopener noreferrer" className="button small">{t("programs.mentoring_cta")}</a>
          </div>
        </div>

        <div className="card">
          <h3>{t("programs.group_title")}</h3>
          <p>{t("programs.group_text")}</p>
          <div className="card-cta">
            <a href={FORM_GROUP} target="_blank" rel="noopener noreferrer" className="button small">{t("programs.group_cta")}</a>
          </div>
        </div>

        <div className="card">
          <h3>{t("programs.masterclass_title")}</h3>
          <p>{t("programs.masterclass_text")}</p>
          <div className="card-cta">
            <a href={FORM_MASTERCLASS} target="_blank" rel="noopener noreferrer" className="button small">{t("programs.masterclass_cta")}</a>
          </div>
        </div>

      </div>
    </section>
  );
}
