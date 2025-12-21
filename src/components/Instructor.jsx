import { useTranslation } from "react-i18next";
import instructorImage from "../assets/instructor.jpg";

export default function Instructor() {
  const { t } = useTranslation();

  return (
    <section className="section instructor-section" id="instructor">
      <div className="instructor">
        <div className="instructor-image">
          <img src={instructorImage} alt="Miodrag Strak" />
        </div>

        <div className="instructor-text">
          <h3>{t("instructor.name")}</h3>
          <p className="instructor-title">
            {t("instructor.title")}
          </p>
          <p>{t("instructor.bio")}</p>
        </div>
      </div>
    </section>
  );
}
