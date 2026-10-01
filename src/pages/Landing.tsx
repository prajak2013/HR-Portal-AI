import {
  ArrowRight,
  Bot,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Bot,
    title: "AI HR Assistant",
    description:
      "Get quick answers about leaves, insurance, policies and employee information.",
  },
  {
    icon: ClipboardList,
    title: "Leave Management",
    description:
      "Check your leave balance, apply for leave and view your leave history.",
  },
  {
    icon: HeartPulse,
    title: "Insurance",
    description:
      "View your insurance policy, coverage details and claim history.",
  },
  {
    icon: ShieldCheck,
    title: "HR Policies",
    description:
      "Access important company policies and employee guidelines in one place.",
  },
];

const benefits = [
  "Centralized employee information",
  "Easy leave management",
  "Insurance and claims visibility",
  "AI-powered HR assistance",
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div className="rounded-xl bg-blue-600 p-2.5">
              <Bot className="text-white" size={24} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">
                HR Portal AI
              </h1>
              <p className="text-xs text-slate-500">
                Employee Management
              </p>
            </div>
          </Link>

          <Link
            to="/login"
            className="
              rounded-lg bg-blue-600 px-5 py-2.5
              text-sm font-medium text-white
              transition hover:bg-blue-700
            "
          >
            Login
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="overflow-hidden bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <Bot size={16} />
                AI-powered HR platform
              </div>

              <h2 className="max-w-3xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Your complete
                <span className="text-blue-600">
                  {" "}employee portal
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Manage your profile, leaves, insurance and HR
                policies from one simple platform. Get instant
                assistance with our built-in HR AI assistant.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/login"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-lg bg-blue-600 px-6 py-3
                    font-medium text-white
                    transition hover:bg-blue-700
                  "
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#features"
                  className="
                    inline-flex items-center justify-center
                    rounded-lg border border-slate-300
                    bg-white px-6 py-3
                    font-medium text-slate-700
                    transition hover:bg-slate-50
                  "
                >
                  Explore Features
                </a>
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Welcome back
                    </p>
                    <h3 className="text-xl font-bold text-slate-900">
                      Employee Dashboard
                    </h3>
                  </div>

                  <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Active
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-blue-50 p-5">
                    <p className="text-sm text-slate-500">
                      Leave Balance
                    </p>
                    <p className="mt-2 text-3xl font-bold text-blue-600">
                      18
                    </p>
                    <p className="text-xs text-slate-500">
                      Days remaining
                    </p>
                  </div>

                  <div className="rounded-xl bg-green-50 p-5">
                    <p className="text-sm text-slate-500">
                      Insurance
                    </p>
                    <p className="mt-2 text-3xl font-bold text-green-600">
                      Active
                    </p>
                    <p className="text-xs text-slate-500">
                      Policy available
                    </p>
                  </div>

                  <div className="col-span-2 rounded-xl border border-slate-200 p-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Bot
                          size={20}
                          className="text-blue-600"
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-slate-800">
                          HR Assistant
                        </p>
                        <p className="text-sm text-slate-500">
                          How can I help you today?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-auto max-w-7xl px-6 py-20"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Platform Features
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Everything you need in one place
            </h2>

            <p className="mt-4 text-slate-600">
              A modern employee portal designed to simplify
              everyday HR tasks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    rounded-2xl border border-slate-200
                    bg-white p-6 shadow-sm
                    transition hover:-translate-y-1 hover:shadow-md
                  "
                >
                  <div className="mb-5 inline-flex rounded-xl bg-blue-100 p-3">
                    <Icon
                      size={24}
                      className="text-blue-600"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Simple & Efficient
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Spend less time managing HR tasks
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                HR Portal AI brings commonly used employee
                services together so you can quickly find the
                information you need.
              </p>

              <div className="mt-7 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={20}
                      className="shrink-0 text-green-600"
                    />

                    <span className="text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
              <Bot size={40} />

              <h3 className="mt-6 text-2xl font-bold">
                Need help?
              </h3>

              <p className="mt-3 leading-7 text-blue-100">
                Ask the HR Assistant about your leave balance,
                insurance, profile or company policies.
              </p>

              <Link
                to="/login"
                className="
                  mt-7 inline-flex items-center gap-2
                  rounded-lg bg-white px-5 py-3
                  font-medium text-blue-600
                  transition hover:bg-blue-50
                "
              >
                Login to Portal
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-slate-900 px-6 py-14 text-center text-white md:px-12">
            <Users className="mx-auto" size={36} />

            <h2 className="mt-5 text-3xl font-bold">
              Ready to access your employee portal?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Login to manage your employee information and
              access HR services.
            </p>

            <Link
              to="/login"
              className="
                mt-7 inline-flex items-center gap-2
                rounded-lg bg-blue-600 px-6 py-3
                font-medium text-white
                transition hover:bg-blue-700
              "
            >
              Employee Login
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-center text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:text-left">
          <p>© 2026 HR Portal AI. All rights reserved.</p>
          <p>Employee Management Platform</p>
        </div>
      </footer>
    </div>
  );
}