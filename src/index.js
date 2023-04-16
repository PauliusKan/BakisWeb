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
import { AuthProvider, RequireAuth } from "react-auth-kit"

export default function App() {
  return (
    <AuthProvider
    authType={"cookie"}
    authName={"authorization"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/admin" element={<RequireAuth loginPath="/login"><AdminPage /></RequireAuth>} />
          <Route path="/adminProfileEdit" element={<RequireAuth loginPath="/login"><AdminProfileEditPage /></RequireAuth>} />
          <Route path="/addAdmin" element={<RequireAuth loginPath="/login"><AddAdminPage /></RequireAuth>} />
          <Route path="/addFountain" element={<RequireAuth loginPath="/login"><AddFountainPage /></RequireAuth>} />
          <Route path="/editFountain" element={<RequireAuth loginPath="/login"><EditFountainPage /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
