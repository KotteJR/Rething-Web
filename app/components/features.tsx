"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineCodeBracket,
  HiOutlineRocketLaunch,
  HiOutlineChartBar,
} from "react-icons/hi2";

const features = [
  {
    title: "Discovery & Compliance",
    description:
      "We assess your use case, data landscape, and regulatory requirements. Define governance policies, compliance needs, and guardrails before any model development begins.",
    icon: HiOutlineDocumentText,
    image: "/images/2.png",
  },
  {
    title: "Data & Architecture",
    description:
      "Design secure data pipelines and AI architecture aligned with your enterprise policies. Implement privacy controls, access management, and audit trails from the ground up.",
    icon: HiOutlineLightBulb,
    image: "/images/3.png",
  },
  {
    title: "Model Development",
    description:
      "Build custom models through pre-training or fine-tuning. Integrate guardrails, bias detection, and safety controls throughout the development lifecycle to ensure responsible AI.",
    icon: HiOutlineCodeBracket,
    image: "/images/5.png",
  },
  {
    title: "Testing & Validation",
    description:
      "Rigorous testing against your compliance requirements, performance benchmarks, and safety standards. Validate that guardrails work as intended before deployment.",
    icon: HiOutlineRocketLaunch,
    image: "/images/6.png",
  },
  {
    title: "Deploy & Monitor",
    description:
      "Deploy AI systems with continuous monitoring, drift detection, and policy enforcement. Maintain compliance and performance as your AI scales across the enterprise.",
    icon: HiOutlineChartBar,
    image: "/images/1.png",
  },
];

export default function Features() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedFeature = features[selectedIndex];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
          our methodology /
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
          Governed AI Development
        </h2>
      </div>

      {/* Content grid */}
      <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] lg:items-stretch">
        {/* Left: feature list */}
        <div className="space-y-2 sm:space-y-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isSelected = index === selectedIndex;
            return (
              <button
                key={feature.title}
                onClick={() => setSelectedIndex(index)}
                className={`flex w-full items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border px-3 sm:px-5 py-3 sm:py-4 text-left transition ${
                  isSelected
                    ? "border-zinc-200 bg-zinc-50 shadow-xs"
                    : "border-transparent bg-transparent hover:bg-zinc-50"
                }`}
              >
                <span
                  className={`mt-0.5 sm:mt-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl transition-all duration-200 flex-shrink-0 ${
                    isSelected
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="space-y-0.5 sm:space-y-1 flex-1 min-w-0">
                  <span className="block text-xs sm:text-sm font-semibold text-zinc-900">
                    {feature.title}
                  </span>
                  <span className="block text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-500">
                    {feature.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: image container */}
        <div className="flex justify-center h-full order-first lg:order-last">
          <div className="relative w-full max-w-xl h-full min-h-[200px] sm:min-h-[300px] lg:min-h-[360px] rounded-[20px] sm:rounded-[32px] border border-zinc-200 bg-zinc-50 overflow-hidden">
            <Image
              src={selectedFeature.image}
              alt={selectedFeature.title}
              fill
              className="object-cover rounded-[20px] sm:rounded-[32px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

