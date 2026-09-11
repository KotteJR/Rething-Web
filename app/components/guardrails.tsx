import Image from "next/image";
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
    badge: "Content filtering",
    image: "/images/1.png",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Bias detection",
    description:
      "Monitor fairness signals and intervene when model behavior drifts from your standards.",
    badge: "Bias detection",
    image: "/images/6.png",
    icon: HiOutlineScale,
  },
  {
    title: "Risk controls",
    description:
      "Score, block, or escalate high-risk responses with rules that match your policy.",
    badge: "Risk controls",
    image: "/images/2.png",
    icon: HiOutlineExclamationTriangle,
  },
  {
    title: "Policy enforcement",
    description:
      "Keep every model inside your operational, legal, and industry requirements.",
    badge: "Policy enforcement",
    image: "/images/5.png",
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

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 lg:grid-cols-4">
        {guardrails.map((guardrail) => {
          const IconComponent = guardrail.icon;
          return (
            <article key={guardrail.title} className="flex flex-col">
              <div className="relative mb-3 sm:mb-5 overflow-hidden rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] bg-zinc-50 border border-zinc-200 shadow-sm aspect-[4/5]">
                <Image
                  src={guardrail.image}
                  alt={guardrail.title}
                  fill
                  className="object-contain p-4 sm:p-6 rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-3 sm:bottom-6 flex justify-center z-10">
                  <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-black/90 px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-white">
                    <span className="flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/10">
                      <IconComponent className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
                    </span>
                    <span className="truncate max-w-[80px] sm:max-w-none">{guardrail.badge}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2 mx-1 sm:mx-2">
                <p className="text-xs sm:text-sm lg:text-md text-center text-zinc-600 line-clamp-3 sm:line-clamp-none">
                  {guardrail.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
