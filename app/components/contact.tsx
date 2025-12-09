"use client";

import { useState } from "react";
import Carousel from "./carousel";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentText,
  HiOutlineCalendar,
} from "react-icons/hi2";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    budget: "",
    message: "",
    source: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...formData }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          budget: "",
          message: "",
          source: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-2 lg:items-start">
        {/* Left column */}
        <div className="relative space-y-6 sm:space-y-10 rounded-[20px] sm:rounded-[32px] overflow-hidden px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          {/* Background image with blur and white overlay - hidden below 1100px */}
          <div 
            className="hidden xl:block xl:absolute xl:inset-[-30px] xl:bg-cover xl:bg-center xl:blur-sm"
            style={{ backgroundImage: 'url(/images/7.png)' }}
          />
          <div className="hidden xl:block absolute inset-0 bg-white/85" />

          <div className="relative z-10 space-y-3 sm:space-y-4">
            <p className="text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] text-zinc-500 uppercase mb-4 sm:mb-6">
              Get started /
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl max-w-xs font-semibold tracking-tight text-zinc-900">
              Get in touch with us
            </h2>
          </div>

          <ul className="relative z-10 space-y-4 sm:space-y-5 text-sm text-zinc-600">
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

          <div className="relative z-10 space-y-6 pt-2 sm:pt-4 hidden sm:block">
            <div className="max-w-2xl">
              <Carousel gap="tight" />
            </div>
          </div>
        </div>

        {/* Right column - form */}
        <form onSubmit={handleSubmit} className="rounded-[20px] sm:rounded-[32px] border border-zinc-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          {submitStatus === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">Thank you!</h3>
              <p className="text-zinc-600">We&apos;ve received your message and will get back to you soon.</p>
              <button
                type="button"
                onClick={() => setSubmitStatus("idle")}
                className="mt-6 text-sm font-medium text-zinc-900 underline hover:no-underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Alex"
                    className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white disabled:opacity-50"
                    required
                    disabled={isSubmitting}
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex.smith@example.com"
                    className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white disabled:opacity-50"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                    Project Budget
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="h-10 sm:h-11 w-full appearance-none rounded-lg border border-zinc-200 bg-zinc-50 px-3 pr-9 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>
                      <option value="$5k – $10k">$5k – $10k</option>
                      <option value="$10k – $25k">$10k – $25k</option>
                      <option value="$25k+">$25k+</option>
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white disabled:opacity-50 sm:rows-4"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mt-4 sm:mt-6 space-y-1.5 sm:space-y-2">
                <label className="block text-xs sm:text-sm font-medium text-zinc-800">
                  How did you find us?
                </label>
                <input
                  type="text"
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  placeholder="Google / Referral"
                  className="h-10 sm:h-11 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 text-sm text-zinc-900 outline-none ring-0 transition focus:border-zinc-900 focus:bg-white disabled:opacity-50"
                  disabled={isSubmitting}
                />
              </div>

              <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 sm:h-11 w-full items-center justify-center rounded-full bg-zinc-900 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
                {submitStatus === "error" && (
                  <p className="text-sm text-red-600 text-center">Something went wrong. Please try again.</p>
                )}
                <p className="text-[10px] sm:text-[11px] leading-relaxed text-zinc-500">
                  You acknowledge that you&apos;ve reviewed and agreed to our Privacy
                  Policy and Terms of Service
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
