import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className=" max-h-screen min-h-screen">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:justify-center">
        {/* Left column */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="max-w-2xl text-2xl sm:text-3xl lg:text-[42px] font-semibold leading-tight tracking-tight text-zinc-900">
            We build custom software and scalable solutions
            </h1>
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-zinc-600">
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
            className="h-auto w-full max-w-md sm:max-w-sm lg:max-w-md xl:max-w-xl object-contain"
            priority
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="mt-16 rounded-[32px] border border-zinc-200 bg-white px-8 py-10 sm:px-12">
        <div className="grid gap-8 text-center sm:grid-cols-3 sm:text-left sm:divide-x sm:divide-zinc-200">
          <div className="space-y-2 sm:pr-10">
            <p className="text-4xl font-semibold text-zinc-900">87</p>
            <p className="text-sm text-zinc-500">Courses by Experts</p>
          </div>
          <div className="space-y-2 sm:px-10">
            <p className="text-4xl font-semibold text-zinc-900">200+</p>
            <p className="text-sm text-zinc-500">Hours of Content</p>
          </div>
          <div className="space-y-2 sm:pl-10">
            <p className="text-4xl font-semibold text-zinc-900">100%</p>
            <p className="text-sm text-zinc-500">User Satisfaction Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

