import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapPage from "./pages/MapPage";
import AddAdminPage from "./pages/AddAdminPage";
import AddFountainPage from "./pages/AddFountainPage";
import EditFountainPage from "./pages/EditFountainPage";
import AdminPage from "./pages/AdminPage";
import AdminProfileEditPage from "./pages/AdminProfileEditPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminProfileEdit" element={<AdminProfileEditPage />} />
        <Route path="/addAdmin" element={<AddAdminPage />} />
        <Route path="/addFountain" element={<AddFountainPage />} />
        <Route path="/editFountain" element={<EditFountainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
