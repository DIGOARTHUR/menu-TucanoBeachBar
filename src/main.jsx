import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import menuPT from "./translation/pt/global.json";
import menuEN from "./translation/en/global.json";
import i18next from 'i18next';
import { interpolate } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';


i18next.init({
  interpolate: { escapeValue: false },
  lng: "pt",
  resources: {
    en: {
      global: menuEN,
    },
    pt: {
      global: menuPT,
    }
  }
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>


  </React.StrictMode>,
)
