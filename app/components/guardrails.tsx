import {
  HiOutlineShieldCheck,
  HiOutlineScale,
  HiOutlineExclamationTriangle,
  HiOutlineDocumentCheck,
} from "react-icons/hi2";

const guardrails = [
  {
    title: "Content filtering",
    description:
      "Detect and filter sensitive, harmful, or non-compliant output before it reaches users.",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Bias detection",
    description:
      "Monitor fairness signals and intervene when model behavior drifts from your standards.",
    icon: HiOutlineScale,
  },
  {
    title: "Risk controls",
    description:
      "Score, block, or escalate high-risk responses with rules that match your policy.",
    icon: HiOutlineExclamationTriangle,
  },
  {
    title: "Policy enforcement",
    description:
      "Keep every model inside your operational, legal, and industry requirements.",
    icon: HiOutlineDocumentCheck,
  },
];

export default function Guardrails() {
  return (
    <section id="guardrails" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-14 text-center lg:mb-16">
        <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
          ai safety /
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900 mt-3 sm:mt-4 mb-3 sm:mb-4">
          Built-in guardrails
        </h2>
        <p className="mb-4 text-sm sm:text-md max-w-2xl mx-auto font-medium text-zinc-500 px-2">
          Safety, policy, and compliance live in the model path—not as a layer you add later.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {guardrails.map((guardrail) => {
          const IconComponent = guardrail.icon;
          return (
            <article
              key={guardrail.title}
              className="flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-zinc-200 bg-white px-3 sm:px-5 py-3 sm:py-4"
            >
              <span className="mt-0.5 sm:mt-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-zinc-100 text-zinc-500 flex-shrink-0">
                <IconComponent className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="space-y-0.5 sm:space-y-1">
                <span className="block text-xs sm:text-sm font-semibold text-zinc-900">
                  {guardrail.title}
                </span>
                <span className="block text-[11px] sm:text-xs lg:text-sm leading-relaxed text-zinc-500">
                  {guardrail.description}
                </span>
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
