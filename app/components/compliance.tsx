"use client";

import { HiOutlineCheckBadge, HiOutlineLockClosed, HiOutlineDocumentText, HiOutlineGlobeAlt } from "react-icons/hi2";

const complianceFeatures = [
  {
    title: "Data Privacy",
    description: "End-to-end encryption, data residency controls, and privacy-first architecture.",
    icon: HiOutlineLockClosed,
  },
  {
    title: "Audit Logging",
    description: "Complete audit trails for every AI decision, query, and model interaction.",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Regulatory Compliance",
    description: "Built to meet GDPR, HIPAA, SOC 2, ISO 27001, and industry-specific standards.",
    icon: HiOutlineCheckBadge,
  },
  {
    title: "Data Governance",
    description: "Granular access controls, data lineage tracking, and policy management.",
    icon: HiOutlineGlobeAlt,
  },
];

const certifications = [
  { name: "GDPR", tag: "Compliant" },
  { name: "SOC 2", tag: "Type II" },
  { name: "ISO 27001", tag: "Certified" },
  { name: "HIPAA", tag: "Ready" },
  { name: "CCPA", tag: "Compliant" },
  { name: "PCI DSS", tag: "Level 1" },
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center bg-zinc-50 px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500 rounded-full border border-zinc-200">
            SECURITY & COMPLIANCE /
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
            Enterprise-Grade Security
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto">
            Built from the ground up with security, privacy, and regulatory compliance at the core.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
          {complianceFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                
                <h3 className="text-base sm:text-lg font-semibold text-zinc-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-zinc-50 rounded-2xl lg:rounded-3xl border border-zinc-200 p-6 sm:p-10">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 mb-2">
              Compliance & Certifications
            </h3>
            <p className="text-sm sm:text-base text-zinc-600">
              Meeting the highest standards for data security and regulatory compliance
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="inline-flex items-center gap-2 bg-white rounded-full border border-zinc-200 px-4 sm:px-6 py-2 sm:py-3 hover:border-zinc-900 transition-colors"
              >
                <HiOutlineCheckBadge className="h-5 w-5 text-green-600" />
                <span className="text-sm sm:text-base font-medium text-zinc-900">
                  {cert.name}
                </span>
                <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full">
                  {cert.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Statement */}
        <div className="mt-12 sm:mt-16 bg-zinc-900 rounded-2xl lg:rounded-3xl p-6 sm:p-10 text-center text-white">
          <HiOutlineLockClosed className="h-12 w-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            Your Data, Your Rules
          </h3>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            We never train on your data without explicit permission. Your models and data remain completely private and under your control at all times.
          </p>
        </div>
      </div>
    </section>
  );
}
