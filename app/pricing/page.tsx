"use client";

import { HiOutlineArrowLeft } from "react-icons/hi2";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="max-w-md text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo/rething.svg"
            alt="ReThing"
            className="w-16 h-16"
          />
        </div>

        {/* Coming Soon Text */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-none select-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #27272a, #27272a 1px, #52525b 4px, #52525b 4px)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Coming Soon
        </h1>

        <p className="text-zinc-600 text-lg">
          We&apos;re working on our pricing page. Check back soon for updates!
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition"
        >
          <HiOutlineArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}

