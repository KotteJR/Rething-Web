const rooms = [
  {
    title: "Security & IT",
    description: "Needs a clear perimeter: access, logs, and a place the model actually lives.",
  },
  {
    title: "Legal & risk",
    description: "Needs proof that answers follow policy, and a trail when someone asks why.",
  },
  {
    title: "Operations",
    description: "Needs AI on real workflows—tenders, cases, sites—not a demo that dies after week two.",
  },
  {
    title: "Leadership",
    description: "Needs a system they can stand behind when the question is “are we allowed to use this?”",
  },
];

export default function DecisionRooms() {
  return (
    <section id="decision-rooms" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-14 text-center lg:mb-16">
        <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
          who it is for /
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold tracking-tight text-zinc-900 mt-3 sm:mt-4 mb-3 sm:mb-4">
          Built for the rooms that decide
        </h2>
        <p className="mb-4 text-sm sm:text-md max-w-2xl mx-auto font-medium text-zinc-500 px-2">
          Governed AI has to survive security, legal, operations, and the board—not just a pilot team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {rooms.map((room) => (
          <article key={room.title} className="space-y-2 sm:space-y-3">
            <h3 className="text-sm sm:text-base font-semibold text-zinc-900">
              {room.title}
            </h3>
            <p className="text-[11px] sm:text-sm leading-relaxed text-zinc-500">
              {room.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
