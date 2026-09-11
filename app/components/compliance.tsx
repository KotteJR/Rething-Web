import Image from "next/image";
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
      <div className="grid gap-8 lg:gap-16 md:grid-cols-2 lg:items-center">
        <div className="relative order-first md:order-last">
          <div className="relative w-full aspect-square max-w-xl mx-auto rounded-[20px] sm:rounded-[32px] border border-zinc-200 bg-zinc-50 overflow-hidden">
            <Image
              src="/images/7.png"
              alt="Abstract compliance visual"
              fill
              className="object-contain p-6 sm:p-10"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center justify-center bg-white px-0 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
              security & compliance /
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
              Enterprise-grade by default
            </h2>
            <p className="max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-zinc-600">
              Your data stays yours. We never train on it without permission, and every system is built to meet the controls your security and legal teams already expect.
            </p>
          </div>

          <ul className="space-y-4 sm:space-y-5">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <li key={feature.title} className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-0.5 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-100 text-zinc-500 flex-shrink-0">
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
                </li>
              );
            })}
          </ul>

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
        </div>
      </div>
    </section>
  );
}
