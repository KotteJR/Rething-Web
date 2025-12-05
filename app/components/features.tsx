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
    image: "/images/hero.png", // Placeholder path
  },
  {
    title: "Solution Design",
    description:
      "With insights from the discovery phase, we design an innovative solution that balances functionality, aesthetics, and cutting-edge technology. Every decision is backed by data, trends, and best practices, ensuring the solution is future-proof and scalable.",
    icon: HiOutlineLightBulb,
    image: "/images/hero.png", // Placeholder path
  },
  {
    title: "Development & Testing",
    description:
      "Our team of experts brings the design to life, building a robust and high-performing solution. We rigorously test every feature and function to ensure it meets the highest quality standards before it's ready for launch.",
    icon: HiOutlineCodeBracket,
    image: "/images/hero.png", // Placeholder path
  },
  {
    title: "Deployment & Launch",
    description:
      "We seamlessly deploy your solution, ensuring minimal disruption to your operations. From initial setup to final handover, we prioritize a smooth and successful launch, making sure you're ready to impress from day one.",
    icon: HiOutlineRocketLaunch,
    image: "/images/hero.png", // Placeholder path
  },
  {
    title: "Growth & Scaling",
    description:
      "Once live, we stay by your side. Whether it's scaling your solution, optimizing its performance, or expanding its features, we help your business adapt and thrive as it grows.",
    icon: HiOutlineChartBar,
    image: "/images/hero.png", // Placeholder path
  },
];

export default function Features() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedFeature = features[selectedIndex];

  return (
    <section id="features" className="py-24 lg:py-28">
      {/* Header */}
      <div className="text-center space-y-4 mb-12 lg:mb-16">
        <div className="inline-flex items-center justify-center bg-white px-4 py-1 text-[14px] font-medium tracking-[0.2em] uppercase text-zinc-500">
          our process /
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
          Discover how we work
        </h2>
      </div>

      {/* Content grid */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] lg:items-stretch">
        {/* Left: feature list */}
        <div className="space-y-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isSelected = index === selectedIndex;
            return (
              <button
                key={feature.title}
                onClick={() => setSelectedIndex(index)}
                className={`flex w-full items-start gap-4 rounded-2xl border px-5 py-4 text-left transition ${
                  isSelected
                    ? "border-zinc-200 bg-zinc-50 shadow-xs"
                    : "border-transparent bg-transparent hover:bg-zinc-50"
                }`}
              >
                <span
                  className={`mt-1 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
                    isSelected
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-500"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                </span>
                <span className="space-y-1 flex-1">
                  <span className="block text-sm font-semibold text-zinc-900">
                    {feature.title}
                  </span>
                  <span className="block text-xs sm:text-sm leading-relaxed text-zinc-500">
                    {feature.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: image container */}
        <div className="flex justify-center h-full">
          <div className="relative w-full max-w-xl h-full min-h-[300px] rounded-[32px] border border-zinc-200 bg-zinc-50 overflow-hidden sm:min-h-[360px]">
            <Image
              src={selectedFeature.image}
              alt={selectedFeature.title}
              fill
              className="object-cover rounded-[32px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

