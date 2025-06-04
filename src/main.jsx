import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./i18n";

if (!window.location.hash) {
  const path = window.location.pathname;
  window.location.replace(`${window.location.origin}/#${path}`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
