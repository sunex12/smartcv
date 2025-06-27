import { PaymentButton } from "../components/Buttons/PaymentButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const AnalysisResumePay = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">{t("payment-analysis-resume.title")}</h2>
      <h3 className="text-center text-lg font-bold mt-9 mb-8">
        {t("payment-analysis-resume.sub-title")}
      </h3>
      <p className="text-sm mt-4">{t("payment-analysis-resume.texts.1")}</p>
      <p className="text-sm mt-4">{t("payment-analysis-resume.texts.2")}</p>
      <p className="text-sm mt-4">
        {t("payment-analysis-resume.texts.3")}
      </p>
      <p className="text-sm mt-4">
        {t("payment-analysis-resume.texts.4")}
      </p>
      <div className="text-center mt-52 mb-8">
        <Link to="/smartcv/resume-format">
          <PaymentButton>{t("payment-analysis-resume.button")}</PaymentButton>
        </Link>
      </div>
    </div>
  );
};
