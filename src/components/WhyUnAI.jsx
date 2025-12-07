import { useTranslation } from "react-i18next";

export default function WhyUnAI() {
  const { t } = useTranslation();
  const items = t("why.list", { returnObjects: true });

  return (
    <section className="section center">
      <h2>{t("why.title")}</h2>

      <ul className="list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
