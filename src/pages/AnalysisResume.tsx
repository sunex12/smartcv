import { BlueButton } from "../components/Buttons/BlueButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const AnalysisResume = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-8">
      <h2 className="text-center text-2xl font-semibold">
        {t("analysis-resume.title")}
      </h2>
      <div style={{ width: 120, height: 120, margin: "30px auto" }}>
        <CircularProgressbar
          value={72}
          text={`${7.2}`}
          styles={buildStyles({
            pathColor: "#5BA8D7",
            textColor: "white",
            trailColor: "#211F1F",
            textSize: "36px",
          })}
        />
      </div>
      <h3 className="text-center text-xl font-semibold">
        {t("analysis-resume.sub-title")}
      </h3>

      <label className="cursor-pointer text-mainColor font-semibold text-lg mb-8 mt-6 block">
        {t("analysis-resume.download")}
        <input type="file" className="hidden" />
      </label>

      <Link to="/analysis-resume-payment">
        <BlueButton className="text-sm">
          {t("analysis-resume.button")}
        </BlueButton>
      </Link>
    </div>
  );
};
