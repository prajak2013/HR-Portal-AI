import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Leaves from "../pages/Leaves";
import Insurance from "../pages/Insurance";
import Policies from "../pages/Policies";
import Chatbot from "../pages/Chatbot";
import ProtectedRoute from "../features/auth/protectedRoute";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/profile"
              element={<Profile />}
            />

            <Route
              path="/leaves"
              element={<Leaves />}
            />

            <Route
              path="/insurance"
              element={<Insurance />}
            />

            <Route
              path="/policies"
              element={<Policies />}
            />

            <Route
              path="/chatbot"
              element={<Chatbot />}
            />
          </Route>
        </Route>

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}