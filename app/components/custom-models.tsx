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
  },
  {
    title: "Custom pre-training",
    description:
      "Train models on your proprietary data when the domain is too specific for a general model. You keep the architecture, weights, and IP.",
    icon: HiOutlineCog6Tooth,
  },
  {
    title: "Hybrid training",
    description:
      "Combine a foundation model with targeted pre-training and post-training so you get speed, fit, and continuous improvement.",
    icon: HiOutlineChartBar,
  },
];

export default function CustomModels() {
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

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-3">
        {models.map((model) => {
          const IconComponent = model.icon;
          return (
            <article
              key={model.title}
              className="flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white px-3 sm:px-5 py-3 sm:py-5"
            >
              <span className="mt-0.5 sm:mt-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-100 text-zinc-500 flex-shrink-0">
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="space-y-0.5 sm:space-y-1">
                <span className="block text-xs sm:text-sm font-semibold text-zinc-900">
                  {model.title}
                </span>
                <span className="block text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-500">
                  {model.description}
                </span>
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
