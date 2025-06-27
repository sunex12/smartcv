import { useTranslation } from "react-i18next";
import { useState } from "react";

import { jsPDF } from "jspdf";
import { Document, Packer, Paragraph } from "docx";

export const ResumeFormat = () => {
  const { t } = useTranslation();
  const [text, setText] = useState(`Andrejs Bērziņš
📍 Rīga, Latvija
📞 +371 20000000
✉️ andrejs.berzins@email.com
💼 linkedin.com/in/andrejsberzins

Profila apraksts
Atbildīgs un mērķtiecīgs jaunietis ar interesi par informācijas tehnoloģijām. Spēju strādāt komandā un patstāvīgi risināt problēmas. Vēlos attīstīt zināšanas programmēšanā un iegūt praktisku pieredzi.

Izglītība
Rīgas Tehniskā koledža
Programmēšanas tehniķa programma
2022 – 2025

Prasmes
HTML, CSS, JavaScript

React pamatzināšanas

Git un GitHub

MS Word, Excel

Valodu zināšanas
Latviešu – dzimtā

Angļu – ļoti labā līmenī

Krievu – sarunvaloda

Intereses
Programmēšana, datorspēles, basketbols`);

  const downloadAsPDF = () => {
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("dokuments.pdf");
  };

  const downloadAsWord = async () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [new Paragraph(text)],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dokuments.docx";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl font-bold">
        {t("format-resume.title")}
      </h2>
      <div onClick={downloadAsPDF} className="mt-10 m-auto text-center bg-[#363333] max-w-[250px] py-5 text-2xl rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-semibold">
        {t("format-resume.pdf")}
      </div>
      <div onClick={downloadAsWord} className="mt-7 m-auto text-center bg-[#363333] max-w-[250px] py-5 text-2xl rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)] font-semibold">
        {t("format-resume.word")}
      </div>
    </div>
  );
};
