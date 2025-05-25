import { useTranslation } from "react-i18next";

export const Archive = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8 text-center">
      <h2 className="text-center text-2xl font-bold">{t("archive.title")}</h2>
      <div>
        <div className="mt-7 p-4 justify-between bg-[#363333] rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <h3 className="font-medium">resume.pdf</h3>
          <button className="text-sm bg-mainColor px-4 py-2 rounded-lg mt-4 max-w-[170px] w-full font-bold">
            {t("archive.recommendations")}
          </button>
          <button className="text-sm bg-mainColor px-4 py-2 rounded-lg mt-4 max-w-[170px] w-full font-bold">
            {t("archive.resume")}
          </button>
          <p className="text-xs text-left mt-4">Monday 14.43</p>
        </div>
      </div>
    </div>
  );
};
