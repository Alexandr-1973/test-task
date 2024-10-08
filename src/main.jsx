import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Регистрация сервисного работника для PWA
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    // Код для уведомления пользователя о необходимости обновления PWA
  },
  onOfflineReady() {
    // Код, который будет выполнен, когда приложение готово к оффлайн работе
  }
});


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
