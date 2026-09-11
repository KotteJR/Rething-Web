"use client";

import { useState } from "react";
import Image from "next/image";
import {
  HiOutlineBeaker,
  HiOutlineCog6Tooth,
  HiOutlineChartBar,
} from "react-icons/hi2";

const models = [
  {
    title: "Foundation models",
    description:
      "Start from proven base models and fine-tune them on your domain, workflows, and language. Faster to deploy, still aligned with your rules.",
    icon: HiOutlineBeaker,
    image: "/images/3.png",
  },
  {
    title: "Custom pre-training",
    description:
      "Train models on your proprietary data when the domain is too specific for a general model. You keep the architecture, weights, and IP.",
    icon: HiOutlineCog6Tooth,
    image: "/images/hero.png",
  },
  {
    title: "Hybrid training",
    description:
      "Combine a foundation model with targeted pre-training and post-training so you get speed, fit, and continuous improvement.",
    icon: HiOutlineChartBar,
    image: "/images/4.png",
  },
];

export default function CustomModels() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedModel = models[selectedIndex];

  return (
    <section id="custom-models" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
          custom models /
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
          Models built for your business
        </h2>
        <p className="text-sm sm:text-md max-w-2xl mx-auto font-medium text-zinc-500 px-2">
          From fine-tuning to pre-training and post-training, we build models that understand your domain and stay inside your guardrails.
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] lg:items-stretch">
        <div className="space-y-2 sm:space-y-4">
          {models.map((model, index) => {
            const IconComponent = model.icon;
            const isSelected = index === selectedIndex;
            return (
              <button
                key={model.title}
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
                    {model.title}
                  </span>
                  <span className="block text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-500">
                    {model.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center h-full order-first lg:order-last">
          <div className="relative w-full max-w-xl h-full min-h-[200px] sm:min-h-[300px] lg:min-h-[360px] rounded-[20px] sm:rounded-[32px] border border-zinc-200 bg-zinc-50 overflow-hidden">
            <Image
              src={selectedModel.image}
              alt={selectedModel.title}
              fill
              className="object-contain p-6 sm:p-10 rounded-[20px] sm:rounded-[32px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
