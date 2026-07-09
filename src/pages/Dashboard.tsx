import { NavLink } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                    isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                }
            >
                Dashboard
            </NavLink>
        </DashboardLayout>
    );
}