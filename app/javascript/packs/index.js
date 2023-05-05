import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../components/App';
import '../css/Button.css';
import '../css/Cards.module.css';
import '../css/Error.css';
import '../css/NavBarAcount.css'
import '../css/SearchBar.css'
import '../css/Appointments.module.css';
import '../css/Docmod.css'
import '../css/Doctor.module.css';
import '../css/FindDoctor.module.css';
import '../css/Home.css';
import '../css/PatientList.module.css';
import "../css/map.css";
import '../css/SearchDoctors.module.css';

let root = null;

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("root");
  if (!root) {
    root = createRoot(app);
  }
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
});
