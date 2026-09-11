"use client";

import { HiOutlineShieldCheck, HiOutlineScale, HiOutlineCog, HiOutlineChartBarSquare, HiOutlineCheckCircle, HiOutlineLockClosed } from "react-icons/hi2";

const benefits = [
  {
    icon: HiOutlineShieldCheck,
    title: "Risk Mitigation",
    description: "Reduce legal, reputational, and operational risks with built-in safety controls and compliance mechanisms.",
  },
  {
    icon: HiOutlineScale,
    title: "Regulatory Compliance",
    description: "Meet industry standards and regulations automatically with AI systems designed for governance from day one.",
  },
  {
    icon: HiOutlineCog,
    title: "Full Control",
    description: "Maintain complete control over your AI behavior, outputs, and decision-making processes at all times.",
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Transparency & Auditability",
    description: "Every AI decision is logged, traceable, and explainable for complete transparency and accountability.",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "Ethical AI",
    description: "Deploy AI that aligns with your values, prevents bias, and operates responsibly across all use cases.",
  },
  {
    icon: HiOutlineLockClosed,
    title: "Data Privacy",
    description: "Your data stays yours—we never train on your proprietary data without explicit permission.",
  },
];

const stats = [
  { value: "100%", label: "Audit Trail Coverage", desc: "Every AI interaction logged" },
  { value: "24/7", label: "Monitoring", desc: "Continuous safety checks" },
  { value: "<100ms", label: "Guardrail Response", desc: "Real-time protection" },
  { value: "99.9%", label: "Uptime SLA", desc: "Enterprise reliability" },
];

export default function WhyGoverned() {
  return (
    <section id="why-governed" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500 rounded-full border border-zinc-200">
            WHY GOVERNED AI /
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
            AI You Can Trust
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto">
            Governed AI isn't just about compliance—it's about building AI systems that are safe, ethical, and aligned with your business values.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-xl lg:rounded-2xl border border-zinc-200 p-6 hover:shadow-md transition-shadow"
              >
                <IconComponent className="h-10 w-10 text-zinc-900 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="bg-zinc-900 rounded-2xl lg:rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">
              Enterprise-Grade Performance
            </h3>
            <p className="text-sm sm:text-base text-zinc-400">
              Governance doesn't mean compromise—get the performance and reliability you need
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-zinc-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl border-2 border-zinc-900 p-8 sm:p-12 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-900 mb-4">
              Don't Choose Between Innovation and Governance
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-600 leading-relaxed mb-6">
              With our governed AI platform, you get cutting-edge AI capabilities with enterprise-grade controls, compliance, and safety built in from the start.
            </p>
            <button className="rounded-full bg-zinc-900 px-8 py-4 text-sm sm:text-base font-medium text-white transition hover:bg-zinc-800 shadow-lg">
              Start Your Governed AI Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
