import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'

// должен быть первее App.jsx
import './index.css';
import './media.css';

import './ i18n'; // подключаем i18n

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
