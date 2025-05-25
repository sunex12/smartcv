import { BlueButton } from "../components/Buttons/BlueButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const UploadResume = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 text-center">
      <h2 className="text-center text-2xl font-bold">
        {t("upload-resume.title")}
      </h2>
      <textarea
        className="mt-8 p-5 w-[294px] h-[170px] bg-[#fff] rounded-lg text-black text-xs font-bold placeholder:text-xs placeholder:text-[#8F8F8F]
         placeholder:font-bold shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        placeholder={t("upload-resume.placeholder")}
      ></textarea>
      <p className="mt-4 mb-6 text-[#8F8F8F] font-semibold">{t("upload-resume.or")}</p>
      <label className="cursor-pointer text-mainColor font-bold text-lg mb-8 block">
        {t("upload-resume.upload")}
        <input type="file" className="hidden" />
      </label>
      <Link to="/upload-resume-payment">
        <BlueButton>{t("upload-resume.button")}</BlueButton>
      </Link>
    </div>
  );
};
