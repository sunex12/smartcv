import { BlueButton } from "../components/Buttons/BlueButton";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";
import { saveAs } from "file-saver";

import { useTranslation } from "react-i18next";
import { useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const AnalysisResume = () => {
  const { t } = useTranslation();

  const [text, setText] = useState(`

  `);

  // === Helper: Konvertē HTML uz stilizētiem Paragraph objektiem ===
  const parseHtmlToDocx = (html: string): Paragraph[] => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    const output: Paragraph[] = [];

    tempDiv.childNodes.forEach((node) => {
      if (node.nodeType === 1) {
        const el = node as HTMLElement;

        switch (el.tagName.toLowerCase()) {
          case "h1":
            output.push(
              new Paragraph({
                text: el.textContent || "",
                heading: HeadingLevel.HEADING_1,
              })
            );
            break;
          case "h2":
            output.push(
              new Paragraph({
                text: el.textContent || "",
                heading: HeadingLevel.HEADING_2,
              })
            );
            break;
          case "p":
            const bold = el.querySelector("strong")?.textContent || undefined;
            const restText = el.textContent?.replace(bold || "", "") || "";

            output.push(
              new Paragraph({
                children: [
                  bold
                    ? new TextRun({ text: bold, bold: true })
                    : new TextRun(""),
                  new TextRun(restText),
                ],
              })
            );
            break;
          case "ul":
            el.querySelectorAll("li").forEach((li) => {
              output.push(
                new Paragraph({
                  text: "• " + li.textContent,
                  bullet: { level: 0 },
                })
              );
            });
            break;
          default:
            output.push(new Paragraph(el.textContent || ""));
        }
      } else if (node.nodeType === 3) {
        // Text node
        const text = node.textContent?.trim();
        if (text) {
          output.push(new Paragraph(text));
        }
      }
    });

    return output;
  };

  const downloadAsWord = async () => {
    const docParagraphs = parseHtmlToDocx(text);

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: docParagraphs,
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "cv-komentari.docx");
  };

  return (
    <div className="text-center mt-8">
      <h2 className="text-center text-2xl font-bold">
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

      <h3 className="text-center text-xl font-bold">
        {t("analysis-resume.sub-title")}
      </h3>

      <BlueButton
        onClick={downloadAsWord}
        className="mx-auto cursor-pointer font-bold text-lg mb-8 mt-10 block"
      >
        {t("analysis-resume.download")}
      </BlueButton>

      {/* <Link to="/smartcv/analysis-resume-payment">
        <BlueButton className="text-sm">
          {t("analysis-resume.button")}
        </BlueButton>
      </Link> */}
    </div>
  );
};
