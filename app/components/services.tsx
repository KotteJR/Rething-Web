import Image from "next/image";
import { HiOutlineShieldCheck, HiOutlineCog6Tooth, HiOutlineAcademicCap, HiOutlineChartBarSquare } from "react-icons/hi2";

const services = [
  {
    title: "Governed AI",
    description:
      "Deploy AI with built-in compliance, guardrails, and policy enforcement. Ensure your AI operates within your rules and regulatory requirements.",
    badge: "Governed AI",
    image: "/images/1.png",
    icon: HiOutlineShieldCheck,
  },
  {
    title: "Custom AI Models",
    description:
      "Purpose-built models trained on your data and fine-tuned for your specific use cases. From pre-training to production deployment.",
    badge: "Custom Models",
    image: "/images/3.png",
    icon: HiOutlineCog6Tooth,
  },
  {
    title: "Pre & Post Training",
    description:
      "Comprehensive model development lifecycle—from data preparation and pre-training to fine-tuning and continuous improvement.",
    badge: "Model Training",
    image: "/images/hero.png",
    icon: HiOutlineAcademicCap,
  },
  {
    title: "AI Guardrails",
    description:
      "Implement safety controls, bias detection, and content filtering. Ensure your AI behaves responsibly and meets enterprise standards.",
    badge: "AI Guardrails",
    image: "/images/5.png",
    icon: HiOutlineChartBarSquare,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 sm:mb-14 text-center lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900 mb-3 sm:mb-4">
          Enterprise AI Solutions
        </h2>
        <p className="mb-4 text-sm sm:text-md max-w-2xl mx-auto font-medium text-zinc-500 px-2">
          Comprehensive AI services designed for enterprises that require governance, compliance, and custom solutions tailored to their unique needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 lg:grid-cols-4">
        {services.map((service) => {
          const IconComponent = service.icon;
          return (
            <article key={service.title} className="flex flex-col">
              {/* Image container */}
              <div className="relative mb-3 sm:mb-5 overflow-hidden rounded-[16px] sm:rounded-[24px] lg:rounded-[32px] bg-zinc-200 shadow-sm aspect-[4/5]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-[16px] sm:rounded-[24px] lg:rounded-[32px]"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />

                {/* Badge pill */}
                <div className="pointer-events-none absolute inset-x-0 bottom-3 sm:bottom-6 flex justify-center z-10">
                  <div className="inline-flex items-center gap-1 sm:gap-2 rounded-full bg-black/90 px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-medium text-white">
                    <span className="flex h-4 w-4 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white/10">
                      <IconComponent className="h-2.5 w-2.5 sm:h-4 sm:w-4" />
                    </span>
                    <span className="truncate max-w-[80px] sm:max-w-none">{service.badge}</span>
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-1 sm:space-y-2 mx-1 sm:mx-2">
                <p className="text-xs sm:text-sm lg:text-md text-center text-zinc-600 line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

