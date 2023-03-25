import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import AddAdminPage from "./pages/AddAdminPage";
import AddFountainPage from "./pages/AddFountainPage";
import AdminPage from "./pages/AdminPage";
import AdminProfileEditPage from "./pages/AdminProfileEditPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/resetPassword" element={<ResetPasswordPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminProfileEdit" element={<AdminProfileEditPage />} />
        <Route path="/addAdmin" element={<AddAdminPage />} />
        <Route path="/addFountain" element={<AddFountainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
