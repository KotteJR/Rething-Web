import {
  HiOutlineLockClosed,
  HiOutlineDocumentText,
  HiOutlineCheckBadge,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const features = [
  {
    title: "Data privacy",
    description: "Encryption, residency controls, and access policies from the first pipeline.",
    icon: HiOutlineLockClosed,
  },
  {
    title: "Audit logging",
    description: "A complete trail for every query, decision, and model change.",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Regulatory readiness",
    description: "Designed for GDPR, HIPAA, SOC 2, ISO 27001, and industry rules.",
    icon: HiOutlineCheckBadge,
  },
  {
    title: "Data governance",
    description: "Lineage, permissions, and policy management across the AI stack.",
    icon: HiOutlineGlobeAlt,
  },
];

const certifications = [
  "GDPR",
  "SOC 2",
  "ISO 27001",
  "HIPAA",
  "CCPA",
  "PCI DSS",
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
          security & compliance /
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
          Enterprise-grade by default
        </h2>
        <p className="text-sm sm:text-md max-w-2xl mx-auto font-medium text-zinc-500 px-2">
          Your data stays yours. We never train on it without permission, and every system is built to meet the controls your security and legal teams already expect.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <article
              key={feature.title}
              className="flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white px-3 sm:px-5 py-3 sm:py-4"
            >
              <span className="mt-0.5 sm:mt-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-100 text-zinc-500 flex-shrink-0">
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="space-y-0.5 sm:space-y-1">
                <span className="block text-xs sm:text-sm font-semibold text-zinc-900">
                  {feature.title}
                </span>
                <span className="block text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </span>
              </span>
            </article>
          );
        })}
      </div>

      <div className="rounded-[20px] sm:rounded-[32px] border border-zinc-200 bg-white px-5 py-5 sm:px-8 sm:py-6">
        <p className="text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500 mb-4">
          certifications /
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-zinc-700"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
