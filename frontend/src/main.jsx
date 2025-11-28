import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Destination from "./components/Destination/Destination.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmartTripLanding from "./components/SmartTripLanding/SmartTripLanding.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/smartTripLanding" element={<SmartTripLanding />} />
      </Routes>
    </BrowserRouter>
);
