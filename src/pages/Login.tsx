import {
    ArrowLeft,
    Bot,
    Eye,
    EyeOff,
    Lock,
    Mail,
} from "lucide-react";
import { useState } from "react";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import authService from "../features/auth/auth.service";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const from =
        (location.state as { from?: string } | null)?.from ||
        "/dashboard";

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setError("");

        if (!email.trim() || !password.trim()) {
            setError("Please enter your email and password.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            const success = authService.login(
                email.trim(),
                password
            );

            if (success) {
                navigate(from, { replace: true });
            } else {
                setError(
                    "Invalid email or password. Please use the demo credentials."
                );
            }

            setLoading(false);
        }, 500);
    }

    function fillDemoCredentials() {
        const credentials = authService.getDemoCredentials();

        setEmail(credentials.email);
        setPassword(credentials.password);
        setError("");
    }

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Left Side */}
            <div className="hidden bg-blue-600 lg:flex lg:w-1/2">
                <div className="flex w-full flex-col justify-between p-12 text-white">
                    <Link
                        to="/"
                        className="flex items-center gap-3"
                    >
                        <div className="rounded-xl bg-white/15 p-2.5">
                            <Bot size={26} />
                        </div>

                        <span className="text-xl font-bold">
                            HR Portal AI
                        </span>
                    </Link>

                    <div className="max-w-lg">
                        <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
                            Employee Portal
                        </p>

                        <h1 className="mt-4 text-5xl font-bold leading-tight">
                            Welcome back to your HR workspace.
                        </h1>

                        <p className="mt-6 text-lg leading-8 text-blue-100">
                            Manage your profile, leaves, insurance and HR
                            information from one secure place.
                        </p>
                    </div>

                    <p className="text-sm text-blue-200">
                        HR Portal AI · Employee Management Platform
                    </p>
                </div>
            </div>

            {/* Login Side */}
            <div className="flex flex-1 items-center justify-center p-6">
                <div className="w-full max-w-md">
                    <Link
                        to="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-800"
                    >
                        <ArrowLeft size={16} />
                        Back to home
                    </Link>

                    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-3">
                                <Bot
                                    size={28}
                                    className="text-blue-600"
                                />
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900">
                                Employee Login
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Sign in to access your HR portal.
                            </p>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Email Address
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="employee@hrportal.com"
                                        autoComplete="email"
                                        className="
                      w-full rounded-lg border border-slate-300
                      py-3 pl-10 pr-4 outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-2 focus:ring-blue-200
                    "
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="mb-2 block text-sm font-medium text-slate-700"
                                >
                                    Password
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    />

                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        className="
                      w-full rounded-lg border border-slate-300
                      py-3 pl-10 pr-11 outline-none
                      transition
                      focus:border-blue-500
                      focus:ring-2 focus:ring-blue-200
                    "
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword((current) => !current)
                                        }
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={18} />
                                        ) : (
                                            <Eye size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Login */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="
                  w-full rounded-lg bg-blue-600
                  px-5 py-3 font-medium text-white
                  transition hover:bg-blue-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
                            >
                                {loading ? "Signing in..." : "Sign In"}
                            </button>
                        </form>

                        {/* Demo Credentials */}
                        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4">
                            <p className="text-sm font-semibold text-blue-800">
                                Demo Login
                            </p>

                            <div className="mt-2 space-y-1 text-sm text-blue-700">
                                <p>
                                    <span className="font-medium">
                                        Email:
                                    </span>{" "}
                                    employee@hrportal.com
                                </p>

                                <p>
                                    <span className="font-medium">
                                        Password:
                                    </span>{" "}
                                    Employee@123
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={fillDemoCredentials}
                                className="mt-3 text-sm font-medium text-blue-700 underline hover:text-blue-900"
                            >
                                Use demo credentials
                            </button>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-xs text-slate-400">
                        Demo authentication for portfolio purposes
                    </p>
                </div>
            </div>
        </div>
    );
}