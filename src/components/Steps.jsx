import { useTranslation } from "react-i18next";

export default function Steps() {
  const { t } = useTranslation();

  return (
    <section className="section" id="steps">
      <h2>{t("steps.title")}</h2>
      <p>{t("steps.text")}</p>

      <div className="cards-grid">
        <div className="card">
          <h3>{t("steps.step1_title")}</h3>
          <p>{t("steps.step1_text")}</p>
        </div>

        <div className="card">
          <h3>{t("steps.step2_title")}</h3>
          <p>{t("steps.step2_text")}</p>
        </div>

        <div className="card">
          <h3>{t("steps.step3_title")}</h3>
          <p>{t("steps.step3_text")}</p>
        </div>

        <div className="card">
          <h3>{t("steps.step4_title")}</h3>
          <p>{t("steps.step4_text")}</p>
        </div>
      </div>
    </section>
  );
}
