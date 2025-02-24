import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Skills from "./pages/Skills"
import { BrowserRouter, Routes, Route } from 'react-router';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
