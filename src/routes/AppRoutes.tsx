import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Leaves from "../pages/Leaves";
import Insurance from "../pages/Insurance";
import Policies from "../pages/Policies";
import Chatbot from "../pages/Chatbot";
import Profile from "../pages/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}