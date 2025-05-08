import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

import { init, miniApp } from '@telegram-apps/sdk';

const initializeTelegramSDK = async (): Promise<void> => {
  try {
    await init();

    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log('Mini App готово');
    }

  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};


initializeTelegramSDK();


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)