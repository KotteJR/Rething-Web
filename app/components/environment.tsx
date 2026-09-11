const placements = [
  {
    title: "Your cloud or ours",
    description: "Run in a private VPC, on-prem, or a dedicated environment. The model does not have to live on the public internet.",
  },
  {
    title: "Data stays where you put it",
    description: "EU residency and no training on your data unless you ask. Your files do not become someone else’s model.",
  },
  {
    title: "Your identity, your access",
    description: "Hook into the same SSO, roles, and permissions people already use. AI sees what the user is allowed to see.",
  },
  {
    title: "Sits on your stack",
    description: "Connect to the systems you already run—ERP, document archives, mail, and internal tools—instead of replacing them.",
  },
];

export default function Environment() {
  return (
    <section id="environment" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 sm:gap-12 lg:gap-16 md:grid-cols-2 lg:items-start">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 uppercase">
            how it lands /
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] max-w-sm font-semibold tracking-tight text-zinc-900">
            Inside your environment
          </h2>
          <p className="max-w-md text-sm sm:text-base leading-relaxed text-zinc-500">
            Enterprise buyers do not ask for another tool. They ask where it runs, who can see the data, and whether it fits the stack they already paid for.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {placements.map((item) => (
            <div key={item.title} className="space-y-1 sm:space-y-2">
              <h3 className="text-xs sm:text-sm font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
