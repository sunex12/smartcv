import { useTranslation } from "react-i18next";

export const ResumeFormat = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl font-semibold">
        {t("format-resume.title")}
      </h2>
      <div className="mt-7 m-auto text-center bg-[#363333] max-w-[250px] py-5 text-2xl rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-medium">
        {t("format-resume.pdf")}
      </div>
      <div className="mt-7 m-auto text-center bg-[#363333] max-w-[250px] py-5 text-2xl rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-medium">
        {t("format-resume.word")}
      </div>
    </div>
  );
};
