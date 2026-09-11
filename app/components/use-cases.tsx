const cases = [
  {
    number: "01",
    title: "Contracts and case files",
    description:
      "Read, draft, and route documents with the same access rules and retention policies your teams already follow.",
  },
  {
    number: "02",
    title: "Operations and projects",
    description:
      "Turn site reports, tenders, and project history into answers that stay inside your process—not a generic chatbot.",
  },
  {
    number: "03",
    title: "Citizen and customer answers",
    description:
      "Give frontline teams replies that follow your scripts, your tone, and what they are allowed to say.",
  },
  {
    number: "04",
    title: "Internal knowledge",
    description:
      "Search across wikis, systems, and archives without leaking data across departments or roles.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12 lg:mb-16">
        <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
          where it works /
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900">
          Work that already has rules
        </h2>
        <p className="text-sm sm:text-md max-w-2xl mx-auto font-medium text-zinc-500 px-2">
          We put AI on the jobs your organization already governs—not on a blank chat window.
        </p>
      </div>

      <div className="divide-y divide-zinc-200 border-y border-zinc-200">
        {cases.map((item) => (
          <div
            key={item.number}
            className="grid gap-2 sm:gap-6 sm:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.4fr)] items-baseline py-5 sm:py-7"
          >
            <p className="text-xs sm:text-sm font-medium tracking-[0.15em] text-zinc-400">
              {item.number}
            </p>
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-zinc-900">
              {item.title}
            </h3>
            <p className="text-[11px] sm:text-sm leading-relaxed text-zinc-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
