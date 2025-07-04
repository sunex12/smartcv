import { PaymentButton } from "../components/Buttons/PaymentButton";
import { sendPayment } from "../api/api";
import { useTranslation } from "react-i18next";

export const UploadResumePay = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">
        {t("payment-upload-resume.title")}
      </h2>
      <h3 className="text-center text-lg font-bold mt-9 mb-8">
        {t("payment-upload-resume.sub-title")}
      </h3>
      <p className="text-sm mt-4">{t("instruction.texts.2.2")}</p>
      <p className="text-sm mt-4">{t("instruction.texts.2.3")}</p>
      <p className="text-sm mt-4">{t("instruction.texts.2.4")}</p>
      <p className="text-sm mt-4">{t("instruction.texts.2.5")}</p>
      <p className="text-sm mt-4">{t("instruction.texts.2.6")}</p>
      <p className="text-sm mt-4">{t("instruction.texts.2.7")}</p>
      <div className="text-center mt-8">
        <PaymentButton onClick={sendPayment}>{t("payment-upload-resume.button")}</PaymentButton>
      </div>
    </div>
  );
};
