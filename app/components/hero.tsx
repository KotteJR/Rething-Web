import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen md:max-h-screen">
      {/* Mobile Layout - Image as background */}
      <div className="md:hidden relative min-h-[70vh] flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Abstract hero visual"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 px-5 pb-8 pt-24">
          <div className="space-y-5">
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-zinc-900">
              We build custom software and scalable solutions
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-zinc-600 max-w-lg">
              We build solutions that augment your teams, digitize your business processes, and bring your organization into the future.
            </p>
          </div>

          <form className="mt-6 flex flex-row gap-2 sm:gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 rounded-full border border-zinc-300 bg-white/90 backdrop-blur-sm px-4 sm:px-5 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-zinc-900 px-4 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-medium text-white shadow-lg transition hover:bg-zinc-800 whitespace-nowrap flex-shrink-0"
            >
              Get in touch!
            </button>
          </form>
        </div>
      </div>

      {/* Desktop/Tablet Layout - Side by side */}
      <div className="hidden md:grid md:gap-12 lg:gap-16 md:grid-cols-2 md:items-center md:justify-center md:min-h-[70vh] px-4 sm:px-6 lg:px-8">
        {/* Left column */}
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="max-w-2xl text-3xl lg:text-[42px] font-semibold leading-tight tracking-tight text-zinc-900">
              We build custom software and scalable solutions
            </h1>
            <p className="max-w-xl text-base lg:text-lg leading-relaxed text-zinc-600">
              We build solutions that augment your teams, digitize your business processes, and bring your organization into the future. 
              Whether you need specialized talent or advanced AI-driven tools, we deliver results that matter—fast.
            </p>
          </div>

          <form className="flex flex-wrap items-center gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-[180px] rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 whitespace-nowrap"
            >
              Get in touch!
            </button>
          </form>
        </div>

        {/* Right column */}
        <div className="flex items-center justify-center lg:justify-end">
          <Image
            src="/images/hero.png"
            alt="Abstract hero visual"
            width={740}
            height={740}
            className="h-auto w-full max-w-sm lg:max-w-md xl:max-w-xl object-contain"
            priority
          />
        </div>
      </div>

      {/* Stats bar - Always 3 columns */}
      <div className="mx-4 sm:mx-6 md:mx-8 mt-6 md:mt-0 rounded-[20px] md:rounded-[32px] border border-zinc-200 bg-white px-3 sm:px-8 py-6 sm:py-8 md:py-8 md:px-12">
        <div className="grid grid-cols-3 divide-x divide-zinc-200 text-center">
          <div className="px-2 sm:px-4 lg:pr-10 flex flex-col items-center justify-center">
            <p 
              className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-none select-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #71717a, #71717a 1px, #a1a1aa 4px, #a1a1aa 4px)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              87
            </p>
            <p className="text-[10px] sm:text-xs lg:text-sm text-zinc-500 mt-1">Clients Served</p>
          </div>
          <div className="px-2 sm:px-4 lg:px-10 flex flex-col items-center justify-center">
            <p 
              className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-none select-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #71717a, #71717a 1px, #a1a1aa 4px, #a1a1aa 4px)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              200+
            </p>
            <p className="text-[10px] sm:text-xs lg:text-sm text-zinc-500 mt-1">Projects</p>
          </div>
          <div className="px-2 sm:px-4 lg:pl-10 flex flex-col items-center justify-center">
            <p 
              className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-none select-none"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #71717a, #71717a 1px, #a1a1aa 4px, #a1a1aa 4px)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                display: 'inline-block',
              }}
            >
              100%
            </p>
            <p className="text-[10px] sm:text-xs lg:text-sm text-zinc-500 mt-1">Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}
