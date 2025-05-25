import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";

import "./index.css";
import "./locales/i18n/i18n";

import { init, miniApp } from "@telegram-apps/sdk";

const initializeTelegramSDK = async (): Promise<void> => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log("Mini App готово");
    }
  } catch (error) {
    console.error("Ошибка инициализации:", error);
  }
};

initializeTelegramSDK();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </BrowserRouter>
);
