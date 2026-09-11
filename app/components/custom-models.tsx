"use client";

import { useState } from "react";
import Image from "next/image";
import { HiOutlineBeaker, HiOutlineCog6Tooth, HiOutlineChartBar, HiOutlineRocketLaunch } from "react-icons/hi2";

const modelTypes = [
  {
    title: "Foundation Models",
    description: "Start with pre-trained foundation models and fine-tune them for your specific domain and use cases.",
    icon: HiOutlineBeaker,
    capabilities: [
      "Domain-specific fine-tuning",
      "Transfer learning",
      "Multi-modal capabilities",
      "Rapid deployment"
    ],
    useCases: ["Customer Service", "Document Analysis", "Content Generation"],
  },
  {
    title: "Custom Pre-trained",
    description: "Build models from scratch, pre-trained on your proprietary data with complete control over architecture.",
    icon: HiOutlineCog6Tooth,
    capabilities: [
      "Proprietary data training",
      "Custom architecture",
      "Full IP ownership",
      "Optimized for your domain"
    ],
    useCases: ["Specialized Industry", "Proprietary Knowledge", "Unique Requirements"],
  },
  {
    title: "Hybrid Approach",
    description: "Combine the best of both worlds—foundation models enhanced with your specialized training data.",
    icon: HiOutlineChartBar,
    capabilities: [
      "Best-in-class performance",
      "Cost-effective",
      "Faster time to market",
      "Continuous improvement"
    ],
    useCases: ["Enterprise Scale", "Multi-department", "Complex Workflows"],
  },
];

export default function CustomModels() {
  const [selectedModel, setSelectedModel] = useState(0);
  const currentModel = modelTypes[selectedModel];

  return (
    <section id="custom-models" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center bg-zinc-50 px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500 rounded-full border border-zinc-200">
            CUSTOM MODELS /
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
            Models Built for Your Business
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 max-w-2xl mx-auto">
            From fine-tuning to pre-training from scratch, we build AI models that understand your business and domain.
          </p>
        </div>

        {/* Model Type Selector */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12">
          {modelTypes.map((model, index) => {
            const IconComponent = model.icon;
            return (
              <button
                key={model.title}
                onClick={() => setSelectedModel(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all ${
                  selectedModel === index
                    ? "border-zinc-900 bg-zinc-50 shadow-sm"
                    : "border-zinc-200 bg-white hover:border-zinc-300"
                }`}
              >
                <IconComponent className={`h-6 w-6 ${selectedModel === index ? "text-zinc-900" : "text-zinc-500"}`} />
                <span className={`text-sm font-semibold ${selectedModel === index ? "text-zinc-900" : "text-zinc-600"}`}>
                  {model.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Model Details */}
        <div className="bg-zinc-50 rounded-2xl lg:rounded-3xl border border-zinc-200 p-6 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 mb-3">
                  {currentModel.title}
                </h3>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                  {currentModel.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Key Capabilities
                </h4>
                <div className="space-y-2">
                  {currentModel.capabilities.map((capability) => (
                    <div key={capability} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm sm:text-base text-zinc-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">
                  Ideal Use Cases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentModel.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs sm:text-sm text-zinc-700"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-md rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 border border-zinc-300 flex items-center justify-center">
                <HiOutlineRocketLaunch className="h-32 w-32 text-zinc-400" />
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/5 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Overview */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-zinc-900 text-center mb-8">
            Our Model Development Process
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Data Preparation", desc: "Clean, label, and prepare your training data" },
              { step: "2", title: "Pre-training", desc: "Train base models on your domain data" },
              { step: "3", title: "Fine-tuning", desc: "Optimize for specific tasks and use cases" },
              { step: "4", title: "Deployment", desc: "Deploy with guardrails and monitoring" },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-white font-bold text-lg mb-3">
                  {phase.step}
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-zinc-900 mb-1">
                  {phase.title}
                </h4>
                <p className="text-sm text-zinc-600">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
