import { useTranslation } from "react-i18next";

export default function WhatYouLearn() {
  const { t } = useTranslation();
  const items = t("learn.list", { returnObjects: true });

  return (
    <section className="section center" id="learn">
      <h2>{t("learn.title")}</h2>
      <p>{t("learn.text")}</p>

      <ul className="list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
