import { useTranslation } from "react-i18next";

export const Instruction = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl font-semibold">{t("instruction.title")}</h2>
      <section className="mt-10 ml-6 mb-9">
        <article className="mt-8">
          <h3 className="text-mainColor font-semibold">
            {t("instruction.titles.1")}
          </h3>
          <p className="text-sm mt-3">{t("instruction.texts.1")}</p>
        </article>
        <article className="mt-8">
          <h3 className="text-mainColor font-semibold">
            {t("instruction.titles.2")}
          </h3>
          <p className="text-sm mt-3">{t("instruction.texts.2.1")}</p>
          <p className="text-sm mt-3">{t("instruction.texts.2.2")}</p>

          <p className="text-sm mt-4">{t("instruction.texts.2.3")}</p>
          <p className="text-sm mt-4">{t("instruction.texts.2.4")}</p>
          <p className="text-sm mt-4">{t("instruction.texts.2.5")}</p>
          <p className="text-sm mt-4">{t("instruction.texts.2.6")}</p>
          <p className="text-sm mt-4">{t("instruction.texts.2.7")}</p>
        </article>
        <article className="mt-8">
          <h3 className="text-mainColor font-semibold">
            {t("instruction.titles.3")}
          </h3>
          <p className="text-sm mt-3">{t("instruction.texts.3")}</p>
        </article>
        <article className="mt-8">
          <h3 className="text-mainColor font-semibold">
            {t("instruction.titles.4")}
          </h3>
          <p className="text-sm mt-3">{t("instruction.texts.4")}</p>
        </article>
        <article className="mt-8">
          <h3 className="text-mainColor font-semibold">
            {t("instruction.titles.5")}
          </h3>
          <p className="text-sm mt-3">{t("instruction.texts.5")}</p>
        </article>
        <article className="mt-8">
          <h3 className="text-mainColor font-semibold">
            {t("instruction.titles.6")}
          </h3>
          <p className="text-sm mt-3">{t("instruction.texts.6")}</p>
        </article>
      </section>
    </div>
  );
};
