"use client";

import Image from "next/image";
import {
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineLockClosed,
  HiOutlineChartBarSquare,
} from "react-icons/hi2";

const hatchStyle = {
  backgroundImage:
    "repeating-linear-gradient(45deg, #71717a, #71717a 1px, #a1a1aa 4px, #a1a1aa 4px)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
  display: "inline-block",
} as const;

const benefits = [
  {
    title: "Risk mitigation",
    description: "Safety controls and policy checks before anything reaches production.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Regulatory alignment",
    description: "Built to satisfy enterprise and industry requirements from day one.",
    icon: HiOutlineScale,
  },
  {
    title: "Full control",
    description: "Your data, models, and rules stay under your ownership.",
    icon: HiOutlineLockClosed,
  },
  {
    title: "Auditability",
    description: "Every decision is logged, traceable, and ready for review.",
    icon: HiOutlineChartBarSquare,
  },
];

const stats = [
  { value: "100%", label: "Audit coverage" },
  { value: "24/7", label: "Monitoring" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function WhyGoverned() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerHeight = 80;
      const offsetPosition =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="why-governed" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center justify-center bg-white px-0 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
              why governed ai /
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
              AI you can trust in production
            </h2>
            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600">
              Governed AI is not a trade-off against performance. It is how enterprise teams ship custom models with guardrails, compliance, and control already in place.
            </p>
          </div>

          <ul className="space-y-4 sm:space-y-5">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <li key={benefit.title} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-0.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-100 text-zinc-500 flex-shrink-0">
                    <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <span className="space-y-0.5 sm:space-y-1">
                    <span className="block text-xs sm:text-sm font-semibold text-zinc-900">
                      {benefit.title}
                    </span>
                    <span className="block text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-500">
                      {benefit.description}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            Start with your rules
          </button>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-xl aspect-square rounded-[20px] sm:rounded-[32px] border border-zinc-200 bg-zinc-50 overflow-hidden">
            <Image
              src="/images/4.png"
              alt="Abstract governed AI visual"
              fill
              className="object-contain p-6 sm:p-10"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 rounded-[20px] md:rounded-[32px] border border-zinc-200 bg-white px-3 sm:px-8 py-6 sm:py-8 md:px-12">
        <div className="grid grid-cols-3 divide-x divide-zinc-200 text-center">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-2 sm:px-4 flex flex-col items-center justify-center"
            >
              <p
                className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-none select-none"
                style={hatchStyle}
              >
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-zinc-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
