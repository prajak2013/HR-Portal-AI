import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Leaves from "../pages/Leaves";
import Insurance from "../pages/Insurance";
import Policies from "../pages/Policies";
import Profiles from "../pages/Profiles";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profiles />} />
        <Route path="/leaves" element={<Leaves />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </BrowserRouter>
  );
}