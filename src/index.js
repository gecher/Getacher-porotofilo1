import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Analytics } from "@vercel/analytics/react";
import * as serviceWorkerRegistration from './utils/pwa';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Analytics
      beforeSend={(event) => {
        // Ignore all events that have a `/private` inside the URL
        if (event.url.includes("localhost")) {
          return null;
        }
        return event;
      }}
    />
  </React.StrictMode>
);

// Register service worker for PWA functionality
serviceWorkerRegistration.register({
  onSuccess: (registration) => {
    console.log('PWA registered successfully');
  },
  onUpdate: (registration) => {
    console.log('PWA update available');
    // Show update notification to user
    const updateButton = document.createElement('button');
    updateButton.textContent = 'Update Available - Click to Refresh';
    updateButton.onclick = () => {
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
      window.location.reload();
    };
    updateButton.className = 'fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50';
    document.body.appendChild(updateButton);
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
