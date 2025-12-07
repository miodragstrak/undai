import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer center" id="book">
      <p>{t("footer.tagline")}</p>
      <p className="small">{t("footer.rights")}</p>
    </footer>
  );
}
