"use client";

import { HiOutlineShieldCheck, HiOutlineExclamationTriangle, HiOutlineScale, HiOutlineDocumentCheck } from "react-icons/hi2";

const guardrails = [
  {
    title: "Content Filtering",
    description: "Automatic detection and filtering of harmful, inappropriate, or non-compliant content before it reaches users.",
    icon: HiOutlineShieldCheck,
    features: ["PII Detection", "Toxicity Filtering", "Custom Rules"],
  },
  {
    title: "Bias Detection",
    description: "Continuous monitoring and mitigation of bias in model outputs to ensure fair and ethical AI decisions.",
    icon: HiOutlineScale,
    features: ["Fairness Metrics", "Bias Alerts", "Demographic Parity"],
  },
  {
    title: "Risk Management",
    description: "Real-time risk assessment and intervention to prevent harmful outputs and maintain safety standards.",
    icon: HiOutlineExclamationTriangle,
    features: ["Risk Scoring", "Auto-Blocking", "Escalation Protocols"],
  },
  {
    title: "Compliance Enforcement",
    description: "Automated policy enforcement aligned with industry regulations like GDPR, HIPAA, and SOC 2.",
    icon: HiOutlineDocumentCheck,
    features: ["Policy Engine", "Audit Trails", "Regulatory Alignment"],
  },
];

export default function Guardrails() {
  return (
    <section id="guardrails" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500 rounded-full border border-zinc-200">
            AI SAFETY /
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
            Built-in Guardrails
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto">
            Enterprise-grade safety controls and compliance mechanisms that protect your business and users at every step.
          </p>
        </div>

        {/* Guardrails Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {guardrails.map((guardrail) => {
            const IconComponent = guardrail.icon;
            return (
              <div
                key={guardrail.title}
                className="bg-white rounded-2xl lg:rounded-3xl border border-zinc-200 p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-900 text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">
                  {guardrail.title}
                </h3>
                
                <p className="text-sm sm:text-base text-zinc-600 mb-4 leading-relaxed">
                  {guardrail.description}
                </p>

                <div className="space-y-2">
                  {guardrail.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-zinc-900"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white rounded-2xl border border-zinc-200 px-6 sm:px-8 py-6">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base font-semibold text-zinc-900">
                Need custom guardrails for your use case?
              </p>
              <p className="text-xs sm:text-sm text-zinc-600">
                We build tailored safety controls for your specific requirements.
              </p>
            </div>
            <button className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
