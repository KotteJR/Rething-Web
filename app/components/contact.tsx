import Carousel from "./carousel";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineCalendar,
} from "react-icons/hi2";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left column */}
        <div className="space-y-6 sm:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 uppercase mb-4 sm:mb-6">
              Get started /
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-xs font-semibold tracking-tight text-zinc-900">
              Get in touch with us
            </h2>
          </div>

          <ul className="space-y-4 sm:space-y-5 text-sm text-zinc-600">
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 items-center justify-center text-zinc-900 flex-shrink-0">
                <HiOutlineChatBubbleLeftRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="text-xs sm:text-sm">Share your project goals and requirements</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 items-center justify-center text-zinc-900 flex-shrink-0">
                <HiOutlineDocumentText className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="text-xs sm:text-sm">Receive a tailored proposal</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-5 w-5 items-center justify-center text-zinc-900 flex-shrink-0">
                <HiOutlineCalendar className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <span className="text-xs sm:text-sm">Schedule a strategy consultation</span>
            </li>
          </ul>

          <div className="space-y-6 pt-2 sm:pt-4 hidden sm:block">
            <div className="max-w-2xl">
              <Carousel gap="tight" />
            </div>
          </div>
        </div>

        {/* Right column - form */}
        <div className="rounded-[20px] sm:rounded-[32px] border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                First Name
              </label>
              <input
                type="text"
                placeholder="Alex"
                className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
              />
            </div>
          </div>

          <div className="mt-4 sm:mt-6 grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                Email
              </label>
              <input
                type="email"
                placeholder="alex.smith@example.com"
                className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                Project Budget
              </label>
              <div className="relative">
                <select
                  className="h-10 sm:h-11 w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-50 px-3 pr-9 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select budget range
                  </option>
                  <option>$5k – $10k</option>
                  <option>$10k – $25k</option>
                  <option>$25k+</option>
                </select>
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-zinc-500">
                  ▾
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-medium text-zinc-800">
              Message
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your project..."
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white sm:rows-4"
            />
          </div>

          <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
            <label className="block text-xs sm:text-sm font-medium text-zinc-800">
              How did you find us?
            </label>
            <input
              type="text"
              placeholder="Google / Referral"
              className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white"
            />
          </div>

          <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
            <button className="inline-flex h-10 sm:h-11 w-full items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800">
              Submit
            </button>
            <p className="text-[10px] sm:text-[11px] leading-relaxed text-zinc-500">
              You acknowledge that you&apos;ve reviewed and agreed to our Privacy
              Policy and Terms of Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

