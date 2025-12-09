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
    title: "Requirement Analysis",
    description:
      "We collaborate with you to define clear, actionable requirements. Through detailed workshops and discussions, we ensure every aspect of your vision is captured and aligned with your business goals.",
    icon: HiOutlineDocumentText,
    image: "/images/2.png", // Placeholder path
  },
  {
    title: "Solution Design",
    description:
      "With insights from the discovery phase, we design an innovative solution that balances functionality, aesthetics, and cutting-edge technology. Every decision is backed by data, trends, and best practices, ensuring the solution is future-proof and scalable.",
    icon: HiOutlineLightBulb,
    image: "/images/3.png", // Placeholder path
  },
  {
    title: "Development & Testing",
    description:
      "Our team of experts brings the design to life, building a robust and high-performing solution. We rigorously test every feature and function to ensure it meets the highest quality standards before it's ready for launch.",
    icon: HiOutlineCodeBracket,
    image: "/images/5.png", // Placeholder path
  },
  {
    title: "Deployment & Launch",
    description:
      "We seamlessly deploy your solution, ensuring minimal disruption to your operations. From initial setup to final handover, we prioritize a smooth and successful launch, making sure you're ready to impress from day one.",
    icon: HiOutlineRocketLaunch,
    image: "/images/6.png", // Placeholder path
  },
  {
    title: "Growth & Scaling",
    description:
      "Once live, we stay by your side. Whether it's scaling your solution, optimizing its performance, or expanding its features, we help your business adapt and thrive as it grows.",
    icon: HiOutlineChartBar,
    image: "/images/1.png", // Placeholder path
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
          our process /
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
          Discover how we work
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

