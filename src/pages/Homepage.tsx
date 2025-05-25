import { BlueButton } from "../components/Buttons/BlueButton";
import { OpacityButton } from "../components/Buttons/OpacityButton";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div className="justify-between px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold">SmartCV</h1>
        <p className="text-sm font-semibold text-mainColor mt-7">
          {t("homepage.text")}
        </p>
      </div>

      <div className="text-center mt-48 space-y-4">
        <Link to="/upload-resume">
          <BlueButton>{t("homepage.button")}</BlueButton>
        </Link>
        <Link to="/instruction">
          <OpacityButton>{t("homepage.instruction")}</OpacityButton>
        </Link>
      </div>
    </div>
  );
};
