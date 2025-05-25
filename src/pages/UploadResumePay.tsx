import { Link } from "react-router-dom";
import { PaymentButton } from "../components/Buttons/PaymentButton";
import { useTranslation } from "react-i18next";

export const UploadResumePay = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold">{t("payment-upload-resume.title")}</h2>
      <h3 className="text-center text-lg font-semibold mt-9 mb-8">
        {t("payment-upload-resume.sub-title")}
      </h3>
      <p className="text-sm mt-4">{t("instruction.texts.2.2")}</p>
      <p className="text-sm mt-4">
        {t("instruction.texts.2.3")}
      </p>
      <p className="text-sm mt-4">
        {t("instruction.texts.2.4")}
      </p>
      <p className="text-sm mt-4">
        {t("instruction.texts.2.5")}
      </p>
      <p className="text-sm mt-4">
        {t("instruction.texts.2.6")}
      </p>
      <p className="text-sm mt-4">
        {t("instruction.texts.2.7")}
      </p>
      <div className="text-center mt-8">
        <Link to="/analysis-resume">
          <PaymentButton>{t("payment-upload-resume.button")}</PaymentButton>
        </Link>
      </div>
    </div>
  );
};
