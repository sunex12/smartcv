import { BlueButton } from "../components/Buttons/BlueButton";

import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";

import { sendResumeText, sendResumeFile } from "../api/api";

export const UploadResume = () => {
  const { t } = useTranslation<string>();
  const navigate = useNavigate();

  const [count, setCount] = useState<number>(6000);
  const [text, setText] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  function SymbolsLimit(e: any) {
    const maxLength = e.target.maxLength;
    const currentLength = e.target.value.length;
    setCount(maxLength - currentLength);
    setText(e.target.value); // Uzstādām vērtību
  }

  async function handleSubmit() {
    try {
      if (file) {
        const response = await sendResumeFile(file);
        const gptAnalysis = response.data.analysis;
        console.log("GPT analīze:", gptAnalysis);
      } else if (text) {
        const response = await sendResumeText(text);
        const gptAnalysis = response.data.analysis;
        console.log("GPT analīze:", gptAnalysis);
      }

      navigate("/smartcv/analysis-resume");
    } catch (err) {
      console.error("Kļūda nosūtot CV:", err);
    }
  }

  return (
    <div className="mt-8 text-center">
      <h2 className="text-center mb-8 text-2xl font-bold">
        {t("upload-resume.title")}
      </h2>
      <p className="text-left text-xs mb-4">Symbols remained: {count}</p>
      <textarea
        className="p-5 w-[294px] h-[170px] bg-[#fff] rounded-lg text-black text-xs font-bold placeholder:text-xs placeholder:text-[#8F8F8F]
         placeholder:font-bold shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        placeholder={t("upload-resume.placeholder")}
        maxLength={6000}
        onChange={SymbolsLimit}
        value={text}
      ></textarea>
      <p className="mt-4 mb-6 text-[#8F8F8F] font-semibold">
        {t("upload-resume.or")}
      </p>
      <label className="cursor-pointer text-mainColor font-bold text-lg mb-8 block">
        {t("upload-resume.upload")}
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </label>
      <BlueButton onClick={handleSubmit}>
        {t("upload-resume.button")}
      </BlueButton>
    </div>
  );
};
